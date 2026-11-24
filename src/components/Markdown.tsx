import "src/components/markdown.css";

import MarkdownRenderer from "@adamjanicki/markdown";
import {
  Badge,
  Box,
  Button,
  classNames,
  Icon,
  Link,
  ui,
  useScrollToHash,
} from "@adamjanicki/ui";
import transformVfx from "@adamjanicki/ui/components/ui/transformVfx";
import { check, clipboard, link } from "@adamjanicki/ui/icons";
import type { Vfx } from "@adamjanicki/ui/types/common";
import React, { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight as light } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  children: string;
  className?: string;
};

export default function Markdown({ children, className }: Props) {
  useScrollToHash({ behavior: "smooth" });

  return (
    <MarkdownRenderer
      hideTags={{ h4: "unwrap", h5: "unwrap", h6: "unwrap" }}
      className={classNames(
        "markdown-body",
        transformVfx({ width: "full" }),
        className,
      )}
      renderers={{
        a: ({ children: linkChildren, href }) => (
          <Link newTab={isExternal(href)} to={href}>
            {linkChildren}
          </Link>
        ),
        blockquote: ({ children: quoteChildren }) => (
          <ui.blockquote
            vfx={{
              padding: "s",
              marginX: "xs",
              borderLeft: true,
              borderWidth: "l",
              italics: true,
              fontWeight: 5,
            }}
          >
            {quoteChildren}
          </ui.blockquote>
        ),
        code: ({ children: codeChildren }) => (
          <ui.code className="markdown-inline-code">{codeChildren}</ui.code>
        ),
        pre: ({ children: codeChildren, lang }) => (
          <CodeBlock lang={lang}>{codeChildren}</CodeBlock>
        ),
        h1: ({ children: headingChildren }) => (
          <AnchoredElement
            idContent={headingChildren}
            type="h1"
            vfx={{ fontSize: "xl", margin: "none" }}
          >
            {headingChildren}
          </AnchoredElement>
        ),
        h2: ({ children: headingChildren }) => (
          <AnchoredElement
            idContent={headingChildren}
            type="h2"
            vfx={{ fontSize: "l", margin: "none" }}
          >
            {headingChildren}
          </AnchoredElement>
        ),
        h3: ({ children: headingChildren }) => (
          <AnchoredElement
            idContent={headingChildren}
            type="h3"
            vfx={{ fontSize: "m", margin: "none" }}
          >
            {headingChildren}
          </AnchoredElement>
        ),
        img: ({ alt, src }) => {
          const youtubeId = getYouTubeId(src);

          return (
            <AnchoredElement idContent={alt} vfx={{ width: "full" }}>
              <ui.span vfx={{ axis: "y", align: "center", width: "full" }}>
                {youtubeId ? (
                  <ui.iframe
                    src={`https://youtube.com/embed/${youtubeId}`}
                    title={alt || "Embedded YouTube video"}
                    vfx={{
                      radius: "rounded",
                      width: "full",
                      maxWidth: "full",
                      border: false,
                    }}
                    style={{
                      maxHeight: "60vh",
                      aspectRatio: "16 / 9",
                      display: "block",
                    }}
                  />
                ) : (
                  <ui.img
                    src={src}
                    vfx={{ radius: "rounded", maxWidth: "full" }}
                    style={{ maxHeight: "60vh" }}
                    alt={alt}
                  />
                )}
                {alt && (
                  <ui.em
                    vfx={{
                      color: "muted",
                      fontWeight: 6,
                      textAlign: "center",
                    }}
                  >
                    {alt}
                  </ui.em>
                )}
              </ui.span>
            </AnchoredElement>
          );
        },
        hr: () => <ui.hr className="markdown-rule" />,
        table: ({ children: tableChildren }) => (
          <AnchoredElement idContent={tableChildren}>
            <Box
              className="markdown-table-wrap"
              vfx={{
                border: true,
                radius: "rounded",
                shadow: "subtle",
                marginY: "m",
                overflowX: "auto",
                width: "full",
              }}
            >
              <ui.table vfx={{ margin: "none" }}>{tableChildren}</ui.table>
            </Box>
          </AnchoredElement>
        ),
        tr: (props) => (
          <ui.tr
            className="markdown-table-row"
            vfx={{
              axis: "x",
              align: "center",
              borderBottom: true,
              padding: "s",
            }}
            {...props}
          />
        ),
        th: (props) => <ui.td vfx={{ fontWeight: 7 }} {...props} />,
        td: (props) => <ui.td {...props} />,
      }}
      inlineExtensions={[
        {
          token: "==",
          intraword: true,
          renderer: (props) => <ui.mark {...props} vfx={{ paddingX: "xxs" }} />,
        },
        {
          token: "^",
          intraword: true,
          renderer: (props) => (
            <ui.sup>
              <ui.small {...props} vfx={{ fontWeight: 6 }} />
            </ui.sup>
          ),
        },
      ]}
    >
      {children}
    </MarkdownRenderer>
  );
}

function getYouTubeId(url: string) {
  if (typeof url !== "string") return null;

  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}

function stringifyChildren(children: React.ReactNode): string {
  if (!children) return "";
  if (Array.isArray(children)) {
    return children.map(stringifyChildren).join(" ").trim();
  }
  if (React.isValidElement<{ children?: React.ReactNode }>(children)) {
    return stringifyChildren(children.props.children);
  }
  return `${children}`.trim();
}

function makeId(content: React.ReactNode) {
  return stringifyChildren(content)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

type AnchoredElementProps = {
  children: React.ReactNode;
  idContent: React.ReactNode;
  vfx?: Vfx;
  type?: "h1" | "h2" | "h3" | "span";
};

function AnchoredElement({
  children,
  idContent,
  type = "span",
  vfx,
}: AnchoredElementProps) {
  const id = makeId(idContent);
  const Component = ui[type];

  return (
    <Component
      vfx={{ axis: "x", align: "center", ...vfx }}
      className="markdown-anchor-wrapper"
      id={id || undefined}
      style={{ whiteSpace: "pre-wrap" }}
    >
      {id && (
        <Link
          className="markdown-anchor"
          to={`#${id}`}
          aria-label="Link to section"
        >
          <Icon icon={link} />
        </Link>
      )}
      {children}
    </Component>
  );
}

function isExternal(href: string) {
  return !(href.startsWith("#") || href.startsWith("/"));
}

type CodeBlockProps = {
  children: React.ReactNode;
  lang?: string;
};

function CodeBlock({ children, lang }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const code = stringifyChildren(children).trim();

  const copyCode = () => {
    void navigator.clipboard.writeText(code);
    setCopied(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Box
      vfx={{
        backgroundColor: "default",
        border: true,
        radius: "rounded",
        shadow: "floating",
        marginY: "l",
        overflow: "hidden",
        width: "full",
      }}
    >
      <Box
        vfx={{
          axis: "x",
          align: "center",
          justify: "between",
          paddingY: "xs",
          paddingX: "s",
          borderBottom: true,
        }}
      >
        <ui.span vfx={{ fontSize: "s", fontWeight: 5 }}>
          {lang || "text"}
        </ui.span>
        {copied ? (
          <Badge vfx={{ axis: "x", align: "center", gap: "xs" }} type="success">
            <Icon icon={check} /> Copied
          </Badge>
        ) : (
          <Button
            vfx={{ axis: "x", align: "center", gap: "xs", paddingY: "xxs" }}
            onClick={copyCode}
            size="small"
            variant="secondary"
          >
            <Icon icon={clipboard} /> Copy
          </Button>
        )}
      </Box>
      <ui.pre
        className="markdown-code-scroll"
        vfx={{
          axis: "x",
          margin: "none",
          overflow: "auto",
          padding: "s",
          width: "full",
        }}
      >
        <SyntaxHighlighter
          style={light}
          language={lang || "text"}
          customStyle={{
            background: "none",
            backgroundColor: "transparent",
            padding: 0,
            margin: 0,
          }}
        >
          {code}
        </SyntaxHighlighter>
      </ui.pre>
    </Box>
  );
}
