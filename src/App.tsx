import { ui, useScrollToHash } from "@adamjanicki/ui";
import Books from "src/components/Books";
import Footer from "src/components/Footer";
import Home from "src/components/Home";
import Nav from "src/components/Nav";

export default function App() {
  useScrollToHash();

  return (
    <>
      <Nav />
      <ui.main>
        <Home />
        <Books />
      </ui.main>
      <Footer />
    </>
  );
}
