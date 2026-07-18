import { createFileRoute, Link } from "@tanstack/react-router";
import atelierHands from "@/assets/atelier-hands.jpg";
import fabrics from "@/assets/fabrics.jpg";
import embroideryDetail from "@/assets/embroidery-detail.jpg";
import founderDaniel from "@/assets/founder-daniel.jpg";
import { processSteps as steps, services, pricingTiers, fabricLibrary } from "@/data/content";

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

      {/* Meet the Founder */}
      <section className="max-w-6xl mx-auto mt-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Meet the Founder</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 leading-[1.05]">
            The hands behind <span className="italic text-gold-glow">every stitch.</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            Damas Couture was built on a simple belief: that native attire
            should feel like an heirloom the moment it's worn, not years
            later. Every commission that leaves Victoria Island is personally
            reviewed before it reaches your fitting room.
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            Follow the atelier's day-to-day craftsmanship on TikTok
            <span className="text-gold-glow"> @damas_couture27</span>.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-gold-glow text-royal-bg font-bold text-xs tracking-[0.25em] uppercase hover:scale-105 transition-transform"
          >
            Work With Us
          </Link>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="absolute -inset-6 bg-gold-glow/10 blur-3xl rounded-full" />
          <div className="relative w-full max-w-sm mx-auto aspect-[4/5] animate-float-slow">
            <img
              src={founderDaniel}
              width={1555}
              height={2303}
              alt="Founder of Damas Couture wearing a hand-woven green Aso-Oke agbada and fila cap"
              className="relative z-10 w-full h-full object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl"
            />
            <div className="absolute -right-6 top-6 md:-right-10 md:top-10 px-5 py-3 neumorph-card z-20">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-glow leading-tight whitespace-nowrap">
                Founder &amp; Lead Designer
              </p>
            </div>
          </div>
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
            {fabricLibrary.map((f) => (
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

      {/* Pricing */}
      <section className="max-w-6xl mx-auto mt-28">
        <div className="text-center mb-14">
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Pricing</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Sewing &amp; Styling Rates.</h2>
          <p className="max-w-xl mx-auto mt-3 text-white/60 leading-relaxed">
            Sewing-only rates below; ask your stylist for a full quote if you'd like us to source fabric, aso-oke or stonework.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`neumorph-card p-8 flex flex-col ${tier.featured ? "ring-1 ring-gold-glow/40" : ""}`}
            >
              {tier.featured && (
                <span className="self-start mb-4 px-3 py-1 rounded-full bg-gold-glow/15 border border-gold-glow/30 text-gold-glow text-[9px] font-bold tracking-[0.25em] uppercase">
                  Most Bespoke
                </span>
              )}
              <h3 className="font-display text-2xl mb-1">{tier.name}</h3>
              <div className="text-gold-glow font-bold text-lg mb-4">{tier.range}</div>
              <p className="text-sm text-white/60 leading-relaxed flex-1">{tier.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-white/40 mt-8">
          Prices in Naira (₦). Sewing-only rates — fabric, aso-oke and stonework quoted separately.
        </p>
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