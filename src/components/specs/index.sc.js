import styled from "styled-components";

export const SpecContainer = styled.div`
  position: relative;  // Ensures absolute elements position correctly
  padding: 4rem;
  background-color: #fff;
  color: #333;
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: 'Orbitron', sans-serif;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 3rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`;

export const SpecsWrapper = styled.div`
  display: flex;
  gap: 4rem;
`;

export const SpecColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
`;

export const SpecLabel = styled.span`
  font-weight: bold;
  color: #f14b32;
  text-transform: uppercase;
  font-size: 1rem;
  min-width: 180px;
`;

export const SpecValue = styled.span`
  font-size: 1rem;
  color: #333;
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  align-self: flex-start;
`;

export const SpecImage = styled.img`
  width: 700px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
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


