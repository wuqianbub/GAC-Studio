"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import type { CaseStudy } from "@/content/cases";
import { PRICING_DETAIL_SERVICES_HREF } from "@/content/pricingPage";
import {
  defaultSearchSpotlight,
  searchSiteCases,
  searchSitePages,
  type SiteSearchPageHit,
} from "@/lib/siteSearch";

export function NavSearchPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const q = query.trim();
  const caseHits = useMemo(() => searchSiteCases(q), [q]);
  const pageHits = useMemo(() => searchSitePages(q), [q]);
  const spotlight = useMemo(() => defaultSearchSpotlight(), []);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const t = window.setTimeout(() => inputRef.current?.focus(), 10);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleNavigate = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!open) return null;

  const showSpotlight = !q;
  const showEmpty =
    !showSpotlight && caseHits.length === 0 && pageHits.length === 0;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col pt-[80px]">
      <button
        type="button"
        aria-label="关闭搜索"
        className="absolute inset-0 top-[80px] bg-black/35 backdrop-blur-[2px] gac-interactive"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="搜索"
        className="relative z-[1] mx-auto w-full max-h-[min(72vh,640px)] overflow-hidden rounded-b-2xl border border-[#e5e7eb] bg-white shadow-[0_24px_80px_-20px_rgba(15,23,42,0.25)] md:max-w-[min(100%,720px)]"
      >
        <div className="flex items-center gap-3 border-b border-[#e5e7eb] px-4 py-3 md:px-5">
          <Search
            className="size-5 shrink-0 text-[#6a7282]"
            strokeWidth={1.75}
            aria-hidden
          />
          <input
            ref={inputRef}
            type="search"
            autoComplete="off"
            placeholder="搜索项目、品牌、分类或页面…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-[17px] text-[#0a0a0a] outline-none placeholder:text-[#9ca3af] md:text-lg"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭"
            className="flex size-9 shrink-0 items-center justify-center rounded-full hover:bg-black/[0.06] gac-interactive"
          >
            <X className="size-5 text-[#4a5565]" strokeWidth={1.75} />
          </button>
        </div>

        <div className="max-h-[min(60vh,520px)] overflow-y-auto overscroll-contain px-2 py-3 md:px-3">
          {showSpotlight ? (
            <>
              <p className="px-2 pb-2 text-xs font-medium tracking-wide text-[#6a7282] uppercase">
                热门项目
              </p>
              <ul className="flex flex-col gap-0.5">
                {spotlight.map((c) => (
                  <CaseRow key={c.slug} c={c} onPick={handleNavigate} />
                ))}
              </ul>
              <p className="mt-4 px-2 pb-2 text-xs font-medium tracking-wide text-[#6a7282] uppercase">
                快捷入口
              </p>
              <div className="flex flex-wrap gap-2 px-2 pb-2">
                <QuickChip href="/cases" label="全部案例" onNavigate={handleNavigate} />
                <QuickChip
                  href={PRICING_DETAIL_SERVICES_HREF}
                  label="细分服务"
                  onNavigate={handleNavigate}
                />
                <QuickChip href="/pricing" label="价格" onNavigate={handleNavigate} />
                <QuickChip href="/contact" label="联系" onNavigate={handleNavigate} />
              </div>
            </>
          ) : null}

          {!showSpotlight && pageHits.length > 0 ? (
            <section className="mb-2">
              <h3 className="px-2 pb-1.5 text-xs font-medium text-[#6a7282]">
                页面
              </h3>
              <ul className="flex flex-col gap-0.5">
                {pageHits.map((p) => (
                  <PageRow key={p.href} p={p} onPick={handleNavigate} />
                ))}
              </ul>
            </section>
          ) : null}

          {!showSpotlight && caseHits.length > 0 ? (
            <section>
              <h3 className="px-2 pb-1.5 text-xs font-medium text-[#6a7282]">
                项目
              </h3>
              <ul className="flex flex-col gap-0.5">
                {caseHits.map((c) => (
                  <CaseRow key={c.id} c={c} onPick={handleNavigate} />
                ))}
              </ul>
            </section>
          ) : null}

          {showEmpty ? (
            <p className="px-3 py-8 text-center text-[#6a7282] text-sm leading-relaxed">
              没有找到「{q}」相关结果。
              <br />
              <Link
                href="/cases"
                onClick={handleNavigate}
                className="mt-2 inline-block font-medium text-[#0a0a0a] underline decoration-[#d1d5dc] underline-offset-4 hover:decoration-[#0a0a0a] gac-interactive"
              >
                浏览全部案例
              </Link>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CaseRow({
  c,
  onPick,
}: {
  c: CaseStudy;
  onPick: () => void;
}) {
  return (
    <li>
      <Link
        href={`/cases/${c.slug}`}
        onClick={onPick}
        className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-[#f5f5f5] gac-interactive"
      >
        <span className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-[#f3f4f6]">
          <Image
            src={c.image}
            alt=""
            fill
            className="object-cover"
            sizes="48px"
          />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate font-medium text-[#0a0a0a] text-[15px] leading-snug">
            {c.title}
          </span>
          <span className="mt-0.5 flex flex-wrap gap-1.5 text-[12px] text-[#6a7282]">
            {c.tags.map((t) => (
              <span key={t} className="rounded bg-[#f3f4f6] px-1.5 py-0.5">
                {t}
              </span>
            ))}
          </span>
        </span>
      </Link>
    </li>
  );
}

function PageRow({
  p,
  onPick,
}: {
  p: SiteSearchPageHit;
  onPick: () => void;
}) {
  return (
    <li>
      <Link
        href={p.href}
        onClick={onPick}
        className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-[#f5f5f5] gac-interactive"
      >
        <span className="font-medium text-[#0a0a0a] text-[15px]">{p.title}</span>
        <span className="text-[13px] text-[#6a7282]">{p.hint}</span>
      </Link>
    </li>
  );
}

function QuickChip({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="rounded-full border border-[#e5e7eb] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#364153] hover:border-[#d1d5dc] hover:bg-[#fafafa] gac-interactive"
    >
      {label}
    </Link>
  );
}
