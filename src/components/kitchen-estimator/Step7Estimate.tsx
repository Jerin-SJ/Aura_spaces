import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import {
  EstimatorState,
  PriceBreakdown,
  formatRange,
  COLLECTION_LABELS,
  KITCHEN_SIZE_LABELS,
  WORKTOP_LABELS,
  SINK_TAP_LABELS,
  APPLIANCE_LABELS,
  BRAND_LABELS,
  INSTALLATION_LABELS,
} from "./pricing";
import {
  Calendar,
  Download,
  Leaf,
  Shield,
  Sparkles,
  Pencil,
  Info,
} from "lucide-react";
import { motion } from "motion/react";

interface Step7Props {
  state: EstimatorState;
  breakdown: PriceBreakdown;
  onEditStep: (step: number) => void;
}

const GLASS_CARD = {
  backgroundColor: "rgba(255, 255, 255, 0.72)",
  backdropFilter: "blur(24px) saturate(180%)",
  WebkitBackdropFilter: "blur(24px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  boxShadow:
    "0 0 0 0.5px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.03), 0 12px 40px rgba(0, 0, 0, 0.06)",
} as const;

function BreakdownRow({
  label,
  value,
  muted = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between py-3"
      style={{
        borderBottom: "1px solid rgba(105, 106, 90, 0.06)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          fontWeight: 500,
          color: muted
            ? "rgba(105, 106, 90, 0.4)"
            : "rgba(105, 106, 90, 0.65)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          fontWeight: 700,
          color: muted ? "rgba(105, 106, 90, 0.4)" : "#696A5A",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function SelectionRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit: () => void;
}) {
  return (
    <div
      className="flex items-center justify-between py-3"
      style={{
        borderBottom: "1px solid rgba(105, 106, 90, 0.05)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          color: "rgba(105, 106, 90, 0.5)",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <div className="flex items-center gap-3">
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#696A5A",
          }}
        >
          {value}
        </span>
        <button
          onClick={onEdit}
          className="flex items-center gap-1 cursor-pointer transition-all duration-200 hover:opacity-80 active:scale-95"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            fontWeight: 500,
            color: "#D97A43",
            background: "none",
            border: "none",
            padding: 0,
          }}
        >
          <Pencil size={11} />
          Edit
        </button>
      </div>
    </div>
  );
}

export function Step7Estimate({ state, breakdown, onEditStep }: Step7Props) {
  const hasAppliances = state.appliancesSelected;
  const hasInstallation = state.installationType !== "supply-only";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-8"
    >
      {/* Header */}
      <div className="text-center lg:text-left">
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            color: "#696A5A",
            fontSize: "1.75rem",
            fontWeight: 700,
            marginBottom: "8px",
            letterSpacing: "-0.02em",
          }}
        >
          Your Kitchen Estimate
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
          Only selected items are included in your estimate.
        </p>
      </div>

      {/* Two-column layout on desktop */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left — Selections + Breakdown */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          {/* Selections Summary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[24px] p-6 lg:p-8"
            style={GLASS_CARD}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                color: "#696A5A",
                fontSize: "1.0625rem",
                fontWeight: 600,
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              Your Selections
            </h3>

            <div
              style={{
                borderTop: "1px solid rgba(105, 106, 90, 0.08)",
              }}
            >
              <SelectionRow
                label="Collection"
                value={COLLECTION_LABELS[state.collectionTier]}
                onEdit={() => onEditStep(0)}
              />
              <SelectionRow
                label="Kitchen Size"
                value={KITCHEN_SIZE_LABELS[state.kitchenSize]}
                onEdit={() => onEditStep(1)}
              />
              <SelectionRow
                label="Worktop"
                value={WORKTOP_LABELS[state.worktopType]}
                onEdit={() => onEditStep(2)}
              />
              <SelectionRow
                label="Sink & Tap"
                value={SINK_TAP_LABELS[state.sinkSelected]}
                onEdit={() => onEditStep(3)}
              />
              {hasAppliances && (
                <SelectionRow
                  label="Appliances"
                  value={`${APPLIANCE_LABELS[state.appliancePack]} · ${BRAND_LABELS[state.brand]}`}
                  onEdit={() => onEditStep(4)}
                />
              )}
              {!hasAppliances && (
                <div
                  className="flex items-center justify-between py-3"
                  style={{
                    borderBottom: "1px solid rgba(105, 106, 90, 0.05)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "rgba(105, 106, 90, 0.35)",
                      fontWeight: 500,
                      fontStyle: "italic",
                    }}
                  >
                    Appliances — Skipped
                  </span>
                  <button
                    onClick={() => onEditStep(4)}
                    className="flex items-center gap-1 cursor-pointer transition-all duration-200 hover:opacity-80 active:scale-95"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      color: "#D97A43",
                      background: "none",
                      border: "none",
                      padding: 0,
                    }}
                  >
                    <Pencil size={11} />
                    Add
                  </button>
                </div>
              )}
              <SelectionRow
                label="Installation"
                value={INSTALLATION_LABELS[state.installationType]}
                onEdit={() => onEditStep(5)}
              />
            </div>
          </motion.div>

          {/* Price Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[24px] p-6 lg:p-8"
            style={GLASS_CARD}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                color: "#696A5A",
                fontSize: "1.0625rem",
                fontWeight: 600,
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              Price Breakdown
            </h3>

            <div
              style={{
                borderTop: "1px solid rgba(105, 106, 90, 0.08)",
              }}
            >
              <BreakdownRow
                label="Cabinets"
                value={formatRange(breakdown.cabinets)}
              />
              <BreakdownRow
                label="Worktops"
                value={formatRange(breakdown.worktops)}
              />
              <BreakdownRow
                label="Sink & Tap"
                value={formatRange(breakdown.sinkTap)}
              />

              {/* Appliances — only if selected */}
              {hasAppliances && (
                <BreakdownRow
                  label="Appliances"
                  value={formatRange(breakdown.appliances)}
                />
              )}

              {/* Installation — only if not supply-only */}
              {hasInstallation && (
                <BreakdownRow
                  label="Installation"
                  value={formatRange(breakdown.installation)}
                />
              )}

              {/* VAT */}
              <BreakdownRow
                label="VAT (20%)"
                value={formatRange(breakdown.vat)}
                muted
              />
            </div>
          </motion.div>
        </div>

        {/* Right — Total + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:w-[380px] shrink-0"
        >
          <div className="lg:sticky lg:top-6 flex flex-col gap-6">
            {/* Total card */}
            <div
              className="rounded-[24px] p-6 lg:p-8 flex flex-col items-center text-center"
              style={GLASS_CARD}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  color: "rgba(105, 106, 90, 0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "8px",
                }}
              >
                Estimated Total
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.75rem",
                  fontWeight: 700,
                  color: "#696A5A",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {formatRange(breakdown.total)}
              </span>

              {/* Divider */}
              <div
                className="w-full my-6"
                style={{
                  height: "1px",
                  backgroundColor: "rgba(105, 106, 90, 0.08)",
                }}
              />

              {/* CTAs */}
              <div className="flex flex-col gap-3 w-full">
                <PrimaryButton
                  fullWidth
                  showArrow
                  onClick={() => window.open('https://www.auraspaces.uk/#contact', '_blank')}
                >
                  <Calendar size={18} />
                  Book Free Consultation
                </PrimaryButton>
                <SecondaryButton fullWidth>
                  <Download size={18} />
                  Download Estimate PDF
                </SecondaryButton>
              </div>

              {/* Confidence message */}
              <div className="flex items-start gap-2 mt-6">
                <Info
                  size={14}
                  className="shrink-0 mt-0.5"
                  style={{ color: "rgba(105, 106, 90, 0.35)" }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6875rem",
                    color: "rgba(105, 106, 90, 0.4)",
                    lineHeight: 1.5,
                    textAlign: "left",
                  }}
                >
                  Final cost confirmed after home survey. This estimate is for
                  guidance only and valid for 30 days.
                </p>
              </div>
            </div>

            {/* Trust features */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <Sparkles size={15} />,
                  text: "Smart-ready compatible",
                },
                {
                  icon: <Leaf size={15} />,
                  text: "Sustainable materials",
                },
                {
                  icon: <Shield size={15} />,
                  text: "10-year warranty",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-[16px]"
                  style={{
                    backgroundColor: "rgba(135, 163, 159, 0.06)",
                    color: "#87A39F",
                  }}
                >
                  {item.icon}
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}