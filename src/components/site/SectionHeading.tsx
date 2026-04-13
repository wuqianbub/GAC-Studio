import { PillButton } from "@/components/ui/Button";

export function SectionHeading({
  eyebrow,
  title,
  cta,
}: {
  eyebrow: string;
  title: string;
  cta?: { href: string; label: string };
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <div className="text-xs text-black/50">{eyebrow}</div>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tighter text-[#1A1A1A]">
          {title}
        </h2>
      </div>
      {cta ? (
        <div className="hidden sm:block">
          <PillButton href={cta.href} variant="ghost" rightIcon>
            {cta.label}
          </PillButton>
        </div>
      ) : null}
    </div>
  );
}

