"use client";

import { useEffect, useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { StatsBar } from "@/components/dashboard/StatsBar";
import { ScanTable } from "@/components/dashboard/ScanTable";
import { scans } from "@/lib/mockData";
import { Skeleton } from "@/components/ui/Skeleton";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";
import { Home, RefreshCcw } from "lucide-react";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AppLayout>
      <div className="w-screen lg:w-full space-y-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 w-full">
          <div className="flex lg:justify-between items-center gap-2">
            <p className="flex gap-4 text-lg font-semibold"> Scan <Home className="w-5"/> /</p>
            <h2 className="">Private Assets /</h2>
            <h2 className="text-accent"> New Scan</h2>
          </div>

          <div className="flex lg:justify-between items-center gap-2">
            <Button variant="secondary" className="border rounded-md text-black border-black bg-white dark:bg-black dark:text-white dark:border-white transition-all duration-75" onClick={()=> toast.success("Scan exported successfully!")}>
              Export Scan
            </Button>
            <Button className="border rounded-md text-red-500 bg-red-400/20 border-red-500" onClick={()=> toast.error("Scan stopped!")}>
              Stop Scan
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-wrap lg:flex-row border border-border lg:items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-3 gap-y-5 p-4 rounded-2xl dark:bg-gray-900">
          <div className="flex flex-wrap gap-6">
            <span>Org: <strong className="text-gray-800 dark:text-white">Project X</strong></span>
            <span className="w-0.5 h-5 bg-gray-400 dark:bg-white"/>
            <span>Owner: <strong className="text-gray-800 dark:text-white">Nammagiri</strong></span>
            <span className="w-0.5 h-5 bg-gray-400 dark:bg-white"/>
            <span>Total Scans: <strong className="text-gray-800 dark:text-white">100</strong></span>
            <span className="w-0.5 h-5 bg-gray-400 dark:bg-white"/>
            <span>Scheduled: <strong className="text-gray-800 dark:text-white">1000</strong></span>
            <span className="w-0.5 h-5 bg-gray-400 dark:bg-white"/>
            <span>Rescans: <strong className="text-gray-800 dark:text-white">100</strong></span>
            <span className="w-0.5 h-5 bg-gray-400 dark:bg-white"/>
            <span>Failed Scans: <strong className="text-gray-800 dark:text-white">100</strong></span>
          </div>
          <span className="flex items-center gap-2"><RefreshCcw className="w-4 h-4 text-accent"/>10 mins ago</span>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-28 rounded-2xl" />
              ))}
            </div>
          ) : (
            <StatsBar />
          )}
        </div>

        {loading ? (
          <Skeleton className="h-96 rounded-2xl " />
        ) : (
          <ScanTable data={scans} />
        )}
      </div>
    </AppLayout>
  );
}