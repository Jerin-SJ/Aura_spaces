import { Activity } from "lucide-react";
import { motion } from "motion/react";
import { PriceBreakdown } from "./pricing";

interface MobileSummaryDrawerProps {
  breakdown: PriceBreakdown;
}

export function MobileSummaryDrawer({ breakdown }: MobileSummaryDrawerProps) {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.82)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.5)",
        boxShadow:
          "0 -2px 8px rgba(0, 0, 0, 0.03), 0 -8px 32px rgba(0, 0, 0, 0.06)",
        borderTopLeftRadius: "28px",
        borderTopRightRadius: "28px",
      }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <motion.div
          className="flex items-center gap-2.5"
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
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "rgba(105, 106, 90, 0.5)",
            }}
          >
            Estimated range updating…
          </span>
        </motion.div>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            fontWeight: 500,
            color: "rgba(105, 106, 90, 0.35)",
          }}
        >
          Final step reveals total
        </span>
      </div>
    </div>
  );
}
