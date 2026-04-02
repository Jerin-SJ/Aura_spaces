import { Check } from "lucide-react";

export const STEP_LABELS = [
  "Collection",
  "Size",
  "Worktops",
  "Sink & Tap",
  "Appliances",
  "Installation",
  "Estimate",
];

interface StepIndicatorProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function StepIndicator({ currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <>
      {/* Desktop Step Indicator */}
      <div className="hidden lg:flex items-center w-full mb-12">
        {STEP_LABELS.map((label, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isFuture = index > currentStep;
          const isClickable = isCompleted && onStepClick;

          return (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <button
                onClick={() => isClickable && onStepClick(index)}
                disabled={!isClickable}
                className="flex flex-col items-center gap-2.5 cursor-pointer disabled:cursor-default group"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: isActive
                      ? "#D97A43"
                      : isCompleted
                        ? "#D97A43"
                        : "transparent",
                    border: isFuture
                      ? "1.5px solid #D8CFC0"
                      : isActive
                        ? "2px solid #D97A43"
                        : "2px solid #D97A43",
                    color: isActive || isCompleted ? "#ffffff" : "#A88864",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    boxShadow: isActive
                      ? "0 2px 8px rgba(217, 122, 67, 0.25)"
                      : isCompleted
                        ? "0 1px 4px rgba(217, 122, 67, 0.15)"
                        : "none",
                  }}
                >
                  {isCompleted ? <Check size={18} /> : index + 1}
                </div>
                <span
                  className="whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive
                      ? "#D97A43"
                      : isCompleted
                        ? "#696A5A"
                        : "rgba(168, 136, 100, 0.55)",
                  }}
                >
                  {label}
                </span>
              </button>
              {index < STEP_LABELS.length - 1 && (
                <div
                  className="flex-1 h-[1.5px] mx-4 mt-[-20px] rounded-full transition-all duration-400"
                  style={{
                    backgroundColor: isCompleted ? "#D97A43" : "#D8CFC0",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Progress Bar */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center justify-between mb-3">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#D97A43",
            }}
          >
            Step {currentStep + 1} of {STEP_LABELS.length}
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#696A5A",
            }}
          >
            {STEP_LABELS[currentStep]}
          </span>
        </div>
        <div
          className="w-full h-[6px] rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(168, 136, 100, 0.12)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-600 ease-out"
            style={{
              background: "linear-gradient(90deg, #D97A43 0%, #E08B58 100%)",
              width: `${((currentStep + 1) / STEP_LABELS.length) * 100}%`,
              boxShadow: "0 0 8px rgba(217, 122, 67, 0.3)",
            }}
          />
        </div>
      </div>
    </>
  );
}
