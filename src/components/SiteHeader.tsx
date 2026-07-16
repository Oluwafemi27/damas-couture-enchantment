import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const TIKTOK_URL = "https://www.tiktok.com/@damas_couture27";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/atelier", label: "Atelier" },
  { to: "/lookbook", label: "Lookbook" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-10 py-5 flex justify-between items-center backdrop-blur-md bg-[#0B0E14]/60 border-b border-white/5">
      <Link to="/" className="text-2xl font-display font-bold tracking-tight text-gold-glow italic">
        Damas Couture
      </Link>

      <div className="hidden md:flex gap-9 text-[11px] font-medium tracking-[0.25em] uppercase text-white/70">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-gold-glow" }}
            className="hover:text-gold-glow transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Damas Couture on TikTok"
          className="hidden sm:inline-flex size-9 rounded-full border border-white/15 items-center justify-center text-white/80 hover:border-gold-glow hover:text-gold-glow transition-all hover:scale-110"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
            <path d="M19.6 6.7a5 5 0 0 1-3-1 5 5 0 0 1-2-3.2H11v13.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V10a5.8 5.8 0 1 0 5.4 5.8V9.4a8.1 8.1 0 0 0 5 1.7V7.7a5 5 0 0 1 0-1Z"/>
          </svg>
        </a>
        <Link to="/contact" className="hidden sm:inline-flex px-5 py-2 rounded-full border border-gold-glow/50 text-gold-glow text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-gold-glow hover:text-royal-bg transition-all duration-500">
          Inquire
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden size-10 rounded-full border border-white/15 flex flex-col items-center justify-center gap-1"
        >
          <span className={`h-px w-4 bg-white transition ${open ? "translate-y-[3px] rotate-45" : ""}`}/>
          <span className={`h-px w-4 bg-white transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`}/>
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#0B0E14]/95 backdrop-blur-xl border-t border-white/5 flex flex-col items-center justify-center gap-8 animate-reveal-up">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-2xl font-display italic text-white hover:text-gold-glow"
            >
              {l.label}
            </Link>
          ))}
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="text-xs tracking-[0.3em] uppercase text-gold-glow">
            Follow on TikTok →
          </a>
        </div>
      )}
    </nav>
  );
}

export { TIKTOK_URL };