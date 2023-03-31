import { useContext } from "react";
import navigationContext from "./navigationContext";
function Route({ to, children }) {
  let { path } = useContext(navigationContext);
  if (to === path) {
    return children;
  }
}
export default Route;
