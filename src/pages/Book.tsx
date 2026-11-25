import { Alert, Badge, Box, ButtonLink, Icon, ui } from "@adamjanicki/ui";
import { external } from "@adamjanicki/ui/icons";
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
      headerProps={{
        vfx: {
          fontWeight: 9,
          marginTop: "l",
          marginBottom: "none",
          paddingX: "l",
        },
        style: {
          fontSize: "clamp(2.5rem, 4vw, 3.25rem)",
          letterSpacing: "0.015em",
          lineHeight: 1,
        },
      }}
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
          <Badge type="static" vfx={{ fontWeight: 8 }}>
            {book.genre.toUpperCase()}
          </Badge>
          <ui.h2
            vfx={{ fontSize: "xl", fontWeight: 7, margin: "none" }}
            style={{ lineHeight: 1.2 }}
          >
            {book.tagline}
          </ui.h2>
          <ui.p vfx={{ fontSize: "m", color: "muted" }}>
            {book.description}
          </ui.p>
          <Box
            vfx={{ axis: "x", gap: "s", width: "full", wrap: true }}
            aria-label="Book details"
          >
            <BookStat label="Words" value={book.wordCount.toLocaleString()} />
            <BookStat
              label="Pages"
              value={book.paperbackPageCount.toLocaleString()}
            />
            <BookStat label="Chapters" value={book.chapters.toLocaleString()} />
          </Box>
          <Box
            vfx={{
              axis: "x",
              align: "center",
              justify: "between",
              gap: "m",
              wrap: true,
              width: "full",
              padding: "m",
              radius: "rounded",
              backgroundColor: "muted",
            }}
          >
            <Box vfx={{ axis: "y", gap: "xxs" }}>
              <ui.span vfx={{ fontSize: "s", color: "muted", fontWeight: 6 }}>
                Paperback · {formatPublicationDate(book.published)}
              </ui.span>
              <ui.span vfx={{ fontSize: "l", fontWeight: 8 }}>
                {formatPrice(book.paperbackPrice)}
              </ui.span>
            </Box>
            <ButtonLink
              to={book.amazonUrl}
              newTab
              vfx={{ axis: "x", align: "center", gap: "xs" }}
            >
              View on Amazon
              <Icon icon={external} size="xs" aria-hidden />
            </ButtonLink>
          </Box>
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

type BookStatProps = {
  label: string;
  value: string;
};

function BookStat({ label, value }: BookStatProps) {
  return (
    <Box
      vfx={{
        axis: "y",
        gap: "xxs",
        padding: "s",
        radius: "subtle",
        border: true,
        stretch: "even",
      }}
      style={{ minWidth: 120 }}
    >
      <ui.span vfx={{ fontSize: "l", fontWeight: 8 }}>{value}</ui.span>
      <ui.span vfx={{ fontSize: "xs", color: "muted", fontWeight: 6 }}>
        {label}
      </ui.span>
    </Box>
  );
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

function formatPublicationDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
