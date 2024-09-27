import { ThemeToggle } from "@/components/theme";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
} from "@/components/navbar";
import { Bottombar, BottombarItem } from "@/components/bottombar";
import { Button } from "@/components/button";

import { Home, BellRing } from "lucide-react";

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
          <NavbarItem activeClassName="text-primary" hoverClassName={"text-secondary"} href={"/"}>
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
        
        <Button variant={"default"}>Teste</Button>
      </main>

      <Bottombar>
        <BottombarItem href={"/"} activeClassName={"text-primary"} hoverClassName={"text-secondary"} >
          <Home />
          <p>Inicio</p>
        </BottombarItem>

        <BottombarItem href={"/"} hoverClassName={"text-secondary"} >
          <BellRing />
          <p>Notificação</p>
        </BottombarItem>
        
        <BottombarItem href={"/"} hoverClassName={"text-secondary"} >
          <Home />
          <p>Calendario</p>
        </BottombarItem>

        <BottombarItem href={"/"}  hoverClassName={"text-secondary"} >
          <BellRing />
          <p>Conta</p>
        </BottombarItem>
      </Bottombar>

      <ThemeToggle />
    </>
  );
};

export default TestePage;
