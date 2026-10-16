import "src/pages/home.css";

import { ui } from "@adamjanicki/ui";

export default function Home() {
  return (
    <ui.main
      className="home"
      vfx={{ axis: "y", align: "center", justify: "center", width: "full" }}
    >
      <ui.h1 vfx={{ fontWeight: 8, fontSize: "xxl", textAlign: "center" }}>
        Adam Janicki Writing
      </ui.h1>
    </ui.main>
  );
}
