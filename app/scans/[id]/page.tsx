"use client";

import { AppLayout } from "@/components/layout/AppLayout";
import { ScanProgressHeader } from "@/components/scan/ScanProgressHeader";
import { LiveConsole } from "@/components/scan/LiveConsole";
import { FindingList } from "@/components/scan/FindingList";
import { StatusBar } from "@/components/scan/StatusBar";
import { useState } from "react";
import { scans } from "@/lib/mockData";
import { useParams } from "next/navigation";
import { Clock, ChevronDown, X } from "lucide-react";

export default function ScanDetailPage() {
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(true);
  const params = useParams();
  const id = Number(params.id)-1;
  return (
    <AppLayout>
      <div className="space-y-6">

        <ScanProgressHeader progress={scans[id].progress}/>

        {show && (
          <div className="flex flex-col border border-border rounded-2xl">
            <div className="flex justify-between items-center mb-4 rounded-2xl bg-surface p-6">
              <div className="flex items-center font-semibold space-x-2">

                <div className="rounded-full bg-accent w-2 h-2"/>

                <p>
                  Live Scan Console
                </p>
                <span className="flex gap-2 items-center text-xs bg-gray-200 dark:bg-gray-500 px-2 py-1 rounded-full">
                <Clock className="w-3 h-3 inline mr-1"/> Running...
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="cursor-pointer" onClick={()=> setOpen(!open)}><ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}/></span>
                <span className="cursor-pointer" onClick={()=> setShow(!show)}><X className="w-4 h-4"/></span>
              </div>
            </div>

            {open && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                <div className="lg:col-span-2 border-r border-border">
                  <LiveConsole />
                </div>
    
                <div className="lg:col-span-1">
                  <FindingList />
                </div>
              </div>
            )}
          </div>
        )}


        <StatusBar />
      </div>
    </AppLayout>
  );
}