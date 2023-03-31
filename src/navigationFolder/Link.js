import { useContext } from "react";
import navigationContext from "./navigationContext";
function Link({ path, title }) {
  let { navigate } = useContext(navigationContext);
  function handleClick(event) {
    event.preventDefault();
    navigate(path);
  }

  return (
    <a href={path} onClick={handleClick}>
      {title}
    </a>
  );
}
export default Link;
