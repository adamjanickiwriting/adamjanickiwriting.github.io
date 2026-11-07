import { Route, Router, Routes, ui, useLocation } from "@adamjanicki/ui";
import { useEffect } from "react";
import { books } from "src/books";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import Home from "src/pages/Home";
import NotFound from "src/pages/NotFound";

export default function App() {
  return (
    <Router>
      <HashScroller />
      <Nav />
      <ui.main>
        <Routes fallback={<NotFound />}>
          <Route path="/" element={<Home />} />
          {books.map(({ slug, Component }) => (
            <Route key={slug} path={`/book/${slug}`} element={<Component />} />
          ))}
        </Routes>
      </ui.main>
      <Footer />
    </Router>
  );
}

function HashScroller() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}
