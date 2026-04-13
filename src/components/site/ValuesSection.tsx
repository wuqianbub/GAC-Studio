"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { easeQuintOut } from "@/components/motion/motion";
import { valueCards, valuesSectionCopy } from "@/content/home/values";
import { serviceCardLinkIcon } from "@/lib/figmaAssets";

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeQuintOut },
  },
};

export function ValuesSection() {
  return (
    <section className="bg-[#f5f5f5] py-[48px] md:py-[56px] desktop:py-[60px]">
      <div className="gac-container flex flex-col items-center gap-10 desktop:gap-12">
        <motion.div
          className="flex flex-col items-center gap-[18px] text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h2
            variants={item}
            className="text-[#0a0a0a] text-[36px] font-semibold leading-tight tracking-[0.37px] md:text-[42px] desktop:text-[51.124px] desktop:leading-[51.124px]"
          >
            {valuesSectionCopy.title}
          </motion.h2>
          <motion.p
            variants={item}
            className="max-w-[760px] text-[#4a5565] text-[18px] leading-[28px] md:text-[20px] desktop:text-[22px] desktop:leading-[30px]"
          >
            {valuesSectionCopy.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
        >
          {valueCards.map((v, idx) => (
            <motion.div
              key={v.id}
              variants={item}
              className="relative h-[min(387px,70vh)] min-h-[280px] overflow-hidden rounded-2xl"
            >
              <Image
                src={v.imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 302px"
                priority={idx === 0}
              />
              <div
                className={`absolute top-[34%] w-[min(282px,calc(100%-20px))] rounded-lg bg-[#0b0b0b] px-4 py-9 ${
                  idx >= 2
                    ? "left-1/2 -translate-x-1/2"
                    : "left-2.5 sm:left-2.5"
                }`}
              >
                <div className="flex flex-col gap-5">
                  <p className="text-[24px] font-semibold text-white">
                    {v.title}
                  </p>
                  <p className="text-[#dbdbdb] text-[15px] leading-relaxed md:text-[16px]">
                    {v.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="gac-interactive inline-flex items-center gap-2 text-[#090909] hover:opacity-80"
          >
            <span className="text-[17px] font-medium leading-[25.562px] tracking-[-0.3328px]">
              {valuesSectionCopy.ctaLabel}
            </span>
            <Image
              src={serviceCardLinkIcon}
              alt=""
              width={22}
              height={22}
              className="size-[21.302px]"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
