# Phase 6 Audit — Hydraulic Jump + Foundation Context

**Phase:** 6 of 13  
**Branch:** `phase-6-jump-foundation-transition`  
**Base commit:** `b7600d213e667dfd9f3ff8dc25a2d836b5101364`  
**Status:** **PASS**  
**Date:** 2026-09-16

## 1. Decision

Phase 6 is complete at the implementation/QA level. FIG-12 is implemented as the live Chapter 10 hydraulic-jump development experience, and Chapter 11 now includes the controlled rock/foundation transition required before the alluvial disagreement interactives. FIG-13 and FIG-14 remain unimplemented for Phase 7.

The four controlled gates — storyline, scientific, figure/data and architecture restraint — pass.

Final production visual/cross-browser/device acceptance remains later-phase scope. The local Chromium limitation recorded in Phase 4 is carried forward; Phase 6 closes on deterministic scientific/static QA plus a portable DOM interaction harness.

## 2. Implemented scope

### FIG-12 — Hydraulic-jump development demand

- consumes the existing 22,500-state research context and the published deterministic 60-state display curve;
- uses only the frozen formal-jump domain `4.5 ≤ Fr1 ≤ 9`;
- links a visually scaled hydraulic-jump schematic to the published curve;
- provides a Fr1 scrubber that snaps to published states rather than interpolating/refitting;
- provides a metric selector for `y2/y1`, `ΔE/y1`, CWC reference length, USACE natural reference length and the CWC/USACE ratio;
- marks the published p10/p50/p90 Fr1 positions;
- exposes the full-population median context `Fr1 ≈ 6.75` while transparently returning to the nearest published display state (`Fr1 ≈ 6.79`) when the median-reset control is used.

### Foundation-context transition

Chapter 11 now explicitly separates three different research quantities/decisions:

1. **Hydraulic forcing** `P′ [kW/m]` — the earlier per-width forcing response.
2. **Competent-rock review diagnostic** `R = Pav/Pc` — an area-specific rock erodibility review quantity that was not derived by converting `P′` into `Pav`.
3. **Field release** — final rock foundation depth and protection remain unresolved.

The transition publishes the already-frozen rock threshold relation:

- if `K ≤ 0.1`, `Pc = 0.48 K^0.44`;
- if `K > 0.1`, `Pc = K^0.75`;
- `Pav/Pc ≥ 1` is a review threshold, not a scour-depth equation;
- 11,775 of 25,000 synthetic rock stress-test states reached the review threshold, explicitly labelled as **not a site failure probability**.

The alluvial handoff then points forward to the BJ–DAF disagreement story without implementing Phase 7 interactives early.

## 3. Scientific source basis

The foundation transition uses only previously frozen research evidence, principally:

- `Synthetic_50K_Research_Findings_Report_v0.1.md` — separate `P′` and `Pav`, 25,000 rock synthetic cases, 11,775 review-threshold cases, and the boundary that the result is a stress-test signal rather than site probability/scour depth;
- `Synthetic_Replicated_Response_Gradients_v0.1.md` — frozen piecewise `Pc(K)` relation and local threshold-ratio elasticities;
- `PHASE_01_STORY_AND_FIGURE_FREEZE_v1.1.md` — Chapter 10→11 narrative boundary and forcing-vs-jump-development distinction;
- Phase 2 `FIG-12` contract and `data/runtime/fig-12-hydraulic-jump.json` — frozen 22,500-state/60-point hydraulic-jump publication layer.

No new scientific fit or external design rule was introduced.

## 4. Gate assessment

### Storyline gate — PASS

The frozen Chapter 10→11 logic is preserved:

family forcing differences → hydraulic-jump development demand → foundation response uses a different response measure → alluvial model disagreement.

The new bridge makes the previously implicit foundation transition explicit without changing the chapter order or pulling the Phase 7 conclusion forward.

### Scientific gate — PASS

- Fr1 remains the controlling axis for the normalized hydraulic-jump display;
- forcing magnitude and normalized jump-development demand are explicitly separated;
- FIG-12 reference lengths are not presented as final IS 4997:2026 stilling-basin dimensions;
- the jump schematic is labelled as visually scaled rather than geometrically literal;
- `P′` is not converted into `Pav`;
- `Pav/Pc ≥ 1` remains a review threshold, not a scour-depth equation or probability;
- final rock foundation depth/protection remains unresolved;
- the alluvial scour family remains open;
- BJ–DAF comparison and disagreement-envelope interactives remain deferred to Phase 7.

### Figure/data gate — PASS

- `data/runtime/fig-12-hydraulic-jump.json` is byte-identical to the pre-Phase-6 runtime manifest;
- population = 22,500;
- display curve = 60 published states;
- domain = `4.5 ≤ Fr1 ≤ 9`;
- p10/p50/p90 summaries remain unchanged;
- no browser-facing CSV, raster reconstruction, refit or interpolation layer was introduced.

### Architecture-restraint gate — PASS

The implementation adds one figure module and one small phase-specific stylesheet, extends the existing renderer registry, and adds one runtime-inserted semantic foundation-context card. The frozen `index.html` editorial shell remains unchanged. No framework, backend, database, CMS, large client dataset or new charting dependency is introduced.

## 5. QA evidence

- Static/scientific QA — **59/59 PASS**.
- DOM interaction QA — **20/20 PASS**.
- Combined controlled QA — **79/79 PASS**.

QA includes scientific values, manifest hash/size equality, no early FIG-13/14 renderer, no duplicate HTML IDs, 17 unique figure mounts, UTF-8 integrity, reduced-motion completion, slider/metric interaction, median-nearest reset, and visible basin-design caveat.

## 6. Changed files

### GitHub site implementation

- `assets/js/figures.js`
- `assets/js/figures-12.js`
- `assets/css/figures-phase6.css`

### GitHub audit

- `docs/audits/PHASE_06_AUDIT.md`
- `docs/audits/PHASE_06_QA_RESULTS_v1.0.json`

### Controlled Library QA evidence

- `scripts/qa_phase6.py`
- `scripts/qa_phase6_dom.mjs`
- `PHASE_06_STATIC_QA_RESULTS_v1.0.json`
- `PHASE_06_DOM_QA_RESULTS_v1.0.json`
- `PHASE_06_QA_RESULTS_v1.0.json`
- `PHASE_06_AUDIT.md`

## 7. Completion decision

**Phase 6: PASS**, subject to repository PR review/merge establishing the canonical `main` checkpoint.

The next controlled phase is **Phase 7 — BJ–DAF Scour Disagreement + Uncertainty Interactives**, implementing FIG-13 and FIG-14 only from their frozen Phase 2 contracts.
