"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "black" | "gradient" | "ghost";
  rightIcon?: boolean;
  className?: string;
};

export function PillButton({
  children,
  href,
  variant = "black",
  rightIcon,
  className,
}: Props) {
  const base =
    "gac-interactive inline-flex items-center justify-center gap-2 rounded-full px-5 text-sm font-medium tracking-tight whitespace-nowrap";

  const styles =
    variant === "gradient"
      ? "bg-gac-accent text-white hover:brightness-110"
      : variant === "ghost"
        ? "bg-white text-[color:var(--foreground)] ring-1 ring-black/10 hover:bg-black/5"
        : "bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]";

  const content = (
    <span className="inline-flex items-center gap-2">
      {children}
      {rightIcon ? <ArrowRight className="h-4 w-4" /> : null}
    </span>
  );

  const inner =
    variant === "black" ? (
      <span className="relative inline-flex">
        <span
          aria-hidden
          className="absolute -inset-1 rounded-full bg-gac-rainbow blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-70"
        />
        <span className="relative">{content}</span>
      </span>
    ) : (
      content
    );

  const Comp = (
    <motion.span
      whileHover={{ y: variant === "black" ? -1 : 0 }}
      whileTap={{ scale: 0.98 }}
      className={`group ${base} h-11 ${styles} ${variant === "black" ? "gac-rainbow-ring-15" : ""} ${className ?? ""}`}
    >
      {inner}
    </motion.span>
  );

  if (href) return <Link href={href}>{Comp}</Link>;
  return <button type="button">{Comp}</button>;
}

