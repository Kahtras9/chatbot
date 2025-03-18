// components/Navbar/index.js
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
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
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
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

  // Determine if the current path is '/login'
  const isLoginActive = location.pathname === "/login";

  return (
    <NavbarContainer style={{ top: showNav ? "0" : "-5rem" }}>
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
          <AuthButton to="/login" className={isLoginActive ? "active" : ""}>
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
