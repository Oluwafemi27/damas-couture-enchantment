import { useState } from "react";
import { TIKTOK_URL, WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/components/SiteHeader";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="glass-panel rounded-[2rem] p-8 md:p-12 space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Full Name" name="name" placeholder="Adeola Bakare" required />
        <Field label="Phone / WhatsApp" name="phone" placeholder="+234 ..." required />
      </div>
      <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
      <div className="grid md:grid-cols-2 gap-6">
        <Select label="Occasion" name="occasion" options={["Wedding", "Engagement", "Coronation", "Corporate", "Everyday Regal", "Other"]} />
        <Select label="Garment Type" name="garment" options={["Agbada", "Iro & Buba", "Kaftan", "Aso-Ebi (Group)", "Gele Only", "Full Wardrobe"]} />
      </div>
      <Select label="Timeline" name="timeline" options={["Under 4 weeks (rush)", "1–2 months", "3–6 months", "Just exploring"]} />
      <div>
        <label className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold">Tell us about your vision</label>
        <textarea
          name="notes"
          rows={5}
          placeholder="Colour palette, fabric preferences, references, cultural significance…"
          className="mt-2 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-glow/60 transition"
        />
      </div>
      <button
        type="submit"
        disabled={sent}
        className="w-full px-10 py-5 rounded-2xl bg-gold-glow text-royal-bg font-bold text-xs tracking-[0.3em] uppercase disabled:bg-white/10 disabled:text-white/50 hover:scale-[1.01] active:scale-[0.99] transition-transform animate-glow-pulse"
      >
        {sent ? "✓ Received — we'll be in touch" : "Send Inquiry"}
      </button>
    </form>
  );
}

export function ContactInfoCards() {
  return (
    <>
      <InfoCard title="Studio Visit" body={"Adeola Odeku Street\nVictoria Island, Lagos"} action={{ label: "Book Appointment", href: "mailto:damascouture@gmail.com" }} />
      <InfoCard title="Email" body={"damascouture@gmail.com"} action={{ label: "Write Us", href: "mailto:damascouture@gmail.com" }} />
      <InfoCard title="WhatsApp Stylist" body={`${WHATSAPP_DISPLAY}\nAvailable Mon–Sat\n9am–7pm WAT`} action={{ label: "Chat Now", href: WHATSAPP_URL }} />
      <InfoCard title="On TikTok" body={"@damas_couture27\nWeekly reels & try-ons"} action={{ label: "Follow", href: TIKTOK_URL }} />
    </>
  );
}

export const faqItems = [
  { q: "How long does a piece take?", a: "Standard bespoke timeline is 4–6 weeks. Aso-ebi groups above 30 pieces need 8–10 weeks. Rush orders are possible with a 30% surcharge." },
  { q: "Do you ship internationally?", a: "Yes. Insured DHL to London, Paris, New York, Dubai and Toronto. Delivery within 5–7 business days of completion." },
  { q: "Can I bring my own fabric?", a: "Absolutely. We also welcome inherited aso-oke and family heirloom pieces for restoration and re-tailoring." },
  { q: "What is the deposit?", a: "50% at commissioning, 50% at final fitting. All bespoke orders are non-refundable but fully alterable for life." },
];

export function FaqList() {
  return (
    <div className="space-y-3">
      {faqItems.map((f) => (
        <details key={f.q} className="glass-panel rounded-2xl group open:border-gold-glow/30">
          <summary className="cursor-pointer list-none p-6 flex justify-between items-center">
            <span className="font-display text-lg">{f.q}</span>
            <span className="text-gold-glow text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="px-6 pb-6 text-white/60 leading-relaxed -mt-1">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-glow/60 transition"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold">{label}</label>
      <select
        name={name}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-gold-glow/60 transition"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-royal-bg">{o}</option>
        ))}
      </select>
    </div>
  );
}

function InfoCard({ title, body, action }: { title: string; body: string; action: { label: string; href: string } }) {
  return (
    <div className="neumorph-card p-6">
      <div className="text-[10px] tracking-[0.3em] uppercase text-gold-glow font-bold mb-3">{title}</div>
      <p className="text-white/70 whitespace-pre-line leading-relaxed">{body}</p>
      <a href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-4 inline-flex text-xs tracking-[0.3em] uppercase text-gold-glow border-b border-gold-glow/30 hover:border-gold-glow pb-1">
        {action.label} →
      </a>
    </div>
  );
}
