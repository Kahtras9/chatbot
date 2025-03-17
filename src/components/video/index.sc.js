import styled from "styled-components";
import bgImage from "../../images/dirtbike_mountain.jpg";

export const VideoContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  z-index: -2;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
`;

export const LeftContent = styled.div`
  padding: 10rem 3rem 3rem; /* Increased top padding */
  display: flex;
  flex-direction: column;
  gap: 27rem;
  align-items: flex-start;
  height: 100%;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #fff;
  max-width: 73%;
`;

export const VideoButton = styled.button`
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

export const RightContent = styled.div`
  padding: 2rem 3%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  max-width: 48%;
  text-align: right;
  font-family: "Orbitron", sans-serif;
`;

export const NavigationButtons = styled.div`
  position: absolute;
  bottom: 5.8125rem;
  right: 3rem;
  display: flex;
  gap: 1rem;
`;

export const NavButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.3s ease;

  ${({ direction }) =>
    direction === "left"
      ? `
        /* Left arrow: transparent background, blue border, blue text */
        background-color: transparent;
        color: #007bff;
        border: 2px solid #007bff;

        &:hover {
          background-color: #007bff;
          color: #fff;
        }
      `
      : `
        /* Right arrow: solid blue background, white text */
        background-color: #007bff;
        color: #fff;
        border: 2px solid #007bff;

        &:hover {
          background-color: #0056b3;
          border: 2px solid #0056b3;
        }
      `}
`;

// =====================
// Modal Popup Styling
// =====================

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: #1f1f21;
  padding: 1rem;
  border-radius: 10px;
  max-width: 700px;
  width: 90%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;
