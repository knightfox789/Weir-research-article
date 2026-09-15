# Weir Research — Interactive Web Article

**Repository status:** Phase 2 in progress — analytical lineage and runtime visualization contracts

This repository publishes the completed small-weir parametric research as a **story-driven, interactive, GitHub Pages web article**.

The publication is not a static research paper copied into HTML and not a field-design calculator. Its central question is:

> **Which variables govern small-weir behaviour, under what conditions, and by how much?**

## Publication principles

- Reader-first storyline rather than conventional paper sequencing.
- Evidence-first writing in Kaushal Gadariya's professional voice.
- Live analytical figures rendered in the browser with animation, motion, hover, filtering and linked highlighting.
- **No PNG/JPG research charts used as analytical figures.**
- **No user-facing analytical CSV download layer.** Authoritative research CSVs remain build inputs and are not published as convenient public datasets.
- Public runtime assets contain only the minimum reduced/aggregated values needed to render each visualization.
- Motion is purposeful: progressive reveal, state transitions, response-surface morphing, uncertainty expansion, Pareto fading, family transitions, Sobol reordering and scroll-driven explanation.
- Equations, regression statistics, sensitivity indices and uncertainty bands are shown only where scientifically appropriate.
- Every analytical figure has traceable analytical lineage and a figure-data contract.
- Research findings remain clearly separated from field-design recommendations.
- GitHub Pages-compatible, responsive, accessible and reproducible.

### Static-site data boundary
Because GitHub Pages runs entirely in the browser, any values required to draw a live interactive chart must reach the browser and can technically be inspected by an advanced user. The publication therefore protects the full authoritative research datasets by keeping them out of the public repository and shipping only compact render-ready chart assets. True cryptographic secrecy would require a private backend/API and is intentionally outside this static publication architecture.

## Build control

The implementation follows the controlled phase sequence documented in `docs/CONTROLLED_BUILD_SEQUENCE_AND_AUDIT_PROTOCOL.md`. Every phase must pass storyline fidelity, scientific fidelity, figure/data fidelity and architecture-restraint audits before the next phase begins.

Current status:
- **Phase 1 — PASS:** story architecture and 17 web-figure roles frozen.
- **Phase 2 — IN PROGRESS:** 21 original research figures are being traced into 17 web-story visualization contracts and compact runtime assets.

## Design DNA

The visual language builds on Kaushal Gadariya's existing `GIS-Recharge-Web-Article-V2` publication:

- editorial hero and long-form reading rhythm;
- paper + dark-navy base palette;
- teal/aqua analytical accents;
- coral for trade-offs / high response;
- restrained serif display typography with clean sans-serif body text;
- sticky progressive storytelling;
- dark author card with LinkedIn and portfolio links.

The Weir Research article extends this with animated data-driven visualization, linked interactions, a research explorer and figure-level provenance.

## Planned technology

- HTML5 + modern CSS
- Vanilla JavaScript modules
- D3.js for custom analytical SVG/canvas charts
- Scrollama and/or native IntersectionObserver for scrollytelling
- compact generated JS/JSON runtime assets for visualization data
- GitHub Pages deployment
- no proprietary visual assets or static analytical figure images

## Research boundary

The article communicates results from the completed replicated synthetic research programme. It does **not** convert synthetic findings into construction-ready design guidance. Final site design still requires site-specific hydrology, geotechnical/foundation evidence, applicable standards and professional engineering review.

## Author

**Kaushal Gadariya**  
Soil and Water Conservation Engineer  
[LinkedIn](https://www.linkedin.com/in/kaushal-gadariya-670221b1/) · [Portfolio](https://knightfox789.github.io/kaushal-gadariya-portfolio/)
