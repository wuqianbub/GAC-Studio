"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/content/cases";
import {
  caseGacLogoWordUnion,
  gacLogoMark,
} from "@/lib/figmaAssets";

function CaseGacLogoLink() {
  return (
    <Link
      href="/"
      className="pointer-events-auto absolute left-4 top-4 z-[2] block h-5 w-[61px] gac-interactive"
      aria-label="返回 GAC 首页"
    >
      <span className="relative block h-full w-full">
        <Image
          src={gacLogoMark}
          alt=""
          width={14}
          height={14}
          className="absolute left-[3px] top-[3px] object-cover"
        />
        <span className="absolute left-[21px] top-1/2 block w-[28px] -translate-y-1/2">
          <Image
            src={caseGacLogoWordUnion}
            alt=""
            width={28}
            height={10}
            className="h-[10px] w-auto object-contain"
          />
        </span>
      </span>
    </Link>
  );
}

export function CaseStudyCard({ item }: { item: CaseStudy }) {
  const caseHref = `/cases/${item.slug}`;

  return (
    <motion.div
      className="group flex h-full w-full max-w-[410.667px] flex-col gap-6 [-webkit-tap-highlight-color:transparent] xl:max-w-none"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-t-lg shadow-[0_10px_36px_-14px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.06] transition-[box-shadow,ring-color] duration-500 ease-quint-out group-hover:shadow-[0_22px_44px_-14px_rgba(15,23,42,0.2)] group-hover:ring-black/[0.1]">
        <Link
          href={caseHref}
          className="absolute inset-0 z-0 block rounded-t-lg outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label={item.title}
        >
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 ease-quint-out group-hover:scale-[1.04]"
            sizes="(max-width: 1280px) 100vw, 410px"
          />
        </Link>
        <CaseGacLogoLink />
      </div>
      <div className="flex items-center justify-between gap-3">
        <Link
          href={caseHref}
          className="min-w-0 flex-1 rounded-sm gac-interactive outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <p className="truncate text-[#0a0a0a] text-xl font-light leading-normal transition-colors duration-300 group-hover:text-[#171717] md:text-[22px] desktop:text-[24px]">
            {item.title}
          </p>
        </Link>
        <div className="flex shrink-0 gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-sm border border-[#e5e7eb] px-3.5 py-1 text-center text-[12px] font-normal text-[#6a7282] whitespace-nowrap transition-colors duration-300 group-hover:border-[#d1d5dc] group-hover:text-[#4b5563]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
