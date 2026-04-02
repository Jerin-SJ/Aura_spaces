import { Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface OptionCardProps {
  title: string;
  description?: string;
  priceHint?: string;
  selected: boolean;
  onSelect: () => void;
  badge?: string;
  imageUrl?: string;
  compact?: boolean;
}

export function OptionCard({
  title,
  description,
  priceHint,
  selected,
  onSelect,
  badge,
  imageUrl,
  compact = false,
}: OptionCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative w-full h-full text-left rounded-[28px] transition-all duration-500 cursor-pointer overflow-hidden group ${compact ? "p-5" : "p-6"}`}
      style={{
        backgroundColor: selected ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: selected ? "1.5px solid #D97A43" : "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow: selected
          ? "0 0 0 1px rgba(217, 122, 67, 0.15), 0 4px 16px rgba(217, 122, 67, 0.1), 0 16px 48px rgba(217, 122, 67, 0.08)"
          : "0 0 0 0.5px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.03), 0 8px 32px rgba(0, 0, 0, 0.04)",
        transform: selected ? "scale(1.01)" : "scale(1)",
      }}
    >
      {badge && (
        <span
          className="absolute top-4 right-4 px-3 py-1 rounded-full z-10"
          style={{
            background: "linear-gradient(135deg, #A88864 0%, #C4A57B 100%)",
            color: "#ffffff",
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            boxShadow: "0 2px 8px rgba(168, 136, 100, 0.25)",
          }}
        >
          {badge}
        </span>
      )}

      {imageUrl && (
        <div className="w-full h-32 rounded-[18px] overflow-hidden mb-4" style={{
          boxShadow: "inset 0 0 0 0.5px rgba(0, 0, 0, 0.06)",
        }}>
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex items-start gap-3">
        {/* Selection indicator */}
        <div
          className="mt-0.5 w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            border: selected ? "none" : "1.5px solid rgba(168, 136, 100, 0.3)",
            backgroundColor: selected ? "#D97A43" : "rgba(255, 255, 255, 0.5)",
            boxShadow: selected
              ? "0 2px 8px rgba(217, 122, 67, 0.3)"
              : "0 1px 3px rgba(0, 0, 0, 0.05)",
          }}
        >
          {selected && <Check size={12} color="#ffffff" strokeWidth={3} />}
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <h4
            style={{
              fontFamily: "var(--font-heading)",
              color: "#696A5A",
              fontSize: compact ? "1rem" : "1.125rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h4>
          {description && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "#696A5A",
                fontSize: "0.8125rem",
                opacity: 0.6,
                lineHeight: 1.55,
              }}
            >
              {description}
            </p>
          )}
          {priceHint && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "#D97A43",
                fontSize: "0.8125rem",
                fontWeight: 600,
                marginTop: "2px",
              }}
            >
              {priceHint}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}