import "src/pages/home.css";

import { Box, ui, UnstyledLink, useScrollToHash } from "@adamjanicki/ui";
import { useEffect } from "react";
import { books } from "src/books";
import Section from "src/components/Section";

export default function Home() {
  useScrollToHash({ behavior: "smooth" });

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
          vfx={{
            axis: "x",
            wrap: true,
            justify: "center",
            gap: "l",
            marginX: "auto",
            marginTop: "xxl",
          }}
          style={{ maxWidth: 1100 }}
        >
          {books.map((book) => (
            <UnstyledLink
              to={`/book/${book.slug}`}
              key={book.slug}
              vfx={{
                axis: "y",
                width: "min",
                radius: "rounded",
                overflow: "hidden",
                backgroundColor: "default",
                color: "inherit",
                shadow: "subtle",
                hover: "shade",
              }}
              style={{ width: 260 }}
            >
              <ui.img
                src={book.coverImage}
                alt={`Cover of ${book.title} by Adam Janicki`}
                vfx={{ width: "full" }}
              />
              <Box vfx={{ axis: "y", gap: "xs", padding: "m" }}>
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
              </Box>
            </UnstyledLink>
          ))}
        </Box>
      </Section>
    </>
  );
}
