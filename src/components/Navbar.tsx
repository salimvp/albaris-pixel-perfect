import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "DISHES", href: "#dishes" },
  { label: "BRANCHES", href: "#branches" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "CAREER", href: "#career" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a href="#top" className="flex items-center" aria-label="AlBaris home">
          <img
            src={logo}
            alt="AlBaris Mandhi & Grills"
            width={912}
            height={736}
            className="h-9 w-auto md:h-11"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[11px] tracking-[0.14em] text-cream/70 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-cream/80 transition-colors hover:text-gold md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="mx-5 mb-2 rounded-md border border-gold/20 bg-[#0b0b0b] px-5 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.label} className="py-2">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-[11px] tracking-[0.14em] text-cream/70"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
