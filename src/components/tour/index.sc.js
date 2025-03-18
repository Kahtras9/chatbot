import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

export const PackageCard = styled.div`
  background: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0; /* subtle border for definition */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* enhanced shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* slight lift on hover */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

export const PackageTitle = styled.h2`
  font-size: 2rem;
  color: #222;
`;

export const PackageDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

export const SeeMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.875rem;
  padding: 0.75rem 1.25rem;
  color: #00b4d8;
  background: transparent;
  border: 2px solid #00b4d8;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;

  .arrow {
    font-size: 1rem;
  }

  &:hover {
    background: #00b4d8;
    color: #111;
  }
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 60%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

export const Details = styled.div`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;

  strong {
    font-weight: bold;
    font-size: 1.2rem;
  }

  ul {
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  a {
    color: #007bff;
    text-decoration: underline;
  }
`;

export const BookNowButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  background-color: #d9534f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;
