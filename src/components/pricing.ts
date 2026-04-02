// ==========================================
// AURA SPACES – PRICING MODEL (CONFIGURABLE)
// ==========================================

export type CollectionTier = "essential" | "signature" | "luxe";
export type KitchenSize = "small" | "medium" | "large" | "extraLarge";
export type WorktopType = "laminate" | "compact" | "solid-timber" | "quartz" | "premium-stone";
export type SinkTapOption = "none" | "standard" | "premium" | "boiling-tap";
export type AppliancePack = "essentials" | "plus" | "family" | "premium-smart";
export type InstallationType = "supply-only" | "professional" | "full-project";
export type BrandOption = "any" | "bosch" | "siemens" | "miele" | "neff" | "smeg";

// ---------- PRICING CONSTANTS ----------

// Unit-based kitchen size pricing
export const KITCHEN_SIZE_PRICES: Record<KitchenSize, number> = {
  small: 959,
  medium: 1903,
  large: 2916,
  extraLarge: 3352,
};

export const KITCHEN_SIZE_DETAILS: Record<KitchenSize, { units: number; area: number; walls: string }> = {
  small: { units: 8, area: 10, walls: "1 Wall" },
  medium: { units: 12, area: 15, walls: "2 Walls" },
  large: { units: 16, area: 20, walls: "3 Walls" },
  extraLarge: { units: 20, area: 30, walls: "3 Walls + Island" },
};

export const WORKTOP_RATES: Record<WorktopType, [number, number]> = {
  laminate: [120, 220],
  compact: [260, 420],
  "solid-timber": [350, 550],
  quartz: [450, 750],
  "premium-stone": [800, 1200],
};

export const APPLIANCE_COSTS: Record<AppliancePack, [number, number]> = {
  essentials: [900, 1600],
  plus: [1800, 3200],
  family: [2500, 4500],
  "premium-smart": [4000, 7000],
};

export const SINK_TAP_COSTS: Record<SinkTapOption, [number, number]> = {
  none: [0, 0],
  standard: [200, 400],
  premium: [400, 900],
  "boiling-tap": [1200, 2000],
};

export const INSTALLATION_RATES: Record<InstallationType, number> = {
  "supply-only": 0,
  professional: 0.2,
  "full-project": 0.28,
};

export const VAT_RATE = 0.2;

// ---------- CALCULATION LOGIC ----------

export interface EstimatorState {
  collectionTier: CollectionTier;
  kitchenSize: KitchenSize;
  worktopType: WorktopType;
  sinkSelected: SinkTapOption;
  appliancesSelected: boolean;
  appliancePack: AppliancePack;
  brand: BrandOption;
  installationType: InstallationType;
}

export interface PriceBreakdown {
  cabinets: [number, number];
  worktops: [number, number];
  appliances: [number, number];
  sinkTap: [number, number];
  supply: [number, number];
  installation: [number, number];
  subtotal: [number, number];
  vat: [number, number];
  total: [number, number];
}

function roundToNearest50(value: number): number {
  return Math.round(value / 50) * 50;
}

export function calculateEstimate(state: EstimatorState): PriceBreakdown {
  // Cabinet cost is now fixed based on kitchen size
  const cabinetCost = KITCHEN_SIZE_PRICES[state.kitchenSize];
  const cabinets: [number, number] = [cabinetCost, cabinetCost];

  // Worktops still use a range, but simplified (we'll use a base multiplier)
  const worktopRange = WORKTOP_RATES[state.worktopType];
  const sizeDetails = KITCHEN_SIZE_DETAILS[state.kitchenSize];
  const worktopMultiplier = sizeDetails.units / 8; // scale based on units
  const worktops: [number, number] = [
    worktopRange[0] * worktopMultiplier,
    worktopRange[1] * worktopMultiplier,
  ];

  const appliances: [number, number] = state.appliancesSelected
    ? [...APPLIANCE_COSTS[state.appliancePack]]
    : [0, 0];
  const sinkTap: [number, number] = [...SINK_TAP_COSTS[state.sinkSelected]];

  const supply: [number, number] = [
    cabinets[0] + worktops[0] + appliances[0] + sinkTap[0],
    cabinets[1] + worktops[1] + appliances[1] + sinkTap[1],
  ];

  const isInstallationSelected = state.installationType !== "supply-only";
  const instRate = INSTALLATION_RATES[state.installationType];
  const installation: [number, number] = isInstallationSelected
    ? [supply[0] * instRate, supply[1] * instRate]
    : [0, 0];

  const subtotal: [number, number] = [
    supply[0] + installation[0],
    supply[1] + installation[1],
  ];

  const vat: [number, number] = [
    subtotal[0] * VAT_RATE,
    subtotal[1] * VAT_RATE,
  ];

  const total: [number, number] = [
    roundToNearest50(subtotal[0] + vat[0]),
    roundToNearest50(subtotal[1] + vat[1]),
  ];

  return {
    cabinets: [roundToNearest50(cabinets[0]), roundToNearest50(cabinets[1])],
    worktops: [roundToNearest50(worktops[0]), roundToNearest50(worktops[1])],
    appliances: [roundToNearest50(appliances[0]), roundToNearest50(appliances[1])],
    sinkTap: [roundToNearest50(sinkTap[0]), roundToNearest50(sinkTap[1])],
    supply: [roundToNearest50(supply[0]), roundToNearest50(supply[1])],
    installation: [roundToNearest50(installation[0]), roundToNearest50(installation[1])],
    subtotal: [roundToNearest50(subtotal[0]), roundToNearest50(subtotal[1])],
    vat: [roundToNearest50(vat[0]), roundToNearest50(vat[1])],
    total,
  };
}

export function formatPrice(value: number): string {
  return `£${value.toLocaleString("en-GB")}`;
}

export function formatRange(range: [number, number]): string {
  if (range[0] === 0 && range[1] === 0) return "—";
  if (range[0] === range[1]) return formatPrice(range[0]);
  return `${formatPrice(range[0])}–${formatPrice(range[1])}`;
}

// ---------- DISPLAY LABELS ----------

export const COLLECTION_LABELS: Record<CollectionTier, string> = {
  essential: "Essential",
  signature: "Signature",
  luxe: "Luxe",
};

export const KITCHEN_SIZE_LABELS: Record<KitchenSize, string> = {
  small: "Small",
  medium: "Medium",
  large: "Large",
  extraLarge: "Extra Large",
};

export const WORKTOP_LABELS: Record<WorktopType, string> = {
  laminate: "Laminate",
  compact: "Compact",
  "solid-timber": "Solid Timber",
  quartz: "Quartz",
  "premium-stone": "Premium Stone",
};

export const SINK_TAP_LABELS: Record<SinkTapOption, string> = {
  none: "No Thanks",
  standard: "Standard",
  premium: "Premium",
  "boiling-tap": "Boiling Tap",
};

export const APPLIANCE_LABELS: Record<AppliancePack, string> = {
  essentials: "Essentials",
  plus: "Plus",
  family: "Family",
  "premium-smart": "Premium Smart",
};

export const INSTALLATION_LABELS: Record<InstallationType, string> = {
  "supply-only": "Supply Only",
  professional: "Professional Installation",
  "full-project": "Full Project Management",
};

export const BRAND_LABELS: Record<BrandOption, string> = {
  any: "Any Brand",
  bosch: "Bosch",
  siemens: "Siemens",
  miele: "Miele",
  neff: "NEFF",
  smeg: "Smeg",
};

export const COLLECTION_DESCRIPTIONS: Record<CollectionTier, string> = {
  essential: "Clean lines, quality materials, and smart functionality. Perfect for modern living.",
  signature: "Elevated design with premium finishes and enhanced smart-home integration.",
  luxe: "Bespoke craftsmanship, rare materials, and fully integrated smart-living technology.",
};

export const WORKTOP_DESCRIPTIONS: Record<WorktopType, string> = {
  laminate: "Durable, versatile, and available in a wide range of finishes.",
  compact: "Ultra-thin, heat-resistant surface with a contemporary aesthetic.",
  "solid-timber": "Warm, natural beauty with sustainable sourcing certification.",
  quartz: "Engineered stone combining durability with refined elegance.",
  "premium-stone": "Natural marble and granite for an unparalleled luxury finish.",
};

export const APPLIANCE_DESCRIPTIONS: Record<AppliancePack, string> = {
  essentials: "Oven, hob, extractor, and integrated fridge-freezer.",
  plus: "Essentials plus dishwasher, microwave, and upgraded finishes.",
  family: "Plus pack with additional capacity, wine cooler, and smart features.",
  "premium-smart": "Full smart suite with connected appliances and premium brand options.",
};

export const INSTALLATION_DESCRIPTIONS: Record<InstallationType, string> = {
  "supply-only": "We deliver; you arrange your own installation.",
  professional: "Expert installation by our certified kitchen fitters.",
  "full-project": "End-to-end project management including plumbing, electrics, and finishing.",
};