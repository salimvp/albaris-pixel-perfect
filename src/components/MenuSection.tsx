import { dishes } from "@/data/site";
import { DishCard } from "./DishCard";

export function MenuSection() {
  return (
    <section id="dishes" className="bg-[#050505] py-20 md:py-24">
      <div className="mx-auto max-w-[1150px] px-6">
        <p className="text-center text-[10px] tracking-[0.25em] text-gold">
          OUR MENU
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-bold text-cream md:text-[2.1rem]">
          Signature Dishes
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {dishes.slice(0, 4).map((d) => (
            <DishCard key={d.title} dish={d} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5 md:w-1/2 md:grid-cols-2">
          {dishes.slice(4).map((d) => (
            <DishCard key={d.title} dish={d} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#dishes"
            className="rounded-md border border-gold/50 bg-black px-8 py-2.5 text-[10px] tracking-[0.2em] text-gold transition-colors hover:bg-gold/10"
          >
            VIEW MORE
          </a>
        </div>
      </div>
    </section>
  );
}
