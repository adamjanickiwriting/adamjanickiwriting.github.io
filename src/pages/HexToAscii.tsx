import { Alert, Box, Button, TextArea, ui } from "@adamjanicki/ui";
import { useMemo, useState } from "react";
import Page from "src/components/Page";

function convertHexToAscii(input: string) {
  const compact = input.trim().replace(/^0x/i, "").replace(/\s+/g, "");

  if (!compact) return { output: "", error: "" };
  if (!/^[0-9a-f]+$/i.test(compact)) {
    return {
      output: "",
      error: "Enter only hexadecimal characters (0–9 and A–F).",
    };
  }
  if (compact.length % 2 !== 0) {
    return {
      output: "",
      error: "Hex strings must contain an even number of characters.",
    };
  }

  const bytes = compact.match(/.{2}/g) ?? [];
  return {
    output: bytes
      .map((byte) => String.fromCharCode(Number.parseInt(byte, 16)))
      .join(""),
    error: "",
  };
}

export default function HexToAscii() {
  const [hex, setHex] = useState("");
  const { output, error } = useMemo(() => convertHexToAscii(hex), [hex]);

  return (
    <Page
      title="Hex to ASCII Converter"
      documentTitle="Hex to ASCII Converter | Adam Janicki Writing"
      vfx={{ paddingTop: "xxl", gap: "l" }}
    >
      <ui.p
        vfx={{
          margin: "none",
          paddingX: "l",
          color: "muted",
          textAlign: "center",
        }}
      >
        Convert a hexadecimal string into readable ASCII text.
      </ui.p>
      <Box
        vfx={{ axis: "y", gap: "l", width: "full", paddingX: "l" }}
        style={{ maxWidth: 760 }}
      >
        <Box vfx={{ axis: "y", gap: "xs", width: "full" }}>
          <ui.label htmlFor="hex-input" vfx={{ fontWeight: 7 }}>
            Hexadecimal
          </ui.label>
          <TextArea
            id="hex-input"
            value={hex}
            onChange={(event) => setHex(event.target.value)}
            placeholder="0xDEADBEEF"
            rows={6}
            spellCheck={false}
            autoCapitalize="characters"
            vfx={{ width: "full" }}
            style={{ resize: "vertical", fontFamily: "monospace" }}
            aria-describedby={error ? "hex-error" : undefined}
            aria-invalid={Boolean(error)}
          />
          {error && (
            <Alert
              id="hex-error"
              role="alert"
              type="error"
              vfx={{ padding: "s" }}
            >
              {error}
            </Alert>
          )}
        </Box>

        <Box vfx={{ axis: "y", gap: "xs", width: "full" }}>
          <ui.label htmlFor="ascii-output" vfx={{ fontWeight: 7 }}>
            ASCII
          </ui.label>
          <TextArea
            id="ascii-output"
            value={output}
            placeholder="Your converted text will appear here"
            rows={6}
            readOnly
            vfx={{ width: "full" }}
            style={{ resize: "vertical", fontFamily: "monospace" }}
          />
        </Box>

        <Box vfx={{ axis: "x", justify: "end" }}>
          <Button
            variant="secondary"
            onClick={() => setHex("")}
            disabled={!hex}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </Page>
  );
}
