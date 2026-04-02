import { ArrowRight, ArrowDown, Sparkles, Cpu, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onStartEstimating: () => void;
  showEstimator?: boolean;
}

const KITCHEN_BG =
  "https://images.unsplash.com/photo-1724565843291-9cfbdd818ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJtJTIwa2l0Y2hlbiUyMG9hayUyMGNhYmluZXRzJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc3MTk3NDEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Hero({ onStartEstimating, showEstimator = false }: HeroProps) {
  const handleSeeHow = () => {
    onStartEstimating();
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Full-width kitchen background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={KITCHEN_BG}
          alt="Modern contemporary kitchen with warm oak cabinetry and natural light"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
      </div>

      {/* Soft beige gradient overlay — darker at top, lighter at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(220, 210, 190, 0.55) 0%, rgba(238, 231, 210, 0.42) 35%, rgba(238, 231, 210, 0.38) 65%, rgba(245, 240, 228, 0.35) 100%)",
        }}
      />

      {/* Extra subtle warm tint for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 45%, rgba(238, 231, 210, 0.25) 0%, transparent 80%)",
        }}
      />

      {/* Main content — vertically centred */}
      <div
        className="relative z-10 w-full px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center"
        style={{
          minHeight: "100vh",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Glassmorphism content container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center text-center"
          style={{
            maxWidth: "1100px",
            padding: "clamp(48px, 6vw, 80px) clamp(24px, 4vw, 72px)",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.7)",
            boxShadow:
              "0 0 0 0.5px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.05), 0 24px 64px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Brand pill */}
          

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center mb-7"
          >
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                color: "#3D3E33",
                fontSize: "clamp(2.5rem, 7vw, 4.25rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.035em",
              }}
            >
              Kitchen
            </h1>
            <div className="relative inline-block">
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#3D3E33",
                  fontSize: "clamp(2.5rem, 7vw, 4.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.12,
                  letterSpacing: "-0.035em",
                }}
              >
                Price Estimator
              </h1>
              {/* Orange accent underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-2.5 left-[8%] right-[8%] h-[3.5px] rounded-full origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #D97A43 15%, #D97A43 85%, transparent 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="max-w-[520px] mb-11"
            style={{
              fontFamily: "var(--font-body)",
              color: "#5A5B4D",
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: 1.7,
            }}
          >
            Transparent pricing for design-led, smart-ready kitchens.
            <br className="hidden sm:block" />
            Get your personalised estimate in under two minutes.
          </motion.p>

          {/* Trust indicators with dividers */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mb-12"
          >
            {[
              { icon: <Sparkles size={17} />, text: "Design-led approach" },
              { icon: <Cpu size={17} />, text: "Smart-ready integration" },
              { icon: <Leaf size={17} />, text: "Sustainable materials" },
            ].map((item, index) => (
              <div key={item.text} className="flex items-center">
                {/* Vertical divider (hidden on first item and mobile) */}
                {index > 0 && (
                  <div
                    className="hidden sm:block w-[1px] h-5 mx-6"
                    style={{ backgroundColor: "rgba(105, 106, 90, 0.15)" }}
                  />
                )}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "rgba(135, 163, 159, 0.12)",
                      color: "#7A9E99",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "#5A5B4D",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA group */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary CTA */}
            <motion.button
              onClick={onStartEstimating}
              whileHover={{
                y: -2,
                boxShadow:
                  "0 6px 16px rgba(217, 122, 67, 0.3), 0 20px 48px rgba(217, 122, 67, 0.22)",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 rounded-full px-10 py-[18px] cursor-pointer transition-colors duration-200"
              style={{
                background:
                  "linear-gradient(135deg, #D97A43 0%, #E08B58 100%)",
                color: "#ffffff",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.01em",
                boxShadow:
                  "0 2px 8px rgba(217, 122, 67, 0.2), 0 12px 32px rgba(217, 122, 67, 0.18)",
              }}
            >
              Start Estimating
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center"
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>

            {/* Secondary CTA — outline */}
            <button
              onClick={handleSeeHow}
              className="flex items-center gap-2 rounded-full px-8 py-[18px] cursor-pointer transition-all duration-300 hover:bg-[rgba(105,106,90,0.06)] active:scale-[0.97]"
              style={{
                color: "#5A5B4D",
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                border: "1.5px solid rgba(105, 106, 90, 0.22)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              See how it works
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.65)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textShadow: "0 1px 4px rgba(0,0,0,0.15)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            size={16}
            style={{
              color: "rgba(255, 255, 255, 0.55)",
              filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.15))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Curved section divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-[60px] lg:h-[100px]"
        >
          <path
            d="M0 120 L0 60 Q360 0 720 40 Q1080 80 1440 20 L1440 120 Z"
            fill={showEstimator ? "#EEE7D2" : "#696A5A"}
          />
        </svg>
      </div>
    </section>
  );
}
