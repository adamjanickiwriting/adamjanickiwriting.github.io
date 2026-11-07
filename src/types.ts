/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

export type Children = React.ReactNode | React.ReactNode[];

export type Book = {
  title: string;
  published: string;
  description: string;
  slug: string;
  Component: () => React.ReactNode;
};
