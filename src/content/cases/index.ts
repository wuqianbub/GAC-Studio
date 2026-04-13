import {
  caseThumb1,
  caseThumb2,
  caseThumb3,
  caseThumb4,
  caseThumb5,
  caseThumb6,
  caseThumb7,
  caseThumb8,
} from "@/lib/figmaAssets";

/** 单个案例（列表 + 详情路由） */
export type CaseStudy = {
  id: string;
  slug: string;
  image: string;
  title: string;
  tags: [string, string];
  /** 导航搜索：品牌、客户、行业词等，与标题/标签一并匹配 */
  searchLabels?: string[];
};

export const casesPageCopy = {
  title: "我们的案例",
  subtitle: "与顶级品牌合作，创造具有影响力的设计作品",
  loadMore: "查看更多",
  noMore: "已展示全部项目",
};

/** 站点核心案例（8 个） */
export const caseStudiesCore: CaseStudy[] = [
  {
    id: "music-gala",
    slug: "music-gala",
    image: caseThumb1,
    title: "音乐流行盛典",
    tags: ["KV设计", "视觉"],
    searchLabels: ["微博", "音乐盛典", "舞台", "流行"],
  },
  {
    id: "douyin-520",
    slug: "douyin-520",
    image: caseThumb2,
    title: "抖音 520 好礼季",
    tags: ["KV设计", "视觉"],
    searchLabels: ["抖音", "520", "好礼", "电商"],
  },
  {
    id: "campus-hire",
    slug: "campus-hire",
    image: caseThumb3,
    title: "时代校园招聘",
    tags: ["KV设计", "视觉"],
    searchLabels: ["时代", "校招", "招聘", "校园"],
  },
  {
    id: "music-world",
    slug: "music-world",
    image: caseThumb4,
    title: "音乐出发探索世界",
    tags: ["KV设计", "视觉"],
    searchLabels: ["音乐", "探索", "世界"],
  },
  {
    id: "nature-mag",
    slug: "nature-mag",
    image: caseThumb5,
    title: "自然博物杂志",
    tags: ["KV设计", "视觉"],
    searchLabels: ["自然", "博物", "杂志", "出版"],
  },
  {
    id: "dibot",
    slug: "dibot",
    image: caseThumb6,
    title: "dibot 耳机广告",
    tags: ["KV设计", "视觉"],
    searchLabels: ["dibot", "耳机", "数码", "广告片"],
  },
  {
    id: "nike",
    slug: "nike",
    image: caseThumb7,
    title: "nike 新品球鞋发布",
    tags: ["KV设计", "视觉"],
    searchLabels: ["nike", "耐克", "球鞋", "运动"],
  },
  {
    id: "notion",
    slug: "notion",
    image: caseThumb8,
    title: "notion 插画集",
    tags: ["KV设计", "视觉"],
    searchLabels: ["notion", "插画", "SaaS", "品牌"],
  },
];

/** 首页「我们的案例」区 — 与现版式一致 */
export const homeCasesRow1: CaseStudy[] = [
  caseStudiesCore[0],
  caseStudiesCore[1],
  caseStudiesCore[2],
];
export const homeCasesStackLeft: CaseStudy[] = [
  caseStudiesCore[3],
  caseStudiesCore[4],
];
export const homeCasesRow3: CaseStudy[] = [
  caseStudiesCore[5],
  caseStudiesCore[6],
  caseStudiesCore[7],
];

function extendCatalog(base: CaseStudy[], rounds: number): CaseStudy[] {
  const out = [...base];
  for (let r = 1; r <= rounds; r++) {
    for (const c of base) {
      out.push({
        ...c,
        id: `${c.id}-more-${r}`,
        slug: `${c.slug}-more-${r}`,
        title: `${c.title} · 系列 ${r + 1}`,
      });
    }
  }
  return out;
}

/** 案例页完整列表：核心案例 + 多轮延展，供「查看更多」逐批展示 */
export const casesCatalogAll = extendCatalog(caseStudiesCore, 4);

export const CASES_INITIAL_COUNT = 9;
export const CASES_LOAD_MORE_STEP = 9;

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return casesCatalogAll.find((c) => c.slug === slug);
}
