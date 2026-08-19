import logo from "@/assets/logo.png";
import mandi1 from "@/assets/gallery-mandi-1.png";
import mandi2 from "@/assets/gallery-mandi-2.png";
import mandi3 from "@/assets/gallery-mandi-3.png";
import { CircularGallery, type GalleryItem } from "@/components/ui/circular-gallery";

const heroGallery: GalleryItem[] = [
  {
    common: "Chicken Mandhi",
    binomial: "slow-cooked classic",
    photo: { url: mandi1, text: "Chicken mandhi platter with saffron rice" },
  },
  {
    common: "Peri Peri Alfaham",
    binomial: "charcoal grilled",
    photo: { url: mandi2, text: "Peri peri al faham grilled chicken platter" },
  },
  {
    common: "Mutton Mandhi",
    binomial: "rich & aromatic",
    photo: { url: mandi3, text: "Mutton mandhi platter with long grain rice" },
  },
];


export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#050505] pb-10 pt-28 md:pb-12 md:pt-32"
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
            <div className="relative h-full w-full rounded-full ring-1 ring-gold/20">
              <CircularGallery items={heroGallery} radius={130} holdDuration={2600} />
            </div>
          </div>

        </div>
      </div>

      <div className="relative mx-auto mt-6 flex max-w-[1400px] justify-center px-6 md:-mt-16 md:justify-end md:px-16">
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
