import { OptionCard } from "./OptionCard";
import {
  AppliancePack,
  BrandOption,
  APPLIANCE_LABELS,
  APPLIANCE_DESCRIPTIONS,
  APPLIANCE_COSTS,
  BRAND_LABELS,
  formatRange,
} from "./pricing";
import { ChevronDown, PackageX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Step5Props {
  selected: boolean;
  pack: AppliancePack;
  brand: BrandOption;
  onSelectedChange: (selected: boolean) => void;
  onPackChange: (pack: AppliancePack) => void;
  onBrandChange: (brand: BrandOption) => void;
}

const packs: AppliancePack[] = ["essentials", "plus", "family", "premium-smart"];
const brands: BrandOption[] = ["any", "bosch", "siemens", "miele", "neff", "smeg"];

export function Step5Appliances({
  selected,
  pack,
  brand,
  onSelectedChange,
  onPackChange,
  onBrandChange,
}: Step5Props) {
  return (
    <div className="flex flex-col gap-6">
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
          Appliance Package
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
          Choose the appliance bundle that fits your lifestyle, or skip if
          you&apos;re sourcing your own.
        </p>
      </div>

      {/* Skip toggle */}
      <button
        onClick={() => onSelectedChange(!selected)}
        className="flex items-center gap-3 rounded-[20px] px-5 py-4 transition-all duration-200 cursor-pointer w-full text-left"
        style={{
          backgroundColor: !selected
            ? "rgba(217, 122, 67, 0.06)"
            : "rgba(255, 255, 255, 0.5)",
          border: !selected
            ? "1.5px solid rgba(217, 122, 67, 0.2)"
            : "1.5px solid rgba(105, 106, 90, 0.1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{
            backgroundColor: !selected
              ? "rgba(217, 122, 67, 0.1)"
              : "rgba(105, 106, 90, 0.06)",
          }}
        >
          <PackageX
            size={16}
            style={{
              color: !selected ? "#D97A43" : "rgba(105, 106, 90, 0.4)",
            }}
          />
        </div>
        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: !selected ? "#D97A43" : "#696A5A",
            }}
          >
            {!selected
              ? "Appliances skipped"
              : "Skip appliances — I'll source my own"}
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "rgba(105, 106, 90, 0.5)",
            }}
          >
            {!selected
              ? "Appliances will not be included in your estimate."
              : "Click to remove appliances from your estimate."}
          </span>
        </div>
      </button>

      {/* Appliance options — only shown when selected */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {packs.map((p) => (
                  <OptionCard
                    key={p}
                    title={APPLIANCE_LABELS[p]}
                    description={APPLIANCE_DESCRIPTIONS[p]}
                    priceHint={formatRange(APPLIANCE_COSTS[p])}
                    selected={pack === p}
                    onSelect={() => onPackChange(p)}
                    badge={p === "premium-smart" ? "Best Value" : undefined}
                  />
                ))}
              </div>

              {/* Brand Selector */}
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#696A5A",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Preferred Brand
                </label>
                <div className="relative">
                  <select
                    value={brand}
                    onChange={(e) =>
                      onBrandChange(e.target.value as BrandOption)
                    }
                    className="w-full appearance-none rounded-[20px] px-5 py-4 pr-12 cursor-pointer outline-none transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                      backdropFilter: "blur(20px) saturate(180%)",
                      WebkitBackdropFilter: "blur(20px) saturate(180%)",
                      border: "1px solid rgba(255, 255, 255, 0.6)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      color: "#696A5A",
                      fontWeight: 500,
                      boxShadow:
                        "0 0 0 0.5px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.03), 0 8px 32px rgba(0, 0, 0, 0.04)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#D97A43";
                      e.target.style.boxShadow =
                        "0 0 0 1px rgba(217, 122, 67, 0.15), 0 4px 16px rgba(217, 122, 67, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.6)";
                      e.target.style.boxShadow =
                        "0 0 0 0.5px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.03), 0 8px 32px rgba(0, 0, 0, 0.04)";
                    }}
                  >
                    {brands.map((b) => (
                      <option key={b} value={b}>
                        {BRAND_LABELS[b]}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: "#A88864" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
