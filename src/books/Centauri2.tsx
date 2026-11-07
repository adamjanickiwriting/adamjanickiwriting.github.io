import { Box, ui } from "@adamjanicki/ui";
import Page from "src/components/Page";

export default function Centauri2() {
  return (
    <Page
      title="Centauri-2"
      documentTitle="Centauri-2 | Adam Janicki Writing"
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
        }}
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <Box style={{ flex: "1 1 240px", maxWidth: 360 }}>
          <ui.img
            src="/images/covers/centauri-2.webp"
            alt="Centauri-2 by Adam Janicki: two stars glow above a deep blue starfield."
            vfx={{ width: "full", radius: "rounded", shadow: "floating" }}
          />
        </Box>
        <Box
          vfx={{ axis: "y", gap: "s", stretch: "grow" }}
          style={{ flex: "1 1 300px", maxWidth: 560 }}
        >
          <ui.p vfx={{ fontSize: "xs", fontWeight: 8, color: "muted" }}>
            A SCI-FI THRILLER
          </ui.p>
          <ui.h2 vfx={{ fontSize: "xxl", margin: "none" }}>
            A new home is 4.37 light-years away.
          </ui.h2>
          <ui.p vfx={{ fontSize: "m", color: "muted" }}>
            My first novel: a dystopian sci-fi thriller set on a spaceship in
            the 22nd century bound for the Alpha Centauri system.
          </ui.p>
          <ui.p
            vfx={{
              padding: "s",
              borderLeft: true,
              borderColor: "primary",
              backgroundColor: "muted",
              radius: "subtle",
              fontWeight: 6,
            }}
          >
            More details coming soon
          </ui.p>
        </Box>
      </Box>
    </Page>
  );
}
