import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const TIKTOK_URL = "https://www.tiktok.com/@damas_couture27";
const WHATSAPP_NUMBER = "2347035696320";
const WHATSAPP_DISPLAY = "+234 703 569 6320";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const links = [
  {
    to: "/",
    label: "Home",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="size-5"
        aria-hidden
      >
        <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M5.5 10v9a1 1 0 0 0 1 1H10v-5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V20h3.5a1 1 0 0 0 1-1v-9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: "/collections",
    label: "Collections",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="size-5"
        aria-hidden
      >
        <rect x="3.5" y="4" width="7" height="7" rx="1.2" />
        <rect x="13.5" y="4" width="7" height="7" rx="1.2" />
        <rect x="3.5" y="13" width="7" height="7" rx="1.2" />
        <rect x="13.5" y="13" width="7" height="7" rx="1.2" />
      </svg>
    ),
  },
  {
    to: "/atelier",
    label: "Atelier",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="size-5"
        aria-hidden
      >
        <path d="M12 3 3 8l9 5 9-5-9-5Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16l9 5 9-5M3 12l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    to: "/lookbook",
    label: "Lookbook",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="size-5"
        aria-hidden
      >
        <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
        <path d="M3.5 15.5 8.5 11l3 3 4-4.5 5 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="8.5" r="1.4" />
      </svg>
    ),
  },
  {
    to: "/contact",
    label: "Contact",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="size-5"
        aria-hidden
      >
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m4 6.5 8 6.5 8-6.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 md:px-10 py-5 flex justify-between items-center backdrop-blur-md bg-[#0B0E14]/60 border-b border-white/5">
        <Link
          to="/"
          className="text-2xl font-display font-bold tracking-tight text-gold-glow italic"
        >
          Damas Couture
        </Link>

        <div className="hidden md:flex gap-9 text-[11px] font-semibold tracking-[0.25em] uppercase text-white/80">
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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Damas Couture on WhatsApp"
            className="hidden sm:inline-flex size-9 rounded-full border border-white/15 items-center justify-center text-white/80 hover:border-gold-glow hover:text-gold-glow transition-all hover:scale-110"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5L9 8.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
            </svg>
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Damas Couture on TikTok"
            className="hidden sm:inline-flex size-9 rounded-full border border-white/15 items-center justify-center text-white/80 hover:border-gold-glow hover:text-gold-glow transition-all hover:scale-110"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
              <path d="M19.6 6.7a5 5 0 0 1-3-1 5 5 0 0 1-2-3.2H11v13.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V10a5.8 5.8 0 1 0 5.4 5.8V9.4a8.1 8.1 0 0 0 5 1.7V7.7a5 5 0 0 1 0-1Z" />
            </svg>
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex px-5 py-2 rounded-full border border-gold-glow/50 text-gold-glow text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-gold-glow hover:text-royal-bg transition-all duration-500"
          >
            Inquire
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden size-10 rounded-full border border-white/15 flex flex-col items-center justify-center gap-1"
          >
            <span
              className={`h-px w-4 bg-white transition ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-white transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 top-[68px] z-40 bg-black/60 backdrop-blur-sm animate-fade-in"
          />
          <div className="md:hidden fixed top-[68px] right-0 bottom-0 z-[60] w-[78%] max-w-xs bg-[#0B0E14] border-l border-gold-glow/20 shadow-[-20px_0_60px_rgba(0,0,0,0.5)] flex flex-col py-6 px-4 gap-2 animate-drawer-in overflow-y-auto">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-gold-glow/15 border-gold-glow/40 text-gold-glow" }}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 text-white/90 text-base font-display hover:border-gold-glow/40 hover:text-gold-glow transition-all"
              >
                <span className="text-gold-glow">{l.icon}</span>
                {l.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-gold-glow text-royal-bg font-bold text-xs tracking-[0.2em] uppercase"
              >
                Chat on WhatsApp
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 px-5 py-3 rounded-2xl border border-white/15 text-white/70 text-xs tracking-[0.2em] uppercase hover:text-gold-glow hover:border-gold-glow/40 transition-all"
              >
                Follow on TikTok
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export { TIKTOK_URL, WHATSAPP_URL, WHATSAPP_NUMBER, WHATSAPP_DISPLAY };
