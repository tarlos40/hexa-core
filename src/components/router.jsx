import * as React from "react";

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

const RouterContext = React.createContext();

export const HexaRouter = ({ children }) => {
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  );

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

export const useRouter = () => React.useContext(RouterContext);

export const HexaRoutes = ({ children }) => {
  return children;
};

export const HexaRoute = ({ path, element }) => {
  const { currentPath } = useRouter();
  return currentPath === path ? element : null;
};
