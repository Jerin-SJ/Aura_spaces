import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  showArrow?: boolean;
  type?: "button" | "submit";
}

export function PrimaryButton({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  showArrow = false,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 rounded-full px-8 py-4 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-[1px] active:scale-[0.98] active:translate-y-0 ${fullWidth ? "w-full" : ""}`}
      style={{
        background: "linear-gradient(135deg, #D97A43 0%, #E08B58 100%)",
        color: "#ffffff",
        fontFamily: "var(--font-body)",
        fontSize: "0.9375rem",
        fontWeight: 600,
        letterSpacing: "0.01em",
        boxShadow:
          "0 2px 8px rgba(217, 122, 67, 0.2), 0 8px 28px rgba(217, 122, 67, 0.2), 0 16px 48px rgba(217, 122, 67, 0.1)",
      }}
    >
      {children}
      {showArrow && <ArrowRight size={17} />}
    </button>
  );
}
