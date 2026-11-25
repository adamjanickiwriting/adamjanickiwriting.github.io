import type { Book } from "src/types";

const centauriArticle = `
# Summary

Life onboard _Centauri-2_ is bleak. All Percy has ever known is confinement to Level 5, where sleeping in claustrophobic capsules, eating flavorless rations, and working grueling shifts are simply accepted as unfortunate necessities to keep the spacecraft on its journey to the Alpha Centauri system.

But when a routine day plunges Percy into dire circumstances, his ordinary life is completely upended. He and his two best friends, Rian and Talia, must flee Level 5 to fight for their lives. Now on the run, the trio must venture into the ship's unknown corridors and confront unexpected dangers on their quest for answers.
`;

export const books: readonly Book[] = [
  {
    title: "Centauri-2",
    slug: "centauri-2",
    published: "2026-12-31",
    description:
      "In the 22nd century, a spaceship is bound for Alpha Centauri to escape a dying Earth.",
    genre: "sci-fi/thriller",
    tagline: "Humanity’s new home is 4.4 light-years away.",
    coverImage: "/images/covers/centauri-2.webp",
    statusMessage: "More details coming soon",
    article: centauriArticle,
    wordCount: 93_000,
    paperbackPageCount: 330,
    chapters: 25,
    amazonUrl: "https://amazon.com/TODO",
    paperbackPrice: 15,
  },
];
