import * as React from "react";
import { cn } from "@/lib/utils";
import { Link } from "./router";

export const Navbar = ({ className, children, ...props }) => {
  return (
    <nav
      className={cn(
        "flex flex-row justify-between items-center px-2 py-1.5 w-full",
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
    <Link className={cn("font-semibold flex items-center gap-2 text-lg", className)} href={href} {...props}>
      {children}
    </Link>
  );
};
NavbarBrand.displayName = "NavbarBrand";