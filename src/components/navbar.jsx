import * as React from "react";
import { cn } from "@/lib/utils";
import { HexaLink, HexaNavLink } from "./router";

export const Navbar = ({ className, children, ...props }) => {
  return (
    <nav
      className={cn(
        "flex flex-row justify-between items-center px-4 py-2 w-full",
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
    <div className={cn("flex flex-row items-center", className)} {...props}>
      {children}
    </div>
  );
};
NavbarContent.displayName = "NavbarContent";

export const NavbarBrand = ({ href, className, children, ...props }) => {
  return (
    <HexaLink className={cn("font-semibold flex items-center gap-2 text-lg", className)} href={href} {...props}>
      {children}
    </HexaLink>
  );
};
NavbarBrand.displayName = "NavbarBrand";

export const NavbarLink = ({ href, className, children, ...props }) => {
  return (
    <HexaNavLink className={cn("font-semibold flex items-center gap-2", className)} href={href} {...props}>
      {children}
    </HexaNavLink>
  );
};
NavbarLink.displayName = "NavbarLink";