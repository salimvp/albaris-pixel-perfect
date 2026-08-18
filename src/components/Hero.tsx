import heroDish from "@/assets/hero-mandhi.jpg";
import logo from "@/assets/logo.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#050505] pb-14 pt-28 md:pb-20 md:pt-32"
    >
      {/* gold decorative curves */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full border-[26px] border-gold/25 blur-[1px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border-[30px] border-gold/15"
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-6 md:grid-cols-[1fr_1.05fr] md:px-10">
        <div className="order-2 max-w-xl md:order-1">
          <p className="font-display text-lg italic text-cream/80">Welcome to</p>
          <p className="mt-1 text-lg font-medium tracking-wide text-cream md:text-xl">
            the smoky taste of
          </p>
          <h1 className="mt-2 font-condensed text-[3.6rem] font-bold uppercase leading-[0.88] tracking-tight md:text-[5.5rem]">
            <span className="block text-gold-bright">ALFAHM</span>
            <span className="block text-cream">DELIGHT!</span>
          </h1>
          <p className="mt-5 max-w-sm text-[11px] leading-relaxed text-[#8C8C8C] md:text-xs">
            Experience the authentic taste of Al Fahm with passion, served with
            tradition.
          </p>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-[560px] rounded-full border border-gold/25 p-3">
            <div className="h-full w-full overflow-hidden rounded-full ring-1 ring-gold/20">
              <img
                src={heroDish}
                alt="Arabian mandhi platter with roasted chicken and golden rice"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 flex max-w-[1400px] justify-center px-6 md:mt-0 md:justify-end md:px-16">
        <img
          src={logo}
          alt="AlBaris Mandhi & Grills"
          width={912}
          height={736}
          loading="lazy"
          className="h-20 w-auto md:h-28"
        />
      </div>
    </section>
  );
}
