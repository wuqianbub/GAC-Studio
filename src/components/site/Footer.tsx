import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { footerCopy } from "@/content/home/footer";
import { PRICING_DETAIL_SERVICES_HREF } from "@/content/pricingPage";
import {
  caseSocialBehance,
  caseSocialShare,
  caseSocialYoutube,
  gacLogoWord,
} from "@/lib/figmaAssets";

const footerNav = [
  { href: "/", label: "首页" },
  { href: "/cases", label: "案例" },
  { href: PRICING_DETAIL_SERVICES_HREF, label: "服务" },
  { href: "/pricing", label: "价格" },
  { href: "/about", label: "关于" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="gac-container py-14 md:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-[320px]">
            <Link href="/" className="relative block h-[100px] w-[304px] max-w-full">
              <span className="sr-only">GAC</span>
              <Image
                src={gacLogoWord}
                alt="GAC"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-white/55">{footerCopy.companyLine}</p>
          </div>

          <nav
            className="flex flex-col gap-2 text-[15px] leading-7 text-white/85"
            aria-label="页脚导航"
          >
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="gac-interactive w-max hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="max-w-[280px] space-y-1 text-[15px] leading-6 text-white/70">
            <p>
              <span className="text-white/50">Email：</span>
              <a
                href={`mailto:${footerCopy.email}`}
                className="gac-interactive hover:text-white"
              >
                {footerCopy.email}
              </a>
            </p>
            <p>
              <span className="text-white/50">Tel：</span>
              <a
                href={`tel:${footerCopy.tel.replace(/\s/g, "")}`}
                className="gac-interactive hover:text-white"
              >
                {footerCopy.tel}
              </a>
            </p>
            <p className="capitalize">{footerCopy.location}</p>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <Link
              href="/"
              className="relative block h-8 w-[152px] opacity-90 gac-interactive"
              aria-label="返回首页"
            >
              <Image
                src={gacLogoWord}
                alt=""
                fill
                className="object-contain object-left brightness-0 invert lg:object-right"
              />
            </Link>
            <div className="flex gap-2.5">
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="gac-interactive flex size-8 items-center justify-center rounded bg-[#0d0d0d] hover:opacity-90"
                aria-label="Behance"
              >
                <Image
                  src={caseSocialBehance}
                  alt=""
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gac-interactive flex size-8 items-center justify-center rounded bg-[#0d0d0d] hover:opacity-90"
                aria-label="YouTube"
              >
                <Image
                  src={caseSocialYoutube}
                  alt=""
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </a>
              <button
                type="button"
                className="gac-interactive flex size-8 items-center justify-center rounded bg-black/90 hover:opacity-90"
                aria-label="分享"
              >
                <Image
                  src={caseSocialShare}
                  alt=""
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </button>
            </div>
            <button
              type="button"
              className="gac-interactive flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10"
            >
              <Globe className="size-4 opacity-80" aria-hidden />
              {footerCopy.langLabel}
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/45 md:text-left">
          © {new Date().getFullYear()} GAC Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
