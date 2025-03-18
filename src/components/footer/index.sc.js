import styled from "styled-components";

/* Container for the entire footer */
export const FooterContainer = styled.footer`
  background-color: #0147ff; /* Adjust to match your desired blue */
  color: #fff;
  padding: 3rem 5%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/* Top section: brand on the left, links on the right */
export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* If you want the brand and links side by side on larger screens: */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

/* Brand area on the left */
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

/* Links area on the right */
export const LinksSection = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap; /* Wrap columns if screen is narrow */
  gap: 2rem;
  justify-content: flex-end;
`;

/* Individual link column */
export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ffdf00;
    }
  }
`;

/* Bottom section: location/contact info on left, policy links on right */
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

/* Location / contact info text */
export const FooterInfo = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

/* Container for policy links (Privacy, Terms) */
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
