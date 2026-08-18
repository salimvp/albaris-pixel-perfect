import { Star } from "lucide-react";
import { reviews, type Review } from "@/data/site";

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-md border border-gold/12 bg-[#101010] p-6">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={11}
            className={
              i < review.stars ? "fill-gold text-gold" : "text-muted-foreground"
            }
          />
        ))}
      </div>
      <p className="mt-4 text-[10px] italic leading-relaxed text-[#9a9a9a]">
        "{review.text}"
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-[#15120B] text-[9px] text-gold">
          {review.initials}
        </span>
        <div>
          <p className="text-[10px] font-medium text-cream">{review.name}</p>
          <p className="text-[8px] tracking-wide text-gold/70">
            Verified Customer
          </p>
        </div>
      </div>
    </article>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#090909] py-20 md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <h2 className="text-center font-condensed text-2xl font-bold tracking-[0.15em] text-cream">
          REVIEWS
        </h2>
        <div className="gold-rule mx-auto mt-3 w-24" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
