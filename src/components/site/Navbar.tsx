"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PillButton } from "../ui/Button";
import { NavSearchPanel } from "@/components/site/NavSearchPanel";
import { gacLogoMark, gacLogoWord, navSearchIcon } from "@/lib/figmaAssets";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/cases", label: "案例" },
  { href: "/pricing", label: "价格" },
  { href: "/contact", label: "联系" },
];

const navUnderline =
  "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(17, 76, 164) 41.827%, rgb(25, 100, 213) 65.385%, rgb(141, 140, 244) 79.327%, rgb(255, 131, 106) 90.865%, rgb(255, 197, 128) 100%)";

function navItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setSearchOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <NavSearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
      <div
        className={[
          "gac-interactive w-full",
          "backdrop-blur-[10px] border-b border-[rgba(229,231,235,0.5)]",
          scrolled ? "bg-white/80" : "bg-white/60",
        ].join(" ")}
      >
        <div className="gac-container h-[80px] flex items-center justify-between">
          <div className="flex items-center gap-[48px]">
            <Link href="/" className="relative h-[36px] w-[108.9px]">
              <span className="sr-only">GAC</span>
              <Image
                src={gacLogoWord}
                alt=""
                width={50}
                height={18}
                className="absolute left-[42px] top-[calc(50%+1px)] -translate-y-1/2 h-[18.004px] w-auto"
              />
              <Image
                src={gacLogoMark}
                alt=""
                width={26}
                height={26}
                className="absolute left-[5.4px] top-[5.4px] h-[25.2px] w-[25.665px]"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-[60px] text-[20px]">
              {navItems.map((it) => {
                const active = navItemActive(pathname, it.href);
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    className={[
                      "relative flex h-[29px] min-w-[42px] items-center justify-center whitespace-nowrap gac-interactive",
                      active
                        ? "font-medium text-black"
                        : "font-medium text-[#4a5565] hover:text-black",
                    ].join(" ")}
                  >
                    {it.label}
                    {active ? (
                      <span
                        className="absolute left-1/2 top-[39px] h-[2px] w-[42px] -translate-x-1/2 rounded-full"
                        style={{ backgroundImage: navUnderline }}
                      />
                    ) : null}
                  </Link>
                );
              })}
            </nav>

          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="打开搜索"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-black/5 gac-interactive"
            >
              <Image src={navSearchIcon} alt="" width={19} height={19} />
            </button>
            <div className="flex items-center gap-4">
              <PillButton href="/contact" variant="ghost" className="h-10 w-[130px]">
                免费咨询
              </PillButton>
              <PillButton href="/contact" variant="black" className="h-10 w-[130px]">
                联系我们
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

