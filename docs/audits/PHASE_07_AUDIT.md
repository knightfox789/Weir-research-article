# Phase 7 Audit — BJ–DAF Scour Disagreement + Uncertainty Interactives

**Phase:** 7 of 13  
**Branch:** `phase-7-alluvial-disagreement`  
**Base commit:** `b28d694cebcc70c29f781195629123ca49ddd35e`  
**Status:** **PASS**  
**Date:** 2026-09-16

## 1. Decision

Phase 7 is complete at the implementation/QA level. FIG-13 and FIG-14 are implemented on the existing restrained SVG/ES-module architecture using the frozen Phase 2 runtime assets without changing their scientific data.

The four controlled gates — storyline, scientific, figure/data and architecture restraint — pass.

Final production visual/cross-browser/device acceptance remains later-phase scope. The local Chromium limitation recorded in Phase 4 is carried forward; Phase 7 closes on deterministic scientific/static QA plus the portable DOM interaction harness.

## 2. Implemented figure group

### FIG-13 — BJ vs DAF alluvial comparison

- preserves the full 25,000-alluvial-state context and the 14,369 common positive/partial-range comparison states;
- renders the released deterministic 30-point display sample on a log–log BJ-versus-DAF scatter;
- draws a 1:1 equality line and switchable factor-of-two/five agreement bands;
- reclassifies display points inside/outside the selected agreement band without changing any source values;
- reports full-overlap evidence: median `DAF/BJ = 1.106822`, p10–p90 `0.350803–5.84586`, Spearman `ρ = 0.422386`, `50.303%` within factor 2 and `86.06%` within factor 5;
- includes an exact DAF term-effect selector for the five released dimensionless terms, showing frozen exponents, +10% finite-change effect and doubling factor;
- never averages BJ and DAF and never identifies either model as field truth.

### FIG-14 — compact disagreement envelope

- preserves the full 14,369-state common-overlap population;
- renders the released deterministic 30-state out-of-fold display sample as observed DAF/BJ ratio against predicted q10–q50–q90 intervals;
- uses family filtering only where the released runtime supports it (`F2`, `F3`, `F4`, `Transition`);
- exposes family calibration and interaction-model diagnostic views;
- keeps the preferred v0.3 seven-term structure visible: jet velocity, `yt/H`, `d90/d50`, `d50`, `b/B`, unit discharge `q`, and the centered-log `yt/H × d50` interaction;
- derives only deterministic aggregate display statistics from the published family diagnostics: overall q10–q90 coverage `≈0.800682`, regime accuracy `≈0.878001`, and high-confidence accuracy `≈0.981967`;
- states directly that the interval width is model-form uncertainty and not a confidence interval for true field scour.

## 3. Contract decisions

No Phase 7 runtime data build was required. `data/runtime/fig-13-alluvial-model-comparison.json` and `data/runtime/fig-14-disagreement-envelope.json` are byte-identical to the pre-Phase-7 runtime manifest.

The current Phase 2 compact contracts take precedence over older draft motion-spec controls where the released asset is narrower:

- FIG-13 does **not** invent a family filter because its released 30-point display asset does not contain family labels. The interaction instead uses the supported factor bands and exact DAF term effects.
- FIG-14 does use family filtering because its released prediction asset and calibration summaries explicitly contain family labels.
- no full 14,369-state browser cloud is manufactured from summaries; the browser shows only the deterministic released display sample plus full-population statistics.

These are publication-boundary decisions, not missing implementation.

## 4. Gate assessment

### Storyline gate — PASS

The frozen Chapter 11 story is preserved:

foundation context → BJ–DAF comparison in common valid space → structured disagreement → disagreement-envelope uncertainty → next question: what matters globally when variables vary together.

No Phase 8 Sobol/synthesis renderer is pulled forward.

### Scientific gate — PASS

- BJ and DAF are compared only in their common valid synthetic comparison space;
- the equality line and factor bands are model-agreement diagnostics, not engineering acceptance bands;
- neither equation is treated as site truth;
- the two scour estimates are never averaged;
- DAF term effects are labelled as exact DAF response effects, not universal alluvial scour elasticities;
- the compact envelope remains a meta-model of BJ–DAF disagreement, not a physical scour equation;
- q10–q90 interval width is communicated as model-form uncertainty, not field-truth uncertainty;
- final alluvial scour law/site validation remains outside the claim.

### Figure/data gate — PASS

- FIG-13 runtime JSON hash/size matches the frozen manifest;
- FIG-14 runtime JSON hash/size matches the frozen manifest;
- FIG-13 uses the released 30-point sample plus full-population summary statistics and five exact DAF term effects;
- FIG-14 uses the released 30-point out-of-fold sample, four family diagnostics, three quantile coefficient rows, eight F2-q calibration rows, four interaction-model rows, sixteen `yt/H × d50` calibration cells and the seven-term v0.3 structure;
- no browser-facing CSV, raster reconstruction, new fit or fabricated population is introduced.

### Architecture-restraint gate — PASS

The implementation adds one Phase 7 figure module and one small phase-specific stylesheet and extends the existing renderer registry. No framework, backend, database, CMS, new chart dependency or large client dataset is added. `index.html` remains unchanged.

## 5. QA evidence

- Static/scientific QA — **81/81 PASS**.
- DOM interaction QA — **31/31 PASS**.
- Combined controlled QA — **112/112 PASS**.

QA covers runtime hash equality, all frozen headline statistics, exact DAF term exponents, v0.3 term structure, interval ordering, family population totals, aggregate diagnostics, log-scatter/factor-band interaction, DAF term switching, family filtering, calibration-view switching, keyboard-focusable states, reduced-motion completion, no NaN states, no future FIG-15 renderer, unique HTML IDs and UTF-8 integrity.

## 6. Changed files

### GitHub site implementation

- `assets/js/figures.js`
- `assets/js/figures-13-14.js`
- `assets/css/figures-phase7.css`

### GitHub audit

- `docs/audits/PHASE_07_AUDIT.md`
- `docs/audits/PHASE_07_QA_RESULTS_v1.0.json`

### Controlled Library QA evidence

- `scripts/qa_phase7.py`
- `scripts/qa_phase7_dom.mjs`
- `PHASE_07_STATIC_QA_RESULTS_v1.0.json`
- `PHASE_07_DOM_QA_RESULTS_v1.0.json`
- `PHASE_07_QA_RESULTS_v1.0.json`
- `PHASE_07_AUDIT.md`

## 7. Completion decision

**Phase 7: PASS**, subject to repository PR review/merge establishing the canonical `main` checkpoint.

The next controlled phase is **Phase 8 — Global Sobol Sensitivity + Five-Dimensional Synthesis**, implementing FIG-15 and FIG-16 only from their frozen Phase 2 contracts.
