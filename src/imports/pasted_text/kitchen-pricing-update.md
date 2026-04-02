Replace Tier Pricing with Unit-Based Pricing (Wren-style)

Prompt:

Update the existing Aura Spaces Kitchen Price Estimator design and prototype logic.

Do NOT change the overall layout, step flow, or branding.

❌ REMOVE EXISTING LOGIC

Remove all pricing logic based on:

Essential → 1100–1500 per metre
Signature → 1600–2200 per metre
Luxe → 2300–3200 per metre

Remove:

runMetres-based cabinet calculation
tier-based pricing multipliers
any “per metre” calculations
✅ ADD NEW PRICING MODEL (UNIT-BASED)

Introduce a fixed pricing model based on kitchen size selection.

🧱 STEP UPDATE – SIZE (CORE CHANGE)

Replace the slider-based “run metres” input with selectable size cards.

Create 4 selectable cards:

SMALL

8 Units | 10 m²
1 Wall
£959

MEDIUM

12 Units | 15 m²
2 Walls
£1,903

LARGE

16 Units | 20 m²
3 Walls
£2,916

EXTRA LARGE

20 Units | 30 m²
3 Walls + Island
£3,352

🎨 DESIGN REQUIREMENTS FOR CARDS
Background: White
Rounded corners: 24px
Selected state:
Border: #D97A43
Soft background tint
Add top-right selection indicator (circle check)

Typography:

Title (Parkinsans): SMALL / MEDIUM / LARGE / EXTRA LARGE
Subtext (Figtree): units + m²
Price: bold, prominent
⚙️ VARIABLES (UPDATE)

Remove:
runMetres variable

Add:
kitchenSize → (small / medium / large / extraLarge)

Add price variables:

smallPrice = 959
mediumPrice = 1903
largePrice = 2916
extraLargePrice = 3352

🧮 UPDATED CALCULATION LOGIC

Replace cabinet cost logic:

cabinetCost = selected kitchenSize price

Then continue existing logic:

supplyCost = cabinetCost + worktopCost + appliances + sinkTap

installationCost =

0 if supply only
% of supplyCost if installation selected

vat = supplyCost × 0.20

total = supplyCost + installation + vat

Round to nearest £50 for display.

📊 UPDATE SUMMARY PANEL

Replace:
“Run metres” display

With:
Kitchen Size:

Small / Medium / Large / Extra Large

Show:
Base Cabinet Cost = selected size price

🧠 UX IMPROVEMENTS

Add helper text under size section:

“Select a typical kitchen size. Final pricing will be refined after design consultation.”

⚠️ IMPORTANT
Keep all other steps unchanged (Worktops, Appliances, Installation)
Keep brand colours and typography
Keep sticky summary behaviour