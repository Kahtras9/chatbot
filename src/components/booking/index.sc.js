import styled from "styled-components";
import roadImage from "../../images/road.jpg";

export const BookingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #1f1f21;
  color: white;
`;

export const LeftSection = styled.div`
  flex: 1;
  background: url(${roadImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* ensures content starts at the top */
  align-items: center;
  padding: 20px; /* reduced padding to place LeftText at the top */
  text-align: center;
  border-radius: 30px;
`;

export const LeftText = styled.p`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-top: 22px; /* removes any default margins */
`;

export const RightSection = styled.div`
  flex: 1;
  background: #0147ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 30px;
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

  &::placeholder {
    color: white;
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

  &::placeholder {
    color: white;
  }
`;

// For Select, browsers have limited support for placeholder styling.
// If the first option acts as a placeholder, you can target it like this:
export const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  color: white;
  outline: none;

  option:first-child {
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
