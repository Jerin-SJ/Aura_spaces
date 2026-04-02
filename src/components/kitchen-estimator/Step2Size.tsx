import { KitchenSize, KITCHEN_SIZE_LABELS, KITCHEN_SIZE_DETAILS, KITCHEN_SIZE_PRICES, formatPrice } from "./pricing";
import { Check } from "lucide-react";

interface Step2Props {
  kitchenSize: KitchenSize;
  onKitchenSizeChange: (size: KitchenSize) => void;
}

const sizes: KitchenSize[] = ["small", "medium", "large", "extraLarge"];

export function Step2Size({
  kitchenSize,
  onKitchenSizeChange,
}: Step2Props) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            color: "#696A5A",
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "8px",
            letterSpacing: "-0.01em",
          }}
        >
          Kitchen Size
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "#696A5A",
            fontSize: "0.875rem",
            opacity: 0.6,
            lineHeight: 1.6,
          }}
        >
          Select a typical kitchen size. Final pricing will be refined after design consultation.
        </p>
      </div>

      {/* Size Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sizes.map((size) => {
          const details = KITCHEN_SIZE_DETAILS[size];
          const price = KITCHEN_SIZE_PRICES[size];
          const isSelected = kitchenSize === size;

          return (
            <button
              key={size}
              onClick={() => onKitchenSizeChange(size)}
              className="relative flex flex-col gap-3 rounded-[24px] p-6 transition-all duration-300 cursor-pointer group text-left"
              style={{
                backgroundColor: isSelected ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.75)",
                border: isSelected ? "2px solid #D97A43" : "1px solid rgba(216, 207, 192, 0.4)",
                boxShadow: isSelected
                  ? "0 0 0 1px rgba(217, 122, 67, 0.1), 0 4px 16px rgba(217, 122, 67, 0.08), 0 16px 48px rgba(217, 122, 67, 0.06)"
                  : "0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 16px rgba(0, 0, 0, 0.03)",
                transform: isSelected ? "scale(1.01)" : "scale(1)",
              }}
            >
              {/* Top-right selection indicator */}
              {isSelected && (
                <div
                  className="absolute top-4 right-4 w-[24px] h-[24px] rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "#D97A43",
                    boxShadow: "0 2px 8px rgba(217, 122, 67, 0.25)",
                  }}
                >
                  <Check size={14} color="#ffffff" strokeWidth={3} />
                </div>
              )}

              {/* Size name */}
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#696A5A",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                }}
              >
                {KITCHEN_SIZE_LABELS[size]}
              </h3>

              {/* Units + Area */}
              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "rgba(105, 106, 90, 0.65)",
                  }}
                >
                  {details.units} Units
                </span>
                <span style={{ color: "rgba(105, 106, 90, 0.3)" }}>•</span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "rgba(105, 106, 90, 0.65)",
                  }}
                >
                  {details.area} m²
                </span>
              </div>

              {/* Walls info */}
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "rgba(105, 106, 90, 0.5)",
                  lineHeight: 1.4,
                }}
              >
                {details.walls}
              </span>

              {/* Price */}
              <div
                className="mt-2 pt-3"
                style={{
                  borderTop: "1px solid rgba(105, 106, 90, 0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#D97A43",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {formatPrice(price)}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Helper text */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          color: "#87A39F",
          fontSize: "0.8125rem",
          fontWeight: 500,
        }}
      >
        Base cabinet cost shown. Additional items priced in following steps.
      </p>
    </div>
  );
}