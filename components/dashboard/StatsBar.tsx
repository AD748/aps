import { Card } from "@/components/ui/Card";
import { Ban, TriangleAlertIcon, Search } from "lucide-react";

const stats = [
  { label: "Critical Severity", count: 86, change: "+2%", color: "text-severity-critical", icon: Ban },
  { label: "High Severity", count: 16, change: "+0.9%", color: "text-severity-high", icon: TriangleAlertIcon },
  { label: "Medium Severity", count: 26, change: "-0.9%", color: "text-severity-medium", icon: TriangleAlertIcon },
  { label: "Low Severity", count: 16, change: "+0.9%", color: "text-severity-low", icon: Search },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <Card key={s.label} className="space-y-2">
          <div className="flex items-center gap-5">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{s.label}</p>
            <s.icon className={`w-8 h-8 ${s.color}`} />
          </div>
          <div className="flex items-end gap-2">
            <span className={`text-3xl font-semibold text-black dark:text-white`}>
              {s.count}
            </span>
            <span className={`text-xs font-medium ${s.color}`}>
              {s.change} increase than yesterday
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}