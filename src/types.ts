/// <reference types="vite/client" />

export type Children = React.ReactNode | React.ReactNode[];

export type Book = {
  title: string;
  slug: string;
  published: string;
  description: string;
  genre: string;
  tagline: string;
  coverImage: string;
  statusMessage: string;
  wordCount: number;
  paperbackPageCount: number;
  chapters: number;
  amazonUrl: string;
  paperbackPrice: number;
  article: string;
};
