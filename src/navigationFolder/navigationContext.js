import { createContext, useState, useEffect } from "react";
let navigationContext = createContext();
function NavProvider({ children }) {
  let [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    function handlePath() {
      setPath(window.location.pathname);
      window.history.pushState({}, "", path);
    }
    document.body.addEventListener("popstate", handlePath);
    return () => {
      document.body.removeEventListener("popstate", handlePath);
    };
  }, []);
  function navigate(to) {
    setPath(to);
    window.history.pushState({}, "", to);
  }
  let valueToshare = {
    path: path,
    navigate: navigate,
  };
  return (
    <navigationContext.Provider value={valueToshare}>
      {children}
    </navigationContext.Provider>
  );
}
export { NavProvider };
export default navigationContext;
