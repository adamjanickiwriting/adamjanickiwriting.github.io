import Centauri2 from "src/books/Centauri2";
import type { Book } from "src/types";

export const books: readonly Book[] = [
  {
    title: "Centauri-2",
    slug: "centauri-2",
    published: "2026-12-31",
    description:
      "My first novel, a dystopian sci-fi thriller set on a spaceship in the 22nd century bound for the Alpha Centauri system.",
    Component: Centauri2,
  },
];
