import { TierCard } from "./TierCard";
import {
  CollectionTier,
  COLLECTION_LABELS,
  COLLECTION_DESCRIPTIONS,
} from "./pricing";

interface Step1Props {
  value: CollectionTier;
  onChange: (tier: CollectionTier) => void;
}

const tiers: CollectionTier[] = ["essential", "signature", "luxe"];

const FEATURES: Record<CollectionTier, string[]> = {
  essential: [
    "Soft-close hinges and drawers",
    "Choice of 12 door finishes",
    "Integrated LED plinth lighting",
  ],
  signature: [
    "Premium soft-close mechanisms",
    "Choice of 24 door finishes",
    "Smart-home sensor integration",
    "Handleless design option",
  ],
  luxe: [
    "Bespoke handcrafted cabinetry",
    "Unlimited finish options",
    "Full smart-living ecosystem",
    "Concealed storage solutions",
    "Dedicated design consultant",
  ],
};

export function Step1Collection({ value, onChange }: Step1Props) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            color: "#696A5A",
            fontSize: "1.5rem",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "8px",
          }}
        >
          Choose Your Collection
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "#696A5A",
            fontSize: "0.9375rem",
            fontWeight: 400,
            opacity: 0.6,
            lineHeight: 1.65,
          }}
        >
          Each collection is designed with sustainability and smart-living at
          its core.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {tiers.map((tier) => (
          <TierCard
            key={tier}
            title={COLLECTION_LABELS[tier]}
            description={COLLECTION_DESCRIPTIONS[tier]}
            priceRange=""
            selected={value === tier}
            popular={tier === "signature"}
            features={FEATURES[tier]}
            onSelect={() => onChange(tier)}
          />
        ))}
      </div>
    </div>
  );
}