import AppartmentShow from "./AppartmentShow";
import { useContext } from "react";
import appContext from "../context";
import Filtration from "./Filtration";
function Appartments() {
  let { appartments } = useContext(appContext);

  let appfiltered = appartments.map((ap) => {
    return (
      <div key={ap.id}>
        <AppartmentShow ap={ap} />
      </div>
    );
  });
  console.log(appfiltered);
  let contentList = appfiltered;
  return (
    <div class="appartmentFilter">
      <Filtration />
      <div className="grid grid-cols-3 gap-10 ">{contentList}</div>
    </div>
  );
}
export default Appartments;
