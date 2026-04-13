import Image from "next/image";
import {
  caseDetailUiCopy,
  type CaseDetailPageContent,
} from "@/content/cases/detail";
import { getCaseBySlug } from "@/content/cases";
import { CaseStudyCard } from "@/components/cases/CaseStudyCard";
import { PillButton } from "@/components/ui/Button";
import { heroArrowIcon } from "@/lib/figmaAssets";

const detailHeroBg =
  "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgb(255, 255, 255) 10.472%)";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-3xl border-2 border-[#e5e7eb] bg-white py-9 pl-9 pr-12">
      <p className="text-[#0a0a0a] text-[28px] font-medium leading-tight md:text-[32px]">
        {value}
      </p>
      <p className="text-[#4a5565] text-lg leading-[30px] md:text-[22px]">
        {label}
      </p>
    </div>
  );
}

export function CaseDetailView({ detail }: { detail: CaseDetailPageContent }) {
  const related = detail.relatedSlugs
    .map((s) => getCaseBySlug(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <section
        className="w-full pb-[60px] pt-[100px] md:pb-20 md:pt-[120px]"
        style={{ backgroundImage: detailHeroBg }}
      >
        <div className="gac-container flex max-w-[1280px] flex-col gap-12 md:gap-[60px]">
          <header className="flex flex-col gap-6">
            <h1 className="text-left text-[#0a0a0a] text-[32px] font-semibold leading-tight tracking-[0.37px] md:text-[42px] desktop:text-[51.124px] desktop:leading-[1.05]">
              {detail.headline}
            </h1>
            <div className="flex flex-wrap gap-4">
              {detail.tags.map((t) => (
                <span
                  key={t}
                  className="rounded border-2 border-[#e5e7eb] px-7 py-2 text-center text-[#6a7282] text-lg md:text-2xl"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="max-w-[1280px] text-[#4a5565] text-lg leading-[30px] md:text-[22px]">
              {detail.intro}
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {detail.stats.map((s) => (
                <StatCard key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </header>

          <div className="relative w-full max-w-[1280px] overflow-hidden rounded-2xl">
            <div className="relative aspect-video w-full">
              <Image
                src={detail.heroImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
          </div>

          {detail.blocks.map((block, i) => {
            if (block.kind === "text") {
              return (
                <div
                  key={`${block.title}-${i}`}
                  className="flex max-w-[1280px] flex-col gap-4"
                >
                  <h2 className="text-[#0a0a0a] text-[28px] font-medium leading-[1.2] md:text-[32px]">
                    {block.title}
                  </h2>
                  <p className="text-[#4a5565] text-lg leading-[30px] md:text-[22px]">
                    {block.body}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={`${block.title}-${i}`}
                className="flex w-full max-w-[1280px] flex-col gap-12"
              >
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#0a0a0a] text-[28px] font-medium leading-[1.2] md:text-[32px]">
                    {block.title}
                  </h2>
                  {block.intro ? (
                    <p className="text-[#4a5565] text-lg leading-[30px] md:text-[22px]">
                      {block.intro}
                    </p>
                  ) : null}
                </div>
                {block.rows.map((row, ri) => (
                  <div
                    key={ri}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6"
                  >
                    {[row.left, row.right].map((cell) => (
                      <div
                        key={cell.caption}
                        className="flex min-w-0 flex-col gap-6"
                      >
                        <p className="text-[#4a5565] text-xl font-medium leading-[1.2] md:text-2xl">
                          {cell.caption}
                        </p>
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                          <Image
                            src={cell.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 640px"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}

          <div className="flex max-w-[1280px] flex-col gap-4">
            <h2 className="text-[#0a0a0a] text-[28px] font-medium leading-[1.2] md:text-[32px]">
              {detail.designPhilosophy.title}
            </h2>
            <div className="space-y-4 text-[#4a5565] text-lg leading-[30px] md:text-[22px]">
              {detail.designPhilosophy.paragraphs.map((p, pi) => (
                <p key={pi}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-[60px] md:py-20">
        <div className="gac-container flex max-w-[1280px] flex-col gap-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[#0a0a0a] text-[28px] font-semibold leading-tight tracking-[0.37px] md:text-[32px]">
              {caseDetailUiCopy.relatedTitle}
            </h2>
            <div className="flex flex-wrap gap-4">
              <PillButton
                href="/cases"
                variant="ghost"
                className="h-10 min-w-[130px] justify-center border border-[#262626] px-6 text-base"
              >
                {caseDetailUiCopy.allCases}
              </PillButton>
              <PillButton
                href="/contact"
                variant="black"
                className="h-10 min-w-[130px] justify-center px-6 text-base"
              >
                <span className="inline-flex items-center gap-1">
                  {caseDetailUiCopy.contactUs}
                  <Image
                    src={heroArrowIcon}
                    alt=""
                    width={13}
                    height={11}
                    className="opacity-95"
                  />
                </span>
              </PillButton>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 [grid-auto-rows:1fr] md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {related.map((item) => (
              <div key={item.id} className="flex h-full min-h-0">
                <CaseStudyCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
