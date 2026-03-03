"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/login/Input";
import { SocialButton } from "@/components/login/SocialButton";
import { useRouter } from "next/navigation";

export function LoginCard() {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const handleCreateAccount = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    setIsLogin(true);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    router.push("/dashboard");
  };


  return (
    <div className="w-full max-w-md bg-white dark:bg-surface-dark rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-border-dark">

      <div className="text-center text-black mb-6">
        <h2 className="text-2xl font-semibold">{isLogin ? "Log in" : "Sign up"}</h2>
        <p>
          Already have an account?{" "}
          <span className="text-accent cursor-pointer underline" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Sign up" : "Log in"}</span>
        </p>
      </div>

      {!isLogin ? (
        <form
          onSubmit={handleCreateAccount}
          className="space-y-4"
        >
          <Input label="First name*" />
          <Input label="Last name*" />
          <Input label="Email address*" type="email" />
          <Input label="Password (8+ characters)*" type="password" />

          <div className="flex items-start gap-2 text-sm text-black">
            <input type="checkbox" className="" />
            <p>
              I agree to Aps’s{" "}
              <span className="text-blue-500">Terms & Conditions</span> and acknowledge the{" "}
              <span className="text-blue-500">Privacy Policy</span>
            </p>
          </div>

          <Button type="submit" className="w-full mt-2">
            {loading ? "Creating..." : "Create account"}
          </Button>
        </form>
      ) : (
        <form
        onSubmit={handleLogin}
        className="space-y-4"
      >
        <Input label="Email address*" type="email" />
        <Input label="Password (8+ characters)*" type="password" />

        <Button type="submit" className="w-full mt-2">
          {loading ? "Logging in..." : "Log in"}
        </Button>
      </form>
      )}

      <div className="my-6 flex items-center gap-4 text-gray-400 text-sm">
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        OR
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="flex gap-3">
        <SocialButton variant="apple" />
        <SocialButton variant="google" />
        <SocialButton variant="meta" />
      </div>
    </div>
  );
}