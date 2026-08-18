import { board, type BoardMember } from "@/data/site";

function BoardMemberCard({ member }: { member: BoardMember }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-md border border-gold/12 ${
        member.wide ? "md:col-span-2" : ""
      }`}
    >
      <div className={member.wide ? "aspect-[4/3]" : "aspect-[3/4]"}>
        <img
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          width={900}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
        <p className="font-condensed text-sm font-bold uppercase tracking-wide text-cream">
          {member.name}
        </p>
        <p className="text-[8px] tracking-[0.15em] text-gold/80">
          {member.arabic}
        </p>
        <p className="mt-1 text-[7px] tracking-[0.18em] text-cream/60">
          {member.role}
        </p>
      </div>
    </article>
  );
}

export function BoardSection() {
  return (
    <section className="bg-[#050505] py-20 md:py-24">
      <div className="mx-auto max-w-[1150px] px-6">
        <h2 className="text-center font-display text-3xl font-bold text-cream md:text-[2.1rem]">
          Meet The Board
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-5">
          {board.map((m) => (
            <BoardMemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
