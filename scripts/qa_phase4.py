#!/usr/bin/env python3
from pathlib import Path
import json, re, subprocess, hashlib

ROOT = Path(__file__).resolve().parents[1]
checks = []

def check(name, condition, detail=''):
    checks.append({'check': name, 'pass': bool(condition), 'detail': detail})

# JavaScript syntax
for rel in ['assets/js/app.js','assets/js/figure-core.js','assets/js/figures.js','assets/js/figures-01-02.js','assets/js/figures-03-04.js','assets/js/figures-05-06.js']:
    r = subprocess.run(['node', '--check', str(ROOT/rel)], capture_output=True, text=True)
    check(f'node_syntax:{rel}', r.returncode == 0, (r.stderr or '').strip())

figjs = '\n'.join((ROOT/p).read_text(encoding='utf-8') for p in ['assets/js/figure-core.js','assets/js/figures.js','assets/js/figures-01-02.js','assets/js/figures-03-04.js','assets/js/figures-05-06.js'])
css = (ROOT/'assets/css/figures.css').read_text(encoding='utf-8')
appjs = (ROOT/'assets/js/app.js').read_text(encoding='utf-8')

for fid in range(1, 7):
    check(f'renderer:FIG-{fid:02d}', f"'FIG-{fid:02d}':" in figjs, 'renderer registered')
check('app_imports_phase4_figures', "import { initPhase4Figures } from './figures.js';" in appjs)
check('app_initializes_phase4_figures', 'initPhase4Figures();' in appjs)
check('reduced_motion_css', '@media (prefers-reduced-motion: reduce)' in css)
check('keyboard_network_support', "event.key === 'Enter'" in figjs and "event.key === ' '" in figjs)
check('visible_data_error', 'Figure data could not be loaded.' in figjs)
check('no_browser_csv_reference', '.csv' not in figjs and '.csv' not in appjs)
check('no_analytical_raster_reference', not re.search(r'\.(?:png|jpe?g)', figjs, flags=re.I))

# Runtime contracts
p3 = json.loads((ROOT/'data/runtime/fig-03-experiment-scale.json').read_text(encoding='utf-8'))
p5 = json.loads((ROOT/'data/runtime/fig-05-forcing-response.json').read_text(encoding='utf-8'))
p6 = json.loads((ROOT/'data/runtime/fig-06-body-area.json').read_text(encoding='utf-8'))

check('fig03_total_lhs_200000', p3.get('replication',{}).get('total_lhs_scenarios') == 200000)
check('fig03_four_seeds', p3.get('replication',{}).get('seed_count') == 4)
check('fig03_pooled_eligible_10317', p3.get('replication',{}).get('pooled_eligible_family_cases') == 10317)
check('fig03_sobol_base_8192', p3.get('global_sensitivity',{}).get('base_N') == 8192)

rel = p5.get('relationship',{})
check('fig05_q_exponent', abs(rel.get('q_exponent',0)-1.67) < 1e-12)
check('fig05_fr1_exponent', abs(rel.get('Fr1_exponent',0)-1.87) < 1e-12)
check('fig05_r2', abs(rel.get('r2',0)-0.9999) < 1e-12)
check('fig05_10pct_q', abs(rel.get('pct_effect_10pct_q',0)-17.0) < 1e-12)
check('fig05_10pct_fr1', abs(rel.get('pct_effect_10pct_Fr1',0)-19.5) < 1e-12)
check('fig05_deterministic_display_60', len(p5.get('points',[])) == 60 and p5.get('display_scope',{}).get('display_sample_n') == 60)
check('fig05_display_not_fit_sample', p5.get('display_scope',{}).get('display_sample_not_fit_sample') is True)
check('fig05_relative_surface_policy', 'relative' in p5.get('surface_policy','').lower())

check('fig06_exact_identity', p6.get('exact_identity') is True and p6.get('equation') == 'A=P*T+0.5*s*P^2')
check('fig06_ranges_present', all(k in p6.get('ranges',{}) for k in ['structure_height_m','top_width_m','downstream_slope_h_per_v']))
byvar = {d['variable']: d['ST'] for d in p6.get('sobol',[])}
check('fig06_height_ST', abs(byvar.get('structure_height_m',0)-0.828526) < 1e-12)
check('fig06_slope_ST', abs(byvar.get('downstream_slope_h_per_v',0)-0.208883) < 1e-12)
check('fig06_topwidth_ST', abs(byvar.get('top_width_m',0)-0.024441) < 1e-12)

# Analytical labels / distinctions in implementation
check('fig04_exact_not_fitted_label', 'FIG-04' in figjs and 'analytical equation, not a fitted trend' in figjs)
check('fig05_fitted_r2_display', 'frozen fitted relationship' in figjs and 'R²' in figjs)
check('fig06_material_proxy_caveat', 'material proxy' in figjs)
check('fig05_relative_vs_absolute_boundary', 'absolute forcing is shown only on the audited source points' in figjs)

# Runtime manifest integrity for modified assets
manifest = json.loads((ROOT/'data/metadata/runtime-asset-manifest.json').read_text(encoding='utf-8'))
by_path = {a['path']: a for a in manifest.get('assets',[])}
for relpath in ['data/runtime/fig-03-experiment-scale.json','data/runtime/fig-05-forcing-response.json','data/runtime/fig-06-body-area.json']:
    b=(ROOT/relpath).read_bytes(); expected=by_path.get(relpath,{})
    check(f'manifest_hash:{relpath}', expected.get('sha256') == hashlib.sha256(b).hexdigest())
    check(f'manifest_size:{relpath}', expected.get('bytes') == len(b))

# Environment-only browser note: Chromium headless was independently observed to hang on about:blank.
results = {
    'phase': 4,
    'status': 'STATIC_QA_PASS_BROWSER_EXECUTION_BLOCKED_ENVIRONMENT' if all(c['pass'] for c in checks) else 'STATIC_QA_FAIL',
    'checks_total': len(checks),
    'checks_passed': sum(c['pass'] for c in checks),
    'checks_failed': sum(not c['pass'] for c in checks),
    'browser_execution': {
        'status': 'BLOCKED_ENVIRONMENT',
        'detail': 'Local headless Chromium hangs even on about:blank; this is not counted as a site pass or failure. Interactive browser QA remains pending.'
    },
    'checks': checks,
}
print(json.dumps(results, indent=2, ensure_ascii=False))
(ROOT/'docs/audits/PHASE_04_QA_RESULTS_v0.1.json').write_text(json.dumps(results,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
if results['checks_failed']:
    raise SystemExit(1)
