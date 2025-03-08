import { Search } from "lucide-react";
import {
  NavbarContainer,
  NavbarInner,
  Brand,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
  AuthButtons,
  AuthButton
} from "./index.sc";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarInner>
        <Brand>Brand</Brand>
        <SearchBarContainer>
          <SearchBar type="text" placeholder="Search..." />
          <SearchIcon>
            <Search size={20} />
          </SearchIcon>
        </SearchBarContainer>
        <AuthButtons>
          <AuthButton to="/login">Log In</AuthButton>
          <AuthButton to="/signup">Sign Up</AuthButton>
        </AuthButtons>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;