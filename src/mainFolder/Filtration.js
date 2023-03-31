import { useState, useContext, useEffect } from "react";
import appContext from "../context";
import Autocomplete from "./Autocomplete";

function Filtration() {
  let { getFilter, appartments } = useContext(appContext);
  let [city, setCity] = useState("");
  let [size, setSize] = useState("");
  let [price, setPrice] = useState("");
  let [condition, setCondition] = useState("");
  let [type, setType] = useState("");

  function getFiltration() {
    let object = {
      city: city,
      size: size,
      price: price,
      condition: condition,
      type: type,
    };
    console.log(object, "object");
    return object;
  }
  function changeCity(newValue) {
    setCity(newValue);
  }
  function changeCondition(newValue) {
    setCondition(newValue);
  }
  function changeType(newValue) {
    setType(newValue);
  }

  return (
    <div>
      <form className="[&>*]:m-2">
        <label>Filter By City</label>
        <Autocomplete valueToShare="city" function1={changeCity} />

        <label>Filter By size</label>
        <input
          value={size}
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        <label>Filter By price</label>
        <input
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />

        <label>Filter By Condition:</label>
        <Autocomplete valueToShare="condition" function1={changeCondition} />

        <label>Filter By Type:</label>
        <Autocomplete valueToShare="type" function1={changeType} />

        <button
          onClick={(event) => {
            event.preventDefault();
            getFilter(getFiltration());
            setCity("");
            setSize("");
            setPrice("");
            setCondition("");
            setType("");
          }}
        >
          apply filter
        </button>
      </form>
    </div>
  );
}
export default Filtration;
