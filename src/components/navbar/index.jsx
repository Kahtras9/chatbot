import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  NavbarInner,
  Brand,
  NavLinks,
  NavLinkItem,
  AuthButtons,
  AuthButton,
} from "./index.sc";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // User is scrolling down
        setShowNav(false);
      } else {
        // User is scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavbarContainer style={{ top: showNav ? "0" : "-80px" }}>
      <NavbarInner>
        <Brand>Yamaha</Brand>
        <NavLinks>
          <NavLinkItem onClick={() => scrollToSection("home")}>
            HOME
          </NavLinkItem>
          <NavLinkItem onClick={() => scrollToSection("about")}>
            ABOUT
          </NavLinkItem>
          <NavLinkItem onClick={() => scrollToSection("bikes")}>
            BIKES
          </NavLinkItem>
          <NavLinkItem onClick={() => scrollToSection("tour")}>
            TOUR
          </NavLinkItem>
          <NavLinkItem onClick={() => scrollToSection("booking")}>
            BOOKING
          </NavLinkItem>
          <NavLinkItem onClick={() => scrollToSection("feedbacks")}>
            FEEDBACK
          </NavLinkItem>
        </NavLinks>
        <AuthButtons>
          <AuthButton to="/login">
            <span>Log In</span>
          </AuthButton>
          <AuthButton to="/signup">
            <span>Sign Up</span>
          </AuthButton>
        </AuthButtons>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;
