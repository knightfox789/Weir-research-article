# Phase 1 â€” Story Architecture & Figure Inventory Freeze v1.1

**Status:** FROZEN â€” editorially refined  
**Phase:** 1 of 13  
**Refinement:** DSC Humanizer / Kaushal Voice + jargon and repetition review  
**Purpose:** Lock the reader journey, evidence hierarchy and principal visual experiences before page coding begins.

## 1. Editorial objective

The article should help a reader answer one practical research question:

> **Which variables govern small-weir behaviour, under what conditions, and by how much?**

The page is a **story-driven interactive research article**. It is not a static manuscript converted to HTML, a design calculator, construction guidance, a catalogue of optimum weir sections, or a software demonstration.

The article should feel like a technical investigation being explained by a practitioner: begin with a real engineering question, show the evidence that changed the direction of the work, explain what the evidence means, state what it does not establish, and use each finding to open the next question.

The reader should finish with the five-dimensional research interpretation:

`normalized regime â†’ response magnitude â†’ dissipation-development demand â†’ material/stability trade-off â†’ foundation/scour uncertainty`

## 2. Evidence and voice rules

The article uses **Kaushal Voice + web-article mode**:

- evidence before adjectives;
- technically precise without sounding like a journal manuscript;
- practical and low-hype;
- clear about what is exact, fitted, modelled, comparative, conditional or unresolved;
- short explanatory sentences around complex analytical material;
- first-person voice only at genuine research turning points where it improves authenticity;
- no invented field anecdotes, dialogue, failures, quotations, emotions or site stories;
- no claim may become more certain during editing than the research evidence allows.

The preferred narrative rhythm is:

**Reader question â†’ live evidence â†’ interpretation â†’ limitation â†’ next question**

This is a guide, not a visible template. The published article should not repeat the same labels in every chapter.

## 3. Reader journey â€” refined

### 00 â€” What really controls a small weir?

Open with an animated weir that initially looks simple. As water rises, reveal discharge, crest length, head, unit discharge, hydraulic jump, uplift and foundation response one at a time.

The purpose is not to explain every term immediately. It is to establish the central tension: changing one variable changes several connected responses.

**Editorial bridge:** A small weir is not one hydraulic equation plus a concrete section. The next question is whether the original section was internally complete.

### 01 â€” The simple section that was not simple

Use the initiating case to reconstruct the technical review. The head arithmetic could appear reasonable, yet the section still contained unresolved geometry, centroid/resisting-moment, uplift, HFL/depth and downstream-protection questions.

Show these issues sequentially on the section rather than listing them all before the visual.

**Meaning:** A calculation can be numerically correct while the engineering system it represents remains incomplete.

**Limitation:** The initiating case opens the research question; it is not a final design or a field-failure case.

**Editorial bridge:** If several checks depend on one another, the next step is to map those dependencies before varying anything.

### 02 â€” One change travels through the whole system

Show the dependency network rather than a formula catalogue.

Core hydraulic chain:

`Q, L, C â†’ H â†’ q â†’ y1 / Fr1 â†’ y2 â†’ energy loss / forcing â†’ tailwater compatibility`

Parallel structural chain:

`P, T, downstream slope â†’ base width / area â†’ self-weight â†’ stability response`

Foundation branch:

`hydraulic state + foundation class â†’ scour / rock threshold / uncertainty`

Let the reader select an input and watch the downstream path light up. Derived quantities such as `q = Q/L` must be visibly distinguished from independent inputs.

**Meaning:** Before testing sensitivity, the research had to separate what could be varied independently from what was mathematically derived.

**Editorial bridge:** Once the dependency structure was clear, one design could be turned into an experiment.

### 03 â€” From one section to 200,000 experiments

Explain the research chronology in reader language:

baseline â†’ one-at-a-time sensitivity â†’ pairwise response surfaces â†’ 50,000 Latin Hypercube Sampling (LHS) scenarios â†’ three independent 50,000-scenario replications â†’ feasible-space filtering â†’ Pareto/robustness analysis â†’ normalized families â†’ separate Sobol/Jansen global sensitivity.

Key numerical context:

- 22 continuous synthetic variables in the large-scale lane;
- 200,000 total replicated LHS scenarios;
- 10,317 pooled eligible competent-rock cases;
- a separate alluvial comparison lane;
- a dedicated `N = 8,192` scrambled Sobol base design for global sensitivity.

Use motion to show scale and filtering rather than presenting these as a dense methods paragraph.

**Meaning:** The purpose was not to generate one preferred section. It was to map how behaviour changes across the study domain.

**Limitation:** The synthetic experiment maps the specified research space; it does not represent real-world probability.

**Editorial bridge:** The first relationship to examine is also one of the cleanest: how discharge and overflow length control head.

### 04 â€” Head is a balance, not a single driver

Reveal the exact relationship:

`H = [Q/(C L)]^(2/3)`

Let the reader move through the `Q Ã— L â†’ H` response field and see the exact elasticities:

- `Q`: `+2/3`;
- `L`: `âˆ’2/3`;
- `C`: `âˆ’2/3`.

**Meaning:** More discharge raises head; more overflow length spreads the same flow and lowers it.

**Limitation:** This is an exact relationship within the selected broad-crested formulation. It is not a fitted empirical trend and does not by itself establish full field applicability.

**Editorial bridge:** But `Q/L` also defines unit discharge. Once unit discharge changes, downstream forcing changes too.

### 05 â€” Forcing rises faster than it first appears

Reveal the compounded relationship between unit discharge and Froude number:

`Pâ€² âˆ q^1.67 Fr1^1.87`, with `RÂ² â‰ˆ 0.9999` over the eligible synthetic formal-jump domain.

Use motion to move from low `q` / low `Fr1`, through separate increases in each variable, to the high/high response state. Show the fitted surface only after the reader has seen the response build.

Direct interpretation:

- `+10% q` corresponds to about `+17%` forcing;
- `+10% Fr1` corresponds to about `+19.5%` forcing, holding the other variable fixed.

**Meaning:** Unit discharge and jump intensity compound one another.

**Limitation:** This is a fitted synthetic response relationship, not a final basin-design equation.

**Editorial bridge:** Reducing hydraulic forcing is not the only concern. Geometry also carries a material cost.

### 06 â€” Why height quickly becomes a material penalty

Show the exact body-area relation:

`A = PÂ·T + 0.5Â·sÂ·PÂ²`

and its normalized form:

`A/PÂ² = T/P + 0.5Â·s`

Link the response surface to an animated section so the reader sees how increasing height and changing downstream slope alter the material proxy.

**Meaning:** Height is not simply another dimension. Because it enters quadratically in part of the area relation, its material penalty grows nonlinearly.

**Limitation:** Body area is a material proxy; it is not reinforcement quantity, foundation quantity or construction cost.

**Editorial bridge:** Material economy alone still cannot decide the section because stability responds to a different combination of variables.

### 07 â€” Stability does not follow one simple rule

Present stability as a conditional multivariable response rather than forcing it into one universal elasticity.

The pooled standardized diagnostic coefficients are approximately:

- cohesion `+0.629`;
- height `èˆ’0.256`;
- downstream slope `+0.167`;
- discharge `âˆ’0ŒLÂ‹HZ[Ø]\ˆ˜][ÈX›İ]
ÌŒÌXÂ‹HÛÛY°¬ˆ8¢bÍ˜‚‚ŠŠ“YX[š[™ÎŠŠˆÛÛYH™\ÜÛœÙ\ÈYZ]ÛX[ˆ\]X][ÛœÈÜˆİÙ\ˆ]ÜËˆİXš[]H™[XZ[œÈÛÛ™][Û˜[[™][]˜\šXX›K‚‚ŠŠ“[Z]][ÛŠŠˆ\ÙHÛÙY™šXÚY[È\™HXYÛ›ÜİXËˆ^H\™H›İH[š]™\œØ[İXš[]H[\İXÚ]KšY[˜XİÜ‹[Ù‹\ØY™]H\]X][ÛˆÜˆ[˜ÛÛ™][Û˜[ÛØ›Û˜[šÚ[™Ë‚‚ŠŠ‘Y]ÜšX[œšYÙNŠŠˆÛ˜ÙHX]\šX[›Ü˜Ú[™ËZ[Ø]\ˆÛÛ\]Xš[]H[™›İ[™][Ûˆ™\ÜÛœÙH\™HÛÛœÚY\™YÙÙ]\‹HÚ[™ÛHÜ[][H™XÛÛY\ÈY™šXİ[ÈY™[™‚‚ˆÈÈÈ8 %\™H\È›ÈÚ[™ÛHÜ[][HÙZ\‚‚”ÚİÈH[YÚX›H˜YHÜXÙHš\œİˆ[ˆ[š[X]HH\™]Èš[\š[™ÎˆÛZ[˜]YÚ[È˜YHÚ[HH›Û™ÛZ[˜]Yœ›ÛY\ˆ™[XZ[œË‚‚”™\ÙX\˜ÚÛÛ^‚‚‹H‹NHÛÛ\][\›ØÚÈ[YÚX›HØ\Ù\È[ˆHÛİ\˜ÙK\ÙYY˜YHÜXÙNÂ‹HLH›Û™ÛZ[˜]YØ\Ù\ÎÂ‹H›İ\ˆZ[š[Z^™YØš™Xİ]™\Îˆ›ÙH\™XK›Ü˜Ú[™ËZ[Ø]\ˆZ\ÛX]Ú[™›ØÚÈ™\ÚÛ‚‚‘È›İ^Z[ˆ\™]È[ÜH][™İ™Y›Ü™HHš\İX[ˆ]H™XY\ˆÙYHÚH›ÈÚ[™ÛHÚ[Ú[œÈÛˆ]™\HØš™Xİ]™K‚‚ŠŠ“YX[š[™ÎŠŠˆH\˜X›H™\İ[\ÈH˜YK[Ù™ˆİXİ\™K›İHØ][ÙİYHÙˆ8 '™\İ8 'HÙXİ[ÛœË‚‚ŠŠ“[Z]][ÛŠŠˆ^Xİ\™]ÈY[X™\œÚ\\ÈØ[\K\Ù[œÚ]]™K‚‚ŠŠ‘Y]ÜšX[œšYÙNŠŠˆ]™[ˆÚ]İ]Û™HÚ[›™\‹™Xİ\œš[™È™Z]š[İ\˜[]\›œÈİ[\X\ˆXÜ›ÜÜÈH™X\ÚX›HÜXÙK‚‚ˆÈÈÈH8 %›İ\ˆ]\›œÈ™Xİ\ˆ8 %]Û›H™YH›Ü›HÛX\ˆÛÜ™\Â‚’[›ÙXÙHH›Ü›X[^™Y™\ÙX\˜Ú˜[Z[Y\È\È™Z]š[İ\˜[[™[Ü\Ë›İİ[™\™[™Ú[™Y\š[™ÈÙXİ[ÛœË‚‚”ÛÛY[YÚX›H˜[Z[HÚ\™\È\™H\›Ş[X][N‚‚‹HŒNˆKŒ‰XÂ‹HŒˆMKŒIXÂ‹HŒÎˆÌKIXÂ‹HˆŒ‰X‚‚‘ŒHÚİ[™H\ØÜšX™Y\ÈH^H˜[œÚ][Ûˆ˜[™ˆŒ‹ŒÈ[™›Ü›HÛX[™\ˆ™Xİ\œš[™ÈÛÜ™\Ë‚‚•\ÙHH˜[Z[HX\\˜Ù[[H[™[Ü\Ë[šÙYÙXİ[Ûˆ[Üœ[™˜YK[Ù™ˆİ[[X\šY\ÈÙÙ]\ˆÛÈH™XY\ˆØ[ˆÙYHÙ[ÛY]H[™™\ÜÛœÙH]HØ[YH[YK‚‚ŠŠ“YX[š[™ÎŠŠˆH\ÙY[]\›œÈ\™H™YÚ[Y\ÈÙˆ™Z]š[İ\‹›İ™\ØÜš\]™H\ÚYÛˆ\\Ë‚‚ŠŠ“[Z]][ÛŠŠˆŒH™[XZ[œÈ^H[™Úİ[›İ™H™\Ù[Y\ÈH\™[™Ú[™Y\š[™ÈÛ\ÜË‚‚ŠŠ‘Y]ÜšX[œšYÙNŠŠˆH˜[Z[Y\ÈÈ›İÛ›HY™™\ˆ[ˆÙ[ÛY]Kˆ^H[ÛÈ^ÜÙHÚHYÚ›Ü˜Ú[™È[™[\Y]™[ÜY[[X[™Úİ[™HÙ\Ù\\˜]K‚‚ˆÈÈÈL8 %YÚ›Ü˜Ú[™ÈÙ\È›İ]]ÛX]XØ[HYX[ˆÜ™X]\ˆ[\Y]™[ÜY[[X[™‚‘\İ[™İZ\ÚXYÛš]YHœ›ÛH]™[ÜY[[X[™‚‚•[š]\ØÚ\™ÙHİ›Û™ÛHY™™XİÈ›Ü˜Ú[™ÈXYÛš]YKÚ[Hœ›İYH[X™\ˆİ›Û™ÛHÛÛ›ÛÈ›Ü›X[^™Y[\Y]™[ÜY[Y]šXÜËˆHÛÈ^\È\™H™[]Y]›İ[\˜Ú[™ÙXX›K‚‚•\ÙH[šÙY™\ÜÛœÙ\È›Üˆ›Ü˜Ú[™ËL‹ŞLX3¥KŞLX[™™Y™\™[˜ÙH˜]\˜[Z[\[™İØLXˆ[š[X]HHY˜][XËZ[\ØÚ[X]XÈYØZ[œİÙ[XİYœŒX‚‚ŠŠ“YX[š[™ÎŠŠˆ›Ü˜Ú[™ÈXYÛš]YH[™›Ü›X[^™Y[\]™[ÜY[\™H™[]Y]Y™™\™[™\ÙX\˜Ú^\Ë‚‚ŠŠ“[Z]][ÛŠŠˆH[\Y]™[ÜY[[™İÈ\™H™\ÙX\˜Ú™Y™\™[˜ÙHØØ[[™ÜË›İš[˜[TÈNMÎŒŒˆİ[[™ËX˜\Ú[ˆ[Y[œÚ[ÛœË‚‚ŠŠ‘Y]ÜšX[œšYÙNŠŠˆ]™[ˆÚ[ˆHY˜][XÈ™\ÜÛœÙH\È[™\œİÛÙH›İ[™][Ûˆ]Y\İ[Ûˆ™[XZ[œËˆ[ˆ[]šX[ÛÛ™][ÛœËH]˜Z[X›HØÛİ\ˆ[Ù[ÈÈ›İ[^XİHHØ[YHİÜK‚‚ˆÈÈÈLH8 %ØÛİ\ˆ\ÈÚ\™HH[Ù[È™YÚ[ˆÈ\ØYÜ™YB‚ÛÛ\\™H›Ü›X[›¸ $Ò[Y[ˆ
’ŠH[™8 &PYÛÜİ[›ø $Ñ™\œ›È
QŠHÛ›H[ˆZ\ˆÛÛ[[Ûˆ˜[YŞ[]XÈÛÛ\\š\ÛÛˆÜXÙK‚‚ÛÜ™H]šY[˜ÙN‚‚‹HMÍHÛÛ[[Ûˆİ™\›\İ]\ÎÂ‹HYYX[ˆQ‹Ğ’ˆ8¢bKŒLØÂ‹HX›İ]LŒÉXÚ][ˆH˜XİÜˆÙˆÛÎÂ‹HÜX\›X[ˆšÈ8¢bŒ˜Â‹HL8 $ÜL8¢bŒÍLx $ÍK˜‚‚‘È›İ]™\˜YÙHHÛÈ[Ù[ËˆÚİÈHNŒX™Y™\™[˜ÙK˜XİÜˆ˜[™Ë˜[Z[HÛÛ™][Ûš[™È[™HØ[Xœ˜]Y\ØYÜ™Y[Y[[™[ÜH›ÙÜ™\ÜÚ]™[K‚‚ŠŠ“YX[š[™ÎŠŠˆH\ØYÜ™Y[Y[\ÈİXİ\™Y›İ˜[™ÛKˆ[Ù[Y›Ü›H[˜Ù\Z[H\È\ÙˆH™\ÙX\˜Ú™\İ[‚‚ŠŠ“[Z]][ÛŠŠˆH\ØYÜ™Y[Y[Y]K[[Ù[\È›İH™]È\ÚXØ[ØÛİ\ˆ\]X][Û‹[™™Z]\ˆ[™]šYX[\]X][Ûˆ\È™X]Y\ÈÚ]H]‚‚ŠŠ‘Y]ÜšX[œšYÙNŠŠˆYˆHÛİ™\›š[™È˜\šXX›\ÈY™™\ˆH™\ÜÛœÙKH™^]Y\İ[Ûˆ\ÈÚ]\[œÈÚ[ˆ[˜\šXX›\È\™H[İÙYÈ˜\HÙÙ]\‹‚‚ˆÈÈÈLˆ8 %Ú[ˆ]™\][™È˜\šY\ÈÙÙ]\‹Ú]X]\œÈ[ÜİÂ‚•\ÙHHYXØ]YØÜ˜[X›YÛØ›ÛÒ˜[œÙ[ˆ[˜[\Ú\ÈÈÙ\\˜]Hš\œİ[Ü™\ˆ[™›Y[˜ÙHœ›ÛHİ[[™›Y[˜ÙH[˜ÛY[™È[\˜Xİ[ÛœË‚‚”™XY\‹Y˜XÚ[™È^[\\Î‚‚‹HXYˆXİ[[Ü™\ˆÕ8¢bŒŒXÂ‹H›Ü˜Ú[™ÎˆœŒXÕ8¢bLL˜Â‹H[\ÜÜÎˆœŒXÕ8¢bXÂ‹H›ÙH\™XNˆZYÚÕ8¢bXÂ‹H›ØÚÈ™\ÚÛˆÙÈ]˜Õ8¢bÍX‚‚ŠŠ“YX[š[™ÎŠŠˆH˜\šXX›H]ÛÚÜÈ[ÜİÛÜœ™[]YÚ]H™\ÜÛœÙH\È›İ]]ÛX]XØ[HH˜\šXX›HÚ]H\™Ù\İÛØ˜[[™›Y[˜ÙK‚‚ŠŠ“[Z]][ÛŠŠˆÛØ›Û[™XÙ\È\™HÜXÚYšXÈÈHœ›Ş™[ˆŞ[]XÈ˜\šXX›H˜[™Ù\ËˆİXš[]H\È[[[Û˜[H^ÛYYœ›ÛH[˜ÛÛ™][Û˜[ÛØ›Û˜[šÚ[™Ë‚‚ŠŠ‘Y]ÜšX[œšYÙNŠŠˆH™\ÜÛœÙ\ÈÈ›İ™YXÙHÈÛ™H[š]™\œØ[ÛÛ›Û[™È˜\šXX›Kˆ^H™YYÈ™H]˜XÚÈÙÙ]\‹‚‚ˆÈÈÈLÈ8 %][™ÈHÚÛHŞ\İ[H˜XÚÈÙÙ]\‚‚\ÜÙ[X›HHš]™H™]Z[™Y™\ÙX\˜Ú[Y[œÚ[ÛœÎ‚‚‹H›Ü›X[^™Y™YÚ[YNÂ‹H™\ÜÛœÙHXYÛš]YNÂ‹H\ÜÚ\][Û‹Y]™[ÜY[[X[™Â‹HX]\šX[ÜİXš[]H˜YK[Ù™Â‹H›İ[™][Û‹ÜØÛİ\ˆ[˜Ù\Z[K‚‚•\ÙHØÜ›Û][[™ÈÈ™XXİ]˜]HZ[šK]šY]ÜÈœ›ÛHX\›Y\ˆÚ\\œËˆHš[˜[İ]HÚİÜÈ[š]™HÛÛ›™XİY‚‚ŠŠ“YX[š[™ÎŠŠˆ›ÈÚ[™ÛH˜[Z[K[™^Üˆ[\\šXØ[\]X][ÛˆØ\\™\ÈHÚÛH›Ø›[K‚‚ŠŠ“[Z]][ÛŠŠˆHš]™KY[Y[œÚ[Û˜[œ˜[Y]ÛÜšÈ\ÈHŞ[\Ú\ÈÙˆHœ›Ş™[ˆ™\ÙX\˜Ú›İH\ÚYÛˆÛÙK‚‚ŠŠ‘Y]ÜšX[œšYÙNŠŠˆH™XY\ˆ\È›İÈ›ÛİÙYHš[™[™ÜËˆH™^İ\\ÈÈ[İÈ[HÈ^Ü™H]Ø[YHœ›Ş™[ˆ]šY[˜ÙHÚ]İ]\›š[™ÈHÚ]H[ÈH\ÚYÛˆÛÛ‚‚ˆÈÈÈM8 %^Ü™HH]šY[˜ÙH[İ\œÙ[‚‚”›İšYHH™\ÙX\˜Ú^Ü™\ˆ]]È™XY\œÈ™]š\Ú]\›İ™Y™\ÜÛœÙ\Ë˜\šXX›\Ë˜[Z[Y\È[™[™[Ü\È\Ú[™ÈÛ›H™[X\ÙYšYİ\™K[]™[]šY[˜ÙK‚‚•H^Ü™\ˆ]\İ›İ[ˆ™]È™\ÙX\˜Ú[˜[\Ú\ÈÜˆİ]]™XÛÛ[Y[™YÛÛœİXİ[Ûˆ[Y[œÚ[ÛœË‚‚‘]™\HšY]ÈÚİ[İ]N‚‚‹HÚ]H]šY[˜ÙHYX[œÎÂ‹HÚ]]Ù\È›İYX[Â‹HH\XØX›HÛXZ[Â‹HHÛÜœ™Xİİ]\İXØ[İ[[X\H›Üˆ][˜[]XØ[\K‚‚ˆÈÈÈMH8 %Ú]\È™\ÙX\˜ÚØ[ˆ8 %[™Ø[››İ8 %Ø^B‚”İ]HH›İ[™\šY\È[ˆZ[ˆ[™İXYÙK‚‚•H™\ÙX\˜ÚØ[ˆ\İX›\Ú]\›œË™[][ÛœÚ\Ë˜YK[Ù™œË˜[Z[HØØİ\[˜ŞH[™[Ù[\ØYÜ™Y[Y[Ú][ˆHœ›Ş™[ˆŞ[]XÈİYHÜXÙK‚‚’]Ù\È›İH]Ù[ˆ\İX›\Ú‚‚‹HÚ]H˜[Y][ÛÂ‹HHÛÛœİXİ[Ûˆ™XÛÛ[Y[™][ÛÂ‹Hš[˜[TÈNMÎŒŒˆ˜\Ú[ˆ[Y\šXØ[›İš\Ú[ÛœÎÂ‹HH[š]™\œØ[›İ[™][Û‹ÜØÛİ\ˆ\ÚYÛˆY]ÙÂ‹H]\™H\™›Ü›X[˜ÙHÙˆH™X[Ú]K‚‚‘È›İYH\È[ˆš[™Hš[‚‚ˆÈÈÈMˆ8 %Y]ÙË]K™Y™\™[˜Ù\È[™]]Ü‚‚’ÙY\H™\›ÙXÚXš[]H]Z[]˜Z[X›HÚ]İ]›Ü˜Ú[™È][ÈHXZ[ˆ˜\œ˜]]™K‚‚”›İšYN‚‚‹HY]ÙÈ[™\Üİ[\[ÛœÎÂ‹HšYİ\™H›İ™[˜[˜ÙNÂ‹H[[YHY]Y]H[™Ûİ\˜ÙKZY[]H™Y™\™[˜Ù\ÎÂ‹H™Y™\™[˜Ù\ÎÂ‹H›Ú™Xİ™\ÜÚ]ÜHÈ™\›ÙXÚXš[]H[™›Ü›X][ÛÂ‹H]]ÜˆY[]H[™ÛÛXİÚ[Ë‚‚•H]]Üš]]]™H[˜[]XØ[ÔÕœÈ™[XZ[ˆ™\ÙX\˜ÚØZ[[œ]ËˆHX›XÈ\XÛH\Ù\ÈÛÛ\Xİ[[YH”ÓÓˆ›Üˆ]™HšYİ\™\È[™Ù\È›İ]]ÛX]XØ[HX›\ÚH[Ûİ\˜ÙHX›\È\ÈH™XY\‹Y˜XÚ[™È]HİÛ›ØY›ÙXİ‚‚]]ÜˆY[]N‚‚‹HØ]\Ú[ØY\š^XNÂ‹HÛÚ[[™Ø]\ˆÛÛœÙ\˜][Ûˆ[™Ú[™Y\Â‹H[šÙY[Â‹HÜ›Û[ÎÂ‹HÚÜ˜Xİ][Û™\ˆš[Ë‚‚ˆÈÈˆÜšYÚ[˜[]šY[˜ÙH[™[ÜH8¡¤ˆÙXˆšYİ\™H\˜Ú]Xİ\™B‚•H™\ÙX\˜ÚÛÛZ[œÈ
ŠŒŒHÜšYÚ[˜[[˜[]XØ[šYİ\™\ÊŠ‹ˆ[ŒH™[XZ[ˆ\ÙˆHØÚY[YšXÈ]šY[˜ÙH[™[ÜH[™\™H™]Z[™Y\Èš\İX[ØØ\[Ûˆ™Y™\™[˜Ù\Ë‚‚•HÙXˆ\XÛHÙ\È
Š››İ
Šˆ™\›ÙXÙH[H\ÈŒHİ]XÈÚ\Ëˆ™[]YšYİ\™\È\™HÛÛœÛÛY]Y[È
ŠŒMÈš[˜Ú\[]™HÙXˆ^\šY[˜Ù\ÊŠˆÛÈH™XY\ˆØ[ˆ^Ü™H™[][ÛœÚ\È˜]\ˆ[ˆØÜ›Û›İYÚHØ[\HÙˆ^ÜË‚‚•Hš[˜Ú\[ÙXˆšYİ\™HÙ]\Î‚‚ŒKˆ’QËLH8 %[š]X][™ÈÙZ\ˆXYÛ›ÜİXÂŒ‹ˆ’QËLˆ8 %\[™[˜ŞH™]ÛÜšÂŒËˆ’QËLÈ8 %^\š[Y[ØØ[H	ˆš[\š[™Âˆ’QËL8 %H0åÈ8¡¤ˆXYİ\™˜XÙBKˆ’QËLH8 %H0åÈœŒH8¡¤ˆ›Ü˜Ú[™Â‹ˆ’QËLˆ8 %ZYÚ0åÈİÛœİ™X[HÛÜH8¡¤ˆ›ÙH\™XBËˆ’QËLÈ8 %İXš[]HÛÛ™][Û˜[š]™\œÂˆ’QËL8 %\™]È˜YHÜXÙBKˆ’QËLH8 %›Ü›X[^™Y˜[Z[HX\ŒLˆ’QËLL8 %˜[Z[H˜YK[Ù™ˆ\Ú›Ø\™ŒLKˆ’QËLLH8 %˜[Z[HÚ\™H™\XØ][Û‚ŒL‹ˆ’QËLLˆ8 %Y˜][XÈ[\È˜\Ú[ˆ]™[ÜY[ØØ[[™ÂŒLËˆ’QËLLÈ8 %’ˆœÈQˆ[]šX[ØÛİ\ˆÛÛ\\š\ÛÛ‚ŒMˆ’QËLM8 %ÛÛ\Xİ\ØYÜ™Y[Y[[™[ÜBŒMKˆ’QËLMH8 %ÛØ˜[ÛØ›ÛÙ[œÚ]]š]BŒM‹ˆ’QËLMˆ8 %š]™KQ[Y[œÚ[Ûˆ™\ÙX\˜Úœ˜[Y]ÛÜšÂŒMËˆ’QËLMÈ8 %™\ÙX\˜Ú^Ü™\‚‚HXÛÜ˜]]™KÚ[\İ˜]]™H\›ÈØÚ[X]XÈX^H^\İİ]ÚYH\È[X™\š[™Ëˆ]\È›İ[ˆ[˜[]XØ[šYİ\™K‚‚ˆÈÈÈŒHÜšYÚ[˜[]Ë]ÙXˆÛÛœÛÛY][Û‚‚‹HÜšYÚ[˜[šYİ\™HH8¡¤ˆ’QËLB‹HÜšYÚ[˜[šYİ\™Hˆ8¡¤ˆ’QËLB‹HÜšYÚ[˜[šYİ\™HÈ8¡¤ˆ’QËLLB‹HÜšYÚ[˜[šYİ\™\È8 $ÌH8¡¤ˆ’QËLL‹HÜšYÚ[˜[šYİ\™Hˆ8¡¤ˆ’QËLÂ‹HÜšYÚ[˜[šYİ\™\Èø $Ì8¡¤ˆ’QËLB‹HÜšYÚ[˜[šYİ\™\Èx $ÌL8¡¤ˆ’QËLLÂ‹HÜšYÚ[˜[šYİ\™\ÈLx $ÌLˆ8¡¤ˆ’QËLL‚‹HÜšYÚ[˜[šYİ\™\ÈLø $ÌŒ8¡¤ˆ’QËLM‹HÜšYÚ[˜[šYİ\™HŒH8¡¤ˆ’QËLMB‚‘’QËLK’QËL‹’QËLË’QËL’QËL‹’QËL’QËLMˆ[™’QËLMÈ\™HÙX‹[˜]]™H^[˜]ÜHÜˆ[\˜Xİ]™HšY]ÜÈÜ™X]Yœ›ÛHHœ›Ş™[ˆ™\ÙX\˜ÚÙÚXËÙ]H˜]\ˆ[ˆ\™Xİ™\XÙ[Y[È›ÜˆÛ™Hİ]XÈÜšYÚ[˜[šYİ\™K‚‚ˆÈÈKˆ]™KYšYİ\™H[\Â‚‘›Üˆ[˜[]XØ[šYİ\™\Î‚‚‹H]]Üš]]]™HÛİ\˜ÙH]H
ÈY]Ù\™HHØÚY[YšXÈÛİ\˜ÙHÙˆ]Â‹HÛÛ\Xİ\ÙHˆ[[YH”ÓÓˆ\ÈHœ›İÜÙ\ˆX›XØ][Ûˆ^Y\Â‹HšYİ\™\È™[™\ˆ]™H[ˆHœ›İÜÙ\ˆ\Ú[™ÈÕ‘ÈHY˜][[™Ø[˜\ÈÛ›HÚ[ˆÚ[[œÚ]H™\]Z\™\È]Â‹H]™\Hš[˜Ú\[šYİ\™H\ÈYX[š[™Ù[[İ[ÛˆÜˆİ]H˜[œÚ][ÛÂ‹HÜšYÚ[˜[‘ËÒ”Èš[\È\™Hš\İX[ØØ\[Ûˆ™Y™\™[˜Ù\ÈÛ›H[™]\İ™]™\ˆ™HYÚ]^™YÈ™XÛİ™\ˆ]NÂ‹H[š[X][ÛˆX^H™]™X[š[\‹˜XÙHÜˆ[Üœ]H]]\İ™]™\ˆ[\ˆ[Y\šXÈ˜[Y\ÎÂ‹H™YXÙY[[İ[Ûˆ[ÙH]\İ™\Ù\™HHÛÛ\]H[˜[]XØ[İ]NÂ‹HXXÚšYİ\™HØ\œšY\ÈHÛX\ˆ™XY\ˆY\ÜØYÙH[™š\ÚX›HØ]™X]Â‹H[™H\\È]\İ™HY[YšYY\È^Xİš]Y™Y™\™[˜ÙK\˜Ù[[Kİ[˜Ù\Z[HÜˆÛÛ›™Xİ[Û‹[Û›NÂ‹H›Èİ]\İXÈX^H™H\Ü^YYY\™[H™XØ]\ÙH]ÛÚÜÈ˜[Z[X\‹‚‚”İ]\İXØ[ÛXŞN‚‚‹H^Xİ]È8¡¤ˆ\]X][Ûˆ
È[\İXÚ]NÂ‹Hš]Y]È8¡¤ˆ\]X][Ûˆ
È°¬˜Â‹H[Û›İÛšXÈ™[][Ûˆ8¡¤ˆÜX\›X[ˆóàXÂ‹HÛØ˜[Ù[œÚ]]š]H8¡¤ˆÌHÈÕÂ‹H˜[Z[H[™[ÜH8¡¤ˆLÈLÈLÂ‹H[Ù[\ØYÜ™Y[Y[8¡¤ˆ˜][È
ÈNŒX
È˜XİÜˆ˜[™È
ÈLL8 $ÜNL[˜Ù\Z[K‚‚ˆÈÈ‹ˆ˜\™ÛÛ‹XÛÛ›ÛÛXŞB‚•XÚšXØ[\›\ÈÚİ[™H™]Z[™YÚ[ˆ^HØ\œH[™Ú[™Y\š[™ÈYX[š[™Ë]^HÚİ[›İ™HY[™^Z[™Y›ÜˆHœ›ØY\ˆ™XY\‹‚‚ˆÈÈÈ^Z[ˆÛˆš\œİ\ÙB‚‹H
Š[š]\ØÚ\™ÙH
X
JŠˆ8 %\ØÚ\™ÙH\ˆ[š]İ™\™›İÈÚYÂ‹H
Š‘œ›İYH[X™\ˆ
œŒX
JŠˆ8 %H[Y[œÚ[Û›\ÜÈYX\İ\™HÙˆ›İÈ[[œÚ]H™[]]™HÈÜ˜]š]K]Ø]™HY™™XİÎÂ‹H
Š˜ÛÛšYØ]H\
L˜
JŠˆ8 %İÛœİ™X[H\\ÜÛØÚX]YÚ]HY˜][XÈ[\›ÜˆHÚ]™[ˆ\İ™X[Hİ]NÂ‹H
ŠZ[Ø]\ˆÛÛ\]Xš[]JŠˆ8 %İÈÛÜÙ[HİÛœİ™X[HØ]\ˆ\X]Ú\ÈH\™\]Z\™YHH[\Ü™Y™\™[˜ÙHİ]NÂ‹H
Š”\™]ÈÈ›Û™ÛZ[˜]Y
Šˆ8 %HØ\ÙH]Ø[››İ[\›İ™HÛ™HØš™Xİ]™HÚ]İ]ÛÜœÙ[š[™È]X\İÛ™Hİ\ˆØš™Xİ]™NÂ‹H
Š››Ü›X[^™Y˜[Z[JŠˆ8 %H™Xİ\œš[™È™\ÜÛœÙKÙÙ[ÛY]H]\›ˆ^™\ÜÙYÚ][Y[œÚ[Û›\ÜÈ˜][ÜÈ˜]\ˆ[ˆXœÛÛ]H[Y[œÚ[ÛœÎÂ‹H
Š”ÜX\›X[ˆóàX
Šˆ8 %˜[šÈÛÜœ™[][Ûˆ\ÙYÈ\ØÜšX™H[Û›İÛšXÈ\ÜÛØÚX][ÛÂ‹H
Š”ÛØ›ÛÌXÈÕ
Šˆ8 %š\œİ[Ü™\ˆ[™İ[[Ü™\ˆÛØ˜[Ù[œÚ]]š]H[™XÙ\ÎÂ‹H
Š›[Ù[Y›Ü›H[˜Ù\Z[JŠˆ8 %[˜Ù\Z[H\š\Ú[™È™XØ]\ÙHY™™\™[XØÙ\Y\]X][ÛœÈ™\™\Ù[HØ[YH›ØÙ\ÜÈY™™\™[NÂ‹H
Š“ÊŠˆ8 %][ˆ\\˜İX™HØ[\[™ËHİXİ\™YY]Ù›ÜˆÜ™XY[™ÈŞ[]XÈØ\Ù\ÈXÜ›ÜÜÈH][Y[Y[œÚ[Û˜[\˜[Y]\ˆÜXÙK‚‚ˆÈÈÈÙY\XÚšXØ[˜[Y\È]]›ÚY[™^Z[™YÚÜ[™‚‹HÜš]H
Š›Ü›X[›¸ $Ò[Y[ˆ
’ŠJŠˆ[™
Š‘8 &PYÛÜİ[›ø $Ñ™\œ›È
QŠJŠˆ]š\œİ\ÙNÂ‹H^Z[ˆ
Š’“
Šˆ]š\œİš\ÚX›H\ÙHYˆ™]Z[™Y[ˆ™XY\‹Y˜XÚ[™È^Â‹H]›ÚYÚİÚ[™È]‹ÔØ]ÒLÙL‹Ğ˜ÜˆÚ[Z[\ˆ˜][ÜÈÚ]İ]H™X\˜HYš[š][ÛˆÜˆÛÛ\Â‹H\ÙH8 'ÛØ˜[Ù[œÚ]]š]x 'H™Y›Ü™H™[Z[™ÈÛˆHÛÜ™8 'ÛØ›Û8 'H\ÈÚÜ[™Â‹H\ÙH8 '›Û™ÛZ[˜]Yœ›ÛY\¸ 'HÛ›HY\ˆH™XY\ˆ\ÈÙY[ˆÜˆ™XÙZ]™YHZ[‹[[™İXYÙH^[˜][ÛˆÙˆH˜YK[Ù™ˆÙÚXË‚‚ˆÈÈÈÈ›İÚ[\YH]Ø^H[\Ü[\İ[˜İ[ÛœÂ‚‘È›İ™\XÙN‚‚‹H8 '^Xİ[˜[]XØ[™[][ÛœÚ\8 'HÚ]8 '™[™8 'NÂ‹H8 'Ş[]XÈš]Y™[][ÛœÚ\8 'HÚ]8 ']ø 'NÂ‹H8 'XYÛ›ÜİXÈİXš[]H™\ÜÛœÙx 'HÚ]8 '˜XİÜˆÙˆØY™]x 'NÂ‹H8 '™Y™\™[˜ÙH[\Y]™[ÜY[[™İ8 'HÚ]8 '˜\Ú[ˆ[™İ8 'HÚ[ˆH]\ˆÛİ[[\Hš[˜[\ÚYÛÂ‹H8 '[Ù[Y\ØYÜ™Y[Y[Y]K[[Ù[8 'HÚ]8 'ØÛİ\ˆ\]X][Û¸ 'NÂ‹H8 '™\ÙX\˜Ú˜[Z[x 'HÚ]8 '\ÚYÛˆ\x 'K‚‚ˆÈÈËˆ™\]][Û‹XÛÛ›ÛÛXŞB‚•H\XÛHÚİ[›İÛİ[™ZÙHHÙ\]Y[˜ÙHÙˆ[\]Y™\ÙX\˜Úİ[[X\šY\Ë‚‚]›ÚY™\X][™Èš\ÚX›HX™[ÈİXÚ\Î‚‚‹H8 'ÛÜ™Hš[™[™ø 'NÂ‹H8 '[\˜Xİ]™H™X]Y[8 'NÂ‹H8 'ZÙX]Ø^x 'NÂ‹H8 'Ù^HY\ÜØYÙx 'NÂ‹H8 ']\È[\Ü[È›İx 'NÂ‹H8 '\ÈYÚYÚËİ[™\œØÛÜ™\ø )¸ 'NÂ‹H8 '\\›[Ü™KÓ[Ü™[İ™\‹ĞY][Û˜[x )¸ 'NÂ‹H8 'H™\İ[ÈÚİø )¸ 'HÚ[ˆHš\İX[]Ù[ˆ[™XYHÚİÜÈH™\İ[‚‚’[œİXY‚‚‹H]HšYİ\™H™]™X[H]šY[˜ÙHš\œİÚ\™HÜÜÚX›NÂ‹H˜\H\˜YÜ˜\Ü[š[™ÜÈ[™Ù[[˜ÙH[™İ˜]\˜[NÂ‹H\ÙHHÛÜÚ[™ÈÙ[[˜ÙHÙˆÛ™HÚ\\ˆÈÜ[ˆH]Y\İ[Ûˆ›ÜˆH™^Â‹HÈ›İ™\İ]HHØ[YH[X™\ˆ[ˆHXY[™ËÚ\[››İ][Û‹›ÙH\˜YÜ˜\[™Ø\[Ûˆ[›\ÜÈ™\]][Ûˆ\È™XÙ\ÜØ\H›ÜˆXØÙ\ÜÚXš[]NÂ‹HÈ›İ^Z[ˆHØ[YHØ]™X][ˆ][\H™X\˜HÙ[[˜Ù\ÎÂ‹H™Y™\ˆÛ™HY™[œÚX›H[\œ™]]™HÙ[[˜ÙHİ™\ˆÙ]™\˜[Ş[›Û[\È›ÜˆHØ[YHÚ[Â‹H]›ÚYXÛÜ˜]]™HšXYË[™›]YÚYÛšYšXØ[˜ÙH[™İXYÙH[™Ù[™\šXÈ]™[ÜY[\ÙXİÜˆ˜\Ú[™Ë‚‚’[\›˜[[›š[™ÈØİ[Y[ÈX^Hİ[\ÙHİXİ\™YX™[È›Üˆ]Y]Xš[]K]HX›XÈ\XÛHÚİ[›İ^ÜÙHÜÙHX™[ÈYXÚ[šXØ[K‚‚ˆÈÈˆš\İX[Y[]B‚‘\ÚYÛˆH™[XZ[œÈÛÛœÚ\İ[Ú]ÒTËT™XÚ\™ÙKUÙX‹P\XÛKUŒ˜‚‚‹H\\ˆÑÑ‘ŒX‹H˜]HÌŒQŒÌØ‹H[šÈÌLNŒ‹HX[ÌLMĞĞ˜‹H\]XHÍLÍÑX‹HÛÜ˜[ÑLÍØ‹HØ[™ÑQQMÑØ‹H]]YÍÍN‚”Ù[X[XÈ\ÙH™[XZ[œÈİX›N‚‚‹HX[Ø\]XHHY˜][XÜÎÂ‹H˜]HHÙ[ÛY]KÜİXİ\™NÂ‹HÛÜ˜[HYÚ™\ÜÛœÙK[œÚ[Ûˆ[™˜YK[Ù™Â‹HØ[™ÙX\H›İ[™][Û‹ÜØÛİ\Â‹HÜ™^HH[˜Ù\Z[Kİ][Ù‹YÛXZ[ˆÜˆ[˜Xİ]™H[™›Ü›X][Û‹‚‚“›È˜Z[˜›İÈ[˜[]XØ[[]\Ë‚‚ˆÈÈKˆ[İ[Ûˆ[™İXYÙB‚“[İ[Ûˆ]\İ^Z[ˆ[˜[\Ú\È˜]\ˆ[ˆXÛÜ˜]HHYÙK‚‚•\ÙHÚ^š[˜Ú\[]\›œÎ‚‚‹H
Š”™]™X[
Šˆ8 %[›ÙXÙHH™[][ÛœÚ\›ÙÜ™\ÜÚ]™[NÂ‹H
ŠZ[
Šˆ8 %XØİ[][]HØ[\\ÈÜˆš[\š[™Èİ]\ÎÂ‹H
Š“[Üœ
Šˆ8 %Ú[™ÙHÙ[ÛY]KÙ˜[Z[Hİ]\ÈÚ[H™\Ù\š[™ÈY[]NÂ‹H
Š•˜XÙJŠˆ8 %˜]È[˜[]XØ[Ùš]YÜ™Y™\™[˜ÙH™[][ÛœÚ\ÈY\ˆ^\È\™H\İX›\ÚYÂ‹H
Š‘^[™[˜Ù\Z[JŠˆ8 %™]™X[[˜Ù\Z[H˜[™ÈY\ˆHÙ[˜[\İ[X]NÂ‹H
Š“[šÙYYÚYÚ
Šˆ8 %ÛÛÜ™[˜]HHØ[YHİ]KÙ˜[Z[HXÜ›ÜÜÈšY]ÜË‚‚”[\Î‚‚‹H›È]]Ü^HÛÜ[™ÈÚ\[š[X][ÛÂ‹H˜[œÚ][ÛœÈÚİ[›Ü›X[H™\ÛÛ™H[ˆ›İYÚH8 $ÌKŒ\ØÂ‹Hİ\Ü™Y™\œË\™YXÙY[[İ[Û˜Â‹HØÜ›ÛYš]™[ˆİ]\È]\İ[ÛÈÛÜšÈÚ]Ù^X›Ø\™İ\ÛÛ›ÛÎÂ‹H[İ[Ûˆ]\İ™]™\ˆÚ[™ÙHH[™\›Z[™È[˜[]XØ[˜[YNÂ‹H[Øš[HX^HÚ[\YH[İ[ÛˆÛÛ\^]H]›İ[˜[]XØ[ÛÛ[‚‚ˆÈÈLˆ\˜Ú]Xİ\™H›İ[™\B‚”™Y™\œ™YİXÚÈ™[XZ[œÈ[[[Û˜[HÛX[‚‚‹Hİ]XÈÚ]XˆYÙ\ÎÂ‹HÙ[X[XÈSNÂ‹HÔÔÈİ\İÛH›Ü\Y\ÎÂ‹H˜[š[HTÈ[Ù[\ÎÂ‹HÈ›Üˆ›YÜÚ\[˜[]XØ[šYİ\™\ÎÂ‹H˜]]™H[\œÙXİ[Û“ØœÙ\™\˜ÜˆØÜ›Û[XHÛ›HÚ\™HØÜ›Û][[™ÈYÈ^[˜]ÜH˜[YNÂ‹HÕ‘ÈHY˜][Â‹HØ[˜\ÈÛ›H›Üˆ[[Ûœİ˜]YÚ[Y[œÚ]H\™›Ü›X[˜ÙH™YYË‚‚“›İ[İÙYÚ]İ][ˆ]Y]Y™\]Z\™[Y[‚‚‹H\XØ][Ûˆœ˜[Y]ÛÜšÜÎÂ‹H]X˜\ÙKØ˜XÚÙ[™ÜÙ\™\Â‹H]][XØ][ÛÂ‹HÓTÎÂ‹HÙ[™\šXÈ\Ú›Ø\™œ˜[Y]ÛÜšÎÂ‹H[ŒÈœ›İÜÙ\ˆØYÂ‹HÜXİ[]]™HXœİ˜Xİ[Ûˆ^Y\œË‚‚ˆÈÈLKˆX›XØ][Ûˆ]H›İ[™\B‚•HX›XÈ[[YH\˜Ú]Xİ\™H\Î‚‚˜]]Üš]]]™HÛİ\˜ÙH]H
Èœ›Ş™[ˆY]Ù8¡¤ˆ\ÙHˆZ[8¡¤ˆÛÛ\Xİ[[YH”ÓÓˆ8¡¤ˆ]™Hœ›İÜÙ\ˆš\İX[^˜][Û˜‚•H]]Üš]]]™HÔÕœÈ™[XZ[ˆ™\ÙX\˜ÚØZ[[œ]Ëˆ^H\™H›İ]]ÛX]XØ[H^ÜÙY\ÈHX›XÈœ›İÜÙ\ˆ]H^Y\‹‚‚[H]\ˆ8 'İÛ›ØYÚ\]x 'H™X]\™H]\İ\ÙHH[X™\˜][Hİ\˜]YX›XØ][Ûˆ^˜Xİ[™]\İ›İÚ[[H^ÜÙH\™ÙH]]Üš]]]™HÛİ\˜ÙHX›\ÈÚ[\H™XØ]\ÙH^H^\İ‚‚ˆÈÈL‹ˆÚ[™ÙKXÛÛ›Û™\ÚÛ‚•Hœ›Ş™[ˆİÜ[[™HÜˆšYİ\™HÙ]X^HÚ[™ÙHÛ›HÚ[‚‚‹Hœ›Ş™[ˆ™\ÙX\˜Ú]šY[˜ÙH™\]Z\™\ÈÛÜœ™Xİ[ÛÂ‹HHšYİ\™H\XØ]\È[›İ\ˆÚ]İ]Y[™È™XY\ˆ˜[YNÂ‹HHœ›İÜÙ\‹ØXØÙ\ÜÚXš[]HÛÛœİ˜Z[XZÙ\ÈH[[™Y[\˜Xİ[Ûˆ[™™X\ÚX›NÂ‹HHİ›Û™Ù\ˆš\İX[›Ü›HÛÛ[][šXØ]\ÈHØ[YH\›İ™Y™\ÙX\˜ÚY\ÜØYÙH[Ü™HÛX\›NÂ‹HH\Ù\ˆ^XÚ]HÚ[™Ù\ÈX›XØ][ÛˆØÛÜK‚‚[HİXÚÚ[™ÙH]\İ\X\ˆ[ˆH\ÙH]Y]ØÚ[™ÙH›İH™Y›Ü™H[\[Y[][Û‹‚‚ˆÈÈLËˆ\ÙHHİ]ÛÛYB‚”\ÙHH›ÙXÙ\È›ÈÙXœYÙH[\[Y[][Ûˆ[™›È™]È™\ÙX\˜Ú[˜[\Ú\Ë‚‚’]È\œÜÙH\ÈÈ™]™[]\ˆ\ÚYÛˆÜˆÛÙ[™ÈÚÚXÙ\Èœ›ÛHÚ[™Ú[™ÈHØÚY[YšXÈ\™Xİ[ÛˆÚ[H[œİ\š[™ÈH]™[X[\XÛH™XYÈZÙHHÛÚ\™[[™\İYØ][Ûˆ˜]\ˆ[ˆHÛÛ™\YX[\ØÜš\ÜˆHÙ\]Y[˜ÙHÙˆ\ØÛÛ›™XİYÚ\Ë‚‚ŠŠ”\ÙHHY]ÜšX[œ™Y^™NŠŠˆTÔËİXš™XİÈ[\[Y[][Ûˆ™\Ù\š[™ÈHŒK[ÜšYÚ[˜[YšYİ\™H]šY[˜ÙH[™[ÜKMË[]™K]ÙX‹Y^\šY[˜ÙH\˜Ú]Xİ\™K˜\™ÛÛˆÛXŞK™\]][ÛˆÛÛ›ÛÈ[™ØÚY[YšXÈØ]™X]ÈYš[™YX›İ™K‚