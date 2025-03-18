import styled from "styled-components";

/* ---------------------------
   CONTAINER & HEADINGS
----------------------------*/
export const SpecContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  color: #333;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  padding-top: 3rem;
  font-family: "Orbitron", sans-serif;
`;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 3rem;
`;

/* ---------------------------
   CONTENT & LAYOUT
----------------------------*/
export const ContentWrapper = styled.div`
  position: relative; /* So absolutely positioned elements can be placed inside */
  width: 100%;
  height: 26.5rem; /* Adjust as needed */
  overflow: hidden;
`;

/* The image sits on the left half. */
export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -3rem;
  width: 50%;
  height: 100%;
  overflow: hidden;
`;

export const SpecImage = styled.img`
  width: 100%;
`;

/* The specs overlay the right half, on top of the image. */
export const SpecsOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 2rem;
  /* Optional translucent background for readability */
  overflow-y: auto; /* In case content is taller than container */
`;

/* The wrapper that holds both spec columns */
export const SpecsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const SpecColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

/* Each spec row */
export const SpecItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.0625rem solid #ccc;
  padding-bottom: 1rem;
`;

export const SpecLabel = styled.span`
  font-weight: bold;
  color: #f14b32;
  text-transform: uppercase;
  font-size: 0.875rem;
  min-width: 11.25rem;
`;

export const SpecValue = styled.span`
  font-size: 0.875rem;
  color: #333;
`;

/* ---------------------------
   NAVIGATION BUTTONS
----------------------------*/
export const NavigationButtons = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
`;

/**
 * If you'd like the left arrow to have a blue border & transparent background,
 * and the right arrow to have a solid blue background, use a `direction` prop:
 */
export const NavButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.3s ease;

  ${({ direction }) =>
    direction === "left"
      ? `
        /* LEFT arrow: transparent background, blue border, blue text */
        background-color: transparent;
        color: #007bff;
        border: .125rem solid #007bff;

        &:hover {
          background-color: #007bff;
          color: #fff;
        }
      `
      : `
        /* RIGHT arrow: solid blue background, white text */
        background-color: #007bff;
        color: #fff;
        border: .125rem solid #007bff;

        &:hover {
          background-color: #0056b3;
          border: .125rem solid #0056b3;
        }
      `}
`;
