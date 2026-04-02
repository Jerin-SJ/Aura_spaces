import { useState, useMemo, useRef } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { PreviewSection } from "./PreviewSection";
import { StepIndicator } from "./StepIndicator";
import { Step1Collection } from "./Step1Collection";
import { Step2Size } from "./Step2Size";
import { Step3Worktops } from "./Step3Worktops";
import { Step4SinkTap } from "./Step4SinkTap";
import { Step5Appliances } from "./Step5Appliances";
import { Step6Installation } from "./Step6Installation";
import { Step7Estimate } from "./Step7Estimate";
import { SummaryPanel } from "./SummaryPanel";
import { MobileSummaryDrawer } from "./MobileSummaryDrawer";
import { PrimaryButton } from "./PrimaryButton";
import {
  EstimatorState,
  calculateEstimate,
} from "./pricing";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import imgAuraSpacesLogo from "figma:asset/7383c0b13d545b56ad3dee2f9b60d49a9532f19c.png";

const TOTAL_STEPS = 7;

const DEFAULT_STATE: EstimatorState = {
  collectionTier: "signature",
  kitchenSize: "medium",
  worktopType: "quartz",
  sinkSelected: "standard",
  appliancesSelected: true,
  appliancePack: "plus",
  brand: "any",
  installationType: "professional",
};

export default function App() {
  const [showEstimator, setShowEstimator] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState<EstimatorState>(DEFAULT_STATE);
  const estimatorRef = useRef<HTMLDivElement>(null);

  const breakdown = useMemo(() => calculateEstimate(state), [state]);

  const handleStartEstimating = () => {
    setShowEstimator(true);
    setTimeout(() => {
      estimatorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const goNext = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((s) => s + 1);
      window.scrollTo({ top: estimatorRef.current?.offsetTop ?? 0, behavior: "smooth" });
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      window.scrollTo({ top: estimatorRef.current?.offsetTop ?? 0, behavior: "smooth" });
    }
  };

  const goToStep = (step: number) => {
    if (step < currentStep) {
      setCurrentStep(step);
    }
  };

  const updateState = <K extends keyof EstimatorState>(key: K, value: EstimatorState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Step1Collection
            value={state.collectionTier}
            onChange={(v) => updateState("collectionTier", v)}
          />
        );
      case 1:
        // Step 2: Kitchen Size selection with unit-based pricing
        return (
          <Step2Size
            kitchenSize={state.kitchenSize}
            onKitchenSizeChange={(v) => updateState("kitchenSize", v)}
          />
        );
      case 2:
        return (
          <Step3Worktops
            value={state.worktopType}
            onChange={(v) => updateState("worktopType", v)}
          />
        );
      case 3:
        return (
          <Step4SinkTap
            value={state.sinkSelected}
            onChange={(v) => updateState("sinkSelected", v)}
          />
        );
      case 4:
        return (
          <Step5Appliances
            selected={state.appliancesSelected}
            pack={state.appliancePack}
            brand={state.brand}
            onSelectedChange={(v) => updateState("appliancesSelected", v)}
            onPackChange={(v) => updateState("appliancePack", v)}
            onBrandChange={(v) => updateState("brand", v)}
          />
        );
      case 5:
        return (
          <Step6Installation
            value={state.installationType}
            onChange={(v) => updateState("installationType", v)}
          />
        );
      case 6:
        return <Step7Estimate state={state} breakdown={breakdown} onEditStep={goToStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "#EEE7D2" }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero onStartEstimating={handleStartEstimating} showEstimator={showEstimator} />

      {/* Preview / How It Works Section — always visible */}
      {!showEstimator && (
        <PreviewSection onStartEstimating={handleStartEstimating} />
      )}

      {/* Estimator Section */}
      {showEstimator && (
        <section
          ref={estimatorRef}
          className="w-full px-4 lg:px-10 py-12 lg:py-20"
          style={{ backgroundColor: "#EEE7D2" }}
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Step Indicator */}
            <StepIndicator currentStep={currentStep} onStepClick={goToStep} />

            {/* Two-column layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
              {/* Left - Wizard (8 columns) */}
              <div className="flex-1 lg:basis-2/3 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                {currentStep < TOTAL_STEPS - 1 && (
                  <div className="flex items-center justify-between mt-12 gap-4">
                    {currentStep > 0 ? (
                      <button
                        onClick={goBack}
                        className="flex items-center gap-2 px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer hover:-translate-y-[1px] active:scale-[0.98] active:translate-y-0"
                        style={{
                          color: "#696A5A",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          fontWeight: 500,
                          backgroundColor: "rgba(238, 231, 210, 0.45)",
                          border: "1.5px solid rgba(105, 106, 90, 0.12)",
                          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.03)",
                        }}
                      >
                        <ArrowLeft size={16} />
                        Back
                      </button>
                    ) : (
                      <div />
                    )}
                    <PrimaryButton onClick={goNext} showArrow>
                      Continue
                    </PrimaryButton>
                  </div>
                )}

                {/* On final step, show a "Back to Edit" button */}
                {currentStep === TOTAL_STEPS - 1 && (
                  <div className="flex items-center justify-start mt-8">
                    <button
                      onClick={goBack}
                      className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 active:scale-[0.98]"
                      style={{
                        color: "#696A5A",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        backgroundColor: "rgba(255, 255, 255, 0.45)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(105, 106, 90, 0.08)",
                        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <ArrowLeft size={16} />
                      Edit Selections
                    </button>
                  </div>
                )}
              </div>

              {/* Right - Sticky Summary (4 columns) – hidden on final step & mobile */}
              {currentStep < TOTAL_STEPS - 1 && (
                <div className="hidden lg:block lg:basis-1/3 shrink-0">
                  <div className="sticky top-6">
                    <SummaryPanel
                      state={state}
                      breakdown={breakdown}
                      currentStep={currentStep}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Summary Drawer */}
      {showEstimator && currentStep < TOTAL_STEPS - 1 && (
        <MobileSummaryDrawer breakdown={breakdown} />
      )}

      {/* Footer */}
      <footer
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#696A5A" }}
      >
        {/* Subtle top curve from Duck Willow */}
        {showEstimator && (
          <div className="absolute top-0 left-0 right-0 pointer-events-none -translate-y-[99%]">
            <svg
              viewBox="0 0 1440 60"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-[30px] lg:h-[50px]"
            >
              <path
                d="M0 60 L0 30 Q720 0 1440 30 L1440 60 Z"
                fill="#696A5A"
              />
            </svg>
          </div>
        )}

        <div className="mx-auto max-w-[1200px] px-4 lg:px-10 py-14 lg:py-20">
          <div className="flex flex-col items-center text-center gap-6">
            {/* Logo */}
            <img
              src={imgAuraSpacesLogo}
              alt="Aura Spaces"
              style={{
                height: "40px",
                width: "auto",
              }}
            />

            {/* Divider */}
            <div
              className="w-12 h-[1.5px] rounded-full"
              style={{ backgroundColor: "rgba(238, 231, 210, 0.15)" }}
            />

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(238, 231, 210, 0.6)",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                maxWidth: "400px",
              }}
            >
              Design-led kitchens for modern living.
            </p>

            {/* Disclaimer */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(238, 231, 210, 0.3)",
                fontSize: "0.75rem",
                lineHeight: 1.5,
                maxWidth: "360px",
              }}
            >
              All prices are estimates and subject to survey.
              Final cost confirmed after a home visit.
            </p>

            {/* Copyright */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(238, 231, 210, 0.2)",
                fontSize: "0.6875rem",
                letterSpacing: "0.04em",
              }}
            >
              &copy; 2025 Aura Spaces. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile bottom spacer when drawer is visible */}
      {showEstimator && currentStep < TOTAL_STEPS - 1 && (
        <div className="lg:hidden h-24" />
      )}
    </div>
  );
}