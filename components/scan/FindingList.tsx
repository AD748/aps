import { SeverityBadge } from "@/components/ui/SeverityBadge";

const findings = [
  {
    severity: "critical",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    desc: "Time-based blind SQL injection confirmed.",
  },
  {
    severity: "high",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    desc: "Missing access control checks.",
  },
  {
    severity: "medium",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    desc: "No effective rate limiting detected.",
  },
];

export function FindingList() {
  return (
    <div className="space-y-4 p-6">
      <div className="flex border-b border-border gap-6 mb-4 text-sm">
        <button
          className="p-3"
        >
          Finding Log
        </button>
      </div>

      {findings.map((f, i) => (
        <div
          key={i}
          className="bg-surface border border-border rounded-2xl p-4 space-y-2"
        >
          <div className="flex justify-between items-center">
            <SeverityBadge severity={f.severity as any} />
            <span className="text-xs text-gray-400">10:45:23</span>
          </div>

          <div className="font-medium">{f.title}</div>
          <div className="text-accent text-sm">{f.endpoint}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {f.desc}
          </div>
        </div>
      ))}
    </div>
  );
}