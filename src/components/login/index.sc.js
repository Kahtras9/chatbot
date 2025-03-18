// src/components/login/index.sc.js
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const BlueDiv = styled.div`
  width: 50%;
  background: url("/dirtbike.jpg") no-repeat center center;
  background-size: cover;
`;

export const WhiteDiv = styled.div`
  width: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ... rest of your styled components

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50vh;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const WelcomeText = styled.p`
  font-family: Inter, sans-serif;
  font-size: 1.5rem;
  align-self: flex-start;
  font-weight: 600;
  color: #000;
  margin: 0;
`;

export const Label = styled.label`
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #333;
`;

export const InputWithToggle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d0d5dd;
  border-radius: 0.3125rem;
  overflow: hidden;
  width: 100%;

  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0.625rem;
    font-family: Inter, sans-serif;
    font-size: 0.9375rem;
    font-weight: 400;

    &::placeholder {
      color: #99a1b7;
    }
  }

  button {
    background: transparent;
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
    color: #333;
    width: 3rem;
    text-align: center;
  }
`;

export const ErrorContainer = styled.div`
  font-size: 0.8rem;
  color: #ff0000;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px 20px;
  background-color: #009edb;
  color: #ffffff;
  border: none;
  border-radius: 0.38625rem;
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  color: #000;
`;

export const SignUpLink = styled.a`
  color: #3a84ef;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.875rem;
  color: #99a1b7;
  font-family: Inter, sans-serif;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e2e2e2;
  }
  &::before {
    margin-right: 0.5rem;
  }
  &::after {
    margin-left: 0.5rem;
  }
`;

export const OAuthButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #d0d5dd;
  border-radius: 0.3125rem;
  padding: 0.625rem;
  width: 100%;
  font-family: Inter, sans-serif;
  font-size: 0.9375rem;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const StyledToastContainer = styled(ToastContainer).attrs({
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  newestOnTop: true,
})`
  width: 300px !important;
  top: 30px !important;
  border-radius: 8px !important;
  padding: 15px !important;
  position: fixed !important;

  .Toastify__toast {
    min-height: 0px !important;
    margin-bottom: 0.5rem;
  }
`;
