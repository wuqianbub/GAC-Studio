import { HOME_IMG } from "./paths";

/** 第五屏「客户证言」——改文案 / 头像 / 公司 Logo 占位图只动本文件 */
export const testimonialsSectionCopy = {
  title: "来自客户的真实评价",
  body:
    "GAC 不止是执行者，还是企业的合作伙伴，真正的为产品考虑，来看看来自世界各地的客户真实评价吧。",
};

export type TestimonialCard = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
};

export const testimonialCards: TestimonialCard[] = [
  {
    id: "t1",
    quote:
      "与GAC的合作非常顺畅高效。他们对平台生态有深刻理解，设计方案不仅美观，在实际转化数据上也表现出色。",
    name: "王某",
    role: "某公司市场负责人",
    avatarSrc: `${HOME_IMG}/testimonials/avatar-01.png`,
  },
  {
    id: "t2",
    quote:
      "GAC's ability to maintain its brand prestige while accurately grasping the aesthetic trends of young users is a rare balance in the industry.",
    name: "Mathilde L.",
    role: "Brand Director of a Company",
    avatarSrc: `${HOME_IMG}/testimonials/avatar-02.png`,
  },
  {
    id: "t3",
    quote:
      "GAC Studio对品牌的理解深度让我们印象深刻。他们不仅仅是在执行设计，更是在帮助我们思考品牌的未来方向。",
    name: "张晶晶",
    role: "某互联网公司品牌总监",
    avatarSrc: `${HOME_IMG}/testimonials/avatar-03.png`,
  },
];

export const testimonialAssets = {
  clientLogoPlaceholder: `${HOME_IMG}/testimonials/client-logo-placeholder.svg`,
  arrowPrev: `${HOME_IMG}/testimonials/arrow-prev.svg`,
  arrowNext: `${HOME_IMG}/testimonials/arrow-next.svg`,
  gacLogoUnion: `${HOME_IMG}/testimonials/gac-logo-union.svg`,
};
