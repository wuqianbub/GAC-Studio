import type { ReactNode } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactPageCopy } from "@/content/contact";
import { ContactForm } from "./ContactForm";

const contactMainBg =
  "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 58%, rgb(255,255,255) 100%), linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgb(255,255,255) 27.111%), linear-gradient(90deg, rgb(8, 112, 248) 0%, rgb(75, 172, 255) 32.674%, rgb(177, 198, 253) 66.758%, rgb(255, 221, 183) 100%)";

function InfoCard({
  icon,
  gradientClass,
  label,
  children,
}: {
  icon: ReactNode;
  gradientClass: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-[17px] border-2 border-[#e5e7eb] bg-white/20 p-6 pr-4 backdrop-blur-sm">
      <div
        className={`flex size-[51px] shrink-0 items-center justify-center rounded-[15px] bg-gradient-to-r text-white ${gradientClass}`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[#4a5565] text-[15px] leading-normal tracking-tight">
          {label}
        </p>
        <div className="mt-2 text-[#0a0a0a] text-xl font-semibold leading-snug md:text-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ContactPageSection() {
  const copy = contactPageCopy;

  return (
    <section
      className="w-full pb-16 pt-[100px] md:pb-24 md:pt-[120px]"
      style={{ backgroundImage: contactMainBg }}
    >
      <div className="gac-container max-w-[1280px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
          <div className="flex min-w-0 flex-1 flex-col gap-10 lg:max-w-[520px]">
            <h1 className="text-[#0a0a0a] text-[32px] font-semibold leading-tight tracking-tight md:text-[36px]">
              {copy.sectionTitle}
            </h1>

            <div className="flex flex-col gap-4">
              <InfoCard
                label={copy.phoneLabel}
                gradientClass="from-[#e3b5c6] to-[#4e52b4]"
                icon={<Phone className="size-[26px]" strokeWidth={1.75} />}
              >
                <Link
                  href={`tel:${copy.phone.replace(/\s/g, "")}`}
                  className="gac-interactive hover:opacity-80"
                >
                  {copy.phone}
                </Link>
              </InfoCard>
              <InfoCard
                label={copy.emailLabel}
                gradientClass="from-[#ffcbba] to-[#1964d5]"
                icon={<Mail className="size-[26px]" strokeWidth={1.75} />}
              >
                <Link
                  href={`mailto:${copy.email}`}
                  className="gac-interactive break-all text-xl font-semibold md:text-[21px]"
                >
                  {copy.email}
                </Link>
              </InfoCard>
              <InfoCard
                label={copy.addressLabel}
                gradientClass="from-[#c1dab8] to-[#0c7cc6]"
                icon={<MapPin className="size-[26px]" strokeWidth={1.75} />}
              >
                <div className="space-y-1 text-[19px] font-medium leading-relaxed md:text-[19px]">
                  {copy.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </InfoCard>
            </div>

            <div className="rounded-[17px] bg-[#f9fafb] px-8 pb-8 pt-8">
              <h2 className="text-[#0a0a0a] text-[19px] font-semibold tracking-tight">
                {copy.hoursTitle}
              </h2>
              <ul className="mt-4 space-y-2 text-[#364153] text-[17px] leading-relaxed">
                {copy.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0 flex-1 rounded-3xl bg-white p-8 shadow-[0px_19px_37px_0px_rgba(190,197,205,0.47)] md:p-9 lg:max-w-[640px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
