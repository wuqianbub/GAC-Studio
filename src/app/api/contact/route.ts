import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const MAIL_TO = process.env.CONTACT_MAIL_TO ?? "2932951844@qq.com";

type Body = {
  name?: string;
  /** 手机号 / 邮箱 / 微信号等 */
  contact?: string;
  /** 旧版字段兼容 */
  email?: string;
  company?: string;
  serviceType?: string;
  budget?: string;
  message?: string;
};

function isNonEmpty(s: unknown): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function looksLikeEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "无效的请求体" }, { status: 400 });
  }

  const name = body.name?.trim();
  const contactRaw = body.contact?.trim() ?? body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const serviceType = body.serviceType?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";
  const message = body.message?.trim();

  if (!isNonEmpty(name) || !isNonEmpty(contactRaw) || !isNonEmpty(message)) {
    return NextResponse.json(
      { error: "请填写姓名、联系方式与项目描述" },
      { status: 400 },
    );
  }

  if (contactRaw.length < 3 || contactRaw.length > 200) {
    return NextResponse.json(
      { error: "联系方式请填写 3～200 个字符" },
      { status: 400 },
    );
  }

  const host = process.env.CONTACT_SMTP_HOST;
  const port = Number(process.env.CONTACT_SMTP_PORT ?? "465");
  const user = process.env.CONTACT_SMTP_USER;
  const pass = process.env.CONTACT_SMTP_PASS;
  const secure =
    (process.env.CONTACT_SMTP_SECURE ?? "true").toLowerCase() !== "false";

  const text = [
    `姓名：${name}`,
    `联系方式：${contactRaw}`,
    `公司/品牌：${company || "—"}`,
    `服务类型：${serviceType || "—"}`,
    `预算范围：${budget || "—"}`,
    "",
    "项目描述：",
    message,
  ].join("\n");

  const html = `
    <p><strong>姓名</strong>：${escapeHtml(name)}</p>
    <p><strong>联系方式</strong>：${escapeHtml(contactRaw)}</p>
    <p><strong>公司/品牌</strong>：${escapeHtml(company || "—")}</p>
    <p><strong>服务类型</strong>：${escapeHtml(serviceType || "—")}</p>
    <p><strong>预算范围</strong>：${escapeHtml(budget || "—")}</p>
    <p><strong>项目描述</strong>：</p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
  `;

  if (!host || !user || !pass) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[contact] SMTP 未配置，询盘内容（开发环境仅打印）：\n", text);
      return NextResponse.json({
        ok: true,
        dev: true,
        warning: "开发环境：未配置 SMTP，邮件未实际发送。见终端日志。",
      });
    }
    return NextResponse.json(
      {
        error: "服务器未配置发信邮箱，请稍后再试或直接电话联系。",
      },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"GAC 官网表单" <${user}>`,
      to: MAIL_TO,
      subject: `[官网询盘] ${name}${company ? ` · ${company}` : ""}`,
      text,
      html,
    };
    if (looksLikeEmail(contactRaw)) {
      mailOptions.replyTo = contactRaw;
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] sendMail", e);
    return NextResponse.json(
      { error: "邮件发送失败，请直接发送邮件或致电。" },
      { status: 502 },
    );
  }
}
