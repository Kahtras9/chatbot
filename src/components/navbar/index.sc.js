import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background: #1f1f21;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

export const NavbarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 24px 3%;
`;

export const Brand = styled.div`
  /* Apply the Orbitron font */
  font-family: "Orbitron", sans-serif;
  font-size: 1.6rem;
  font-weight: 700; /* You can set 400, 700, etc. based on your preference */
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

export const NavLinkItem = styled.div`
  /* Use the Orbitron font as well */
  font-family: "Orbitron", sans-serif;
  font-size: 18px;
  font-weight: 550;
  text-decoration: none;
  color: #bbb;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AuthButton = styled(Link)`
  position: relative;
  display: inline-block;
  /* Basic styles (adjust as needed) */
  padding: 10px 24px;
  font-family: "Orbitron", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  border: 2px solid #00b4d8;
  background: transparent;
  cursor: pointer;

  /* Create the slant using skew */
  transform: skew(-20deg);
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: #00b4d8;
    color: #111;
    box-shadow: 0 0 8px rgba(0, 180, 216, 0.6);
  }

  /* Un-skew the child text so it's not slanted */
  & > span {
    display: inline-block;
    transform: skew(20deg);
  }
`;
