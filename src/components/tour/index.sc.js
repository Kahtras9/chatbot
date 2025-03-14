import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

export const PackageCard = styled.div`
  background: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const PackageTitle = styled.h2`
  font-size: 2rem;
  color: #222;
`;

export const PackageDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

export const SeeMoreButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 60%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

export const Details = styled.div`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;

  strong {
    font-weight: bold;
    font-size: 1.2rem;
  }

  ul {
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  a {
    color: #007bff;
    text-decoration: underline;
  }
`;

export const BookNowButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  background-color: #d9534f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;
