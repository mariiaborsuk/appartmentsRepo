import { useContext } from "react";
import Link from "./Link";
function Navigation() {
  let links = [
    { name: "Appartments", path: "/" },
    { name: "Admin", path: "/admin" },
    { name: "ViewList", path: "/viewlist" },
    { name: "Appartments for sale", path: "/sale" },
  ];
  let linksmap = links.map(function (link) {
    return (
      <div key={link.name}>
        <Link path={link.path} title={link.name} />
      </div>
    );
  });
  return <div>{linksmap}</div>;
}
export default Navigation;
