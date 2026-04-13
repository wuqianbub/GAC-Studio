"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { easeQuintOut } from "@/components/motion/motion";
import { PricingDownloadBanner } from "@/components/pricing/PricingDownloadBanner";
import { PricingTierCard } from "@/components/pricing/PricingTierCard";
import { pricingSectionCopy, pricingTiers } from "@/content/home/pricing";
import { serviceSectionLinkIcon } from "@/lib/figmaAssets";

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeQuintOut },
  },
};

export function PricingSection() {
  return (
    <section className="bg-white pb-[60px] pt-[48px] md:pb-[80px] md:pt-[56px] desktop:pb-[100px] desktop:pt-[60px]">
      <div className="gac-container flex flex-col items-center gap-12 desktop:gap-[60px]">
        <motion.div
          className="flex flex-col items-center gap-[18px] text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h2
            variants={fade}
            className="text-[#0a0a0a] text-[36px] font-semibold leading-tight tracking-[0.37px] md:text-[42px] desktop:text-[51.124px] desktop:leading-[51.124px]"
          >
            {pricingSectionCopy.title}
          </motion.h2>
          <motion.p
            variants={fade}
            className="max-w-[900px] font-light text-[#4a5565] text-[18px] leading-[28px] md:text-[20px] desktop:text-[22px] desktop:leading-[30px]"
          >
            {pricingSectionCopy.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
        >
          {pricingTiers.map((tier) => (
            <motion.div key={tier.id} variants={fade} className="flex min-h-[560px]">
              <PricingTierCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>

        <PricingDownloadBanner variant="xlsx" />

        <Link
          href={pricingSectionCopy.moreLinkHref}
          className="gac-interactive inline-flex items-center gap-2 text-[#090909] hover:opacity-80"
        >
          <span className="text-[17px] font-medium leading-[25.562px] tracking-[-0.3328px]">
            {pricingSectionCopy.moreLinkLabel}
          </span>
          <Image
            src={serviceSectionLinkIcon}
            alt=""
            width={22}
            height={22}
            className="size-[21.302px]"
          />
        </Link>
      </div>
    </section>
  );
}
