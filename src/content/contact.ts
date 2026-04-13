import { footerCopy } from "@/content/home/footer";

/** 联系页文案与表单选项 — Figma 50:1812 */
export const contactPageCopy = {
  sectionTitle: "联系方式",
  phoneLabel: "电话咨询",
  emailLabel: "邮箱",
  addressLabel: "地址",
  addressLines: ["浙江 杭州", "GAC Studio"] as const,
  hoursTitle: "工作时间",
  hours: [
    "周一 – 周五：09:00 – 18:00",
    "周六：10:00 – 17:00",
    "周日：休息",
  ] as const,
  phone: footerCopy.tel,
  email: footerCopy.email,
  fields: {
    name: "姓名",
    namePh: "您的姓名",
    contact: "联系方式",
    contactPh: "请填写手机号、邮箱或微信号（任选一种）",
    company: "公司 / 品牌",
    companyPh: "您所在的公司或品牌名称",
    service: "服务类型",
    servicePh: "请选择服务类型",
    budget: "预算范围",
    budgetPh: "请选择预算范围",
    message: "项目描述",
    messagePh:
      "请简要描述您的项目需求、时间节点及其他重要信息...",
    submit: "发送消息",
    required: "*",
  },
  submitSuccess: "提交成功，我们会尽快与您联系。",
  submitError: "提交失败，请稍后重试或直接拨打电话。",
};

export const contactServiceOptions = [
  { value: "", label: "请选择服务类型" },
  { value: "brand", label: "品牌与主视觉" },
  { value: "web", label: "网站 / 数字产品" },
  { value: "video", label: "视频与动效" },
  { value: "event", label: "活动与展会" },
  { value: "other", label: "其它" },
] as const;

export const contactBudgetOptions = [
  { value: "", label: "请选择预算范围" },
  { value: "lt50k", label: "5 万以下" },
  { value: "50k-150k", label: "5 – 15 万" },
  { value: "150k-500k", label: "15 – 50 万" },
  { value: "gt500k", label: "50 万以上" },
  { value: "undisclosed", label: "暂不透露" },
] as const;
