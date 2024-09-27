import { ThemeToggle } from "@/components/theme";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@/components/navbar";
import { Bottombar, BottombarItem } from "@/components/bottombar";

import { LayoutGrid, BookMarked, Puzzle, Palette } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <Navbar>
        <NavbarContent>
          <NavbarBrand className={"uppercase"} href={"/"}>
            Hexa Core
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className={"hidden md:flex"}>
          <NavbarItem
            href={"/"}
            activeClassName={"text-primary"}
            hoverClassName={"text-primary/80"}
          >
            Inicio
          </NavbarItem>
          <NavbarItem
            href={"/docs"}
            activeClassName={"text-primary"}
            hoverClassName={"text-primary/80"}
          >
            Documentação
          </NavbarItem>
          <NavbarItem
            href={"/components"}
            activeClassName={"text-primary"}
            hoverClassName={"text-primary/80"}
          >
            Componentes
          </NavbarItem>
          <NavbarItem
            href={"/themes"}
            activeClassName={"text-primary"}
            hoverClassName={"text-primary/80"}
          >
            Temas
          </NavbarItem>
        </NavbarContent>

        <NavbarContent>
          <ThemeToggle />
        </NavbarContent>
      </Navbar>

      <Bottombar className={"flex md:hidden"}>
        <BottombarItem
          href={"/"}
          activeClassName={"text-primary"}
          hoverClassName={"text-primary/80"}
        >
          <LayoutGrid />
          Inicio
        </BottombarItem>
        <BottombarItem
          href={"/docs"}
          activeClassName={"text-primary"}
          hoverClassName={"text-primary/80"}
        >
          <BookMarked />
          Documentação
        </BottombarItem>
        <BottombarItem
          href={"/components"}
          activeClassName={"text-primary"}
          hoverClassName={"text-primary/80"}
        >
          <Puzzle />
          Componentes
        </BottombarItem>
        <BottombarItem
          href={"/themes"}
          activeClassName={"text-primary"}
          hoverClassName={"text-primary/80"}
        >
          <Palette />
          Temas
        </BottombarItem>
      </Bottombar>
    </>
  );
};

export default HomePage;
