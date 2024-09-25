import * as React from "react";

// Create the custom Link component
export const Link = ({ href, children, className, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

// Create the custom NavLink component
export const NavLink = ({
  to,
  activeClassName = "active",
  hoverClassName = "hover",
  className = "",
  children,
  ...props
}) => {
  const { currentPath } = useRouter();
  const isActive = currentPath === to;

  return (
    <Link
      href={to}
      className={`${className} ${isActive ? activeClassName : ""}`}
      onMouseEnter={(e) => {
        if (hoverClassName) {
          e.currentTarget.classList.add(hoverClassName);
        }
      }}
      onMouseLeave={(e) => {
        if (hoverClassName) {
          e.currentTarget.classList.remove(hoverClassName);
        }
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

// Create the custom Router context
const RouterContext = React.createContext();

export const HexaRouter = ({ children }) => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

// Hook to access the router context
export const useRouter = () => React.useContext(RouterContext);

// HexaRoutes component
export const HexaRoutes = ({ children }) => {
  return children;
};

// HexaRoute component
export const HexaRoute = ({ path, element }) => {
  const { currentPath } = useRouter();
  return currentPath === path ? element : null;
};
