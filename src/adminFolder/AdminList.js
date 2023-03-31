import { useContext } from "react";
import appContext from "../context";
import ShowAdmin from "./ShowAdmin";
function AdminList() {
  let { appartments } = useContext(appContext);
  let appList = appartments.map(function (app, id) {
    return (
      <div key={id}>
        <ShowAdmin app={app} />
      </div>
    );
  });
  return <div>{appList}</div>;
}
export default AdminList;
