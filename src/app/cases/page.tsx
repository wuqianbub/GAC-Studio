import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EndingSection } from "@/components/site/EndingSection";
import { CasesPageGrid } from "@/components/cases/CasesPageGrid";
import { casesPageCopy } from "@/content/cases";

const casesHeroBg =
  "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgb(255, 255, 255) 10.472%)";

export const metadata: Metadata = {
  title: "案例 | GAC Design Studio",
  description: casesPageCopy.subtitle,
};

export default function CasesPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-[color:var(--foreground)]">
      <Navbar />

      <main className="flex-1">
        <section
          className="w-full"
          style={{ backgroundImage: casesHeroBg }}
        >
          <div className="gac-container flex flex-col items-center gap-12 pb-[60px] pt-[160px] md:gap-[60px]">
            <div className="flex max-w-[1280px] flex-col items-center gap-[18px] text-center">
              <h1 className="text-[#0a0a0a] text-[36px] font-semibold leading-tight tracking-[0.37px] md:text-[42px] desktop:text-[51.124px] desktop:leading-[51.124px]">
                {casesPageCopy.title}
              </h1>
              <p className="max-w-[900px] text-[#4a5565] text-[18px] font-normal leading-[28px] md:text-[20px] md:leading-[29px] desktop:text-[22px] desktop:leading-[30px]">
                {casesPageCopy.subtitle}
              </p>
            </div>

            <CasesPageGrid />
          </div>
        </section>

        <EndingSection />
      </main>

      <Footer />
    </div>
  );
}
