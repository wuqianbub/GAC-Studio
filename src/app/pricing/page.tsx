import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EndingSection } from "@/components/site/EndingSection";
import { FadeIn } from "@/components/motion/FadeIn";
import { PricingDownloadBanner } from "@/components/pricing/PricingDownloadBanner";
import { PricingPageTiersSection } from "@/components/pricing/PricingPageTiersSection";
import { DetailServiceCard } from "@/components/pricing/DetailServiceCard";
import { PricingHashScroll } from "@/components/pricing/PricingHashScroll";
import { PricingPageFaqSection } from "@/components/pricing/PricingPageFaqSection";
import {
  PRICING_DETAIL_SERVICES_ANCHOR_ID,
  pricingDetailCardDomId,
  pricingPageDetailSection,
  pricingPageHero,
  pricingDetailCards,
  pricingPageMainSection,
} from "@/content/pricingPage";
import type { Metadata } from "next";

const heroBg =
  "linear-gradient(rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.72) 27.696%, rgba(255, 255, 255, 0.93) 61.431%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(8, 112, 248) 0%, rgb(75, 172, 255) 32.674%, rgb(177, 198, 253) 66.758%, rgb(255, 221, 183) 100%)";

export const metadata: Metadata = {
  title: "价格 | GAC Design Studio",
  description:
    "主视觉设计与细分服务参考报价。欢迎联系我们获取更精准的定制报价。",
};

export default function PricingPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-[color:var(--foreground)]">
      <PricingHashScroll />
      <Navbar />

      <main className="flex-1">
        <section className="w-full" style={{ backgroundImage: heroBg }}>
          <div className="gac-container">
            <FadeIn className="flex flex-col items-center pt-[140px] pb-[72px] md:pb-[96px]">
              <div className="flex h-[30px] items-center gap-3">
                <div className="size-[11.719px] rounded-full bg-black" />
                <p className="text-[#4a5565] text-[20.509px] leading-[29.298px] tracking-[-0.2203px]">
                  {pricingPageHero.eyebrow}
                </p>
              </div>

              <div className="mt-10 text-center font-light text-[#0a0a0a] leading-none md:mt-12">
                <p className="text-[52px] md:text-[96px] lg:text-[118px]">
                  {pricingPageHero.titleLine1}
                </p>
                <p className="mt-1 text-[52px] md:text-[96px] lg:text-[118px]">
                  {pricingPageHero.titleLine2}
                </p>
              </div>

              <div className="mt-10 max-w-[720px] text-center font-light text-[#4a5565] text-[16px] leading-relaxed tracking-[0.103px] md:mt-12 md:text-[20px] md:leading-8 lg:text-[22px]">
                <p>{pricingPageHero.bodyLine1}</p>
                <p className="mt-3">{pricingPageHero.bodyLine2}</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <PricingPageTiersSection
          title={pricingPageMainSection.title}
          subtitle={pricingPageMainSection.subtitle}
        />

        <div className="bg-white pb-10 pt-2">
          <div className="gac-container flex justify-center">
            <PricingDownloadBanner variant="xlsx" />
          </div>
        </div>

        <section
          id={PRICING_DETAIL_SERVICES_ANCHOR_ID}
          className="scroll-mt-[88px] bg-white pb-[60px] pt-6 md:pb-[80px] md:pt-8 desktop:pb-[100px]"
        >
          <div className="gac-container flex flex-col items-center gap-12 desktop:gap-[60px]">
            <div className="flex max-w-[900px] flex-col items-center gap-[18px] text-center">
              <h2 className="text-[#0a0a0a] text-[36px] font-semibold leading-tight tracking-[0.37px] md:text-[42px] desktop:text-[51.124px]">
                {pricingPageDetailSection.title}
              </h2>
              <p className="font-light text-[#4a5565] text-[18px] leading-[28px] md:text-[20px] desktop:text-[22px] desktop:leading-[30px]">
                {pricingPageDetailSection.subtitle}
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 [grid-auto-rows:1fr] md:grid-cols-2 xl:grid-cols-3">
              {pricingDetailCards.slice(0, 3).map((card) => (
                <div
                  key={card.id}
                  id={pricingDetailCardDomId(card.id)}
                  className="scroll-mt-[88px] flex min-h-0 h-full"
                >
                  <DetailServiceCard card={card} />
                </div>
              ))}
            </div>
            <div className="grid w-full grid-cols-1 gap-6 [grid-auto-rows:1fr] md:grid-cols-2 xl:grid-cols-3">
              {pricingDetailCards.slice(3, 6).map((card) => (
                <div
                  key={card.id}
                  id={pricingDetailCardDomId(card.id)}
                  className="scroll-mt-[88px] flex min-h-0 h-full"
                >
                  <DetailServiceCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingPageFaqSection />
        <EndingSection />
      </main>

      <Footer />
    </div>
  );
}
