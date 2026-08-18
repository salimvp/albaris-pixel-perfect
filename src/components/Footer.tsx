import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { branches } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-16">
      <div className="mx-auto grid max-w-[1100px] gap-12 px-6 md:grid-cols-[0.8fr_1.4fr]">
        <div>
          <img
            src={logo}
            alt="AlBaris Mandhi & Grills"
            width={912}
            height={736}
            loading="lazy"
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-xs text-[10px] leading-relaxed text-[#8C8C8C]">
            Bringing the authentic taste of Arabian Mandhi to the heart of
            Kerala. Experience royalty in every grain.
          </p>
        </div>

        <div>
          <p className="text-[9px] tracking-[0.25em] text-gold">OUR BRANCHES</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {branches.map((b) => (
              <div
                key={b.name}
                className="rounded-md border border-gold/12 bg-[#101010] p-4"
              >
                <p className="font-display text-xs font-semibold text-cream">
                  {b.name}
                </p>
                <p className="mt-2 flex gap-1.5 text-[9px] leading-relaxed text-[#8C8C8C]">
                  <MapPin size={10} className="mt-0.5 shrink-0 text-gold/70" />
                  {b.address}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[9px] text-gold">
                  <Phone size={10} />
                  {b.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-gold/10 py-5">
        <p className="text-center text-[8px] tracking-[0.2em] text-[#6b6b6b]">
          © 2026 AL-BARIS MANDHI & GRILLS LLP. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
