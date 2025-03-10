import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
  background-color: #1a1a1a;
  color: #fff;
  min-height: 100vh;
`;

export const Content = styled.div`
  margin-bottom: 2rem;
`;

export const Heading = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: bold;
  margin-bottom: 1.5rem;
  font-family: 'Orbitron', sans-serif;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  max-width: 500px;
  color: #aaa;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    border: 2px solid #007bff;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  margin-top: 0rem; /* Adjust this to control vertical spacing */

  img {
    width: 600px;
    height: auto;
  }
`;

export const Specs = styled.div`
  position: relative;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0rem;
`;

export const SpecItem = styled.div`
  text-align: right;
`;

export const SpecValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SpecLabel = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #aaa;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 10px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ active }) => (active ? "#007bff" : "#444")};
  border-radius: 50%;
  cursor: pointer;
`;
