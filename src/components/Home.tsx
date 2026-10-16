import "src/components/home.css";

import { Box, ui } from "@adamjanicki/ui";

export default function Home() {
  return (
    <Box
      id="home"
      className="home"
      vfx={{ axis: "y", align: "center", justify: "center" }}
    >
      <ui.h1
        vfx={{ fontWeight: 8, textAlign: "center" }}
        style={{ fontSize: 54 }}
      >
        Adam Janicki Writing
      </ui.h1>
    </Box>
  );
}
