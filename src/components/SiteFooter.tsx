import { Link } from "@tanstack/react-router";
import { TIKTOK_URL, WHATSAPP_URL, WHATSAPP_DISPLAY } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/5 px-6 md:px-10 py-16 bg-[#0B0E14]">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-[#0B0E14]" />
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-2xl font-display italic text-gold-glow">Damas Couture</div>
          <p className="mt-4 text-sm text-white/50 max-w-sm leading-relaxed">
            Hand-sewn Yoruba native attire with royal-grade embroidery. Based in Lagos.
            Serving visionaries in London, Paris, Dubai and beyond.
          </p>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-gold-glow/40 text-gold-glow text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold-glow hover:text-royal-bg transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
              <path d="M19.6 6.7a5 5 0 0 1-3-1 5 5 0 0 1-2-3.2H11v13.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V10a5.8 5.8 0 1 0 5.4 5.8V9.4a8.1 8.1 0 0 0 5 1.7V7.7a5 5 0 0 1 0-1Z"/>
            </svg>
            Watch on TikTok
          </a>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold mb-4">Explore</div>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link to="/" className="hover:text-gold-glow">Home</Link></li>
            <li><Link to="/collections" className="hover:text-gold-glow">Collections</Link></li>
            <li><Link to="/atelier" className="hover:text-gold-glow">The Atelier</Link></li>
            <li><Link to="/lookbook" className="hover:text-gold-glow">Lookbook</Link></li>
            <li><Link to="/contact" className="hover:text-gold-glow">Bespoke Inquiry</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.35em] uppercase text-gold-glow font-bold mb-4">Studio</div>
          <ul className="space-y-3 text-sm text-white/60">
            <li>Victoria Island, Lagos</li>
            <li><a href="mailto:atelier@damascouture.com" className="hover:text-gold-glow">atelier@damascouture.com</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-gold-glow">WhatsApp: {WHATSAPP_DISPLAY}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] tracking-[0.35em] uppercase text-white/30">© 2026 Damas Couture</div>
        <div className="text-[10px] tracking-[0.35em] uppercase text-white/30">Lagos • London • Paris</div>
      </div>
    </footer>
  );
}