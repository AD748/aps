"use client";

import { motion } from "framer-motion";
import { LoginCard } from "@/components/login/LoginCard";
import { LoginHero } from "@/components/login/LoginHero";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row relative">
      <div className="h-full fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(12,200,168,0.4),transparent_50%),radial-gradient(circle_at_80%_90%,rgba(255,115,0,0.3),transparent_50%),linear-gradient(135deg,#0A0F1A,#111827)]"/>
 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 relative overflow-hidden"
      >
        <LoginHero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 flex items-center justify-center bg-background-light dark:bg-background-dark p-6"
      >
        <LoginCard />
      </motion.div>
    </div>
  );
}