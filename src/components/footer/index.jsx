import React from "react";
import {
  FooterContainer,
  FooterLinks,
  FooterLink,
  FooterContact,
  FooterBottom,
  SocialIcons,
  SocialIcon,
  MapEmbed,
} from "./index.sc";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink onClick={() => scrollToSection("home")}>Home</FooterLink>
        <FooterLink onClick={() => scrollToSection("about")}>
          About Us
        </FooterLink>
        <FooterLink onClick={() => scrollToSection("bikes")}>Bikes</FooterLink>
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
      </FooterLinks>

      <FooterContact>
        <p>Contact Us</p>
        <p>Location: Sitapaila, Kathmandu</p>
        <p>Email: yourcompany@email.com</p>
        <p>Phone: +977 9848714898</p>

        <MapEmbed
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.993645956713!2d85.32524319278775!3d27.686591265034252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bedb46654f%3A0xc803704142369404!2sHamro%20Motorcycle%20Workshop!5e0!3m2!1sen!2snp!4v1741688900159!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
          title="Map"
        />

        <SocialIcons>
          <SocialIcon href="https://www.facebook.com" target="_blank">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com" target="_blank">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://www.twitter.com" target="_blank">
            <FaTwitter />
          </SocialIcon>
        </SocialIcons>
      </FooterContact>

      <FooterBottom>
        <p>© 2024 Dirtbike Rentals and Tours | Privacy Policy | Terms of Use</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
