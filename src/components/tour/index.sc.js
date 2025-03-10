import styled from "styled-components";

export const TourContainer = styled.div`
  padding: 4rem;
  background-color: #fff;
  color: #333;
`;

export const TourTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: 'Orbitron', sans-serif;
`;

export const TourDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 3rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
`;

export const TourImage = styled.img`
  width: 500px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoTitle = styled.h3`
  font-size: 2rem;
  color: #222;
  margin-bottom: 0.5rem; /* Reduced gap after header */
`;

export const InfoDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const SeeMoreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: #fff;
  padding: 2rem;
  width: 60%;
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff4d4d;
  color: #fff;
  border: none;
  padding: 0.6rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
`;

export const PopupTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem; /* Reduced gap after header */
`;

export const PopupText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`;

export const PopupList = styled.ul`
  padding-left: 1.2rem;
  margin-bottom: 0.5rem; /* Reduced gap under list */
`;

export const PopupListItem = styled.li`
  font-size: 1rem;
  line-height: 1.4;
  color: #555;
  margin-bottom: 0.5; /* Tighter spacing for bullet points */
`;
