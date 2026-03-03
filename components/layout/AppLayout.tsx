"use client";

import { Sidebar } from "./Sidebar";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen w-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="md:hidden">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>


      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 p-6 bg-background transition-colors"
      >
        <div className="md:hidden p-4 border-b border-border">
          <Menu
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
        {children}
      </motion.main>
    </div>
  );
}