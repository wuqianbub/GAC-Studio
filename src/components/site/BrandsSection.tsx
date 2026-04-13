"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { easeQuintOut } from "@/components/motion/motion";
import {
  brandLogos,
  brandsSectionCopy,
  type BrandLogoItem,
} from "@/content/home/brands";

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeQuintOut },
  },
};

function BrandCell({ item }: { item: BrandLogoItem }) {
  if (item.kind === "dual") {
    return (
      <div
        className={`flex w-full items-center justify-center gap-2 ${item.className ?? ""}`}
      >
        <Image
          src={item.leftSrc}
          alt=""
          width={120}
          height={40}
          className="max-h-[38px] w-auto object-contain object-center"
        />
        <Image
          src={item.rightSrc}
          alt=""
          width={120}
          height={40}
          className="max-h-[38px] w-auto object-contain object-center"
        />
      </div>
    );
  }

  return (
    <div className="flex h-[105px] w-full items-center justify-center px-2">
      <Image
        src={item.src}
        alt={item.alt}
        width={196}
        height={105}
        className={
          item.className ??
          "h-auto max-h-[105px] w-auto max-w-[196px] object-contain object-center"
        }
      />
    </div>
  );
}

export function BrandsSection() {
  return (
    <section className="bg-white py-[60px] md:py-[80px] desktop:py-[100px]">
      <div className="gac-container flex flex-col items-center gap-10 desktop:gap-[60px]">
        <motion.div
          className="flex flex-col items-center gap-[18px] text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.h2
            variants={staggerItem}
            className="text-[#0a0a0a] text-[36px] font-semibold leading-tight tracking-[0.37px] md:text-[42px] desktop:text-[51.124px] desktop:leading-[51.124px]"
          >
            {brandsSectionCopy.title}
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="max-w-[640px] text-[#4a5565] text-[18px] leading-[28px] md:text-[20px] desktop:text-[22px] desktop:leading-[30px]"
          >
            {brandsSectionCopy.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid w-full grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10 xl:gap-x-[75px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            show: {
              transition: { staggerChildren: 0.04, delayChildren: 0.05 },
            },
          }}
        >
          {brandLogos.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="flex w-full min-w-0 justify-center"
            >
              <BrandCell item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
