import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

export const FAQContainer = styled.div`
  padding: 4rem;
  background-color: #1f1f21;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: "Orbitron", sans-serif;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 2rem;
`;

export const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-bottom: 0.0625rem solid #444;
  padding-bottom: 1rem;
`;

export const FAQQuestion = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  padding: 1rem;
  background-color: #333;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #444;
  }
`;

export const ArrowIcon = styled(FaChevronDown)`
  transition: transform 0.3s ease;
  color: #007bff;
  ${({ isActive }) =>
    isActive &&
    `
    transform: rotate(180deg);
  `}
`;

export const FAQAnswer = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
  padding: 1rem;
  background-color: #222;
  border-radius: 0.25rem;
  color: #ccc;
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }
`;
