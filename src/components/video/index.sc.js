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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #fff;
  max-width: 400px;
`;

export const VideoButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Orbitron', sans-serif;

  &:hover {
    background-color: transparent;
    border: 2px solid #007bff;
  }
`;

export const RightContent = styled.div`
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: right;
  font-family: 'Orbitron', sans-serif;
`;

export const NavigationButtons = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
`;

export const NavButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.6rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
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
  background: #1a1a1a;
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
