import { Check } from "lucide-react";

interface TierCardProps {
  title: string;
  description: string;
  priceRange: string;
  selected: boolean;
  popular?: boolean;
  features?: string[];
  onSelect: () => void;
}

export function TierCard({
  title,
  description,
  priceRange,
  selected,
  popular,
  features = [],
  onSelect,
}: TierCardProps) {
  return (
    <button
      onClick={onSelect}
      className="relative w-full h-full text-left rounded-[24px] transition-all duration-200 cursor-pointer group flex flex-col"
      style={{
        padding: "32px",
        backgroundColor: selected
          ? "rgba(255, 255, 255, 0.88)"
          : "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: selected
          ? "2px solid #D97A43"
          : "1px solid rgba(216, 207, 192, 0.5)",
        boxShadow: selected
          ? "0 2px 12px rgba(217, 122, 67, 0.08), 0 8px 32px rgba(0, 0, 0, 0.04)"
          : "0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 16px rgba(0, 0, 0, 0.03)",
      }}
    >
      {/* "Most Popular" badge — inside card padding, top-right */}
      {popular && (
        null
      )}

      {/* Radio + Heading row — aligned horizontally */}
      <div className="flex items-center gap-3 mb-3">
        {/* Radio indicator */}
        <div
          className="w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
          style={{
            border: selected ? "none" : "1.5px solid #D8CFC0",
            backgroundColor: selected ? "#D97A43" : "rgba(255, 255, 255, 0.6)",
            boxShadow: selected
              ? "0 1px 6px rgba(217, 122, 67, 0.25)"
              : "inset 0 1px 2px rgba(0, 0, 0, 0.04)",
          }}
        >
          {selected && <Check size={12} color="#ffffff" strokeWidth={3} />}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            color: "#696A5A",
            fontSize: "1.375rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="mb-4"
        style={{
          fontFamily: "var(--font-body)",
          color: "#696A5A",
          fontSize: "0.875rem",
          fontWeight: 400,
          opacity: 0.6,
          lineHeight: 1.6,
          paddingLeft: "35px",
        }}
      >
        {description}
      </p>

      {/* Price */}
      <p
        className="mb-5"
        style={{
          fontFamily: "var(--font-heading)",
          color: "#D97A43",
          fontSize: "1.125rem",
          fontWeight: 600,
          paddingLeft: "35px",
        }}
      >
        {priceRange}
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 400,
            fontFamily: "var(--font-body)",
            opacity: 0.7,
            marginLeft: "4px",
          }}
        >
       
        </span>
      </p>

      {/* Features list — 16px vertical rhythm */}
      {features.length > 0 && (
        <div
          className="flex flex-col flex-1"
          style={{
            gap: "16px",
            paddingTop: "20px",
            paddingLeft: "35px",
            borderTop: "1px solid rgba(105, 106, 90, 0.07)",
          }}
        >
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2.5">
              <div
                className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(135, 163, 159, 0.12)" }}
              >
                <Check size={10} style={{ color: "#87A39F" }} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  fontWeight: 400,
                  color: "#696A5A",
                  opacity: 0.7,
                  lineHeight: 1.4,
                }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      )}
    </button>
  );
}
