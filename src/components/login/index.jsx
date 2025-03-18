// components/login/index.js
import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import dirtbikeImg from "../../images/dirtbike.jpg"; // import from src/images

// Import Google/Apple icons from react-icons
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

import {
  Container,
  BlueDiv,
  WhiteDiv,
  LoginForm,
  WelcomeText,
  Form,
  FieldGroup,
  Label,
  InputWithToggle,
  ErrorContainer,
  Button,
  SignUpContainer,
  SignUpLink,
  Divider,
  OAuthButton,
  StyledToastContainer,
} from "./index.sc";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Track whether we're in "Sign Up" mode or "Log In" mode
  const [isSignUp, setIsSignUp] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const location = useLocation();

  // Check URL and update mode
  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsSignUp(true);
    } else {
      setIsSignUp(false);
    }
  }, [location.pathname]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // We no longer need a local toggle for signup mode because the URL controls it.
  // const handleSignUpClick = (e) => {
  //   e.preventDefault();
  //   setIsSignUp(true);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError("");

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Simulate async login or signup
    setTimeout(() => {
      setIsLoading(false);
      if (email === "admin@example.com" && password === "1234") {
        toast.success(isSignUp ? "Sign Up successful!" : "Login successful!");
      } else {
        setShowError("Invalid email or password.");
      }
    }, 1000);
  };

  return (
    <Container>
      <BlueDiv>
        {/* Use the imported image as the src */}
        <img
          src={dirtbikeImg}
          alt="Dirt Bike"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </BlueDiv>

      <WhiteDiv>
        <LoginForm onSubmit={handleSubmit}>
          {/* Change welcome text based on mode */}
          <WelcomeText>
            {isSignUp ? "Let's get started" : "Welcome back"}
          </WelcomeText>

          <Form>
            <FieldGroup>
              <Label htmlFor="email">Email</Label>
              <InputWithToggle>
                <input
                  id="email"
                  type="text"
                  placeholder="Email address*"
                  ref={emailRef}
                  required
                />
              </InputWithToggle>
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="password">Password</Label>
              <InputWithToggle>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password*"
                  ref={passwordRef}
                  required
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </InputWithToggle>
            </FieldGroup>

            <ErrorContainer>{showError}</ErrorContainer>

            {/* Change button text based on mode */}
            <Button type="submit" disabled={isLoading}>
              {isSignUp ? "Sign Up" : "Log In"}
            </Button>
          </Form>

          {/* Only show the "Don’t have an account?" line if in Log In mode */}
          {!isSignUp && (
            <SignUpContainer>
              <span>Don’t have an account?</span>
              {/* Instead of toggling mode locally, this link navigates to /signup */}
              <SignUpLink href="/signup">Sign Up</SignUpLink>
            </SignUpContainer>
          )}

          <Divider>OR</Divider>

          <OAuthButton>
            <FcGoogle size="1.25rem" />
            Continue with Google
          </OAuthButton>

          <OAuthButton>
            <AiFillApple size="1.25rem" />
            Continue with Apple
          </OAuthButton>
        </LoginForm>
      </WhiteDiv>

      <StyledToastContainer />
    </Container>
  );
}

export default LoginPage;
