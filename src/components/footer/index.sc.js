import styled from "styled-components";

/* Footer Container */
export const FooterContainer = styled.footer`
  background-color: #0147ff;
  color: #fff;
  padding: 3rem 5%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 30px 30px 0 0;
`;

/* Top Section: Brand on the left, Links on the right */
export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const BrandSection = styled.div`
  flex: 1;
`;

export const BrandTitle = styled.h2`
  font-family: "Orbitron", sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const BrandDescription = styled.p`
  max-width: 450px;
  line-height: 1.6;
`;

/* Links container on the right */
export const LinksSection = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-end;
`;

/* One column of links */
export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

/* Individual Footer Link */
export const FooterLink = styled.span`
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffdf00;
    transform: translateX(5px);
  }

  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: #ffdf00;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    transform: translate(-5px, -50%);
  }
`;

/* Bottom Section: Info on the left, Policies on the right */
export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

/* Contact / location text */
export const FooterInfo = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

/* Policy links container */
export const PolicyLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

/* Individual policy link */
export const PolicyLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffdf00;
  }
`;
