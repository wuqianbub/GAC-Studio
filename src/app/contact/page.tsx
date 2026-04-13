import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ContactPageSection } from "@/components/contact/ContactPageSection";
import { footerCopy } from "@/content/home/footer";

export const metadata: Metadata = {
  title: "联系我们 | GAC Design Studio",
  description: `电话咨询 ${footerCopy.tel}，邮箱 ${footerCopy.email}。在线提交项目需求，我们会尽快回复。`,
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-[color:var(--foreground)]">
      <Navbar />
      <main className="flex-1">
        <ContactPageSection />
      </main>
      <Footer />
    </div>
  );
}
