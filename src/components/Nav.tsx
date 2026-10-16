import "src/components/nav.css";

import { Box, Link, ui, UnstyledLink, useScroll } from "@adamjanicki/ui";
import { TripleSpin as Hamburger } from "@adamjanicki/ui/components/Hamburger";
import { useState } from "react";
import Logo from "src/img/logo.svg?react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  return (
    <ui.nav className={scrollY >= 120 || open ? "nav-scrolled" : undefined}>
      <Box
        vfx={{ axis: "x", align: "center", justify: "between" }}
        className="bar-container"
      >
        <UnstyledLink
          vfx={{ axis: "x", align: "center" }}
          to="#home"
          aria-label="Home"
        >
          <Logo width="40px" height="40px" />
        </UnstyledLink>
        <Box className="mobile">
          <Hamburger
            open={open}
            onClick={() => setOpen(!open)}
            direction="right"
            size={45}
            aria-label="toggle menu"
            barHeight={3}
          />
        </Box>
      </Box>
      <Box
        className="desktop navlink-container"
        style={open ? { display: "flex" } : undefined}
      >
        {(["Home", "Books"] as const).map((title) => (
          <Link
            key={title}
            vfx={{ width: "full", color: "inherit", radius: "subtle" }}
            to={`#${title.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="blur"
          >
            {title}
          </Link>
        ))}
      </Box>
    </ui.nav>
  );
}
