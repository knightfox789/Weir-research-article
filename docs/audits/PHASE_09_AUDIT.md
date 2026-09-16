# Phase 9 Audit — Research Explorer

**Phase:** 9 of 13  
**Branch:** `phase-9-research-explorer`  
**Base commit:** `e65a177339ae6c92c0da654de99b89cf027a9406`  
**Status:** **PASS**  
**Date:** 2026-09-16

## 1. Decision

Phase 9 is complete at the implementation/QA level. FIG-17 Research Explorer is implemented on the existing restrained HTML/CSS/vanilla-ES-module architecture using only the frozen Phase 2 explorer contract and the nine already released compact runtime assets named by that contract.

The four controlled gates — storyline, scientific, figure/data and architecture restraint — pass.

Final production visual/cross-browser/device acceptance remains later-phase scope. The local Chromium limitation recorded in Phase 4 is carried forward; Phase 9 closes on deterministic scientific/static QA plus the portable DOM interaction harness.

## 2. Implemented explorer

FIG-17 now provides:

- an evidence-view selector across exactly the nine permitted released assets:
  - FIG-04 head response;
  - FIG-05 downstream forcing;
  - FIG-06 body-area material proxy;
  - FIG-09 normalized family map;
  - FIG-10 family trade-offs;
  - FIG-12 hydraulic-jump development demand;
  - FIG-13 BJ–DAF comparison;
  - FIG-14 disagreement envelope;
  - FIG-15 global Sobol sensitivity;
- a global display-mode switch between an annotated graphical summary and released-row table;
- dataset-specific controls only where the frozen asset actually supports them:
  - variable/driver selectors for FIG-04/05/06;
  - family/regime + metric controls for FIG-09/10;
  - metric control for FIG-12;
  - DAF-term control for FIG-13;
  - family/regime + diagnostic control for FIG-14;
  - response + S1/ST/interaction control for FIG-15;
- explicit **What this means / What this does not mean** interpretation for every view;
- visible population/domain/statistic context;
- direct download of the selected **released runtime JSON asset**, not an upstream source table or newly derived design output;
- keyboard-focusable evidence rows, mobile layout and reduced-motion support;
- visible local error state when a required released asset cannot be loaded rather than silently substituting another dataset;
- stale evidence cannot be downloaded during an asynchronous evidence-view switch; the active dataset is cleared before the next asset load begins.

## 3. Scientific and publication controls

The explorer does not perform new research analysis.

- FIG-04 displays the already published exact elasticity and released Sobol context without becoming a sizing calculator.
- FIG-05 exposes only the frozen fitted exponents, finite-change interpretation and fit diagnostic; it does not create an absolute forcing calibration.
- FIG-06 keeps body area as a material proxy rather than reinforcement/foundation/cost output.
- FIG-09 and FIG-10 expose family filters only from already released family summaries; no new family classification or winner is calculated.
- FIG-12 uses already released p10/p50/p90 jump summaries and retains the non-final-basin boundary.
- FIG-13 exposes exact DAF term effects and full-overlap disagreement statistics but does not invent a family filter, average BJ/DAF, or select a true model.
- FIG-14 uses only released family diagnostics / preferred interaction-model diagnostics and keeps the envelope as a disagreement meta-model, not a physical scour equation.
- FIG-15 uses only released S1/ST/interaction rows and replication diagnostics; rankings remain range-specific and stability/sliding remains excluded from unconditional Sobol.
- No explorer view returns recommended dimensions, recommended geometry, construction-ready values, a preferred design family or a scalar optimum.

## 4. Runtime and data decision

No Phase 9 runtime build was required.

`data/runtime/fig-17-research-explorer.json` and all nine reused runtime assets are byte-identical to the frozen runtime manifest.

The browser derives runtime paths only from the exact allow-listed FIG-17 reuse contract. It never exposes `data/figures/*.csv`, authoritative source tables or hidden raw populations.

The “Download selected released JSON” action serializes the already loaded released asset content without adding derived fields; it does not claim byte-for-byte preservation of source formatting.

## 5. Gate assessment

### Storyline gate — PASS

Chapter 14 remains the reader-led exploration step after the five-dimensional synthesis. The explorer helps interrogate already released evidence and then hands the reader to Chapter 15 boundaries without creating a new scientific claim or design recommendation.

Phase 10 editorial rewriting is not started early.

### Scientific gate — PASS

- only frozen Phase 2 evidence is interrogated;
- each view uses the correct statistic for its source asset;
- exact, fitted, percentile, model-disagreement and Sobol evidence remain semantically distinct;
- family/regime filters appear only where supported by released family fields or summaries;
- the explorer explicitly states what each view means and does not mean;
- no source model is upgraded to field truth;
- no new regression, aggregation, classification or design calculation is introduced.

### Figure/data gate — PASS

- FIG-17 contract hash/size matches the frozen manifest;
- all nine reused runtime assets hash/size-match the frozen manifest;
- all nine contracted views load through the selector in the portable DOM harness;
- the FIG-15 interaction view uses the reader-facing `ST − S1 interaction contribution` label and never leaks its internal field key;
- no runtime JSON, source table or index story shell is modified;
- download is limited to released figure-level JSON.

### Architecture-restraint gate — PASS

The implementation adds three focused FIG-17 modules (renderer + two evidence-adapter modules), one small Phase 9 stylesheet and extends the renderer registry. Existing renderers are preserved; the registry change only adds FIG-17 style loading/registration and awaits asynchronous renderers so FIG-17 data-load failures remain within the existing error boundary.

No framework, backend, database, CMS, chart library or large browser dataset is added.

## 6. QA evidence

- Static/scientific QA — **98/98 PASS**.
- DOM interaction QA — **42/42 PASS**.
- Combined controlled QA — **140/140 PASS**.

The DOM harness explicitly cycles through all nine contracted explorer views and checks representative variable, family/regime, diagnostic, table/chart, download, rapid-switch and error-state interactions.

## 7. Changed files

### GitHub site implementation

- `assets/js/figures.js`
- `assets/js/figures-17.js`
- `assets/js/figures-17-models-a.js`
- `assets/js/figures-17-models-b.js`
- `assets/css/figures-phase9.css`

### GitHub audit

- `docs/audits/PHASE_09_AUDIT.md`
- `docs/audits/PHASE_09_QA_RESULTS_v1.0.json`

### Controlled Library QA evidence

- `scripts/qa_phase9.py`
- `scripts/qa_phase9_dom.mjs`
- `PHASE_09_STATIC_QA_RESULTS_v1.0.json`
- `PHASE_09_DOM_QA_RESULTS_v1.0.json`
- `PHASE_09_QA_RESULTS_v1.0.json`
- `PHASE_09_AUDIT.md`

## 8. Completion decision

**Phase 9: PASS**, subject to repository PR review/merge establishing the canonical `main` checkpoint.

The next controlled phase is **Phase 10 — complete reader-language editorial rewrite/humanization**, preserving every frozen fact, qualifier, figure contract and scientific boundary while improving the article’s narrative voice and transitions.
