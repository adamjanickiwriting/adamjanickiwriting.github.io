import { Box, ui } from "@adamjanicki/ui";
import type * as React from "react";

type Props = {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Section({ title, id, children, description }: Props) {
  return (
    <ui.section id={id}>
      <ui.h2 vfx={{ textAlign: "center", margin: "none", fontSize: "xxl" }}>
        {title}
      </ui.h2>
      <ui.p vfx={{ margin: "none", textAlign: "center" }}>{description}</ui.p>
      <Box
        vfx={{ marginX: "auto", marginTop: "s", marginBottom: "m" }}
        style={{ width: 50, height: 5 }}
        className="bg-accent"
      />
      {children}
    </ui.section>
  );
}
