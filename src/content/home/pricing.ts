import { HOME_IMG } from "./paths";

/** 第七屏「价格方案」——改价格 / 权益列表 / 横幅文案只动本文件 */
export const pricingSectionCopy = {
  title: "我们的价格",
  subtitle:
    "每个设计项目的报价不全相同，您可下载最新报价单或免费咨询我们，期待与您合作",
  bannerTitle: "免费获取 2026 年度 GAC 最新报价单",
  bannerCta: "下载GAC最新报价表",
  /** 将 xlsx 放在 public/files/ 下，文件名需与此一致（或改这里指向你的文件名） */
  bannerHref: "/files/gac-pricing-2026.xlsx",
  /** 浏览器「另存为」时建议使用的文件名（可含中文） */
  bannerDownloadFileName: "GAC-2026最新报价单.xlsx",
  moreLinkLabel: "更多项目报价",
  moreLinkHref: "/pricing",
};

export const pricingAssets = {
  bannerPhoto: `${HOME_IMG}/pricing/banner-photo.png`,
  bannerBg: `${HOME_IMG}/pricing/banner-bg.svg`,
  pdfBadge: `${HOME_IMG}/pricing/pdf-badge.svg`,
  downloadChevron: `${HOME_IMG}/pricing/download-chevron.svg`,
  downloadArrow: `${HOME_IMG}/pricing/download-arrow.svg`,
  ctaArrowDark: `${HOME_IMG}/pricing/cta-arrow-dark.svg`,
  ctaArrowLight: `${HOME_IMG}/pricing/cta-arrow-light.svg`,
  iconCheck: `${HOME_IMG}/pricing/icon-check.svg`,
  iconCheckAccent: `${HOME_IMG}/pricing/icon-check-accent.svg`,
};

export type PricingTier = {
  id: string;
  name: string;
  priceDisplay: string;
  priceSuffix?: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
  variant: "default" | "featured" | "enterprise";
  badge?: string;
  features: { text: string; accent?: boolean }[];
};

export const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "基础服务",
    priceDisplay: "¥6,000",
    priceSuffix: "起",
    tagline: "适合单次活动、快速出街",
    ctaLabel: "聊聊你的需求",
    ctaHref: "/contact",
    variant: "default",
    features: [
      { text: "单张营销主视觉（KV）设计" },
      { text: "标准创意排版" },
      { text: "基础设计规范输出" },
      { text: "项目周期: 1-2周" },
      { text: "专属设计师对接" },
      { text: "2轮设计修改" },
    ],
  },
  {
    id: "pro",
    name: "专业服务",
    priceDisplay: "¥12,000",
    priceSuffix: "起",
    tagline: "适合品牌年度主视觉、系列延展",
    ctaLabel: "聊聊你的需求",
    ctaHref: "/contact",
    variant: "featured",
    badge: "Popular",
    features: [
      { text: "多张营销主视觉（KV）设计" },
      { text: "多场景延展，成套输出" },
      { text: "原创场景元素，有记忆点视觉锤" },
      { text: "项目周期: 2-3周" },
      { text: "精细精修，质感拉满" },
      { text: "4轮修改，慢慢磨" },
      { text: "资深创意总监把关", accent: true },
      { text: "优先响应服务", accent: true },
    ],
  },
  {
    id: "enterprise",
    name: "企业定制",
    priceDisplay: "面议",
    tagline: "适合大型品牌及长期战略合作",
    ctaLabel: "聊聊你的需求",
    ctaHref: "/contact",
    variant: "enterprise",
    features: [
      { text: "主视觉系统，品牌战略咨询" },
      { text: "全案创意策划与执行" },
      { text: "多平台多端设计输出" },
      { text: "3D/动态视觉创作" },
      { text: "线下物料落地支持" },
      { text: "项目周期: 灵活定制" },
      { text: "核心团队专项服务", accent: true },
      { text: "7×24小时响应", accent: true },
      { text: "修改不限次数，满意为止", accent: true },
    ],
  },
];
