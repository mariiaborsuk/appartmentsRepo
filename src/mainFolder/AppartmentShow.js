import { useContext, useState, useEffect } from "react";
import appContext from "../context";
import axios from "axios";
function AppartmentShow({ ap }) {
  let { addViews, views } = useContext(appContext);
  let id = document.getElementById(ap.id);
  let [disable, setDisable] = useState(false);
  async function chechAndAdd() {
    let response = await axios.get("http://localhost:3001/viewList");
    for (let i = 0; response.data.length > i; i++) {
      if (response.data[i].apId === ap.id) {
        let button = document.getElementById(ap.id);
        button.disabled = true;
      }
    }
  }
  useEffect(() => {
    chechAndAdd();
  }, []);

  return (
    <div className="[&>*]:m-3 bg-slate-300 p-10 rounded-lg shadow-xl">
      <div>
        <span>Appartment index:</span> {ap.zipcode}
      </div>
      <div>
        <span>City: </span> {ap.city}
      </div>
      <div>
        <span>Size: </span>
        {ap.size} m2
      </div>
      <div>
        <span>Price:</span> {ap.price}$
      </div>
      <div>{ap.condition}</div>
      <div>{ap.type}</div>
      <div className="grid justify-items-center">
        <button
          id={ap.id}
          // disabled={ap.id}
          onClick={() => {
            let button = document.getElementById(ap.id);
            button.disabled = true;

            addViews(ap);
          }}
          className="rounded-full bg-indigo-700 text-white font-bold p-3 hover:bg-purple-700 hover:text-2xl hover:font-bold "
        >
          Add to Viewlist
        </button>
      </div>
    </div>
  );
}
export default AppartmentShow;
