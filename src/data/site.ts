import dishChicken from "@/assets/dish-chicken.jpg";
import dishBeef from "@/assets/dish-beef.jpg";
import dishRibs from "@/assets/dish-ribs.jpg";
import dishMutton from "@/assets/dish-mutton.jpg";
import dishAlfaham from "@/assets/dish-alfaham.jpg";
import dishPeri from "@/assets/dish-peri.jpg";
import board1 from "@/assets/board-1.jpg";
import board2 from "@/assets/board-2.jpg";
import board3 from "@/assets/board-3.jpg";
import board4 from "@/assets/board-4.jpg";

export type Dish = {
  category: string;
  title: string;
  description: string;
  image: string;
};

export const dishes: Dish[] = [
  {
    category: "MANDHI",
    title: "Chicken Mandhi",
    description:
      "Tender chicken marinated in secret spices, slow-cooked to perfection.",
    image: dishChicken,
  },
  {
    category: "MANDHI",
    title: "Beef Mandhi",
    description: "A succulent beef piece served on a bed of aromatic long-grain.",
    image: dishBeef,
  },
  {
    category: "MANDHI",
    title: "Beef Ribs Mandhi",
    description: "Premium beef ribs, slow-roasted to perfection.",
    image: dishRibs,
  },
  {
    category: "MANDHI",
    title: "Mutton Mandhi",
    description: "Classic mutton match with rich flavors and traditional…",
    image: dishMutton,
  },
  {
    category: "ALFAHM MANDHI",
    title: "Normal Alfaham Mandhi",
    description: "Grilled chicken al-fahm served with our signature mandhi rice.",
    image: dishAlfaham,
  },
  {
    category: "ALFAHAM MANDHI",
    title: "Peri Peri Alfaham Mandhi",
    description: "Spicy peri peri marinated chicken alfaham with mandhi.",
    image: dishPeri,
  },
];

export type Branch = {
  name: string;
  phone: string;
  address: string;
  map: string;
};

export const branches: Branch[] = [
  {
    name: "Chengannur",
    phone: "+91 9526314141",
    address: "Mulakuzha MC Road, Chengannur, Alappuzha District, Kerala",
    map: "https://maps.google.com/?q=Chengannur+Kerala",
  },
  {
    name: "Pathanamthitta",
    phone: "+91 9526014141",
    address: "Near Kannemkara Junction, Pathanamthitta, Kerala",
    map: "https://maps.google.com/?q=Pathanamthitta+Kerala",
  },
  {
    name: "Punalur",
    phone: "+91 9526164141",
    address: "Nellipally, Punalur, Kollam District, Kerala",
    map: "https://maps.google.com/?q=Punalur+Kerala",
  },
];

export type Review = {
  stars: number;
  text: string;
  name: string;
  initials: string;
};

export const reviews: Review[] = [
  {
    stars: 5,
    text: "we did a takeaway/delivery order of a Full Chicken Polichoru with the accompanying sauces & Kuzhimandhi Rice. The eating experience & the flavors were…",
    name: "Keshy George",
    initials: "KG",
  },
  {
    stars: 5,
    text: "The takeaway rice is too good along with the chicken pieces, rice is too good to talkabout, ample parking and inside seating space too",
    name: "Jeb Shaiju",
    initials: "JS",
  },
  {
    stars: 4,
    text: "I tried BBQ AlFahm mandi which is very very good tasty. Price is 250 per quarter where they will give unlimited rice and malanese.",
    name: "Shijim Reji Abraham",
    initials: "SA",
  },
];

export type BoardMember = {
  name: string;
  arabic: string;
  role: string;
  image: string;
  wide?: boolean;
};

export const board: BoardMember[] = [
  {
    name: "UNNIS",
    arabic: "KALATHINGAL",
    role: "CHAIRMAN & MANAGING DIRECTOR",
    image: board1,
    wide: true,
  },
  { name: "ANOOF", arabic: "KALATHINGAL", role: "DIRECTOR", image: board2 },
  { name: "THANOOB", arabic: "KALATHINGAL", role: "DIRECTOR", image: board3 },
  {
    name: "MUHAMMED NASEEF",
    arabic: "KALATHINGAL",
    role: "DIRECTOR",
    image: board4,
  },
];
