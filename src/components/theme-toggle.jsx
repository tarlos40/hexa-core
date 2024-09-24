import { useTheme } from "@/components/theme-provider";

import { Button } from "@/components/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@/components/ui/dropdown";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alterar Tema</span>
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownItem onClick={() => setTheme("light")}>Claro</DropdownItem>
        <DropdownItem onClick={() => setTheme("dark")}>Escuro</DropdownItem>
        <DropdownItem onClick={() => setTheme("system")}>Sistema</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
