"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { ScanSearchIcon, LayoutDashboard, ClipboardCopy, CalendarCheck2, Bell, Settings, Info, X  } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const nav = [
  {name: "Dashboard", icon: LayoutDashboard},
  {name: "Projects", icon: ClipboardCopy},
  {name: "Scans", icon: ScanSearchIcon},
  {name: "Schedule", icon: CalendarCheck2},
  {name: "Notifications", icon: Bell},
  {name: "Settings", icon: Settings},
  {name: "Support", icon: Info},
];

export function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen?: boolean;
  setIsOpen?: (v: boolean) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="w-64 h-full hidden md:flex flex-col bg-surface-light dark:bg-surface-dark border-r border-border p-6">
        <div className="flex gap-4 text-4xl font-semibold mb-8 text-accent">
          <div className="bg-accent w-12 h-12 rounded-full relative z-1"> <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-6 h-6 rounded-full z-2"></span></div>
          aps
        </div>

        <nav className="flex flex-col gap-2">
          {nav.map((item,idx) => (
            <div
              key={idx}
              className={cn(
                "px-3 py-2 rounded-xl cursor-pointer transition font-medium",
                pathname.includes(item.name.toLowerCase())
                  ? "bg-accent/20 text-accent"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-black/80 dark:text-gray-400"
              )}
              onClick={() => router.push(`/${item.name.toLowerCase()}/${item.name === "Scans" ? "/1" : ""}`)}
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                {item.name}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <ThemeToggle />
          <div className="text-sm">
            <div>admin@edu.com</div>
            <div className="text-gray-500 text-xs">Security Lead</div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white dark:bg-black md:hidden"
              onClick={() => setIsOpen?.(false)}
            />

            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "tween" }}
              className="fixed top-0 left-0 h-full w-full p-6 z-50 md:hidden"
            >
              <div className="flex justify-end mb-6">
                <X
                  className="cursor-pointer"
                  onClick={() => setIsOpen?.(!isOpen)}
                />
              </div>

              <div className="flex gap-4 text-4xl font-semibold mb-8 text-accent">
                <div className="bg-accent w-12 h-12 rounded-full relative z-1"> <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-6 h-6 rounded-full z-2"></span></div>
                aps
              </div>

              <nav className="flex flex-col gap-2">
                {nav.map((item,idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "px-3 py-2 rounded-xl cursor-pointer transition font-medium",
                      pathname.includes(item.name.toLowerCase())
                        ? "bg-accent/20 text-accent"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 text-black/80 dark:text-gray-400"
                    )}
                    onClick={() => router.push(`/${item.name.toLowerCase()}/${item.name === "Scans" ? "/1" : ""}`)}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </div>
                  </div>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <ThemeToggle />
                <div className="text-sm">
                  <div>admin@edu.com</div>
                  <div className="text-gray-500 text-xs">Security Lead</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}