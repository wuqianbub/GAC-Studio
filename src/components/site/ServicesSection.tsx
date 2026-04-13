"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { easeQuintOut } from "@/components/motion/motion";
import {
  PRICING_DETAIL_SERVICES_HREF,
  pricingHrefDetailCard,
  pricingHrefMainVisual,
} from "@/content/pricingPage";
import {
  serviceCardBrandBg,
  serviceCardDigitalBg,
  serviceCardEventBg,
  serviceCardLinkIcon,
  serviceCardVideoBg,
  serviceSectionLinkIcon,
} from "@/lib/figmaAssets";

const sectionStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const cardGridStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeQuintOut },
  },
};

type ServiceCardSpec = {
  title: string;
  description: string;
  image: string;
  dayNumber: string;
  /** 价格页深链 */
  pricingHref: string;
};

const SERVICE_CARDS: ServiceCardSpec[] = [
  {
    title: "品牌视觉设计",
    description: "打造独特品牌视觉识别系统",
    image: serviceCardBrandBg,
    dayNumber: "12",
    pricingHref: pricingHrefDetailCard("brand"),
  },
  {
    title: "活动营销设计",
    description: "创意营销视觉与H5互动",
    image: serviceCardEventBg,
    dayNumber: "7",
    pricingHref: pricingHrefMainVisual(),
  },
  {
    title: "数字产品设计",
    description: "App/Web界面与体验设计",
    image: serviceCardDigitalBg,
    dayNumber: "15",
    pricingHref: pricingHrefDetailCard("web"),
  },
  {
    title: "视频与内容制作",
    description: "动态视觉与3D创意内容",
    image: serviceCardVideoBg,
    dayNumber: "10",
    pricingHref: pricingHrefDetailCard("video"),
  },
];

function DayTag({ value }: { value: string }) {
  return (
    <span className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-black px-3.5 text-[13px] font-semibold leading-none tracking-tight text-white whitespace-nowrap min-[380px]:px-4 min-[380px]:text-sm">
      {value}天+
    </span>
  );
}

function CardLinkRow({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[#090909] transition-opacity duration-300 group-hover:opacity-80 ${className ?? ""}`}
    >
      <span className="text-[17px] font-medium leading-[25.562px] tracking-[-0.3328px]">
        查看所有服务
      </span>
      <Image
        src={serviceCardLinkIcon}
        alt=""
        width={22}
        height={22}
        className="size-[21.302px]"
      />
    </span>
  );
}

function ServiceCard({
  spec,
  className,
}: {
  spec: ServiceCardSpec;
  className?: string;
}) {
  return (
    <Link
      href={spec.pricingHref}
      className={`group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl px-5 py-9 xl:h-[387px] xl:min-h-0 gac-interactive ${className ?? ""}`}
    >
      <Image
        src={spec.image}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 1280px) 100vw, 25vw"
      />
      <div className="relative z-[1] w-full min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <p className="min-w-0 flex-1 truncate text-[#0a0a0a] text-xl font-semibold leading-tight md:text-[22px] desktop:text-[24px]">
            {spec.title}
          </p>
          <DayTag value={spec.dayNumber} />
        </div>
        <p className="mt-2 text-[#4a5565] text-[15px] leading-normal md:text-[16px] desktop:text-[17px] whitespace-nowrap overflow-hidden text-ellipsis">
          {spec.description}
        </p>
      </div>
      <div className="relative z-[1]">
        <CardLinkRow />
      </div>
    </Link>
  );
}

export function ServicesSection() {
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
          className="flex w-full flex-col items-center gap-[17px] text-center"
        >
          <h2 className="text-[#0a0a0a] text-[36px] font-semibold leading-tight tracking-[0.37px] md:text-[42px] desktop:text-[51.124px] desktop:leading-[51.124px]">
            我们的服务
          </h2>
          <p className="max-w-[720px] text-[#4a5565] text-[17px] font-normal leading-[26px] tracking-[-0.48px] md:text-[19px] md:leading-[28px] desktop:text-[21.302px] desktop:leading-[29.822px]">
            为品牌提供全方位的创意设计解决方案
          </p>
        </motion.div>

        <motion.div
          variants={cardGridStagger}
          className="grid w-full max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6"
        >
          {SERVICE_CARDS.map((spec) => (
            <motion.div
              key={spec.title}
              variants={staggerItem}
              className="min-w-0"
            >
              <ServiceCard spec={spec} className="h-full w-full" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={staggerItem}>
          <Link
            href={PRICING_DETAIL_SERVICES_HREF}
            className="gac-interactive inline-flex items-center gap-2 text-black hover:opacity-80"
          >
            <span className="text-[17px] font-medium leading-[25.562px] tracking-[-0.3328px]">
              查看所有服务
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
