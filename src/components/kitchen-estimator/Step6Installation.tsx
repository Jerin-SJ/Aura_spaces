import { OptionCard } from "./OptionCard";
import {
  InstallationType,
  INSTALLATION_LABELS,
  INSTALLATION_DESCRIPTIONS,
  INSTALLATION_RATES,
} from "./pricing";

interface Step6Props {
  value: InstallationType;
  onChange: (type: InstallationType) => void;
}

const installTypes: InstallationType[] = ["supply-only", "professional", "full-project"];

const INSTALL_PRICE_HINTS: Record<InstallationType, string> = {
  "supply-only": "No additional cost",
  professional: "20% of supply cost",
  "full-project": "28% of supply cost",
};

export function Step6Installation({ value, onChange }: Step6Props) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            color: "#696A5A",
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          Installation
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "#696A5A",
            fontSize: "0.875rem",
            opacity: 0.7,
            lineHeight: 1.6,
          }}
        >
          Choose how you'd like your kitchen delivered and installed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {installTypes.map((type) => (
          <OptionCard
            key={type}
            title={INSTALLATION_LABELS[type]}
            description={INSTALLATION_DESCRIPTIONS[type]}
            priceHint={INSTALL_PRICE_HINTS[type]}
            selected={value === type}
            onSelect={() => onChange(type)}
            badge={type === "full-project" ? "Recommended" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
