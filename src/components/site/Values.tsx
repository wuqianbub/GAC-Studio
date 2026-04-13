"use client";

import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const values = [
  {
    title: "策略优先",
    desc: "先把目标和路径讲清楚，再谈视觉表现。",
    img: "/values/value-1.jpg",
  },
  {
    title: "审美在线",
    desc: "用克制的设计语言，做耐看的品牌资产。",
    img: "/values/value-2.jpg",
  },
  {
    title: "交付透明",
    desc: "明确节点与产出，让合作过程可预期。",
    img: "/values/value-3.jpg",
  },
  {
    title: "长期主义",
    desc: "让系统能扩展，让品牌越做越强。",
    img: "/values/value-4.jpg",
  },
];

export function Values() {
  return (
    <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {values.map((v) => (
        <StaggerItem key={v.title}>
          <div className="group relative overflow-hidden rounded-3xl ring-1 ring-black/10 bg-black/[0.02]">
            <div className="absolute inset-0">
              <Image
                src={v.img}
                alt=""
                fill
                className="object-cover opacity-0 group-hover:opacity-100 gac-interactive"
                unoptimized
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 gac-interactive" />
            </div>

            <div className="relative p-6 min-h-[220px] flex flex-col justify-end">
              <div className="text-sm font-semibold tracking-tight text-[#1A1A1A] group-hover:text-white gac-interactive">
                {v.title}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-black/60 group-hover:text-white/80 gac-interactive">
                {v.desc}
              </div>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

