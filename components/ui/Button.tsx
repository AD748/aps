import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

type Props = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: Props) {
  const base =
    "px-4 py-2 rounded-xl font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-accent text-white hover:opacity-90",
    secondary:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600",
    ghost:
      "hover:bg-gray-100 dark:hover:bg-gray-800",
    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}