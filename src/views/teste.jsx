import { ThemeToggle } from "@/components/theme";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
} from "@/components/navbar";
import { Bottombar, BottombarItem } from "@/components/bottombar";

import { Home } from "lucide-react";

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
          <NavbarItem activeClassName="text-primary" href={"/"}>
            inicio
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore saepe illo magni eum, culpa nihil libero accusamus temporibus, cumque quidem. Error atque dicta exercitationem porro? Explicabo, consectetur eveniet?
      </main>

      <Bottombar>
        <BottombarItem href={"/"} activeClassName={"text-primary"} hoverClassName={"text-secondary"} >
          <Home />
          <p>teste</p>
        </BottombarItem>

        <BottombarItem>
          <p>testado</p>
        </BottombarItem>

        <BottombarItem>
          <p>teste</p>
        </BottombarItem>

        <BottombarItem>
          <p>teste</p>
        </BottombarItem>
      </Bottombar>

      <ThemeToggle />
    </>
  );
};

export default TestePage;
