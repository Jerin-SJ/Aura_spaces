import { OptionCard } from "./OptionCard";
import {
  WorktopType,
  WORKTOP_LABELS,
  WORKTOP_DESCRIPTIONS,
  WORKTOP_RATES,
  formatRange,
} from "./pricing";

interface Step3Props {
  value: WorktopType;
  onChange: (type: WorktopType) => void;
}

const worktopImages: Record<WorktopType, string> = {
  laminate:
    "https://images.unsplash.com/photo-1665937863545-4978231e3a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1pbmF0ZSUyMGtpdGNoZW4lMjBjb3VudGVydG9wJTIwbW9kZXJufGVufDF8fHx8MTc3MTM1OTAzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  compact:
    "https://images.unsplash.com/photo-1644037423946-f08b7be5e308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwc3VyZmFjZSUyMGtpdGNoZW4lMjB3b3JrdG9wfGVufDF8fHx8MTc3MTM1OTAzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "solid-timber":
    "https://images.unsplash.com/photo-1617262869510-3793b141c294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xpZCUyMHRpbWJlciUyMHdvb2RlbiUyMGtpdGNoZW4lMjBjb3VudGVydG9wfGVufDF8fHx8MTc3MTM1OTA0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  quartz:
    "https://images.unsplash.com/photo-1762529716215-afd7400d7bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydHolMjBraXRjaGVuJTIwY291bnRlcnRvcCUyMHdoaXRlfGVufDF8fHx8MTc3MTM1OTA0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "premium-stone":
    "https://images.unsplash.com/photo-1758448755927-e5c5ae14790c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBzdG9uZSUyMGtpdGNoZW4lMjBsdXh1cnklMjBjb3VudGVydG9wfGVufDF8fHx8MTc3MTM1OTA0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

const worktopTypes: WorktopType[] = ["laminate", "compact", "solid-timber", "quartz", "premium-stone"];

export function Step3Worktops({ value, onChange }: Step3Props) {
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
          Choose Your Worktop
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
          Select the material that best suits your style and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {worktopTypes.map((type) => (
          <OptionCard
            key={type}
            title={WORKTOP_LABELS[type]}
            description={WORKTOP_DESCRIPTIONS[type]}
            priceHint={`Adds ${formatRange(WORKTOP_RATES[type])} per metre`}
            selected={value === type}
            onSelect={() => onChange(type)}
            imageUrl={worktopImages[type]}
          />
        ))}
      </div>
    </div>
  );
}