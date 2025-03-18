import React from "react";
import {
  FooterContainer,
  FooterTop,
  BrandSection,
  BrandTitle,
  BrandDescription,
  LinksSection,
  LinksColumn,
  FooterBottom,
  FooterInfo,
  PolicyLinks,
  PolicyLink,
  FooterLink,
} from "./index.sc";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FooterContainer>
      {/* Top Section */}
      <FooterTop>
        <BrandSection>
          <BrandTitle>YAMAHA</BrandTitle>
          <BrandDescription>
            Embark on a journey into the future with our Quantum Velocity
            Electric Commuter. This cutting-edge bike seamlessly integrates
            performance, style, and technology for an unforgettable ride.
          </BrandDescription>
        </BrandSection>

        <LinksSection>
          <LinksColumn>
            <FooterLink onClick={() => scrollToSection("home")}>
              Home
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("about")}>
              About Us
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("bikes")}>
              Bikes
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("tour")}>
              Tour Packages
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("booking")}>
              Booking
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("feedbacks")}>
              Feedbacks
            </FooterLink>
            <FooterLink onClick={() => scrollToSection("faq")}>FAQ</FooterLink>
          </LinksColumn>
        </LinksSection>
      </FooterTop>

      {/* Bottom Section */}
      <FooterBottom>
        <FooterInfo>
          New York, East media tower Road - 7th Street #356 | yamaha@contact.com
          | +77 888 57 55
        </FooterInfo>
        <PolicyLinks>
          <PolicyLink href="#privacy">Privacy Policy</PolicyLink>
          <PolicyLink href="#terms">Terms of Use</PolicyLink>
        </PolicyLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
