import { createFileRoute, Link } from "@tanstack/react-router";
import atelierHands from "@/assets/atelier-hands.jpg";
import fabrics from "@/assets/fabrics.jpg";
import embroideryDetail from "@/assets/embroidery-detail.jpg";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "The Atelier — Damas Couture" },
      { name: "description", content: "Inside the Damas Couture atelier: master weavers, hand embroidery, and the four-week journey from thread to throne." },
      { property: "og:title", content: "The Atelier — Damas Couture" },
      { property: "og:description", content: "Master weavers, hand embroidery, and the four-week journey from thread to throne." },
    ],
  }),
  component: AtelierPage,
});

const steps = [
  { n: "01", t: "Consultation", d: "A private conversation — in-studio, WhatsApp or video — to understand the occasion, palette and personality behind the piece." },
  { n: "02", t: "Sketch & Mood", d: "Our design lead returns illustrated sketches with alternative silhouettes, fabric swatches and embroidery direction within 72 hours." },
  { n: "03", t: "Loom & Cut", d: "Aso-oke is hand-woven in Iseyin. Silks and laces are cut on the atelier floor by master pattern-makers." },
  { n: "04", t: "Embroidery", d: "Between 80 and 240 hours per garment. Gold thread is placed under warm lamplight to catch every glint of the ceremony." },
  { n: "05", t: "Fittings", d: "Two studio fittings — plus in-home service for Lagos & Abuja clients — refine every drape, dart and finish." },
  { n: "06", t: "Delivery", d: "Packaged in a bespoke Damas trunk with a lifetime alteration promise. Ready to become an heirloom." },
];

const services = [
  { t: "Bridal Suites", d: "Complete bridal wardrobes: engagement, traditional, white wedding and after-party." },
  { t: "Groom & Fila", d: "Signature agbada, sokoto and hand-sculpted fila caps in your palette." },
  { t: "Aso-Ebi Coordination", d: "Family and bridal party orders of 10–200 pieces with impeccable colour matching." },
  { t: "Gele Artistry", d: "Sculpted gele masterclasses and on-the-day styling at your event." },
  { t: "Corporate & Diplomatic", d: "Refined native wear for embassies, boardrooms and cultural galas." },
  { t: "Global Delivery", d: "Insured shipping to London, Paris, New York, Dubai and Toronto." },
];

function AtelierPage() {
  return (
    <main className="pt-32 pb-16 px-6 md:px-10">
      {/* Hero */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">The Atelier</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
            Where thread <span className="italic text-gold-glow">becomes</span> legacy.
          </h1>
          <p className="mt-6 text-white/60 leading-relaxed max-w-lg">
            Damas Couture is a 12-artisan atelier on Victoria Island. We build
            regal Yoruba native attire the traditional way — slowly, by hand —
            using materials sourced within a hundred miles of the loom.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { k: "12", v: "Artisans" },
              { k: "240h", v: "Per Garment" },
              { k: "18k", v: "Gold Thread" },
            ].map((s) => (
              <div key={s.v} className="glass-panel rounded-2xl p-4 text-center">
                <div className="font-display italic text-gold-glow text-3xl">{s.k}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gold-glow/10 blur-3xl rounded-full" />
          <img src={atelierHands} width={1024} height={1024} alt="Master tailor hand-stitching gold embroidery" className="relative rounded-3xl w-full aspect-[4/5] object-cover ring-1 ring-white/10 shadow-2xl animate-float-slow" />
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto mt-28">
        <div className="text-center mb-14">
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">The Process</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Six steps. One heirloom.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="glass-panel rounded-2xl p-8 hover:-translate-y-1 hover:border-gold-glow/40 transition-all">
              <div className="flex items-start gap-6">
                <div className="size-14 rounded-full border border-gold-glow/40 flex items-center justify-center font-display italic text-gold-glow text-xl shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-2">{s.t}</h3>
                  <p className="text-white/60 leading-relaxed">{s.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fabrics */}
      <section className="max-w-6xl mx-auto mt-28 glass-panel rounded-[2rem] p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img src={fabrics} width={1024} height={1024} loading="lazy" alt="Rolls of luxurious aso-oke fabric" className="rounded-2xl w-full aspect-square object-cover ring-1 ring-white/10" />
        </div>
        <div>
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Materials</span>
          <h2 className="font-display text-3xl md:text-4xl mt-4 mb-6">A library of noble cloth.</h2>
          <ul className="space-y-3 text-white/70">
            {[
              "Iseyin-woven Aso-Oke — indigo, burgundy, ivory & 24 more shades",
              "Italian dupion & silk-cotton blends",
              "French guipure lace and Swiss voile",
              "18k gold-plated embroidery thread",
              "Coral, brass & river-pearl beadwork",
            ].map((f) => (
              <li key={f} className="flex gap-3 items-center">
                <span className="size-1.5 rounded-full bg-gold-glow" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto mt-28">
        <div className="text-center mb-14">
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Services</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">What we can build for you.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.t} className="neumorph-card p-8 hover:-translate-y-1 transition-all">
              <div className="size-10 rounded-full border border-gold-glow/40 mb-5 flex items-center justify-center text-gold-glow">✦</div>
              <h3 className="font-display text-xl mb-2">{s.t}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto mt-28 text-center relative">
        <img src={embroideryDetail} width={1024} height={1024} loading="lazy" alt="" className="absolute inset-0 w-full h-full object-cover rounded-[2rem] opacity-20" />
        <div className="relative glass-panel rounded-[2rem] p-14">
          <h2 className="font-display text-3xl md:text-5xl mb-4">Book a private tour.</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">Visit our Victoria Island studio, feel the fabrics, meet the artisans. Wednesdays and Saturdays by appointment.</p>
          <Link to="/contact" className="inline-flex px-10 py-4 rounded-full bg-gold-glow text-royal-bg font-bold text-xs tracking-[0.25em] uppercase hover:scale-105 transition-transform">
            Request Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}