import { OptionCard } from "./OptionCard";
import {
  SinkTapOption,
  SINK_TAP_LABELS,
  SINK_TAP_COSTS,
  formatRange,
} from "./pricing";

interface Step4Props {
  value: SinkTapOption;
  onChange: (opt: SinkTapOption) => void;
}

const sinkOptions: SinkTapOption[] = ["none", "standard", "premium", "boiling-tap"];

const SINK_DESCRIPTIONS: Record<SinkTapOption, string> = {
  none: "Skip this for now — you can always add later.",
  standard: "Quality stainless steel sink with a single-lever mixer tap.",
  premium: "Undermounted composite sink with a designer tap in brushed brass or chrome.",
  "boiling-tap": "Instant boiling, chilled, and sparkling water — the ultimate kitchen upgrade.",
};

export function Step4SinkTap({ value, onChange }: Step4Props) {
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
          Sink & Tap
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
          Select the level of sink and tap that suits your kitchen.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
        {sinkOptions.map((opt) => {
          const costs = SINK_TAP_COSTS[opt];
          const priceHint = costs[0] === 0 && costs[1] === 0 ? "No additional cost" : `Adds ${formatRange(costs)}`;
          return (
            <OptionCard
              key={opt}
              title={SINK_TAP_LABELS[opt]}
              description={SINK_DESCRIPTIONS[opt]}
              priceHint={priceHint}
              selected={value === opt}
              onSelect={() => onChange(opt)}
              compact
            />
          );
        })}
      </div>
    </div>
  );
}