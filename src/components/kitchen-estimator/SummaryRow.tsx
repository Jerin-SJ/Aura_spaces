interface SummaryRowProps {
  label: string;
  value: string;
  highlight?: boolean;
}

export function SummaryRow({ label, value, highlight = false }: SummaryRowProps) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.8125rem",
          fontWeight: 500,
          color: highlight ? "#696A5A" : "rgba(105, 106, 90, 0.6)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.8125rem",
          fontWeight: 700,
          color: highlight ? "#696A5A" : "rgba(105, 106, 90, 0.75)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </span>
    </div>
  );
}
