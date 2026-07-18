import { createFileRoute } from "@tanstack/react-router";
import { ContactForm, ContactInfoCards, FaqList } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Bespoke Inquiry — Damas Couture" },
      { name: "description", content: "Book a private consultation at the Damas Couture atelier or request a home fitting for your bespoke Yoruba native attire." },
      { property: "og:title", content: "Bespoke Inquiry — Damas Couture" },
      { property: "og:description", content: "Book a private consultation or request a home fitting for your bespoke Yoruba native attire." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="pt-32 pb-16 px-6 md:px-10">
      <section className="max-w-6xl mx-auto text-center mb-14">
        <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Bespoke Inquiry</span>
        <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
          Let's build your <span className="italic text-gold-glow">legacy</span>.
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-white/60 leading-relaxed">
          Share a few details about your occasion and vision. Our stylist replies within 24 hours.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <ContactForm />
        <aside className="space-y-6">
          <ContactInfoCards />
        </aside>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <div className="text-center mb-10">
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl mt-4">Before you commission.</h2>
        </div>
        <FaqList />
      </section>
    </main>
  );
}