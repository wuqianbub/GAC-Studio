"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { easeQuintOut } from "@/components/motion/motion";
import {
  testimonialAssets,
  testimonialCards,
  testimonialsSectionCopy,
} from "@/content/home/testimonials";
import { gacLogoMark } from "@/lib/figmaAssets";

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeQuintOut },
  },
};

function TestimonialCardUI({
  quote,
  name,
  role,
  avatarSrc,
}: {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
}) {
  return (
    <article className="flex w-[min(424px,calc(100vw-40px))] shrink-0 flex-col gap-9 rounded-lg border border-[#f4f4f4] bg-white px-8 pb-12 pt-6 shadow-sm">
      <div className="flex flex-col gap-3.5">
        <div className="flex justify-end">
          <Image
            src={testimonialAssets.clientLogoPlaceholder}
            alt=""
            width={157}
            height={84}
            className="h-[84px] w-auto object-contain object-right"
          />
        </div>
        <p className="min-h-[180px] text-[#364153] text-lg leading-[38px] md:text-[24px]">
          {quote}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={avatarSrc}
          alt=""
          width={56}
          height={56}
          className="size-14 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="text-[#0a0a0a] text-[23px] font-medium leading-tight tracking-[-0.46px]">
            {name}
          </p>
          <p className="text-[#99a1af] text-[17.5px] leading-snug">{role}</p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const loop = [...testimonialCards, ...testimonialCards];

  return (
    <section className="bg-[#f5f5f5] py-[60px] md:py-[80px] desktop:py-[100px]">
      <div className="gac-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16 xl:gap-24">
          <motion.div
            className="flex w-full flex-col justify-between gap-10 lg:max-w-[380px] lg:shrink-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <div className="flex flex-col gap-6">
              <motion.h2
                variants={fade}
                className="text-[#0a0a0a] text-[32px] font-semibold leading-[1.25] md:text-[38px] desktop:text-[42px] desktop:leading-[54px]"
              >
                {testimonialsSectionCopy.title}
              </motion.h2>
              <motion.p
                variants={fade}
                className="text-[#4a5565] text-[17px] leading-relaxed md:text-[18px]"
              >
                {testimonialsSectionCopy.body}
              </motion.p>
            </div>
            <motion.div variants={fade}>
              <Link
                href="/"
                className="relative block h-12 w-[145px] gac-interactive"
                aria-label="返回 GAC 首页"
              >
                <Image
                  src={gacLogoMark}
                  alt=""
                  width={34}
                  height={34}
                  className="absolute left-[7px] top-[7px] object-cover"
                />
                <div className="absolute left-[123px] top-1/2 w-[66px] -translate-y-1/2">
                  <Image
                    src={testimonialAssets.gacLogoUnion}
                    alt="GAC"
                    width={66}
                    height={24}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex min-w-0 flex-1 flex-col gap-9">
            <div className="hidden justify-end gap-4 pr-2 lg:flex">
              <Image
                src={testimonialAssets.arrowPrev}
                alt=""
                width={60}
                height={60}
                className="size-[60px] rotate-180 object-contain"
              />
              <Image
                src={testimonialAssets.arrowNext}
                alt=""
                width={60}
                height={60}
                className="size-[60px] object-contain"
              />
            </div>

            <div className="relative -mx-5 min-w-0 overflow-hidden md:-mx-10 desktop:mx-0">
              <div className="relative overflow-hidden">
                <div className="gac-marquee-track gap-6 pr-6">
                  {loop.map((card, i) => (
                    <TestimonialCardUI
                      key={`${card.id}-${i}`}
                      quote={card.quote}
                      name={card.name}
                      role={card.role}
                      avatarSrc={card.avatarSrc}
                    />
                  ))}
                </div>
                {/* 与区块背景 #f5f5f5 融为一体的左右渐隐，避免卡片硬切 */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[20%] min-w-[72px] max-w-[160px] bg-gradient-to-r from-[#f5f5f5] from-[8%] via-[#f5f5f5]/25 to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[20%] min-w-[56px] max-w-[120px] bg-gradient-to-l from-[#f5f5f5] from-[8%] via-[#f5f5f5]/25 to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
