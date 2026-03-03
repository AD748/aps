"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { StatusChip } from "@/components/ui/StatusChip";
import { cn } from "@/lib/utils";
import { SlidersHorizontal, Columns2, Plus, SkipBack, SkipForward } from "lucide-react";
import { useRouter } from "next/navigation";

export function ScanTable({ data }: any) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [showNewModal, setShowNewModal] = useState(false);

  const filtered = useMemo(() => {
    return data
      .filter((scan: any) =>
        scan.name.toLowerCase().includes(search.toLowerCase()) ||
        scan.type.toLowerCase().includes(search.toLowerCase())
      )
      .filter((scan: any) =>
        statusFilter ? scan.status === statusFilter : true
      );
  }, [data, search, statusFilter]);


  const totalPages = Math.ceil(filtered.length / pageSize);

  const paginated = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="bg-surface dark:bg-gray-900 border border-border rounded-2xl p-6">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search scans by name or type..."
          className="flex-1 p-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-border focus:border-accent outline-none"
        />

        <div className="flex flex-wrap gap-2">
          <Button variant="secondary"
          className="flex gap-2 h-fit items-center"
          onClick={() =>
              setStatusFilter(
                statusFilter === "Completed" ? "Failed" :
                statusFilter === "Failed" ? "Scheduled" :
                statusFilter === "Scheduled" ? null :
                "Completed"
              )
            }>
            <SlidersHorizontal className="w-4 h-4"/> Filter {statusFilter ? `: ${statusFilter}` : ""}
          </Button>
          
          <Button variant="secondary" className="flex gap-2 h-fit items-center">
            <Columns2 className="w-4 h-4"/> Column
          </Button>
          
          <Button onClick={() => setShowNewModal(true)} className="flex gap-2 h-fit items-center">
            <Plus className="w-4 h-4"/> New scan
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-250 text-sm table-fixed">
          <thead className="text-left text-gray-500 dark:text-gray-400">
            <tr>
              <th className="pb-3">Scan Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Vulnerability</th>
              <th>Last Scan</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border rounded-2xl">
            {paginated.map((scan: any) => (
              <tr
                key={scan.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition hover:cursor-pointer"
                onClick={() => router.push(`/scans/${scan.id}`)}
              >
                <td className="p-4 font-medium">{scan.name}</td>
                <td>{scan.type}</td>
                <td><StatusChip status={scan.status} /></td>

                <td>
                  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${scan.progress}%` }}
                    />
                  </div>
                </td>

                <td>
                  <div className="flex gap-1">
                    <Badge color="bg-severity-critical">{scan.vulnerabilities.critical}</Badge>
                    <Badge color="bg-severity-high">{scan.vulnerabilities.high}</Badge>
                    <Badge color="bg-severity-medium text-black">{scan.vulnerabilities.medium}</Badge>
                    <Badge color="bg-severity-low">{scan.vulnerabilities.low}</Badge>
                  </div>
                </td>

                <td className="text-gray-500 dark:text-gray-400">
                  {scan.lastScan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-xs text-black/70 dark:text-gray-400">
          Showing {paginated.length} of {filtered.length} Scans
        </div>
        <div className="flex gap-2">
          <motion.button className="px-3 py-1 text-xs rounded-md border hover:cursor-pointer"
            whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            <SkipBack className="w-4 h-4"/>
          </motion.button>
          
          <motion.button className="px-3 py-1 text-xs rounded-md border hover:cursor-pointer"
            whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            <SkipForward className="w-4 h-4"/>
          </motion.button>
        </div>
      </div>

      {showNewModal && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-surface rounded-2xl p-6 w-96 space-y-4">
            <h3 className="font-semibold">Create New Scan</h3>
            <p className="text-sm text-muted">
              This is a mock modal for the assessment.
            </p>
            <Button onClick={() => setShowNewModal(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Badge({ children, color }: any) {
  return (
    <span className={cn(
      "px-2 py-1 text-xs rounded-md text-white font-medium",
      color
    )}>
      {children}
    </span>
  );
}