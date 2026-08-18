import { ExternalLink, MapPin, Phone, CalendarCheck } from "lucide-react";
import { branches, type Branch } from "@/data/site";

function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article className="rounded-md border border-gold/15 bg-[#101010] px-6 py-7 text-center transition-colors hover:border-gold/35">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-black">
        <MapPin size={14} className="text-gold" />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-cream">
        {branch.name}
      </h3>
      <div className="gold-rule mx-auto mt-3 w-20" />
      <a
        href={`tel:${branch.phone.replace(/\s/g, "")}`}
        className="mt-4 flex items-center justify-center gap-2 rounded-md border border-gold/25 bg-[#15120B] px-3 py-2 text-[10px] text-gold"
      >
        <Phone size={11} />
        {branch.phone}
      </a>
      <div className="mt-3 flex gap-2">
        <a
          href={`tel:${branch.phone.replace(/\s/g, "")}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-booking/50 bg-booking/15 px-2 py-2 text-[9px] leading-tight text-booking"
        >
          <CalendarCheck size={11} />
          Book Your Table
        </a>
        <a
          href={branch.map}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-black px-2 py-2 text-[9px] text-cream/70"
        >
          <ExternalLink size={11} />
          Explore
        </a>
      </div>
    </article>
  );
}

export function BranchesSection() {
  return (
    <section id="branches" className="bg-[#050505] py-20 md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <h2 className="text-center font-display text-3xl font-bold text-cream md:text-[2.1rem]">
          Our Branches
        </h2>
        <div className="gold-rule mx-auto mt-3 w-24" />
        <p className="mx-auto mt-5 max-w-lg text-center text-[11px] text-[#8C8C8C]">
          Visit us at your nearest location for an authentic Al Baris Mandhi
          experience
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {branches.map((b) => (
            <BranchCard key={b.name} branch={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
