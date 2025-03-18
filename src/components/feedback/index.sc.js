import styled from "styled-components";

export const FeedbackContainer = styled.div`
  padding: 4rem 4rem 0 4rem;
  background-color: #1f1f21;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: "Orbitron", sans-serif;
`;

export const FeedbackContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const FeedbackImage = styled.img`
  width: 25rem;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 0.375rem 0.75rem rgba(0, 0, 0, 0.4);
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
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: -4.25rem; /* Adjust this value as needed */
`;

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
        background-color: transparent;
        color: #007bff;
        border: .125rem solid #007bff;

        &:hover {
          background-color: #007bff;
          color: #fff;
        }
      `
      : `
        background-color: #007bff;
        color: #fff;
        border: .125rem solid #007bff;

        &:hover {
          background-color: #0056b3;
          border: .125rem solid #0056b3;
        }
      `}
`;
