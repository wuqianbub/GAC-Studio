"use client";

import { useCallback, useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { easeQuintOut } from "@/components/motion/motion";
import {
  CASES_INITIAL_COUNT,
  CASES_LOAD_MORE_STEP,
  casesCatalogAll,
  casesPageCopy,
} from "@/content/cases";
import { CaseStudyCard } from "./CaseStudyCard";

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeQuintOut },
  },
};

function chunkIntoRows<T>(items: T[], cols: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += cols) {
    rows.push(items.slice(i, i + cols));
  }
  return rows;
}

export function CasesPageGrid() {
  const [visibleCount, setVisibleCount] = useState(CASES_INITIAL_COUNT);

  const visible = useMemo(
    () => casesCatalogAll.slice(0, visibleCount),
    [visibleCount],
  );

  const hasMore = visibleCount < casesCatalogAll.length;

  const loadMore = useCallback(() => {
    setVisibleCount((n) =>
      Math.min(n + CASES_LOAD_MORE_STEP, casesCatalogAll.length),
    );
  }, []);

  const rows = chunkIntoRows(visible, 3);

  return (
    <div className="flex w-full max-w-[1280px] flex-col gap-12">
      {rows.map((row, rowIndex) => (
        <motion.div
          key={`row-${rowIndex}-${row.map((c) => c.id).join("-")}`}
          className="grid grid-cols-1 gap-6 [grid-auto-rows:1fr] md:grid-cols-2 xl:grid-cols-3 xl:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-24px" }}
          variants={{
            show: {
              transition: { staggerChildren: 0.08, delayChildren: 0.02 },
            },
          }}
        >
          {row.map((item) => (
            <motion.div key={item.id} variants={fade} className="flex h-full min-h-0">
              <CaseStudyCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      ))}

      <div className="flex flex-col items-center gap-2">
        {hasMore ? (
          <button
            type="button"
            onClick={loadMore}
            className="gac-interactive inline-flex items-center gap-2 text-black hover:opacity-80"
          >
            <span className="text-[17px] font-medium leading-[25.562px] tracking-[-0.3328px]">
              {casesPageCopy.loadMore}
            </span>
            <ChevronDown className="size-5" strokeWidth={2} aria-hidden />
          </button>
        ) : (
          <p className="text-[15px] text-[#6a7282]">{casesPageCopy.noMore}</p>
        )}
      </div>
    </div>
  );
}
