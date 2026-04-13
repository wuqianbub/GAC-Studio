import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CaseDetailView } from "@/components/cases/CaseDetailView";
import { casesCatalogAll } from "@/content/cases";
import { getCaseDetailContent } from "@/content/cases/detail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return casesCatalogAll.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getCaseDetailContent(slug);
  if (!detail) return { title: "案例" };
  return {
    title: `${detail.headline.replace(/\s*\([^)]*\)\s*$/, "").trim()} | GAC Design Studio`,
    description: detail.intro.slice(0, 120),
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = getCaseDetailContent(slug);
  if (!detail) notFound();

  return (
    <div className="flex flex-1 flex-col bg-white text-[color:var(--foreground)]">
      <Navbar />

      <main className="flex-1">
        <CaseDetailView detail={detail} />
      </main>

      <Footer />
    </div>
  );
}
