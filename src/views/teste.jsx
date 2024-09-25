import { NavLink } from "@/components/router";
import { ThemeToggle } from "@/components/theme";

import { Navbar, NavbarBrand } from "@/components/navbar";

const TestePage = () => {
  return (
    <>
      <Navbar>
        <NavbarBrand href={"/home"}>
          <p>teste</p>
        </NavbarBrand>
      </Navbar>
      <NavLink
        to="/"
        activeClassName="text-primary"
      >
        Home
      </NavLink>
      <ThemeToggle />
      <h1>TestePage</h1>
    </>
  );
};

export default TestePage;
