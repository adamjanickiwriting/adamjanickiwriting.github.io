import "src/pages/home.css";

import { Box, ui, UnstyledLink } from "@adamjanicki/ui";
import { useEffect } from "react";
import { books } from "src/books";
import Section from "src/components/Section";

export default function Home() {
  useEffect(() => {
    document.title = "Adam Janicki Writing";
  }, []);

  return (
    <>
      <Box
        id="home"
        className="home"
        vfx={{
          axis: "y",
          align: "center",
          justify: "center",
          width: "full",
          padding: "xxl",
        }}
      >
        <ui.h1
          vfx={{ fontWeight: 8, textAlign: "center" }}
          style={{ fontSize: 54 }}
        >
          Adam Janicki Writing
        </ui.h1>
      </Box>
      <Section
        id="books"
        title="Books"
        description="Some stories I have penned."
      >
        <Box
          vfx={{ axis: "x", wrap: true, justify: "center", gap: "l" }}
          style={{ maxWidth: 1100, margin: "2rem auto 0" }}
        >
          {books.map((book) => (
            <UnstyledLink
              to={`/book/${book.slug}`}
              key={book.slug}
              vfx={{
                axis: "y",
                gap: "s",
                width: "min",
                padding: "m",
                border: true,
                radius: "rounded",
                shadow: "subtle",
              }}
            >
              <ui.img
                src={`/images/covers/${book.slug}.webp`}
                alt={`Cover of ${book.title} by Adam Janicki`}
                vfx={{ radius: "rounded", border: true, shadow: "subtle" }}
                style={{ maxHeight: 340 }}
              />
              <ui.h3 vfx={{ margin: "none", fontSize: "l" }}>
                {book.title}
              </ui.h3>
              <ui.p
                vfx={{
                  margin: "none",
                  color: "muted",
                  fontSize: "s",
                  fontWeight: 5,
                }}
              >
                {book.description}
              </ui.p>
            </UnstyledLink>
          ))}
        </Box>
      </Section>
    </>
  );
}
