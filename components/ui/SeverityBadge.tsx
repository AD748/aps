type Severity = "critical" | "high" | "medium" | "low";

export function SeverityBadge({ severity }: { severity: Severity }) {
  const map = {
    critical: "bg-severity-critical text-white",
    high: "bg-severity-high text-white",
    medium: "bg-severity-medium text-black",
    low: "bg-severity-low text-white",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${map[severity]}`}>
      {severity.charAt(0).toUpperCase() + severity.slice(1)}
    </span>
  );
}
