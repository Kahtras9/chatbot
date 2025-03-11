import styled from "styled-components";
import roadImage from '../../images/road.jpg';

export const BookingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
`;

export const LeftSection = styled.div`
  flex: 1;
  background: url(${roadImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  /* Aligns content to the top */
  align-items: center;
  padding: 500px 20px 20px 20px; /* Top padding to adjust vertical position */
  text-align: center;
`;


export const LeftText = styled.p`
  font-size: 1.5rem;
  color: black;
  text-align: center;
`;

export const RightSection = styled.div`
  flex: 1;
  background: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 10px;

  & > input {
    flex: 1;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  color: white;
  border-radius: 0;
  outline: none;

  ::placeholder {
    color: white;
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  color: white;
  outline: none;

  option {
    color: black;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  color: white;
  resize: none;
  outline: none;

  ::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  background: white;
  color: black;
  padding: 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: lightgray;
  }
`;
