"use client";

import { useState } from "react";

const logs = [
  `[09:00:00] I'll begin a systematic penetration test on helpdesk.democorp.com.`,
  `[09:01:00] Good! target is online. Now let me perform port scanning.`,
  `[09:02:00] Apache httpd 2.4.65 on port 80 detected.`,
  `[09:03:00] Found login page. Testing account (test:test).`,
  `[09:06:00] Accessed dashboard using X-UserId: 10032 header.`,
  `Possible IDOR vulnerability detected.`,
];

export function LiveConsole() {
  const [tab, setTab] = useState("activity");

  return (
    <div className="p-6 flex flex-col">     

      
      <div className="flex border-b border-border gap-6 mb-4 text-sm">
        <button
          onClick={() => setTab("activity")}
          className={`p-3 ${tab === "activity" ? "text-accent border-b-2 border-accent" : "text-gray-500"
            }`}
        >
          Activity Log
        </button>
        <button
          onClick={() => setTab("verification")}
          className={`p-3 ${tab === "verification" ? "text-accent border-b-2 border-accent" : "text-gray-500"
            }`}
        >
          Verification Loops
        </button>
      </div>

     
      <div className="flex-1 overflow-y-auto font-mono text-sm space-y-3 text-gray-700 dark:text-gray-300">
        {logs.map((log, i) => (
          <div key={i}>
            {highlight(log)}
          </div>
        ))}
      </div>
    </div>
  );
}

function highlight(text: string) {
  if (text.includes("IDOR")) {
    return <span className="text-red-500 font-semibold">{text}</span>;
  }
  if (text.includes("http")) {
    return <span className="text-accent">{text}</span>;
  }
  return text;
}