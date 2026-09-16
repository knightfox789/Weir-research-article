import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

class ClassList {
  constructor(el){ this.el=el; this.set=new Set(); }
  add(...xs){ xs.forEach(x=>this.set.add(x)); this._sync(); }
  remove(...xs){ xs.forEach(x=>this.set.delete(x)); this._sync(); }
  toggle(x, force){ const v = force===undefined ? !this.set.has(x) : !!force; if(v)this.set.add(x);else this.set.delete(x); this._sync(); return v; }
  contains(x){ return this.set.has(x); }
  _sync(){ this.el.attributes.class=[...this.set].join(' '); }
  fromString(s){ this.set=new Set(String(s||'').split(/\s+/).filter(Boolean)); this._sync(); }
}
class StyleDecl { constructor(){this.map={};} setProperty(k,v){this.map[k]=String(v);} }
class El {
  constructor(tag){ this.tagName=tag.toUpperCase(); this.children=[]; this.parentNode=null; this.attributes={}; this.dataset={}; this.classList=new ClassList(this); this.style=new StyleDecl(); this.listeners={}; this._text=''; this._html=''; this.value=''; this.type=''; }
  set className(v){ this.classList.fromString(v); } get className(){ return this.attributes.class||''; }
  set textContent(v){ this._text=String(v??''); this.children=[]; } get textContent(){ return this._text + this.children.map(c=>c.textContent||'').join(''); }
  set innerHTML(v){ this._html=String(v??''); this.children=[]; } get innerHTML(){ return this._html; }
  append(...nodes){ for(const n of nodes){ if(n==null)continue; if(typeof n==='string'){const t=new El('#text');t._text=n;this.append(t);continue;} n.parentNode=this; this.children.push(n);} }
  appendChild(n){ this.append(n); return n; }
  replaceChildren(...nodes){ this.children=[]; this._text=''; this._html=''; this.append(...nodes); }
  setAttribute(k,v){ this.attributes[k]=String(v); if(k==='class')this.classList.fromString(v); if(k.startsWith('data-')) this.dataset[k.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase())]=String(v); }
  getAttribute(k){ return this.attributes[k] ?? null; }
  removeAttribute(k){ delete this.attributes[k]; }
  addEventListener(type, fn){ (this.listeners[type]??=[]).push(fn); }
  dispatchEvent(evt){ evt.target=this; for(const fn of this.listeners[evt.type]||[]) fn(evt); return true; }
  querySelectorAll(sel){ const out=[]; const match=(e)=>{
      if(sel==='button') return e.tagName==='BUTTON';
      if(sel==='input') return e.tagName==='INPUT';
      if(sel==='select') return e.tagName==='SELECT';
      if(sel==='svg') return e.tagName==='SVG';
      if(sel==='circle') return e.tagName==='CIRCLE';
      if(sel==='[data-stage]') return Object.hasOwn(e.attributes,'data-stage');
      if(sel==='[role="button"]') return e.attributes.role==='button';
      if(sel.startsWith('.')) return e.classList.contains(sel.slice(1));
      return e.tagName===sel.toUpperCase();
    };
    const walk=(e)=>{ for(const c of e.children){ if(match(c)) out.push(c); walk(c);} }; walk(this); return out; }
  querySelector(sel){ return this.querySelectorAll(sel)[0]||null; }
}

globalThis.window={ matchMedia:()=>({matches:true}), setTimeout:(fn)=>{fn(); return 0;} };
globalThis.document={
  head:new El('head'),
  createElement:(tag)=>new El(tag),
  createElementNS:(_ns,tag)=>new El(tag),
  querySelector:()=>null,
  querySelectorAll:()=>[]
};

globalThis.console = console;

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const j=(rel)=>JSON.parse(fs.readFileSync(path.join(ROOT,rel),'utf8'));
const m01=await import(pathToFileURL(path.join(ROOT,'assets/js/figures-01-02.js')));
const m03=await import(pathToFileURL(path.join(ROOT,'assets/js/figures-03-04.js')));
const m05=await import(pathToFileURL(path.join(ROOT,'assets/js/figures-05-06.js')));

const checks=[]; const check=(name,pass,detail='')=>checks.push({name,pass:!!pass,detail});
function mount(){ return new El('div'); }
function findByAttr(root,key,prefix){ return root.querySelectorAll('[role="button"]').find(e=>String(e.getAttribute(key)||'').startsWith(prefix)); }

// FIG-01 reduced-motion complete state + stepper control.
{
 const el=mount(); m01.renderFig01(el,j('data/metadata/initiating-case.json'));
 check('fig01_live',el.classList.contains('is-live'));
 check('fig01_svg',!!el.querySelector('svg'));
 const stages=el.querySelectorAll('[data-stage]');
 check('fig01_reduced_motion_complete',stages.length>0 && stages.every(n=>n.classList.contains('is-visible')));
 const buttons=el.querySelectorAll('button');
 check('fig01_stepper_buttons',buttons.length===5,`found ${buttons.length}`);
 buttons[2]?.dispatchEvent({type:'click',preventDefault(){}});
 check('fig01_stepper_interaction',buttons[2]?.getAttribute('aria-pressed')==='true');
}
// FIG-02 click + keyboard path highlighting.
{
 const el=mount(); m01.renderFig02(el,j('data/metadata/dependency-network.json'));
 const nodes=el.querySelectorAll('[role="button"]');
 check('fig02_node_count',nodes.length>=20,`found ${nodes.length}`);
 const q=findByAttr(el,'aria-label','Discharge,'); q?.dispatchEvent({type:'click',preventDefault(){}});
 check('fig02_click_select',q?.classList.contains('is-selected'));
 const forcing=findByAttr(el,'aria-label','Hydraulic forcing,'); forcing?.dispatchEvent({type:'keydown',key:'Enter',preventDefault(){this.prevented=true;}});
 check('fig02_keyboard_select',forcing?.classList.contains('is-selected'));
 const clear=el.querySelectorAll('button')[0]; clear?.dispatchEvent({type:'click',preventDefault(){}});
 check('fig02_clear',!nodes.some(n=>n.classList.contains('is-selected')));
}
// FIG-03 render/count state.
{
 const el=mount(); m03.renderFig03(el,j('data/runtime/fig-03-experiment-scale.json'));
 check('fig03_live',el.classList.contains('is-live'));
 check('fig03_symbolic_dots',el.querySelectorAll('circle').length>=400,`found ${el.querySelectorAll('circle').length}`);
 check('fig03_summary',el.querySelector('.p4-figure__summary')?.textContent.includes('synthetic study domain') === true);
}
// FIG-04 controls update analytical state.
{
 const el=mount(); m03.renderFig04(el,j('data/runtime/fig-04-head-response.json'));
 const inputs=el.querySelectorAll('input'); check('fig04_three_controls',inputs.length===3,`found ${inputs.length}`);
 const cross0=el.querySelectorAll('.p4-crosshair').map(n=>[n.getAttribute('x1'),n.getAttribute('y1')].join(','));
 const d4=j('data/runtime/fig-04-head-response.json');
 if(inputs[0]){ inputs[0].value=String(d4.ranges.Q_m3s[1]); inputs[0].dispatchEvent({type:'input'}); }
 const cross1=el.querySelectorAll('.p4-crosshair').map(n=>[n.getAttribute('x1'),n.getAttribute('y1')].join(','));
 check('fig04_input_dispatch',inputs[0]?.listeners.input?.length===1);
 check('fig04_control_updates_crosshair',JSON.stringify(cross0)!==JSON.stringify(cross1),`${cross0} -> ${cross1}`);
 check('fig04_crosshair',el.querySelectorAll('.p4-crosshair').length===2);
}
// FIG-05 source points + range + family select interaction.
{
 const el=mount(); m05.renderFig05(el,j('data/runtime/fig-05-forcing-response.json'));
 const pts=el.querySelectorAll('.p4-source-point'); check('fig05_source_points',pts.length===60,`found ${pts.length}`);
 check('fig05_points_keyboard_focusable',pts.every(p=>p.getAttribute('tabindex')==='0'));
 const inputs=el.querySelectorAll('input'); check('fig05_range_controls',inputs.length===2,`found ${inputs.length}`);
 const sel=el.querySelector('select'); check('fig05_family_select',!!sel);
 if(sel){ sel.value='F1'; sel.dispatchEvent({type:'change'}); }
 const f1pts=el.querySelectorAll('.p4-source-point');
 check('fig05_family_filter_interaction',f1pts.length>0 && f1pts.every(p=>p.classList.contains('p4-source-point--f1')),`found ${f1pts.length}`);
}
// FIG-06 three controls + linked section geometry redraw.
{
 const el=mount(); m05.renderFig06(el,j('data/runtime/fig-06-body-area.json'));
 const inputs=el.querySelectorAll('input'); check('fig06_three_controls',inputs.length===3,`found ${inputs.length}`);
 const shape0=el.querySelector('.p4-section-shape')?.getAttribute('d');
 const d6=j('data/runtime/fig-06-body-area.json');
 if(inputs[0]){ inputs[0].value=String(d6.ranges.structure_height_m[1]); inputs[0].dispatchEvent({type:'input'}); }
 const shape1=el.querySelector('.p4-section-shape')?.getAttribute('d');
 check('fig06_linked_geometry_updates',!!shape0 && !!shape1 && shape0!==shape1 && !shape1.includes('NaN'),`${shape0} -> ${shape1}`);
 check('fig06_crosshair',el.querySelectorAll('.p4-crosshair').length===2);
}

const result={phase:4,harness:'node-dom-interaction',checks_total:checks.length,checks_passed:checks.filter(c=>c.pass).length,checks_failed:checks.filter(c=>!c.pass).length,checks};
fs.writeFileSync(path.join(ROOT,'docs/audits/PHASE_04_DOM_QA_RESULTS_v1.0.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
if(result.checks_failed) process.exit(1);
