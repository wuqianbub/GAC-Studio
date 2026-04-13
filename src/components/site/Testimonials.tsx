"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { PillButton } from "@/components/ui/Button";

const quotes = [
  {
    name: "合作伙伴 A",
    role: "品牌负责人",
    quote:
      "沟通高效，交付审美在线，方案落地后数据明显提升。最重要的是对品牌策略理解很到位。",
  },
  {
    name: "合作伙伴 B",
    role: "市场负责人",
    quote:
      "从策略到视觉一气呵成，细节把控很强，动效和版式都让人放心，后续还会继续合作。",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <FadeIn className="space-y-4">
        <div className="text-xs text-black/50">高标准的设计与交付</div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-[#1A1A1A]">
          让每一次合作都更放心
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-black/60">
          我们坚持清晰的流程与可追溯的交付标准。你只需要专注业务，我们负责把视觉与体验做到位。
        </p>
        <div className="pt-2">
          <PillButton href="/contact" variant="black" rightIcon>
            立即咨询
          </PillButton>
        </div>
      </FadeIn>

      <div className="grid gap-4">
        {quotes.map((q) => (
          <FadeIn key={q.name}>
            <div className="rounded-3xl bg-white ring-1 ring-black/10 p-6">
              <div className="text-sm leading-relaxed text-black/70">
                “{q.quote}”
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold tracking-tight text-[#1A1A1A]">
                    {q.name}
                  </div>
                  <div className="text-xs text-black/50">{q.role}</div>
                </div>
                <div className="h-9 w-9 rounded-full bg-black/5" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

