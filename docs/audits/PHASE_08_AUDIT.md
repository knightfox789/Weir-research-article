# Phase 8 Audit — Global Sobol Sensitivity + Five-Dimensional Synthesis

**Phase:** 8 of 13  
**Branch:** `phase-8-sobol-five-dimensions`  
**Base commit:** `6bb69728ac2bfde2d804ac32da298339511e793f`  
**Status:** **PASS**  
**Date:** 2026-09-16

## 1. Decision

Phase 8 is complete at the implementation/QA level. FIG-15 and FIG-16 are implemented on the existing restrained SVG/ES-module architecture using the frozen Phase 2 runtime assets without changing their scientific data.

The four controlled gates — storyline, scientific, figure/data and architecture restraint — pass.

Final production visual/cross-browser/device acceptance remains later-phase scope. The local Chromium limitation recorded in Phase 4 is carried forward; Phase 8 closes on deterministic scientific/static QA plus the portable DOM interaction harness.

## 2. Implemented figure group

### FIG-15 — Global Sobol sensitivity

- consumes the frozen scrambled Sobol/Jansen design with base `N = 8192`;
- supports response selection rather than displaying all responses at once;
- provides `ST`, `S1` and `ST − S1` interaction-contribution views;
- uses the released 95% S1/ST intervals as whiskers;
- preserves released slightly negative S1 lower confidence bounds as estimator noise by allowing the S1 axis to extend below zero where required;
- reorders the three published leading variables for each selected response;
- keeps the surrogate out-of-fold `R²` in a companion diagnostic panel only, not on the sensitivity-index chart;
- exposes the independent-scramble maximum `|ΔST|` diagnostic from the frozen replication check;
- preserves the principal total-order examples:
  - head: `Q ST = 0.621373`;
  - forcing: `Fr1 ST = 0.512270`;
  - jump response: `Fr1 ST = 0.809220`;
  - body area: height `ST = 0.828526`;
  - rock response: `log10(Pav) ST = 0.675083`;
- includes the companion structural-weight response already present in the runtime contract without elevating it into a sixth synthesis dimension;
- explicitly excludes stability/sliding from unconditional Sobol interpretation because the applicability-conditioned subset violates the standard assumptions.

### FIG-16 — Five-dimensional research synthesis

- uses exactly the five frozen dimensions:
  1. normalized response regime;
  2. response magnitude;
  3. dissipation-development demand;
  4. material/stability trade-off;
  5. foundation/scour uncertainty;
- stages one dimension at a time and provides a final “all five connected” state;
- carries forward only qualitative mini-views/source references from earlier released figures rather than introducing new numerical evidence;
- explicitly avoids a composite score, best family, best section, recommended dimension or scalar optimum;
- states directly that the result is a research interpretation framework, not a design code.

## 3. Contract decisions

No Phase 8 runtime data build was required. `data/runtime/fig-15-global-sensitivity.json` and `data/runtime/fig-16-five-dimensions.json` are byte-identical to the pre-Phase-8 runtime manifest.

The current compact Phase 2 contracts control the browser implementation:

- FIG-15 publishes only the three retained leading variables per response plus the released uncertainty/replication summaries; it does not recreate an unseen full sensitivity matrix.
- Negative near-zero `ST − S1` values are retained as published estimator noise rather than silently clipped to zero.
- FIG-16 uses the five released dimension names and prior figure references only; it does not derive a new score or a quantitative synthesis model.
- FIG-17 Research Explorer remains Phase 9 scope and is not registered early.

## 4. Gate assessment

### Storyline gate — PASS

The frozen Chapter 12→13 logic is preserved:

individual relationships and model disagreement → global sensitivity when variables vary together → five-dimensional synthesis without collapsing the evidence → next question: reader-led exploration of already released evidence.

FIG-17 is not pulled forward.

### Scientific gate — PASS

- `S1` remains first-order influence and `ST` total influence including interactions;
- Sobol rankings are explicitly range-specific to the frozen synthetic design;
- the response-specific dominant variables match the frozen analysis;
- stability is intentionally excluded from unconditional Sobol;
- surrogate `R²` is labelled as a model-quality companion statistic rather than an index result;
- independent scramble diagnostics remain visible;
- the five dimensions are not converted into weights, scores, priorities or design classes;
- the final synthesis remains a research framework rather than a design code.

### Figure/data gate — PASS

- FIG-15 runtime JSON hash/size matches the frozen manifest;
- FIG-16 runtime JSON hash/size matches the frozen manifest;
- FIG-15 retains 18 published index rows: six responses × three retained variables;
- all released S1/ST intervals and six replication-check rows remain unchanged;
- FIG-16 retains exactly five dimensions;
- no browser-facing CSV, raster reconstruction, new fit, hidden raw population or new synthesis calculation is introduced.

### Architecture-restraint gate — PASS

The implementation adds one Phase 8 figure module and one small phase-specific stylesheet and extends the existing renderer registry. No framework, backend, database, CMS, new chart dependency or large client dataset is added. The frozen `index.html` shell remains unchanged.

## 5. QA evidence

- Static/scientific QA — **87/87 PASS**.
- DOM interaction QA — **34/34 PASS**.
- Combined controlled QA — **121/121 PASS**.

QA covers manifest hash/size equality, all frozen headline Sobol values, response-group completeness, interval presence, replicate diagnostics, stability exclusion, S1/ST/interaction switching, range-specific wording, no R² misuse, five-dimension identity/order, prior-figure lineage, no composite synthesis score, keyboard-focusable states, reduced-motion completion, invalid-contract rejection, no browser CSV/raster dependency, no FIG-17 renderer and UTF-8 integrity.

## 6. Changed files

### GitHub site implementation

- `assets/js/figures.js`
- `assets/js/figures-15-16.js`
- `assets/css/figures-phase8.css`

### GitHub audit

- `docs/audits/PHASE_08_AUDIT.md`
- `docs/audits/PHASE_08_QA_RESULTS_v1.0.json`

### Controlled Library QA evidence

- `scripts/qa_phase8.py`
- `scripts/qa_phase8_dom.mjs`
- `PHASE_08_STATIC_QA_RESULTS_v1.0.json`
- `PHASE_08_DOM_QA_RESULTS_v1.0.json`
- `PHASE_08_QA_RESULTS_v1.0.json`
- `PHASE_08_AUDIT.md`

## 7. Completion decision

**Phase 8: PASS**, subject to repository PR review/merge establishing the canonical `main` checkpoint.

The next controlled phase is **Phase 9 — Research Explorer**, implementing FIG-17 only from its frozen Phase 2 contract and already released FIG-04 through FIG-15 evidence.
