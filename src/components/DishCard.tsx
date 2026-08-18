import type { Dish } from "@/data/site";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group relative overflow-hidden rounded-md border border-gold/15 bg-[#101010] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.title}
          width={640}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent px-4 pb-4 pt-10">
        <p className="text-[8px] tracking-[0.2em] text-gold">{dish.category}</p>
        <h3 className="mt-1 font-display text-sm font-semibold text-cream">
          {dish.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[9px] leading-snug text-[#8C8C8C]">
          {dish.description}
        </p>
      </div>
    </article>
  );
}
