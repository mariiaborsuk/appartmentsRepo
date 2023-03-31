import { useContext, useState } from "react";
import appContext from "../context";
function EditApp({ app, hide, children, buttonId }) {
  let { editApp } = useContext(appContext);
  let [zip, setZip] = useState("");
  let [city, setCity] = useState("");
  let [size, setSize] = useState("");
  let [price, setprice] = useState("");
  let [condition, setCondition] = useState("");
  let [type, setType] = useState("");
  let content;
  function handlePrice(event) {
    setprice(event.target.value);
  }
  function changeRadio(radio, setter) {
    let array = document.getElementsByName(radio);
    let radioValue;
    for (let i = 0; array.length > i; i++) {
      if (array[i].checked) {
        radioValue = array[i].value;
      }
    }
    setter(radioValue);
  }
  function handleZip(event) {
    // event.preventDefault();
    setZip(event.target.value);
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  function handleSize(event) {
    setSize(event.target.value);
  }
  if (buttonId === "zipcode") {
    content = (
      <form>
        <label>Change zipcode:</label>
        <input
          value={zip}
          onChange={(event) => {
            handleZip(event);
          }}
        />
        <button
          onClick={() => {
            editApp(
              zip,
              app.city,
              app.size,
              app.price,
              app.condition,
              app.type,
              app.id
            );
            setZip("");
          }}
        >
          Submit
        </button>
      </form>
    );
  } else if (buttonId === "city") {
    content = (
      <form>
        <label>Change city:</label>
        <input
          value={city}
          onChange={(event) => {
            handleCity(event);
          }}
        />
        <button
          onClick={() => {
            editApp(
              app.zip,
              city,
              app.size,
              app.price,
              app.condition,
              app.type,
              app.id
            );
            setCity("");
          }}
        >
          Submit
        </button>
      </form>
    );
  } else if (buttonId === "price") {
    content = (
      <form>
        <label>Change price:</label>
        <input
          onChange={(event) => {
            handlePrice(event);
          }}
          value={price}
        />
        <button
          onClick={() => {
            editApp(
              app.zip,
              app.city,
              app.size,
              price,
              app.condition,
              app.type,
              app.id
            );
            setprice("");
          }}
        >
          Submit
        </button>
      </form>
    );
  } else if (buttonId === "size") {
    content = (
      <form>
        <label>Change size:</label>
        <input
          onChange={(event) => {
            handleSize(event);
          }}
          value={size}
        />
        <button
          onClick={() => {
            editApp(
              app.zip,
              app.city,
              size,
              app.price,
              app.condition,
              app.type,
              app.id
            );
            setSize("");
          }}
        >
          Submit
        </button>
      </form>
    );
  } else if (buttonId === "condition") {
    content = (
      <form
        onChange={() => {
          changeRadio("type", setCondition);
        }}
      >
        <label>chenge condition</label>
        {/* you need to have the same type for each input, so that it makes the user chose only once */}
        <input type="radio" id="fully" name="type" value="fully-furnished" />
        <label>Fully-furnished</label>
        <input type="radio" id="equipped" name="type" value="equipped" />
        <label>Eqquipped</label>
        <input type="radio" id="upholstered" name="type" value="upholstered" />
        <label>Upholstered</label>
        <input type="radio" id="plain" name="type" value="plain" />
        <label>Plain</label>
        <button
          onClick={() => {
            editApp(
              app.zip,
              app.city,
              app.size,
              app.price,
              condition,
              app.type,
              app.id
            );
          }}
        >
          Submit
        </button>
      </form>
    );
  } else if (buttonId === "type") {
    content = (
      <form
        onChange={() => {
          changeRadio("item", setType);
        }}
      >
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
        <button
          onClick={() => {
            editApp(
              app.zip,
              app.city,
              app.size,
              app.price,
              app.condition,
              type,
              app.id
            );
          }}
        >
          Submit
        </button>
        ;
      </form>
    );
  }
  return <div>{content}</div>;
}
export default EditApp;
