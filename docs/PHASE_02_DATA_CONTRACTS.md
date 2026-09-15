# Phase 2 — Figure Data Contracts & Publication Runtime Assets

**Status:** IN PROGRESS — corrected public-data policy.

## Objective
Complete auditable analytical lineage for the 21 original research figures and map them into the 17 frozen web-story figures without using PNG/JPG files as numerical sources.

## Binding public-data policy
The authoritative analytical CSV/JSON files in the research Library are build inputs only. They are not to be published as browsable/downloadable CSV files in the public GitHub Pages repository.

The public article will contain:
- live browser-rendered analytical charts and animations;
- only the minimum render-ready values needed by each visualization;
- compact runtime JavaScript/JSON assets generated from the authoritative sources;
- no user-facing CSV download links;
- no public `data/figures/*.csv` publication layer.

Important technical boundary: because GitHub Pages is a static client-side site, any values required for a live chart must ultimately reach the browser and can be inspected by a technically sophisticated user. Therefore this policy protects the authoritative/full research datasets and avoids exposing convenient CSV files, but it is not cryptographic data secrecy. True secrecy would require a private backend/API, which is outside the frozen static-article architecture.

## Scientific rules
- PNG/JPG research figures are visual/caption references only and never numerical evidence.
- Frozen analytical source files and documented equations/methods remain authoritative.
- Headline statistics always come from the full authoritative analytical population.
- Browser display samples/aggregates are deterministic and must not re-estimate or change frozen research claims.
- Exact relations use exact equations/elasticities; fitted relations use their frozen fit statistics; rank relationships use Spearman rho; Sobol uses S1/ST; family envelopes use p10/p50/p90; alluvial disagreement uses full-overlap statistics and calibrated q10/q50/q90 uncertainty.

## Required Phase 2 outputs
1. 21-original-figure analytical lineage register.
2. 21 original research figures → 17 web-story figure mapping.
3. One full contract per web figure specifying upstream source(s), population, filters, method, headline statistics, caveat, and interaction/motion behavior.
4. Reproducible build script under `scripts/build_phase2_data.py`.
5. Schema definitions.
6. Source SHA manifest for authoritative build inputs.
7. Public runtime-asset manifest for browser assets.
8. Scientific/data integrity audit.
9. Repository audit confirming no analytical PNG/JPG or public figure CSV is used as the article data layer.

## Runtime publication approach
The build script generates compact render-ready assets under a runtime directory such as `assets/data/` or `src/data/` using minified JS/JSON modules. These contain only the fields and reduced/aggregated observations required for interaction, hover, animation, filtering, uncertainty bands, surfaces, and linked highlighting.

Full authoritative CSVs remain outside the public repository.

## Phase 2 completion gate
Phase 2 may be marked COMPLETE only when:
- all 21 original research figures have traceable analytical lineage;
- all 17 web figures have complete contracts;
- each public visualization has a render-ready runtime asset;
- every runtime asset traces to authoritative analytical source/method;
- no PNG/JPG is used as numerical evidence;
- no public analytical CSV layer remains;
- frozen headline statistics reproduce correctly;
- the final Phase 2 audit passes.

Do not begin Phase 3 until this gate passes.
