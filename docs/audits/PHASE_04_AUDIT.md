# Phase 4 Audit — Opening Scrollytelling + FIG-01 to FIG-06

**Phase:** 4 of 13  
**Branch:** `phase-4-opening-figures`  
**Base commit:** `b59a78d98e733321f6d3a00052e865829b5c8907`  
**Status:** **PASS**  
**Date:** 2026-09-16

## 1. Decision

Phase 4 is complete. FIG-01 through FIG-06 are implemented as live browser-rendered SVG experiences using the frozen Phase 1 story and Phase 2 scientific contracts. The four controlled gates — storyline, scientific, figure/data, and architecture restraint — pass.

This phase does not claim final production browser acceptance. The local Chromium executable in the execution environment hangs even on `about:blank`; that environment limitation is recorded separately. Phase 4 therefore closes on deterministic scientific/static QA plus a DOM-level interaction harness. Full visual, cross-browser, device, performance and deployment acceptance remains a later controlled responsibility, especially Phases 11 and 13.

## 2. Implemented figure group

- **FIG-01 — Initiating Weir Diagnostic:** staged explanatory SVG; five diagnostic states; reduced-motion complete state; step controls.
- **FIG-02 — Dependency Network:** directed graph; upstream/downstream traversal; click and keyboard selection; clear/reset control.
- **FIG-03 — Experiment Scale & Filtering:** symbolic four-seed population build; audited replicated and filtered counts; no raw 200K browser load.
- **FIG-04 — Q × L → Head Surface:** exact equation-driven response field; Q/L/C controls; exact elasticities; no fitted `R²`.
- **FIG-05 — q × Fr1 → Forcing:** deterministic source-point sample plus relative frozen fitted-response surface; family filtering; source absolute forcing values only; fitted equation and `R²` preserved.
- **FIG-06 — Height × Downstream Slope → Body Area:** exact analytical identity; linked geometry morph; P/T/s controls; frozen Sobol context.

## 3. Runtime reconciliation

Phase 4 adds render-support fields only; it does not refit or change frozen scientific findings.

### FIG-03

Added audited replication context from the existing Phase 2 authoritative sources:

- 4 independent LHS seeds × 50,000 scenarios = **200,000** scenarios;
- eligible by seed = **2,585 / 2,580 / 2,622 / 2,530**;
- pooled eligible family cases = **10,317**;
- separate scrambled Sobol/Jansen base `N = 8,192`.

### FIG-05

The frozen compact relationship did not carry an audited absolute intercept for arbitrary interactive `q × Fr1` states. Phase 4 therefore preserves the published fitted exponents and `R²` but renders the fitted surface as **relative response intensity**. Absolute `kW/m` values appear only on a deterministic 60-state source sample with actual authoritative forcing values. Metadata explicitly records `display sample != fit sample`.

### FIG-06

Added authoritative study-domain ranges from the frozen 50K whole-system source for structure height, top width and downstream slope. The exact identity and Sobol values remain unchanged.

## 4. Gate assessment

### Storyline gate — PASS

Chapter 01→06 order, figure identities, reader transitions and scientific boundaries remain consistent with Phase 1 v1.1. No new figure, reordered argument or competing narrative is introduced.

### Scientific gate — PASS

Protected distinctions are preserved:

- FIG-04 and FIG-06 are exact analytical relationships, not fitted trends;
- FIG-05 is a frozen synthetic fitted relationship with `R²≈0.9999`, not a final basin-design equation;
- FIG-03 counts describe synthetic study coverage, not real-world probability;
- FIG-06 body area remains a material proxy, not construction quantity/cost;
- no new field recommendation, refit or unsupported absolute forcing calibration is introduced.

### Figure/data gate — PASS

- FIG-01/02 use approved metadata JSON.
- FIG-03–06 use compact runtime JSON.
- no analytical PNG/JPG is used as numerical data;
- no browser-facing authoritative CSV layer is introduced;
- no full 200K dataset is loaded in the browser;
- modified runtime assets are reproducibly rebuilt from existing authoritative Phase 2 sources;
- runtime manifest SHA-256 and byte sizes match the final assets.

### Architecture-restraint gate — PASS

Implementation remains:

- static GitHub Pages architecture;
- semantic HTML/CSS;
- vanilla ES modules;
- browser-generated SVG;
- native events / IntersectionObserver foundations;
- no framework, backend, database, CMS or speculative application layer.

## 5. QA evidence

### Static/scientific QA

`docs/audits/PHASE_04_QA_RESULTS_v1.0.json`

- **46 / 46 checks PASS**.
- Covers module syntax, renderer registration, frozen statistics, runtime lineage rules, reduced-motion/keyboard hooks, exact-vs-fitted labeling, FIG-05 relative/absolute boundary, and manifest integrity.

### DOM interaction QA

`docs/audits/PHASE_04_DOM_QA_RESULTS_v1.0.json`

- **24 / 24 checks PASS**.
- Covers:
  - FIG-01 reduced-motion complete state and stepper interaction;
  - FIG-02 click, keyboard and reset behavior;
  - FIG-03 live symbolic population rendering;
  - FIG-04 three controls and response/crosshair update;
  - FIG-05 60 audited source points, focusability and family filtering;
  - FIG-06 three controls and linked section geometry update.

### Native headless Chromium

**Environment unavailable for reliable execution.** The installed Chromium process hangs even on a blank page despite headless/no-sandbox variants. This limitation is not counted as a site pass or failure.

Final visual cross-browser/device acceptance is intentionally retained for later QA/deployment phases rather than silently inferred here.

## 6. Phase 4 files

### Runtime/site

- `assets/js/app.js`
- `assets/js/figure-core.js`
- `assets/js/figures.js`
- `assets/js/figures-01-02.js`
- `assets/js/figures-03-04.js`
- `assets/js/figures-05-06.js`
- `assets/css/figures.css`
- `data/runtime/fig-03-experiment-scale.json`
- `data/runtime/fig-05-forcing-response.json`
- `data/runtime/fig-06-body-area.json`
- `data/metadata/runtime-asset-manifest.json`

### Reproducibility / QA

- `scripts/build_phase4_runtime_support.py`
- `scripts/qa_phase4.py`
- `scripts/qa_phase4_dom.mjs`
- `docs/audits/PHASE_04_QA_RESULTS_v1.0.json`
- `docs/audits/PHASE_04_DOM_QA_RESULTS_v1.0.json`
- `docs/audits/PHASE_04_AUDIT.md`

## 7. Completion decision

**Phase 4: PASS.**

The next controlled phase is **Phase 5**, beginning with the next frozen live analytical figure group and preserving the same scientific/runtime boundaries. Full production browser acceptance is not pulled forward from the later QA/deployment phases.
