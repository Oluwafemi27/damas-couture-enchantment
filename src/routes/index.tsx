import { createFileRoute } from "@tanstack/react-router";
import founderDaniel from "@/assets/founder-daniel.jpg";
import { TIKTOK_URL, WHATSAPP_URL } from "@/components/SiteHeader";
import { Slideshow } from "@/components/Slideshow";
import { ModelViewer } from "@/components/ModelViewer";
import { ContactForm, ContactInfoCards, FaqList } from "@/components/ContactForm";
import {
  collectionItems,
  models3d,
  processSteps,
  services,
  pricingTiers,
  fabricLibrary,
  galleryItems,
  heroAgbada,
  monarchAgbada,
  brideCoral,
  groomEmerald,
  coupleRoyal,
  embroideryDetail,
  fabrics,
  atelierHands,
} from "@/data/content";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 md:pt-40 pb-24 px-6 md:px-10 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 size-[520px] rounded-full bg-gold-glow/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-40 -right-40 size-[520px] rounded-full bg-[#4c0519]/40 blur-[140px]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="relative z-10 animate-reveal-up">
            <span className="inline-block py-1 px-3 rounded-full bg-gold-glow/10 border border-gold-glow/25 text-gold-glow text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              Lagos Originality
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-medium leading-[0.9] mb-8">
              Regal <span className="italic animate-shimmer">Yoruba</span> Artistry
            </h1>
            <p className="text-lg text-white/60 max-w-md leading-relaxed mb-12 font-light">
              Where ancient tradition meets contemporary luxury. Hand-stitched
              native attire for the modern visionary who demands distinction.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="px-10 py-5 bg-gold-glow text-royal-bg font-bold rounded-xl animate-glow-pulse transition-transform hover:scale-105 active:scale-95">
                Start Your Fitting
              </a>
              <a href="#lookbook" className="px-10 py-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                View Lookbook
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full aspect-[4/5] max-w-md animate-float-slow">
              <div className="absolute -inset-4 bg-gold-glow/15 rounded-3xl blur-3xl" />
              <img
                src={founderDaniel}
                width={1555}
                height={2303}
                alt="Founder of Damas Couture wearing a hand-woven green Aso-Oke agbada and fila cap"
                className="relative z-10 w-full h-full object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl"
              />
              <div className="absolute -left-6 top-6 md:-left-10 md:top-10 px-5 py-3 neumorph-card animate-slide-in-right z-20">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-glow leading-tight whitespace-nowrap">
                  Founder &amp; Lead Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="pb-24">
        <Slideshow
          slides={[
            { src: heroAgbada, alt: "Model wearing an indigo and gold hand-embroidered Yoruba Agbada", eyebrow: "Signature", title: "The Agbada Reimagined" },
            { src: monarchAgbada, alt: "Monarch Agbada with triple-layered hand embroidery", eyebrow: "Ceremonial", title: "The Monarch Agbada" },
            { src: brideCoral, alt: "Bride in coral silk iro and buba with sculpted gele", eyebrow: "Bridal", title: "Coral Bride Edition" },
            { src: groomEmerald, alt: "Groom in deep emerald aso-oke with white fila", eyebrow: "Coronation", title: "Emerald Oba Agbada" },
            { src: coupleRoyal, alt: "Couple in matching cobalt blue aso-ebi wedding attire", eyebrow: "Couples", title: "Royal Aso-Ebi Duo" },
          ]}
        />
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden py-6 border-y border-white/5 bg-white/[0.02]">
        <div className="flex gap-16 whitespace-nowrap animate-marquee text-2xl md:text-4xl font-display italic text-gold-glow/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span>Agbada</span><span className="text-white/20">✦</span>
              <span>Iro & Buba</span><span className="text-white/20">✦</span>
              <span>Gele</span><span className="text-white/20">✦</span>
              <span>Aso-Oke</span><span className="text-white/20">✦</span>
              <span>Fila</span><span className="text-white/20">✦</span>
              <span>Kaftan</span><span className="text-white/20">✦</span>
              <span>Kembe</span><span className="text-white/20">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Collections — full catalogue */}
      <section id="collections" className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 justify-between items-end mb-16">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">The Collection</span>
              <h2 className="text-4xl md:text-5xl font-display mt-4">Signature Cuts</h2>
              <p className="text-white/40 mt-3">Explore our hand-sewn native masterpieces.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectionItems.map((item) => (
              <div
                key={item.title}
                className="neumorph-card p-4 group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.35)]"
              >
                <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/5]">
                  <img
                    src={item.img}
                    width={800}
                    height={1000}
                    loading="lazy"
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-end bg-gradient-to-t from-royal-bg/90 to-transparent">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">{item.cat}</span>
                    <span className="text-gold-glow font-bold text-sm">{item.price}</span>
                  </div>
                </div>
                <div className="px-3 pb-3">
                  <h3 className="text-xl font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 mb-5">{item.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-gold-glow border-b border-gold-glow/30 hover:border-gold-glow pb-1">
                    Commission →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Collection */}
      <section id="3d-collection" className="max-w-7xl mx-auto py-10 px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">New · Interactive</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Explore in <span className="italic text-gold-glow">3D</span>
          </h2>
          <p className="max-w-xl mx-auto mt-3 text-white/60 leading-relaxed">
            Drag to rotate, pinch or scroll to zoom. Feel the weight and drape
            of the fabric before your first fitting.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models3d.map((m) => (
            <ModelViewer key={m.title} {...m} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="atelier" className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute -inset-6 bg-gold-glow/10 blur-3xl rounded-full" />
            <img src={atelierHands} width={1024} height={1024} loading="lazy" alt="Master tailor hand-stitching gold embroidery" className="relative rounded-3xl w-full aspect-square object-cover ring-1 ring-white/10" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">The Process</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-8">Six steps. <span className="italic text-gold-glow">One heirloom.</span></h2>
            <div className="space-y-4">
              {processSteps.map((s) => (
                <div key={s.n} className="glass-panel rounded-2xl p-5 flex gap-5 items-start hover:-translate-y-0.5 hover:border-gold-glow/40 transition-all">
                  <span className="font-display italic text-gold-glow text-2xl">{s.n}</span>
                  <div>
                    <div className="font-display text-lg">{s.t}</div>
                    <p className="text-sm text-white/50 mt-1 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="max-w-6xl mx-auto mt-4 px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
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
          <a
            href="#contact"
            className="inline-flex px-8 py-4 rounded-full bg-gold-glow text-royal-bg font-bold text-xs tracking-[0.25em] uppercase hover:scale-105 transition-transform"
          >
            Work With Us
          </a>
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
      <section className="max-w-6xl mx-auto mt-28 px-6 md:px-10">
        <div className="glass-panel rounded-[2rem] p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
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
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto mt-28 px-6 md:px-10">
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
      <section className="max-w-6xl mx-auto mt-28 px-6 md:px-10">
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

      {/* Heritage / Craftsmanship */}
      <section id="heritage" className="py-28 px-6 md:px-10 relative">
        <div className="max-w-6xl mx-auto glass-panel rounded-[2rem] p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">The Heritage</span>
            <h2 className="font-display text-4xl md:text-5xl italic mt-4 mb-6 leading-tight">
              Where the needle meets the <span className="text-gold-glow text-gold-glow-shadow">soul</span>.
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Every Damas piece begins on a traditional loom, where master
              weavers translate ancestral Yoruba patterns into modern armor.
              A single Monarch Agbada requires over 200 hours of manual
              embroidery — every gold thread placed to catch the light.
            </p>
            <ul className="space-y-4">
              {[
                "Ethically sourced silk, cotton & aso-oke",
                "Hand-loom weaving from Iseyin",
                "Royal-grade gold embroidery",
              ].map((line, i) => (
                <li key={line} className="flex items-center gap-4">
                  <span className="size-9 rounded-full border border-gold-glow/40 flex items-center justify-center font-display italic text-gold-glow">
                    {i + 1}
                  </span>
                  <span className="text-sm text-white/80">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gold-glow/10 blur-3xl rounded-full" />
            <img
              src={embroideryDetail}
              width={1024}
              height={1024}
              loading="lazy"
              alt="Close-up of gold thread embroidery on indigo aso-oke"
              className="relative rounded-2xl w-full aspect-square object-cover ring-1 ring-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Lookbook gallery */}
      <section id="lookbook" className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Lookbook</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">The Visual Archive.</h2>
          <p className="max-w-xl mx-auto mt-3 text-white/60 leading-relaxed">
            Editorial portraits, wedding-day frames, and the quiet moments between the stitches.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-4">
          {galleryItems.map((g, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-2xl group ring-1 ring-white/10 ${g.span ?? ""}`}
            >
              <img src={g.img} width={800} height={800} loading="lazy" alt={g.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-bg/90 via-royal-bg/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Voices</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Worn by tastemakers.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "The most exquisite agbada I've ever worn. Every eye in the room turned.", n: "Chief A. Adebayo", r: "Lagos" },
              { q: "Damas turned my wedding into a moving painting. Pure poetry in thread.", n: "Adaeze O.", r: "London" },
              { q: "Modern, ancestral, unforgettable. My guests still talk about the gele.", n: "Yewande B.", r: "Paris" },
            ].map((t) => (
              <figure key={t.n} className="neumorph-card p-8">
                <div className="text-gold-glow text-3xl font-display leading-none mb-4">"</div>
                <blockquote className="text-white/80 leading-relaxed">{t.q}</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-white/5 text-sm">
                  <div className="text-white">{t.n}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TikTok highlight */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto glass-panel rounded-[2rem] p-8 md:p-14 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center overflow-hidden">
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">On TikTok</span>
            <h2 className="font-display text-3xl md:text-5xl mt-4 mb-6 leading-tight">Watch the stitches come alive.</h2>
            <p className="text-white/60 leading-relaxed max-w-md">
              Behind-the-scenes fittings, gele tutorials, embroidery close-ups and
              runway reveals — follow <span className="text-gold-glow">@damas_couture27</span> for the daily atelier diary.
            </p>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold-glow text-royal-bg font-bold text-xs tracking-[0.25em] uppercase hover:scale-105 transition-transform">
              Follow on TikTok
              <span>→</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[brideCoral, coupleRoyal, fabrics, embroideryDetail].map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl aspect-[3/4] ${i % 2 ? "translate-y-6" : ""}`}>
                <img src={img} width={512} height={680} loading="lazy" alt="TikTok reel preview" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-bg/70 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">Bespoke Inquiry</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[0.95]">
            Let's build your <span className="italic text-gold-glow">legacy</span>.
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-white/60 leading-relaxed">
            Share a few details about your occasion and vision. Our stylist replies within 24 hours.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <ContactForm />
          <aside className="space-y-6">
            <ContactInfoCards />
          </aside>
        </div>

        <div className="max-w-4xl mx-auto mt-24">
          <div className="text-center mb-10">
            <span className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl mt-4">Before you commission.</h2>
          </div>
          <FaqList />
        </div>
      </section>

      {/* Bespoke CTA */}
      <section id="bespoke" className="py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-[1px] rounded-[40px] bg-gradient-to-br from-gold-glow/50 via-transparent to-white/10">
            <div className="bg-royal-bg rounded-[39px] p-12 lg:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_60%)]" />
              <h2 className="relative text-4xl md:text-6xl font-display mb-8">
                Your <span className="italic text-gold-glow">Legacy</span>, Sewn to Perfection.
              </h2>
              <p className="relative text-white/60 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
                Book an appointment at our Victoria Island studio or request a
                private home measurement service.
              </p>
              <div className="relative inline-flex flex-col sm:flex-row gap-4">
                <a href="mailto:damascouture@gmail.com" className="px-12 py-5 bg-white text-royal-bg font-bold rounded-full hover:scale-105 transition-transform">
                  Book Studio Visit
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="px-12 py-5 border border-white/20 rounded-full hover:bg-white/5 transition-colors">
                  WhatsApp Stylist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
