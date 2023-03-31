import AdminList from "./AdminList";
import { useContext, useState } from "react";
import appContext from "../context";
function Admin() {
  let [zipvalue, setZipValue] = useState("");
  let [city, setCity] = useState("");
  let [size, setSize] = useState("");
  let [price, setPrice] = useState("");
  let [condition, setCondition] = useState("");
  let [type, setType] = useState("");
  let { createAppartment } = useContext(appContext);

  function submitZip(event) {
    setZipValue(event.target.value.toUpperCase());
  }
  function submitCity(event) {
    setCity(event.target.value.toUpperCase());
  }
  function submitSize(event) {
    setSize(event.target.value);
  }
  function submitPrice(event) {
    setPrice(event.target.value);
  }
  function submitCondition() {
    let rates = document.getElementsByName("type");
    let rate_value;
    for (var i = 0; i < rates.length; i++) {
      if (rates[i].checked) {
        rate_value = rates[i].value;
      }
    }
    setCondition(rate_value);
  }
  function submitType() {
    let rates = document.getElementsByName("item");
    let rate_value;
    for (var i = 0; i < rates.length; i++) {
      if (rates[i].checked) {
        rate_value = rates[i].value;
      }
    }
    setType(rate_value);
  }
  function submitForm() {
    createAppartment(zipvalue, city, size, price, condition, type);
    setZipValue("");
    setCity("");
    setSize("");
    setPrice("");
    setCondition("");
    setType("");
  }

  return (
    <div>
      <div>
        <AdminList />
      </div>
      <form>
        <label>Enter zip-code</label>
        <input
          value={zipvalue}
          onChange={(event) => {
            submitZip(event);
          }}
          required
        />
        <label>Enter city</label>
        <input
          value={city}
          onChange={(event) => {
            submitCity(event);
          }}
          required
        />
        <label>Enter size in m2</label>
        <input
          value={size}
          onChange={(event) => {
            submitSize(event);
          }}
          required
        />
        <label>Enter price in $</label>
        <input
          value={price}
          onChange={(event) => {
            submitPrice(event);
          }}
          required
        />
      </form>
      <form required onChange={submitCondition}>
        <label>Enter condition</label>
        {/* you need to have the same type for each input, so that it makes the user chose only once */}
        <input type="radio" id="fully" name="type" value="fully-furnished" />
        <label>Fully-furnished</label>
        <input type="radio" id="equipped" name="type" value="equipped" />
        <label>Eqquipped</label>
        <input type="radio" id="upholstered" name="type" value="upholstered" />
        <label>Upholstered</label>
        <input type="radio" id="plain" name="type" value="plain" />
        <label>Plain</label>
      </form>

      <form onChange={submitType}>
        <label>Enter type:</label>
        <input type="radio" id="house" name="item" value="house" />
        <label>House</label>
        <input type="radio" id="appartment" name="item" value="appartment" />
        <label>Appartment</label>
        <input type="radio" id="cottage" name="item" value="cottage" />
        <label>Cottage</label>
        <input type="radio" id="studio" name="item" value="studio" />
        <label>Studio</label>
        <input type="radio" id="room" name="item" value="room" />
        <label>Room</label>
      </form>
      <button className="bg-sky-500 rounded-full p-2" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}
export default Admin;
