import { HOME_IMG } from "./paths";

/** 第六屏「价值观」——改文案 / 背景图只动本文件 */
export const valuesSectionCopy = {
  title: "我们的价值观",
  subtitle:
    "致力于以深思熟虑的设计与战略思维, 为有远见的品牌创造卓越的视觉体验",
  ctaLabel: "联系我们",
};

export type ValueCard = {
  id: string;
  title: string;
  body: string;
  imageSrc: string;
};

export const valueCards: ValueCard[] = [
  {
    id: "quality",
    title: "极致品质",
    body: "我们在每一个创作细节上追求最高标准,从不满足于『还不错』,因为我们相信卓越才是真正的起点。",
    imageSrc: `${HOME_IMG}/values/value-quality.png`,
  },
  {
    id: "collaboration",
    title: "深度协作",
    body: "最好的作品源于不同视角的碰撞与融合。我们将客户视为创作伙伴,共同朝着同一个愿景迈进。",
    imageSrc: `${HOME_IMG}/values/value-collaboration.png`,
  },
  {
    id: "innovation",
    title: "持续创新",
    body: "我们挑战常规,探索可能,以新鲜的视角和前瞻的思维,让每一件作品都拥有自己独特的生命力。",
    imageSrc: `${HOME_IMG}/values/value-innovation.png`,
  },
  {
    id: "integrity",
    title: "诚信透明",
    body: "诚实与透明是我们与客户、团队之间关系的基石。我们说到做到,以信任赢得长期合作。",
    imageSrc: `${HOME_IMG}/values/value-integrity.png`,
  },
];
