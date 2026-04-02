import { motion } from "motion/react";
import { ArrowRight, Layers, SlidersHorizontal, Calculator } from "lucide-react";

interface PreviewSectionProps {
  onStartEstimating: () => void;
}

export function PreviewSection({ onStartEstimating }: PreviewSectionProps) {
  const steps = [
    {
      icon: <Layers size={20} />,
      step: "01",
      title: "Choose Your Collection",
      desc: "Select from three curated tiers designed for every lifestyle.",
    },
    {
      icon: <SlidersHorizontal size={20} />,
      step: "02",
      title: "Configure Your Kitchen",
      desc: "Layout, worktops, appliances, and installation preferences.",
    },
    {
      icon: <Calculator size={20} />,
      step: "03",
      title: "Get Your Estimate",
      desc: "Transparent pricing with a full breakdown, updated in real time.",
    },
  ];

  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: "#696A5A" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 lg:px-10 py-20 lg:py-28">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-6"
            style={{
              backgroundColor: "rgba(238, 231, 210, 0.08)",
              border: "1px solid rgba(238, 231, 210, 0.1)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "rgba(238, 231, 210, 0.55)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            How It Works
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              color: "#EEE7D2",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Three simple steps to
            <br />
            your kitchen estimate
          </h2>
        </motion.div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-16 lg:mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[28px] p-7 lg:p-8 flex flex-col gap-5"
              style={{
                backgroundColor: "rgba(238, 231, 210, 0.06)",
                border: "1px solid rgba(238, 231, 210, 0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Icon + step number */}
              <div className="flex items-center justify-between">
                <div
                  className="w-11 h-11 rounded-[14px] flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(217, 122, 67, 0.12)",
                    color: "#D97A43",
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "rgba(238, 231, 210, 0.08)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {step.step}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#EEE7D2",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    marginBottom: "6px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(238, 231, 210, 0.5)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blurred estimator preview card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] overflow-hidden mx-auto max-w-[900px]"
          style={{
            border: "1px solid rgba(238, 231, 210, 0.08)",
          }}
        >
          {/* Mock estimator interface — blurred preview */}
          <div
            className="p-8 lg:p-12"
            style={{
              backgroundColor: "rgba(238, 231, 210, 0.04)",
              backdropFilter: "blur(2px)",
            }}
          >
            {/* Mock step indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <div key={n} className="flex items-center flex-1">
                  <div
                    className="w-7 h-7 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor:
                        n <= 2
                          ? "rgba(217, 122, 67, 0.5)"
                          : "rgba(238, 231, 210, 0.08)",
                    }}
                  />
                  {n < 7 && (
                    <div
                      className="flex-1 h-[1.5px] mx-1"
                      style={{
                        backgroundColor:
                          n < 2
                            ? "rgba(217, 122, 67, 0.3)"
                            : "rgba(238, 231, 210, 0.06)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Mock content blocks */}
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 space-y-4">
                {/* Mock heading block */}
                <div
                  className="h-5 w-48 rounded-lg"
                  style={{
                    backgroundColor: "rgba(238, 231, 210, 0.1)",
                  }}
                />
                <div
                  className="h-3 w-72 rounded-md"
                  style={{
                    backgroundColor: "rgba(238, 231, 210, 0.05)",
                  }}
                />

                {/* Mock cards */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="rounded-[18px] p-5 h-24"
                      style={{
                        backgroundColor:
                          n === 1
                            ? "rgba(217, 122, 67, 0.08)"
                            : "rgba(238, 231, 210, 0.04)",
                        border:
                          n === 1
                            ? "1px solid rgba(217, 122, 67, 0.2)"
                            : "1px solid rgba(238, 231, 210, 0.06)",
                      }}
                    >
                      <div
                        className="h-3 w-20 rounded-md mb-2"
                        style={{
                          backgroundColor:
                            n === 1
                              ? "rgba(217, 122, 67, 0.2)"
                              : "rgba(238, 231, 210, 0.08)",
                        }}
                      />
                      <div
                        className="h-2 w-28 rounded-sm"
                        style={{
                          backgroundColor: "rgba(238, 231, 210, 0.04)",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock summary panel */}
              <div
                className="hidden lg:block w-[240px] shrink-0 rounded-[22px] p-6"
                style={{
                  backgroundColor: "rgba(238, 231, 210, 0.04)",
                  border: "1px solid rgba(238, 231, 210, 0.06)",
                }}
              >
                <div
                  className="h-4 w-24 rounded-md mb-5"
                  style={{ backgroundColor: "rgba(238, 231, 210, 0.1)" }}
                />
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="flex justify-between mb-3"
                  >
                    <div
                      className="h-2.5 w-16 rounded-sm"
                      style={{
                        backgroundColor: "rgba(238, 231, 210, 0.06)",
                      }}
                    />
                    <div
                      className="h-2.5 w-12 rounded-sm"
                      style={{
                        backgroundColor: "rgba(238, 231, 210, 0.06)",
                      }}
                    />
                  </div>
                ))}
                <div
                  className="mt-4 pt-4"
                  style={{
                    borderTop:
                      "1px solid rgba(238, 231, 210, 0.06)",
                  }}
                >
                  <div
                    className="h-5 w-32 rounded-md"
                    style={{
                      backgroundColor: "rgba(238, 231, 210, 0.08)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Overlay gradient with CTA */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(105, 106, 90, 0.3) 0%, rgba(105, 106, 90, 0.7) 100%)",
              backdropFilter: "blur(3px)",
            }}
          >
            <motion.button
              onClick={onStartEstimating}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full px-8 py-4 cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #D97A43 0%, #E08B58 100%)",
                color: "#ffffff",
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                fontWeight: 600,
                boxShadow:
                  "0 4px 12px rgba(217, 122, 67, 0.25), 0 16px 40px rgba(217, 122, 67, 0.2)",
              }}
            >
              Try the Estimator
              <ArrowRight size={17} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Curved transition back to Duck Willow */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-[40px] lg:h-[70px]"
        >
          <path
            d="M0 80 L0 40 Q720 0 1440 40 L1440 80 Z"
            fill="#EEE7D2"
          />
        </svg>
      </div>
    </section>
  );
}
