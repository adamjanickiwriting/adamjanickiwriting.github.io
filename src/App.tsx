import { Route, Router, Routes, ui } from "@adamjanicki/ui";
import { books } from "src/books";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import Book from "src/pages/Book";
import HexToAscii from "src/pages/HexToAscii";
import Home from "src/pages/Home";
import NotFound from "src/pages/NotFound";

export default function App() {
  return (
    <Router>
      <Nav />
      <ui.main>
        <Routes fallback={<NotFound />}>
          <Route path="/" element={<Home />} />
          <Route path="/hex-to-ascii" element={<HexToAscii />} />
          {books.map((book) => (
            <Route
              key={book.slug}
              path={`/book/${book.slug}`}
              element={<Book book={book} />}
            />
          ))}
        </Routes>
      </ui.main>
      <Footer />
    </Router>
  );
}
