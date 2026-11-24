import type { Book } from "src/types";

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
    article: `
# Here's a heading 1

And here's some body text, I guess.
`,
  },
];
