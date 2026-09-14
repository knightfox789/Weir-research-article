# Phase 2 — Figure Data Contracts & Publication Extracts

**Status:** COMPLETE — see Phase 2 audit.

## Objective
Convert the frozen Phase 1 figure inventory into auditable publication data contracts without starting chart/UI implementation or creating new scientific analysis.

Phase 2 is limited to source-to-figure lineage, figure-level CSV/JSON extracts, deterministic aggregation/downsampling, units/statistic/caveat metadata, machine-readable schemas/hashes, and integrity checks against frozen research outputs.

## Outputs
- analytical CSV contracts for FIG-03 through FIG-15, plus a supporting replicated envelope CSV for FIG-09;
- JSON contracts for FIG-01, FIG-02, FIG-16 and FIG-17;
- `data/metadata/figures.json` — statistic/source/sample/reduction/caveat metadata for all 17 figures;
- `data/metadata/figure-contracts.json` — field schemas;
- `data/metadata/figure-contract-register.csv` — one-row-per-figure contract register;
- `data/metadata/data-lineage.csv` — publication file to frozen research artifact mapping;
- `data/metadata/publication-data-manifest.csv` — SHA-256 manifest;
- `data/metadata/variables.json` and `families.json` — publication terminology;
- `docs/audits/phase-02-data-integrity-checks.csv` — machine-readable checks.

No web chart code is part of Phase 2.

## Publication data reduction
Full research statistics remain authoritative. Point clouds are reduced only for browser performance.

- FIG-04: 30×30 analytical grid across the frozen Q/L coverage bounds at the full-sample median C; exact equation, not regression.
- FIG-05: deterministic family-stratified 900-case display from the original eligible seed; frozen forcing fit remains based on pooled n=10,317.
- FIG-06: deterministic family-stratified 700-case display; exact material equation remains authoritative.
- FIG-08: 800-case display retaining **all 101** original nondominated Pareto cases.
- FIG-09: 900-case family-stratified original-seed point display + pooled replicated family envelopes from n=10,317.
- FIG-10: pooled replicated family p10/p50/p90 summaries.
- FIG-11: complete four-seed × four-family share table.
- FIG-12: 90 Fr1 bins from all 22,500 formal-jump states + frozen F2/F3/F4 core medians.
- FIG-13/14: deterministic family/regime-stratified 1,200-state display extract from the full 14,369 BJ–DAF overlap.
- FIG-15: complete released Sobol table (132 rows).

For FIG-13/14, displayed points are not used to re-estimate headline research statistics. Full-sample annotations are stored in `figures.json`.

Display-sample fidelity: median DAF/BJ ≈1.108 vs full ≈1.107; factor-two agreement ≈50.08% vs full ≈50.30%; Spearman ρ≈0.436 vs full ≈0.422.

## Controlled FIG-09 clarification
Phase 1 allowed a seed filter on the family point cloud. The frozen Library contains the complete original-seed point-level family assignment plus replicated shares/envelopes, but not separate point-level family-assignment CSVs for the three resample seeds.

We do not rerun or fabricate research to satisfy a UI control. Therefore:
- FIG-09 point cloud = seed 49972026 display;
- FIG-09 envelope = pooled four-seed n=10,317 research envelope;
- FIG-11 = explicit four-seed replication evidence.

This is a provenance-preserving implementation clarification, not a storyline or scientific change.

## Statistics policy retained
- exact law → equation + elasticity;
- fitted law → frozen equation + R²;
- rank evidence → Spearman ρ;
- global sensitivity → Sobol S1/ST;
- families → p10/p50/p90;
- model comparison → ratios / 1:1 / factor bands;
- model-disagreement uncertainty → q10/q50/q90 calibration.

## Boundary
These data are not site validation, real-world failure probabilities, a final optimum section, final IS 4997:2026 basin geometry, final foundation depth, or an instruction to select/average empirical scour equations.

## Phase 3 handoff
Phase 3 may create only the editorial shell, navigation, branding, responsive framework and empty/live chart containers that consume these contracts. It must not generate new analytical data.
