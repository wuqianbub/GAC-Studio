/** 独立价格页 /pricing（Figma 43:1283）— 改文案只动本文件 */

export const pricingPageHero = {
  eyebrow: "GAC Design Studio",
  titleLine1: "报价清楚",
  titleLine2: "合作放心",
  bodyLine1: "每个项目报价可能不一样，以下是我们基于过往经验的参考价格。",
  bodyLine2:
    "如果你有具体想法，欢迎和我们聊聊，帮你免费出具一份更精准的报价。",
};

export const pricingPageMainSection = {
  title: "主视觉设计",
  subtitle:
    "每个设计项目的报价不全相同，您可下载最新报价单或免费咨询我们，期待与您合作",
};

export const pricingPageDetailSection = {
  title: "细分服务",
  subtitle:
    "每个设计项目的报价不全相同，您可下载最新报价单或免费咨询我们，期待与您合作",
};

/** 全站「服务」「查看全部服务」等链接统一锚点 — 与价格页 section 的 `id` 一致 */
export const PRICING_DETAIL_SERVICES_ANCHOR_ID = "detail-services";
export const PRICING_DETAIL_SERVICES_HREF =
  `/pricing#${PRICING_DETAIL_SERVICES_ANCHOR_ID}` as const;

/** 主视觉三档价格区块（首页「活动营销」等服务入口） */
export const PRICING_MAIN_VISUAL_ANCHOR_ID = "main-visual";

/** 细分服务单卡 DOM id：`detail-${pricingDetailCards[].id}` */
export function pricingDetailCardDomId(cardId: string): string {
  return `detail-${cardId}`;
}

export function pricingHrefDetailCard(cardId: string): string {
  return `/pricing#${pricingDetailCardDomId(cardId)}`;
}

export function pricingHrefMainVisual(): string {
  return `/pricing#${PRICING_MAIN_VISUAL_ANCHOR_ID}`;
}

export type DetailPriceRow = { label: string; price: string; unit: string };

export type PricingDetailCard = {
  id: string;
  title: string;
  hint: string;
  rows: DetailPriceRow[];
  ctaLabel: string;
};

export const pricingDetailCards: PricingDetailCard[] = [
  {
    id: "poster",
    title: "海报设计",
    hint: "套模板、改文字，选「拓展」最划算",
    rows: [
      { label: "复杂", price: "¥4,500", unit: "/张" },
      { label: "中等", price: "¥3,000", unit: "/张" },
      { label: "简单", price: "¥1,500", unit: "/张" },
      { label: "拓展", price: "¥150 - 400", unit: "/张" },
    ],
    ctaLabel: "聊聊你的需求",
  },
  {
    id: "web",
    title: "网站设计",
    hint: "第一次做官网，从「简单」或「中等」开始就够用了",
    rows: [
      { label: "官网", price: "¥8,000 – 35,000", unit: "/站" },
      { label: "落地页", price: "¥3,000 – 8,000", unit: "/页" },
      { label: "单页面", price: "¥800 – 4,000", unit: "/页" },
      { label: "拓展", price: "¥400", unit: "/页" },
    ],
    ctaLabel: "聊聊你的需求",
  },
  {
    id: "illustration",
    title: "插画与动效",
    hint: "动效按秒算，建议先确定好时长再报价，不花冤枉钱",
    rows: [
      { label: "场景插画", price: "¥1,500", unit: "/张" },
      { label: "元素 / 角色插画", price: "¥2,400", unit: "/个" },
      { label: "动画 / 动效", price: "¥2,500", unit: "/个" },
      { label: "AE微动效", price: "¥300", unit: "/秒" },
    ],
    ctaLabel: "聊聊你的需求",
  },
  {
    id: "brand",
    title: "品牌与图形",
    hint: "从 Logo 到包装，按件计价更清晰",
    rows: [
      { label: "Logo", price: "¥2,000 – 16,000", unit: "/个" },
      { label: "字体", price: "¥200 – 800", unit: "/个" },
      { label: "包装", price: "¥3,600 – 1.8w", unit: "/套" },
      { label: "品牌创意提案", price: "¥5,000 – 2.5w", unit: "/张" },
    ],
    ctaLabel: "聊聊你的需求",
  },
  {
    id: "merch",
    title: "物料与周边",
    hint: "从单个周边试水，或者直接做一套，我们都接得住",
    rows: [
      { label: "Icon系列", price: "¥800 - 3,000", unit: "/套" },
      { label: "Banner设计", price: "¥400 - 800", unit: "/张" },
      { label: "IP周边 / 文创设计", price: "¥500 - 3,000", unit: "/套" },
      { label: "线下活动物料", price: "¥300 - 5,000", unit: "/套" },
    ],
    ctaLabel: "聊聊你的需求",
  },
  {
    id: "video",
    title: "广告片制作",
    hint: "含创意脚本、拍摄执行、后期剪辑、调色及配乐基础授权，部分素材会使用AI工具制作",
    rows: [
      { label: "品牌形象片", price: "¥30,000 - 80,000", unit: "/支" },
      { label: "产品广告片", price: "¥20,000 - 50,000", unit: "/支" },
      { label: "短视频/社交媒体片", price: "¥8,000 - 20,000", unit: "/支" },
      { label: "活动记录/花絮", price: "¥5,000 - 15,000", unit: "/支" },
    ],
    ctaLabel: "聊聊你的需求",
  },
];

export const pricingPageContactBanner = {
  ctaLabel: "联系我们，精准报价",
  href: "/contact",
};

export const pricingPageFaq = {
  titleLine1: "FAQ",
  titleLine2: "常见问题",
  intro: "整理你可能想问的问题，如果还有顾虑欢迎和我们详细聊聊～",
  items: [
    {
      q: "报价还能调整吗？",
      a: "当然可以。上面的价格是参考区间，具体看你的项目体量、工期和版权要求。\n直接告诉我们你的预算和想法，我们会尽量帮你找到合适的方案。",
    },
    {
      q: "加急怎么算？",
      a: "不急就正常排，我们好好做。\n如果很急：正常工期压缩到一半以内 ×1.5，48小时内要出活 ×2.0。",
    },
    {
      q: "修改要加钱吗？",
      a: "合同里会写明免费修改次数，超出部分按次算：简单 200元/次、中等 400元/次、复杂 800元/次。\n不过我们一般会尽量在前几轮就把事情做对，不会让你反复改。",
    },
    {
      q: "版权归谁？",
      a: "交付后源文件归你，商用随你。\n但如果需要买授权图片、字体，那部分费用另算（或者你提供，我们帮你用）。",
    },
    {
      q: "怎么付款？",
      a: "合同签了付 50%，验收完付尾款。\n不压款，不拖款，大家都省心。",
    },
  ],
};
