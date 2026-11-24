import { Alert, Box, ui } from "@adamjanicki/ui";
import Markdown from "src/components/Markdown";
import Page from "src/components/Page";
import type { Book as BookConfig } from "src/types";

type Props = {
  book: BookConfig;
};

export default function Book({ book }: Props) {
  return (
    <Page
      title={book.title}
      documentTitle={`${book.title} | Adam Janicki Writing`}
      vfx={{ paddingTop: "xxl", gap: "l" }}
    >
      <Box
        vfx={{
          axis: "x",
          align: "center",
          justify: "center",
          wrap: true,
          gap: "xxl",
          width: "full",
          paddingX: "l",
          marginX: "auto",
        }}
        style={{ maxWidth: 1100 }}
      >
        <Box style={{ flex: "1 1 240px", maxWidth: 360 }}>
          <ui.img
            src={book.coverImage}
            alt=""
            vfx={{ width: "full", radius: "rounded", shadow: "floating" }}
          />
        </Box>
        <Box
          vfx={{ axis: "y", gap: "s", stretch: "grow" }}
          style={{ flex: "1 1 300px", maxWidth: 560 }}
        >
          <ui.p vfx={{ fontSize: "xs", fontWeight: 8, color: "muted" }}>
            {book.genre.toUpperCase()}
          </ui.p>
          <ui.h2 vfx={{ fontSize: "xxl", margin: "none" }}>
            {book.tagline}
          </ui.h2>
          <ui.p vfx={{ fontSize: "m", color: "muted" }}>
            {book.description}
          </ui.p>
          <Alert type="info" vfx={{ fontWeight: 6 }}>
            {book.statusMessage}
          </Alert>
        </Box>
      </Box>
      <Box
        vfx={{ width: "full", paddingX: "l", marginX: "auto" }}
        style={{ maxWidth: 820 }}
      >
        <Markdown>{book.article}</Markdown>
      </Box>
    </Page>
  );
}
