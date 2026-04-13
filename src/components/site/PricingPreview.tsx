"use client";

import { motion } from "framer-motion";
import { PillButton } from "@/components/ui/Button";

const plans = [
  {
    name: "基础设计",
    price: "¥8,000",
    desc: "适合初创品牌与单点需求。",
    items: ["基础策略梳理", "2-3 个关键页面/物料", "1 轮修改"],
  },
  {
    name: "主视觉设计",
    price: "¥12,000",
    desc: "适合活动/营销节点的整体呈现。",
    items: ["主视觉方向 2 套", "KV + 延展物料", "2 轮修改"],
    featured: true,
  },
  {
    name: "官网 / 页面",
    price: "¥—",
    desc: "适合需要转化闭环的官网方案。",
    items: ["信息架构与内容建议", "页面视觉与交互", "开发对接（可选）"],
  },
];

export function PricingPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {plans.map((p) => (
        <motion.div
          key={p.name}
          className={[
            "rounded-3xl bg-white ring-1 ring-black/10 p-6",
            "gac-interactive",
            p.featured
              ? "shadow-gac-lift ring-black/15"
              : "hover:shadow-gac-lift",
          ].join(" ")}
          whileHover={{ y: -2 }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold tracking-tight text-[#1A1A1A]">
                {p.name}
              </div>
              <div className="mt-1 text-xs text-black/50">{p.desc}</div>
            </div>
            {p.featured ? (
              <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60">
                推荐
              </span>
            ) : null}
          </div>

          <div className="mt-6 text-3xl font-semibold tracking-tighter text-[#1A1A1A]">
            {p.price}
          </div>

          <ul className="mt-5 space-y-2 text-sm text-black/60 leading-relaxed">
            {p.items.map((it) => (
              <li key={it} className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
                <span>{it}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <PillButton href="/contact" variant={p.featured ? "gradient" : "ghost"} rightIcon>
              立即咨询
            </PillButton>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

