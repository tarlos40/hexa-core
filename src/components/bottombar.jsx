import * as React from "react";
import { cn } from "@/lib/utils";
import { HexaNavLink } from "./router";

export const Bottombar = ({ className, children, ...props }) => {
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
    <div
      className={cn(
        "transition-transform duration-300 bg-background border-t border-input shadow-[0_-2px_4px_rgba(0,0,0,0.1)] flex flex-row justify-around items-center fixed bottom-0 inset-x-0 translate-y-0 md:translate-y-0/2 px-2 py-2 w-full z-10",
        isVisible ? "translate-y-0" : "translate-y-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
Bottombar.displayName = "Bottombar";

export const BottombarItem = ({
  href,
  activeClassName,
  hoverClassName,
  className,
  children,
  ...props
}) => {
  const handleRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      event.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      event.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.style.position = "absolute";
    circle.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    circle.style.borderRadius = "50%";
    circle.style.transform = "scale(0)";
    circle.style.pointerEvents = "none";
    circle.style.opacity = "1";
    circle.style.transition = "transform 600ms ease, opacity 600ms ease";

    circle.classList.add("ripple");

    const existingRipple = button.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);

    requestAnimationFrame(() => {
      circle.style.transform = "scale(4)";
      circle.style.opacity = "0";
    });

    circle.addEventListener("transitionend", () => {
      circle.remove();
    });
  };

  return (
    <HexaNavLink
      href={href}
      activeClassName={activeClassName}
      hoverClassName={hoverClassName}
      className={cn(
        "rounded-md flex flex-col items-center relative font-semibold text-sm px-4 py-1 gap-1 overflow-hidden",
        className
      )}
      onClick={(e) => {
        handleRipple(e);
        if (props.onClick) props.onClick(e);
      }}
      {...props}
    >
      {children}
    </HexaNavLink>
  );
};
BottombarItem.displayName = "BottombarItem";
