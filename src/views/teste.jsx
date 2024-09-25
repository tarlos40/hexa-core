import { NavLink } from "@/components/router";
import { ThemeToggle } from "@/components/theme";

const TestePage = () => {
  return (
    <>
      <NavLink
        to="/"
        activeClassName="text-blue-500 font-bold"
        hoverClassName="text-gray-700"
      >
        Home
      </NavLink>
      <ThemeToggle />
      <h1>TestePage</h1>
    </>
  );
};

export default TestePage;
