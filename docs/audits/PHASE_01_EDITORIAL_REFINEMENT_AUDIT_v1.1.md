# Phase 1 Editorial Refinement Audit v1.1

**Scope:** Story architecture, 21-original-figure coverage, 17-web-figure architecture, DSC Humanizer / Kaushal Voice, jargon control and repetition control.  
**Result:** PASS  
**Scientific findings changed:** No.

## 1. What changed

The Phase 1 story sequence was retained. Editorial wording was refined so each chapter follows a more natural investigation rhythm:

`reader question → live evidence → interpretation → limitation → next question

The main changes are:

- clarified that all **21 original research figures remain part of the scientific evidence inventory**;
- retained **17 principal live web experiences** because related static figures are intentionally consolidated;
- humanized several chapter titles without changing technical meaning;
- strengthened transitions so one analytical result opens the next research question;
- reduced repeated planning labels such as “Takeaway”, “Core finding”, and “Interactive treatment” in the intended public narrative;
- added a formal first-use jargon policy;
- added explicit repetition and AI-style phrasing controls;
- aligned the public-data boundary with the current Phase 2 compact-runtime-JSON architecture;
- preserved all research/design boundary caveats.

## 2. Jargon review

Terms requiring a first-use explanation in reader-facing copy:

- unit discharge (`q`)
- Froude number (`Fr1`)
- conjugate depth (`y2`)
- tailwater compatibility
- Pareto / nondominated
- normalized family
- Spearman `ρ`
- Sobol `S1` / `ST`
- model-form uncertainty
- Latin Hypercube Sampling (LHS)
- Bormann–Julien (BJ)
- D’Agostino–Ferro (DAF)
- HFL, if retained in visible text

Technical expressions that must not be simplified into misleading language:

- exact relationship ≠ fitted trend
- stability diagnostic ≀ field factor of safety
- jump-development reference ≠ final stilling-basin dimension
- disagreement meta-model ≀ physical scour equation
- research family ≠ design class

## 3. Repetition review

Public copy should avoid mechanical repetition of:

- Takeaway
- Core finding
- Key message
- Interactive treatment
- It is important to note
- This highlights / underscores
- Furthermore / Moreover / Additionally
- repeated restatement of the same statistic across body, caption and annotation

The refined Phase 1 document uses editorial bridges between chapters so the reader experiences a connected investigation rather than repeated standalone summaries.

## 4. Humanizer / Kaushal Voice check

Applied principles:

- facts and qualifiers preserved;
- evidence before adjectives;
- technical precision retained;
- plain language added around complex terms;
- no invented anecdotes or field stories;
- uncertainty remains visible;
- inflated claims removed/avoided;
- practitioner reasoning is allowed at genuine turning points, but first-person narration is to remain selective;
- the article should sound authored and grounded rather than promotional or AI-templated.

## 5. Scientific integrity check

Retained without substantive change:

- research question;
- five-dimensional synthesis;
- head equation and elasticities;
- forcing power relationship and R²;
- body-area equation;
- stability diagnostic coefficients and caveat;
- Pareto population and nondominated count;
- family interpretation and pooled shares;
- hydraulic-jump population/domain and design caveat;
- BJ–DAF overlap/disagreement statistics;
- disagreement meta-model boundary;
- Sobol interpretation and selected total-order values;
- no-design-calculator boundary.

## 6. Figure architecture check

**Original research figures:j* 21/21 retained in evidence inventory.  
**Principal live web figures:j* 17.  
**Unmapped original figures:** 0.  
**Static analytical PNG/JPG used as runtime data:** prohibited.  
**Browser analytical source:** Phase 2 compact runtime JSON generated from authoritative source data/method.

## 7. Phase decision

**Phase 1 editorial refinement: PASS.**

Phase 3 may proceed using `PHASE_01_STORY_AND_FIGURE_FREEZE_v1.1.md` as the current story/editorial control document, while Phase 2 remains the analytical/runtime-data control layer.
