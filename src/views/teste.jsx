import { ThemeToggle } from "@/components/theme";
import { HexaNavLink } from "@/components/router";

import { Navbar, NavbarContent, NavbarLink, NavbarBrand } from "@/components/navbar";

const TestePage = () => {
  return (
    <>
      <Navbar>
        <NavbarContent>
          <NavbarBrand href={"/"}>
            <p>logo</p>
          </NavbarBrand>
        </NavbarContent>
        
        <NavbarContent>
          <NavbarLink activeClassName="text-red-500" href={"/"}>
            inicio
          </NavbarLink>
        </NavbarContent>
      </Navbar>
      
      <HexaNavLink to="/" activeClassName="text-blue-500" hoverClassName="text-gray-700">
          Home
        </HexaNavLink>
      <ThemeToggle />
    </>
  );
};

export default TestePage;
