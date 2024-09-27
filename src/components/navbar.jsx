import * as React from "react";
import { cn } from "@/lib/utils";
import { HexaLink, HexaNavLink } from "./router";

export const Navbar = ({ className, children, ...props }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "transition-transform duration-300 select-none bg-background border-b border-input shadow flex flex-row justify-between items-center fixed top-0 inset-x-0 translate-y-0 md:translate-y-0/2 px-4 py-2 w-full z-10",
        isVisible ? "translate-y-0" : "-translate-y-full",
        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
};
Navbar.displayName = "Navbar";

export const NavbarContent = ({ className, children, ...props }) => {
  return (
    <div className={cn("flex flex-row items-center py-2", className)} {...props}>
      {children}
    </div>
  );
};
NavbarContent.displayName = "NavbarContent";

export const NavbarBrand = ({ href, className, children, ...props }) => {
  return (
    <HexaLink
      className={cn("font-semibold flex items-center gap-2 text-lg", className)}
      href={href}
      {...props}
    >
      {children}
    </HexaLink>
  );
};
NavbarBrand.displayName = "NavbarBrand";

export const NavbarItem = ({ href, className, children, ...props }) => {
  return (
    <HexaNavLink
      className={cn("font-semibold flex items-center gap-2", className)}
      href={href}
      {...props}
    >
      {children}
    </HexaNavLink>
  );
};
NavbarItem.displayName = "NavbarItem";
