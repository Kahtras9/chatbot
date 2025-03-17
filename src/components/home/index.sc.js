import styled from "styled-components";

/* ---------------------- */
/* PAGE CONTAINER         */
/* ---------------------- */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 3%;
  background-color: #1f1f21;
  color: #fff;
  min-height: 100vh;
`;

export const Content = styled.div`
  position: relative;
`;

/* HEADINGS & TEXT */
export const Heading = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 70%;
  word-wrap: break-word;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  max-width: 45%;
  color: #aaa;
`;

/* PILL-SHAPED 'SEE MORE' BUTTON */
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

/* IMAGE WRAPPER */
export const ImageWrapper = styled.div`
  transform: translateY(-1rem);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  img {
    width: 95vh;
    height: 67vh;
  }
`;

/* SPECS TO THE RIGHT */
export const Specs = styled.div`
  position: absolute;
  right: 0%;
  top: 33%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: right;
`;

export const SpecItem = styled.div``;

export const SpecValue = styled.div`
  font-family: "Orbitron", sans-serif;
  font-size: 28px;
  font-weight: bold;
`;

export const SpecLabel = styled.div`
  font-family: "Orbitron", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  color: #aaa;
`;

/* ---------------------- */
/* PAGINATION NUMBERS     */
/* ---------------------- */
export const Pagination = styled.div`
  /* Position near the left side */
  position: absolute;
  bottom: 0%; /* or wherever you want it vertically */
  left: 4%;

  /* Display items in a row (horizontal) */
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
`;

/**
 * Instead of round dots, we display numbers.
 * 'active' means highlight in a different color.
 */
export const PaginationNumber = styled.div`
  font-family: "Orbitron", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  /* Default (inactive) styles */
  color: #444;

  /* Hover effect for inactive */
  &:hover {
    color: #007bff;
  }

  /* Active state overrides */
  ${({ active }) =>
    active &&
    `
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 2px solid #007bff;
      color: #007bff;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;
