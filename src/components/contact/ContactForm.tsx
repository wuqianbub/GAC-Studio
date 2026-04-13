"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  contactBudgetOptions,
  contactPageCopy,
  contactServiceOptions,
} from "@/content/contact";
import { PRICING_TIER_GRADIENT_CTA } from "@/components/pricing/PricingTierCard";
import { heroArrowIcon } from "@/lib/figmaAssets";

const inputClass =
  "w-full rounded-[15px] border-2 border-[#f5f5f5] bg-[#f5f5f5] px-3.5 py-3 text-[15px] text-[#0a0a0a] outline-none transition-[border-color,box-shadow] placeholder:text-[#717182] focus:border-[#c5d4eb] focus:bg-white";

const selectClass =
  "w-full rounded-[15px] border-2 border-[#f5f5f5] bg-white px-3.5 py-3 text-[15px] text-[#0a0a0a] outline-none focus:border-[#c5d4eb]";

export function ContactForm() {
  const c = contactPageCopy.fields;
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  function dismissBanner() {
    setFeedback("");
    if (status === "success" || status === "error") setStatus("idle");
  }

  function isGithubPagesRuntime() {
    if (typeof window === "undefined") return false;
    return window.location.hostname.endsWith("github.io");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      if (isGithubPagesRuntime()) {
        setStatus("error");
        setFeedback("GitHub Pages 不支持表单接口提交，请通过邮箱/电话/微信联系。");
        return;
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          company,
          serviceType,
          budget,
          message,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        warning?: string;
      };
      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error ?? contactPageCopy.submitError);
        return;
      }
      setStatus("success");
      setFeedback(
        [contactPageCopy.submitSuccess, data.warning].filter(Boolean).join(" "),
      );
      setName("");
      setContact("");
      setCompany("");
      setServiceType("");
      setBudget("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback(contactPageCopy.submitError);
    }
  }

  const showBanner = status === "loading" || Boolean(feedback);
  const bannerMessage =
    status === "loading" ? "正在发送，请稍候…" : feedback;
  const bannerVariant =
    status === "loading" ? "loading" : status === "error" ? "error" : "success";

  return (
    <>
      {showBanner ? (
        <div
          className={[
            "fixed left-0 right-0 top-20 z-[45] border-b px-4 py-3 shadow-md backdrop-blur-md md:py-3.5",
            bannerVariant === "loading"
              ? "border-[#bfdbfe] bg-[#eff6ff]/95 text-[#1e3a5f]"
              : bannerVariant === "error"
                ? "border-red-200 bg-red-50/95 text-red-900"
                : "border-emerald-200 bg-emerald-50/95 text-emerald-950",
          ].join(" ")}
          role="status"
          aria-live="polite"
        >
          <div className="gac-container flex items-center justify-center gap-3">
            <p className="flex-1 text-center text-[15px] font-medium leading-snug md:text-base">
              {bannerMessage}
            </p>
            {status !== "loading" ? (
              <button
                type="button"
                onClick={dismissBanner}
                className="gac-interactive shrink-0 rounded-full p-1.5 hover:bg-black/5"
                aria-label="关闭提示"
              >
                <X className="size-5 opacity-70" />
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-6 md:gap-7"
      >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
        <div className="flex flex-col gap-3">
          <label className="text-[15px] font-semibold text-[#101828]">
            {c.name} <span className="text-[#1964d5]">{c.required}</span>
          </label>
          <input
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={c.namePh}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[15px] font-semibold text-[#101828]">
            {c.contact} <span className="text-[#1964d5]">{c.required}</span>
          </label>
          <input
            name="contact"
            type="text"
            required
            autoComplete="on"
            inputMode="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={c.contactPh}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-[15px] font-semibold text-[#101828]">
          {c.company}
        </label>
        <input
          name="company"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={c.companyPh}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
        <div className="flex flex-col gap-3">
          <label className="text-[15px] font-semibold text-[#101828]">
            {c.service}
          </label>
          <select
            name="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className={selectClass}
          >
            {contactServiceOptions.map((o) => (
              <option key={o.value || "placeholder"} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[15px] font-semibold text-[#101828]">
            {c.budget}
          </label>
          <select
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={selectClass}
          >
            {contactBudgetOptions.map((o) => (
              <option key={o.value || "placeholder"} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-[15px] font-semibold text-[#101828]">
          {c.message} <span className="text-[#1964d5]">{c.required}</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={c.messagePh}
          className={`${inputClass} min-h-[120px] resize-y py-3`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="gac-interactive flex h-[52px] w-full items-center justify-center gap-2 rounded-full text-[17px] font-semibold text-black disabled:opacity-60"
        style={{ backgroundImage: PRICING_TIER_GRADIENT_CTA }}
      >
        {status === "loading" ? "发送中…" : c.submit}
        <Image src={heroArrowIcon} alt="" width={21} height={21} />
      </button>
    </form>
    </>
  );
}
