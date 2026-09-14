# Weir Research — Interactive Web Article

**Repository status:** Phase 1 complete — story architecture and figure inventory frozen

This repository will publish the completed small-weir parametric research as a **story-driven, interactive, GitHub Pages web article**.

The publication is not a static research paper copied into HTML and not a field-design calculator. Its central question is:

> **Which variables govern small-weir behaviour, under what conditions, and by how much?**

## Publication principles

- Reader-first storyline rather than conventional paper sequencing.
- Evidence-first writing in Kaushal Gadariya's professional voice.
- Live analytical figures generated from CSV/JSON in the browser.
- **No PNG/JPG research charts.** Analytical figures are SVG/canvas visualisations rendered from source data.
- Motion is purposeful: progressive reveal, state transitions, response-surface morphing, filtering and linked highlighting.
- Equations, trendlines, regression statistics, sensitivity indices and uncertainty bands are shown only where methodologically appropriate.
- Every analytical figure has a traceable data source and figure-data contract.
- Research findings remain clearly separated from field-design recommendations.
- GitHub Pages-compatible, responsive, accessible and reproducible.

## Build control

The implementation follows a **canonical 13-phase sequence**. Every phase must pass a documented audit before the next phase begins.

The audit checks:
1. storyline fidelity;
2. scientific fidelity;
3. figure/data fidelity;
4. architecture restraint.

This control exists specifically to prevent storyline drift, unnecessary analysis and unnecessary application architecture.

Current status:
- **Phase 1 — PASS:** story architecture and 17-figure inventory frozen.
- **Next:** Phase 2 — figure CSV/data contracts.

## Design DNA

The visual language will build on Kaushal Gadariya's existing `GIS-Recharge-Web-Article-V2` publication:

- editorial hero and long-form reading rhythm;
- paper + dark-navy base palette;
- teal/aqua analytical accents;
- coral for trade-offs / high response;
- restrained serif display typography with clean sans-serif body text;
- sticky progressive storytelling;
- dark author card with LinkedIn and portfolio links.

The Weir Research article will go further by adding data-driven D3 visualisation, animated statistical charts, linked interactions, a research explorer and figure-level CSV provenance.

## Planned technology

- HTML5 + modern CSS
- Vanilla JavaScript modules
- D3.js for custom analytical SVG charts
- Scrollama and/or native IntersectionObserver for scrollytelling
- CSV + JSON as the publication data layer
- GitHub Pages deployment
- No proprietary visual assets, charting systems or McKinsey code/assets

## Planning and control documents

- [`docs/WEB_ARTICLE_MASTER_PLAN.md`](docs/WEB_ARTICLE_MASTER_PLAN.md)
- [`docs/FIGURE_DATA_AND_MOTION_SPEC.md`](docs/FIGURE_DATA_AND_MOTION_SPEC.md)
- [`docs/CONTROLLED_BUILD_SEQUENCE_AND_AUDIT_PROTOCOL.md`](docs/CONTROLLED_BUILD_SEQUENCE_AND_AUDIT_PROTOCOL.md)
- [`docs/PHASE_01_STORY_AND_FIGURE_FREEZE.md`](docs/PHASE_01_STORY_AND_FIGURE_FREEZE.md)
- [`docs/audits/PHASE_01_AUDIT.md`](docs/audits/PHASE_01_AUDIT.md)
- [`data/metadata/figure-inventory.csv`](data/metadata/figure-inventory.csv)

## Research boundary

The article communicates results from the completed replicated synthetic research programme. It does **not** convert synthetic findings into construction-ready design guidance. Final site design still requires site-specific hydrology, geotechnical/foundation evidence, applicable standards and professional engineering review.

## Author

**Kaushal Gadariya**  
Soil and Water Conservation Engineer  
[LinkedIn](https://www.linkedin.com/in/kaushal-gadariya-670221b1/) · [Portfolio](https://knightfox789.github.io/kaushal-gadariya-portfolio/)
