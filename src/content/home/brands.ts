import { HOME_IMG } from "./paths";

/** 第四屏「服务过的品牌客户」——改文案 / 增删 Logo 只动本文件 */
export const brandsSectionCopy = {
  title: "服务过的品牌客户",
  subtitle: "为品牌提供全方位的创意设计解决方案",
};

export type BrandLogoSingle = {
  kind?: "single";
  id: string;
  src: string;
  alt: string;
  className?: string;
};

export type BrandLogoDual = {
  kind: "dual";
  id: string;
  leftSrc: string;
  rightSrc: string;
  alt: string;
  className?: string;
};

export type BrandLogoItem = BrandLogoSingle | BrandLogoDual;

export const brandLogos: BrandLogoItem[] = [
  { id: "cbre", src: `${HOME_IMG}/brands/cbre.svg`, alt: "CBRE" },
  {
    id: "nbcuniversal",
    src: `${HOME_IMG}/brands/vector-02.svg`,
    alt: "NBCUniversal",
    className:
      "h-auto max-h-[36px] w-auto max-w-[min(100%,240px)] object-contain object-center sm:max-h-[40px]",
  },
  {
    id: "universal-music",
    src: `${HOME_IMG}/brands/universal-music.svg`,
    alt: "Universal Music",
  },
  { id: "crunchbase", src: `${HOME_IMG}/brands/crunchbase.svg`, alt: "Crunchbase" },
  {
    id: "redis",
    src: `${HOME_IMG}/brands/mask-part-b.svg`,
    alt: "Redis",
    className:
      "h-auto max-h-[44px] w-auto max-w-[min(100%,140px)] object-contain object-center",
  },
  { id: "cellebrite", src: `${HOME_IMG}/brands/cellebrite.svg`, alt: "Cellebrite" },
  { id: "forward", src: `${HOME_IMG}/brands/forward.svg`, alt: "Forward" },
  { id: "cypress", src: `${HOME_IMG}/brands/cypress.svg`, alt: "Cypress" },
  { id: "flatfile", src: `${HOME_IMG}/brands/flatfile.svg`, alt: "Flatfile" },
  { id: "streamlit", src: `${HOME_IMG}/brands/streamlit.svg`, alt: "Streamlit" },
  { id: "flecoin", src: `${HOME_IMG}/brands/flecoin.svg`, alt: "Flecoin" },
  { id: "healthtap", src: `${HOME_IMG}/brands/healthtap.svg`, alt: "Healthtap" },
  { id: "kindercare", src: `${HOME_IMG}/brands/kindercare.svg`, alt: "Kindercare" },
  { id: "iterable", src: `${HOME_IMG}/brands/iterable.svg`, alt: "Iterable" },
  { id: "xsolla", src: `${HOME_IMG}/brands/xsolla.svg`, alt: "Xsolla" },
];
