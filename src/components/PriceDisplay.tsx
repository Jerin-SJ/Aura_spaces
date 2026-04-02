interface PriceDisplayProps {
  range: string;
  label?: string;
}

export function PriceDisplay({ range, label }: PriceDisplayProps) {
  return (
    <div className="flex flex-col items-start gap-1">
      {label && (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            fontWeight: 500,
            color: "rgba(105, 106, 90, 0.5)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {label}
        </span>
      )}
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "#696A5A",
          lineHeight: 1.2,
          letterSpacing: "-0.03em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {range}
      </span>
    </div>
  );
}
