import Image from "next/image";
import { Navbar } from "@/components/site/Navbar";
import { ServicesSection } from "@/components/site/ServicesSection";
import { CasesSection } from "@/components/site/CasesSection";
import { BrandsSection } from "@/components/site/BrandsSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ValuesSection } from "@/components/site/ValuesSection";
import { PricingSection } from "@/components/site/PricingSection";
import { EndingSection } from "@/components/site/EndingSection";
import { Footer } from "@/components/site/Footer";
import { FadeIn } from "@/components/motion/FadeIn";
import { PillButton } from "@/components/ui/Button";
import { heroArrowIcon } from "@/lib/figmaAssets";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-[color:var(--foreground)]">
      <Navbar />

      <main className="flex-1">
        <section
          className="w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.72) 27.696%, rgba(255, 255, 255, 0.93) 61.431%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(8, 112, 248) 0%, rgb(75, 172, 255) 32.674%, rgb(177, 198, 253) 66.758%, rgb(255, 221, 183) 100%)",
          }}
        >
          <div className="gac-container">
            <FadeIn className="flex flex-col items-center pt-[140px] pb-[104px]">
              <div className="flex items-center gap-[12px] h-[30px]">
                <div className="bg-black rounded-full size-[11.719px]" />
                <p className="text-[#4a5565] text-[20.509px] leading-[29.298px] tracking-[-0.2203px] font-normal">
                  GAC Design Studio
                </p>
              </div>

              <div className="mt-[42px] text-center font-light text-[#0a0a0a] leading-none">
                <p className="text-[64px] md:text-[134px]">设计驱动</p>
                <p className="text-[64px] md:text-[134px] mt-1">品牌增长</p>
              </div>

              <p className="mt-[42px] max-w-[958.047px] text-center font-light text-[#4a5565] text-[16px] md:text-[24px] tracking-[0.103px] leading-snug">
                GAC 是一家全球创意公司，通过艺术、设计和技术将品牌、故事、和视觉变为现实。为品牌提供战略性设计服务，创造有商业价值的视觉解决方案。
              </p>

              <div className="mt-[56px] flex flex-col sm:flex-row gap-[24px]">
                <PillButton
                  href="/contact"
                  variant="black"
                  className="h-[80px] w-[234px] border border-[#1964d5] border-[1.465px] text-[23.438px] tracking-[-0.4578px] px-[47.465px] py-[25.465px]"
                >
                  <span className="inline-flex items-center gap-[16px]">
                    联系我们
                    <Image src={heroArrowIcon} alt="" width={29} height={29} />
                  </span>
                </PillButton>

                <PillButton
                  href="/cases"
                  variant="ghost"
                  className="h-[80px] w-[234px] border border-[#262626] border-[1.465px] text-[#101828] text-[23.438px] tracking-[-0.4578px]"
                >
                  查看案例
                </PillButton>
              </div>
            </FadeIn>
          </div>
        </section>

        <ServicesSection />

        <CasesSection />

        <BrandsSection />
        <TestimonialsSection />
        <ValuesSection />
        <PricingSection />
        <EndingSection />
      </main>

      <Footer />
    </div>
  );
}
