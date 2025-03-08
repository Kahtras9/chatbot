import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const NavbarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

export const Brand = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #111;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
  max-width: 600px;
  width: 100%;
`;

export const SearchIcon = styled.div`
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const SearchBar = styled.input`
  flex: 1;
  padding: 6px;
  border: none;
  outline: none;
  font-size: 14px;
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const AuthButton = styled(Link)`
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #111;
  color: #111;
  transition: all 0.3s ease;

  &:hover {
    background: #111;
    color: white;
  }
`;