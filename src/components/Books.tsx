import { ui } from "@adamjanicki/ui";
import Section from "src/components/Section";

export default function Books() {
  return (
    <Section id="books" title="Books" description="Stories I have penned">
      <ui.p
        vfx={{
          fontSize: "m",
          textAlign: "center",
          color: "muted",
          marginBottom: "xl",
        }}
      >
        Coming soon...
      </ui.p>
    </Section>
  );
}
