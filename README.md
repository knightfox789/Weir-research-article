# Weir Research — Interactive Web Article

**Repository status:** Phase 3 complete — editorial shell, branding and responsive framework PASS

This repository publishes the completed small-weir parametric research as a **story-driven, interactive, GitHub Pages web article**.

The publication is not a static research paper copied into HTML and not a field-design calculator. Its central question is:

> **Which variables govern small-weir behaviour, under what conditions, and by how much?**

## Publication principles

- Reader-first storyline rather than conventional paper sequencing.
- Evidence-first writing in Kaushal Gadariya's professional voice.
- **21 original research figures remain the scientific evidence inventory; related evidence is consolidated into 17 live web experiences.**
- Live analytical figures will render in the browser with purposeful motion, hover, filtering and linked highlighting.
- **No PNG/JPG research charts are used as analytical runtime figures.**
- **No user-facing analytical CSV download layer.** Authoritative research CSVs remain build inputs and are not published as convenient public datasets.
- Public runtime assets contain only the equations, summaries, calibration tables and deterministic display reductions needed to render each visualization.
- Equations, regression statistics, sensitivity indices and uncertainty bands are shown only where scientifically appropriate.
- Research findings remain clearly separated from field-design recommendations.
- GitHub Pages-compatible, responsive, accessible and reproducible.

### Static-site data boundary
Because GitHub Pages runs entirely in the browser, values required for a live interactive chart can technically be inspected. That is acceptable for this publication. The full authoritative research tables remain build inputs, while the public site ships compact render-ready JSON rather than a reader-facing source-CSV product.

## Build control

The implementation follows the controlled phase sequence documented in `docs/CONTROLLED_BUILD_SEQUENCE_AND_AUDIT_PROTOCOL.md`. Every phase must pass storyline fidelity, scientific fidelity, figure/data fidelity and architecture-restraint audits before the next phase begins.

Current status:
- **Phase 1 — PASS:** story architecture editorially refined with DSC Humanizer / Kaushal Voice; jargon and repetition controls added; 21-original → 17-live-web figure architecture clarified.
- **Phase 2 — PASS:** all 21 original analytical figures have source/method lineage; all 17 web figures have complete data/interactivity contracts; compact runtime JSON exists for FIG-03–FIG-17; the corrected scientific audit passes 24/24 frozen-result checks.
- **Phase 3 — PASS:** semantic HTML shell, responsive design system, hero, chapter navigation, reading progress, all 17 figure mount points, author/provenance surfaces, accessibility foundations and SEO/social metadata are implemented.
- **Phase 4 — next:** opening scrollytelling and live implementation of FIG-01 through FIG-06.

## Phase 3 shell

Phase 3 intentionally stops before analytical chart implementation.

- `index.html` — final-form article structure and all 17 figure mount points.
- `assets/css/styles.css` — palette, typography, editorial grid, responsive layouts and reduced-motion base.
- `assets/js/app.js` — chapter drawer, reading progress and active-chapter navigation only.
- `docs/audits/PHASE_03_AUDIT.md` — Phase 3 four-gate audit.

Each figure mount declares its frozen `FIG-xx` identifier and current Phase 2 runtime JSON path. Chart modules are added only in the later controlled phases.

## Phase 2 provenance

- `data/metadata/original-figure-lineage.json` — 21 original analytical figures and their upstream methods.
- `data/metadata/figure-mapping.json` — 21 original figures consolidated into 17 web figures.
- `data/metadata/web-figure-contracts.json` — population/filter/method/output/headline/caveat/interactivity for each web figure.
- `data/metadata/source-sha-manifest.json` — SHA-256 identity of 21 authoritative build inputs.
- `data/metadata/runtime-asset-manifest.json` — public runtime asset hashes and sizes.
- `data/metadata/phase-02-audit-results.json` — machine-readable corrected audit.
- `scripts/build_phase2_data.py` — reproducible build and quantitative integrity checks.
- `docs/PHASE_02_ANALYTICAL_LINEAGE.md` and `docs/audits/PHASE_02_AUDIT.md` — human-readable audit trail.

## Design DNA

The visual language builds on Kaushal Gadariya's existing web-publication direction:

- editorial hero and long-form reading rhythm;
- paper + dark-navy base palette;
- teal/aqua analytical accents;
- coral for trade-offs / high response;
- sand/earth for foundation and scour;
- restrained serif display typography with clean sans-serif body text;
- sticky reading progress and progressive storytelling;
- dark author card with LinkedIn and portfolio links.

No proprietary fonts, assets or code are used.

## Technology

- semantic HTML5
- modern CSS with custom properties and responsive grid
- vanilla JavaScript modules
- D3.js later for custom analytical SVG/canvas figures
- native IntersectionObserver first; Scrollama only if a later scrollytelling requirement justifies it
- compact generated JSON runtime assets
- GitHub Pages deployment
- no framework, backend, database, authentication or CMS

## Research boundary

The article communicates results from the completed replicated synthetic research programme. It does **not** convert synthetic findings into construction-ready design guidance. Final site design still requires site-specific hydrology, geotechnical/foundation evidence, applicable standards and professional engineering review.

## Author

**Kaushal Gadariya**  
Soil and Water Conservation Engineer  
[LinkedIn](https://www.linkedin.com/in/kaushal-gadariya-670221b1/) · [Portfolio](https://knightfox789.github.io/kaushal-gadariya-portfolio/)
