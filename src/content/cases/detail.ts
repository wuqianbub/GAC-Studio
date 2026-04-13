/**
 * 案例详情页文案与模块化区块 — 按项目维护
 *
 * 新增项目：在 `caseDetailsBySlug` 中增加一项，slug 与 `cases.ts` 里列表一致即可。
 * 未单独配置 slug（含 `-more-N` 延展）会走 `defaultCaseDetail()` 通用模板。
 */
import { getCaseBySlug, type CaseStudy } from "./index";
import { caseThumb1 } from "@/lib/figmaAssets";

/** 音乐流行盛典「内容版块」四舞台 — 与 Figma 50:2111–50:2128 导出一致（勿用其它案例列表缩略图替代） */
const musicGalaStageImages = {
  pioneerArt: "/cases/music-gala/stage-pioneer-art.png",
  dimensionalResonance: "/cases/music-gala/stage-dimensional-resonance.png",
  liquidPulse: "/cases/music-gala/stage-liquid-pulse.png",
  naturalPhantom: "/cases/music-gala/stage-natural-phantom.png",
} as const;

export const caseDetailUiCopy = {
  relatedTitle: "其它案例推荐",
  allCases: "全部案例",
  contactUs: "联系我们",
};

export type CaseDetailStat = { value: string; label: string };

/** 两列一组的舞台/配图（Figma 2×2 网格的一行） */
export type CaseDetailStageRow = {
  left: { caption: string; image: string };
  right: { caption: string; image: string };
};

export type CaseDetailBlock =
  | { kind: "text"; title: string; body: string }
  | {
      kind: "stages";
      title: string;
      intro?: string;
      rows: CaseDetailStageRow[];
    };

export type CaseDetailPageContent = {
  /** 浏览器标题与主标题（整行展示，可含英文副标） */
  headline: string;
  tags: string[];
  intro: string;
  stats: [CaseDetailStat, CaseDetailStat, CaseDetailStat];
  heroImage: string;
  blocks: CaseDetailBlock[];
  /** 设计理念：多段正文（首段可为关键词行） */
  designPhilosophy: { title: string; paragraphs: string[] };
  /** 「其它案例推荐」三个卡片，填 slug */
  relatedSlugs: [string, string, string];
};

/** 音乐流行盛典 — Figma 50:2067 */
const musicGalaDetail: CaseDetailPageContent = {
  headline: "音乐流行盛典 (Visual Translation of Senses)",
  tags: ["KV设计", "视觉"],
  intro:
    "共振：跨越维度的声音 (Resonance: Sound Beyond Dimensions)，这是2025年微博音乐流行盛典的活动，我们团队负责其中的视觉，在这里，我们打破节拍的边界。集结顶尖视觉叙事与多维感官体验，重新定义属于当下的流行定义。",
  stats: [
    { value: "14天", label: "视觉设计和项目协调" },
    { value: "5人", label: "项目团队参与人员" },
    { value: "7000元+", label: "项目执行报价" },
  ],
  heroImage: caseThumb1,
  blocks: [
    {
      kind: "text",
      title: "感官的视觉转译 (Visual Translation of Senses)",
      body: "本次音乐盛典的品牌视觉体系以“流动的节拍”为核心灵感。我们通过极具冲击力的数字流体艺术与强对比的排版系统，捕捉了音乐中瞬息万变的情绪爆发点。 从舞台视觉动态、现场导视系统到数字端交互体验，我们构建了一场跨媒介的视听实验，让抽象的音符成为可触摸的视觉景观。",
    },
    {
      kind: "stages",
      title: "内容版块 (Festival Line-up / Highlights )",
      intro:
        "光影编织的终极错觉。通过全息成像与多重曝光技术，我们模糊了表演者与视觉背景的虚实界限，打造一场触不可及的感官白日梦。",
      rows: [
        {
          left: {
            caption: "先锋艺术舞台",
            image: musicGalaStageImages.pioneerArt,
          },
          right: {
            caption: "维度共振舞台",
            image: musicGalaStageImages.dimensionalResonance,
          },
        },
        {
          left: {
            caption: "液体脉冲舞台",
            image: musicGalaStageImages.liquidPulse,
          },
          right: {
            caption: "自然幻影舞台",
            image: musicGalaStageImages.naturalPhantom,
          },
        },
      ],
    },
  ],
  designPhilosophy: {
    title: "设计理念",
    paragraphs: [
      "核心关键词: 动态排版 (Kinetic Typography) / 霓虹极光色系 (Neon Aurora Palette) / 故障艺术 (Glitch Art)",
      "设计初衷: “我们使用了定制的像素化字体来呼应数字时代的律动感，并配合 180°C 高饱和度的色色彩对比，模拟音乐节现场的灯光明灭，旨在建立一种‘极度亢奋’的视觉逻辑。”",
    ],
  },
  relatedSlugs: ["douyin-520", "campus-hire", "music-world"],
};

const caseDetailsBySlug: Record<string, CaseDetailPageContent> = {
  "music-gala": musicGalaDetail,
};

function defaultRelatedSlugs(excludeSlug: string): [string, string, string] {
  const pool = [
    "music-gala",
    "douyin-520",
    "campus-hire",
    "music-world",
    "nature-mag",
    "dibot",
    "nike",
    "notion",
  ].filter((s) => s !== excludeSlug);
  return [pool[0]!, pool[1]!, pool[2]!];
}

export function defaultCaseDetail(study: CaseStudy): CaseDetailPageContent {
  const [a, b, c] = defaultRelatedSlugs(study.slug);
  return {
    headline: study.title,
    tags: [...study.tags],
    intro:
      "本项目视觉与品牌叙事由 GAC 团队参与完成。以下为基础信息展示；完整图文与分镜可在后续版本中按项目单独配置。",
    stats: [
      { value: "定制", label: "周期视需求而定" },
      { value: "项目组", label: "多角色协作交付" },
      { value: "面议", label: "欢迎获取精准报价" },
    ],
    heroImage: study.image,
    blocks: [
      {
        kind: "text",
        title: "项目概述",
        body: "我们正在为该案例补充与 Figma 模版一致的详细版块。您只需在 `src/content/cases/detail.ts` 中为该 slug 增加一条配置，即可替换本默认文案与配图网格。",
      },
    ],
    designPhilosophy: {
      title: "设计理念",
      paragraphs: [
        "关键词与方法论可在正式稿中补充，例如：动态视觉、系统化主视觉、跨媒介延展等。",
      ],
    },
    relatedSlugs: [a, b, c],
  };
}

export function getCaseDetailContent(slug: string): CaseDetailPageContent | null {
  const study = getCaseBySlug(slug);
  if (!study) return null;
  return caseDetailsBySlug[slug] ?? defaultCaseDetail(study);
}
