import styled from "styled-components";

export const FeedbackContainer = styled.div`
  padding: 4rem;
  background-color: #1a1a1a;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Orbitron', sans-serif;
`;

export const FeedbackContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const FeedbackImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
`;

export const FeedbackText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

export const FeedbackName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
  font-weight: bold;
`;

export const FeedbackTour = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

export const NavWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const NavButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
