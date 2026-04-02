import {
  EstimatorState,
  COLLECTION_LABELS,
  KITCHEN_SIZE_LABELS,
  WORKTOP_LABELS,
  SINK_TAP_LABELS,
  APPLIANCE_LABELS,
  INSTALLATION_LABELS,
} from "./pricing";
import { motion } from "motion/react";
import { Activity } from "lucide-react";

interface SummaryPanelProps {
  state: EstimatorState;
  breakdown: { total: [number, number] };
  currentStep: number;
}

const STEP_LABELS = [
  "Collection",
  "Kitchen Size",
  "Worktops",
  "Sink & Tap",
  "Appliances",
  "Installation",
];

export function SummaryPanel({ state, currentStep }: SummaryPanelProps) {
  // Build completed selections list
  const selections: { label: string; value: string; step: number }[] = [];

  if (currentStep >= 0) {
    selections.push({
      label: "Collection",
      value: COLLECTION_LABELS[state.collectionTier],
      step: 0,
    });
  }
  if (currentStep >= 1) {
    selections.push({
      label: "Kitchen Size",
      value: KITCHEN_SIZE_LABELS[state.kitchenSize],
      step: 1,
    });
  }
  if (currentStep >= 2) {
    selections.push({
      label: "Worktop",
      value: WORKTOP_LABELS[state.worktopType],
      step: 2,
    });
  }
  if (currentStep >= 3) {
    selections.push({
      label: "Sink & Tap",
      value: SINK_TAP_LABELS[state.sinkSelected],
      step: 3,
    });
  }
  if (currentStep >= 4) {
    selections.push({
      label: "Appliances",
      value: state.appliancesSelected
        ? APPLIANCE_LABELS[state.appliancePack]
        : "Skipped",
      step: 4,
    });
  }
  if (currentStep >= 5) {
    selections.push({
      label: "Installation",
      value: INSTALLATION_LABELS[state.installationType],
      step: 5,
    });
  }

  return (
    <div
      className="rounded-[24px] flex flex-col"
      style={{
        padding: "32px",
        backgroundColor: "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        boxShadow:
          "0 0 0 0.5px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.03), 0 12px 40px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          color: "#696A5A",
          fontSize: "1.125rem",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          marginBottom: "20px",
        }}
      >
        Your Progress
      </h3>

      {/* Step progress */}
      <div className="flex flex-col gap-2 mb-5">
        {STEP_LABELS.map((label, i) => {
          const isComplete = i < currentStep;
          const isCurrent = i === currentStep;
          return (
            <div key={label} className="flex items-center gap-3">
              <div
                className="w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: isComplete
                    ? "rgba(135, 163, 159, 0.15)"
                    : isCurrent
                    ? "rgba(217, 122, 67, 0.12)"
                    : "rgba(105, 106, 90, 0.06)",
                  border: isCurrent
                    ? "1.5px solid rgba(217, 122, 67, 0.3)"
                    : "none",
                }}
              >
                {isComplete && (
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#87A39F" }}
                  />
                )}
                {isCurrent && (
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#D97A43" }}
                  />
                )}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  fontWeight: isComplete || isCurrent ? 500 : 400,
                  color: isComplete
                    ? "#696A5A"
                    : isCurrent
                    ? "#D97A43"
                    : "rgba(105, 106, 90, 0.35)",
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div
        className="w-full"
        style={{
          height: "1px",
          backgroundColor: "rgba(105, 106, 90, 0.08)",
        }}
      />

      {/* Completed selections */}
      {selections.length > 0 && (
        <div className="flex flex-col gap-1.5 py-4">
          {selections.map((sel) => (
            <div
              key={sel.label}
              className="flex items-center justify-between"
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "rgba(105, 106, 90, 0.45)",
                  fontWeight: 500,
                }}
              >
                {sel.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color:
                    sel.value === "Skipped"
                      ? "rgba(105, 106, 90, 0.35)"
                      : "#696A5A",
                  fontStyle: sel.value === "Skipped" ? "italic" : "normal",
                }}
              >
                {sel.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Divider */}
      <div
        className="w-full"
        style={{
          height: "1px",
          backgroundColor: "rgba(105, 106, 90, 0.08)",
        }}
      />

      {/* Estimate updating indicator */}
      <motion.div
        className="flex items-center gap-2.5 pt-5"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity
          size={15}
          style={{ color: "rgba(105, 106, 90, 0.4)" }}
        />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "rgba(105, 106, 90, 0.45)",
          }}
        >
          Estimated range updating…
        </span>
      </motion.div>

      {/* Microcopy */}
      <p
        className="mt-4"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.6875rem",
          color: "rgba(105, 106, 90, 0.35)",
          lineHeight: 1.4,
        }}
      >
        Your full estimate will be revealed on the final step.
      </p>
    </div>
  );
}