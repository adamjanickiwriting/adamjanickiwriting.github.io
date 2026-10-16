import { Route, Router, Routes } from "@adamjanicki/ui";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import Home from "src/pages/Home";
import NotFound from "src/pages/NotFound";

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes fallback={<NotFound />}>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
