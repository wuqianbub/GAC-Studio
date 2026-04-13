"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { easeQuintOut } from "@/components/motion/motion";
import { CaseStudyCard } from "@/components/cases/CaseStudyCard";
import { FeaturedCaseVideo } from "@/components/site/FeaturedCaseVideo";
import {
  homeCasesRow1,
  homeCasesRow3,
  homeCasesStackLeft,
} from "@/content/cases";
import { HOME_FEATURED_VIDEO_SRC } from "@/content/home/featuredVideo";
import { serviceSectionLinkIcon } from "@/lib/figmaAssets";

const sectionStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const gridStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeQuintOut },
  },
};

export function CasesSection({
  featuredVideoSrc = HOME_FEATURED_VIDEO_SRC,
}: {
  /** 默认加载 `public/videos/` 下视频；覆盖请传绝对路径如 `/videos/xxx.mp4` */
  featuredVideoSrc?: string;
}) {
  return (
    <section className="bg-white py-[60px] md:py-[80px] desktop:py-[100px]">
      <motion.div
        className="gac-container flex flex-col items-center gap-10 desktop:gap-[60px]"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div
          variants={staggerItem}
          className="flex w-full flex-col items-center gap-[18px] text-center"
        >
          <h2 className="text-[#0a0a0a] text-[36px] font-semibold leading-tight tracking-[0.37px] md:text-[42px] desktop:text-[51.124px] desktop:leading-[51.124px]">
            我们的案例
          </h2>
          <p className="max-w-[900px] text-[#4a5565] text-[18px] font-normal leading-[28px] md:text-[20px] md:leading-[29px] desktop:text-[22px] desktop:leading-[30px]">
            与顶级品牌合作，创造具有影响力的设计作品
          </p>
        </motion.div>

        <motion.div
          variants={gridStagger}
          className="flex w-full max-w-[1280px] flex-col gap-12"
        >
          <div className="grid grid-cols-1 gap-6 [grid-auto-rows:1fr] md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {homeCasesRow1.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="flex h-full min-h-0"
              >
                <CaseStudyCard item={item} />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:gap-6">
            <motion.div
              variants={staggerItem}
              className="flex w-full shrink-0 flex-col gap-6 xl:w-[410.667px]"
            >
              {homeCasesStackLeft.map((item) => (
                <CaseStudyCard key={item.id} item={item} />
              ))}
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="min-w-0 flex-1 xl:min-h-[602px]"
            >
              <FeaturedCaseVideo defaultSrc={featuredVideoSrc} />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6 [grid-auto-rows:1fr] md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {homeCasesRow3.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="flex h-full min-h-0"
              >
                <CaseStudyCard item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={staggerItem}>
          <Link
            href="/cases"
            className="gac-interactive inline-flex items-center gap-2 text-black hover:opacity-80"
          >
            <span className="text-[17px] font-medium leading-[25.562px] tracking-[-0.3328px]">
              查看所有案例
            </span>
            <Image
              src={serviceSectionLinkIcon}
              alt=""
              width={22}
              height={22}
              className="size-[21.302px]"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
