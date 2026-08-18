import { useState, type FormEvent } from "react";
import { User, Phone, Link2, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const inputClass =
  "w-full rounded-md border border-gold/15 bg-[#101010] py-2.5 pl-9 pr-3 text-[11px] text-cream placeholder:text-[#6b6b6b] focus:border-gold/50 focus:outline-none";

export function CareerSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="career" className="bg-[#090909] py-20 md:py-24">
      <div className="mx-auto grid max-w-[1050px] items-center gap-14 px-6 md:grid-cols-2">
        <div>
          <img
            src={logo}
            alt="AlBaris Mandhi & Grills"
            width={912}
            height={736}
            loading="lazy"
            className="h-16 w-auto"
          />
          <p className="mt-8 text-[9px] tracking-[0.25em] text-gold">
            JOIN THE LEGACY
          </p>
          <h2 className="mt-3 font-condensed text-3xl font-bold uppercase leading-tight text-cream md:text-[2.4rem]">
            START YOUR <span className="text-gold-bright">ROYAL</span> JOURNEY
          </h2>
          <p className="mt-4 max-w-sm text-[11px] leading-relaxed text-[#8C8C8C]">
            Join the fastest-growing Arabian culinary brand. We're looking for
            passionate individuals ready to create exceptional dining
            experiences.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-cream">
            Apply Now
          </h3>
          <p className="mt-1 text-[10px] text-[#8C8C8C]">
            Share your passion with us.
          </p>

          <form className="mt-5 space-y-3" onSubmit={onSubmit}>
            <div className="relative">
              <User
                size={12}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60"
              />
              <input
                required
                name="name"
                aria-label="Full Name"
                placeholder="Full Name"
                className={inputClass}
              />
            </div>
            <div className="relative">
              <Phone
                size={12}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60"
              />
              <input
                required
                name="whatsapp"
                aria-label="WhatsApp Number"
                placeholder="WhatsApp Number"
                className={inputClass}
              />
            </div>
            <div className="relative">
              <Link2
                size={12}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60"
              />
              <input
                name="cv"
                aria-label="CV / Portfolio Link (Optional)"
                placeholder="CV / Portfolio Link (Optional)"
                className={inputClass}
              />
            </div>
            <textarea
              name="about"
              rows={4}
              aria-label="Tell us about yourself"
              placeholder="Tell us about yourself..."
              className="w-full rounded-md border border-gold/15 bg-[#101010] p-3 text-[11px] text-cream placeholder:text-[#6b6b6b] focus:border-gold/50 focus:outline-none"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-gold py-2.5 text-[10px] font-semibold tracking-[0.2em] text-black transition-all hover:brightness-110"
            >
              {sent ? "SUBMITTED" : "SUBMIT"}
              <Send size={11} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
