import { useContext, useState } from "react";
import appContext from "../context";
import EditApp from "./EditApp";
function ShowAdmin({ app }) {
  let [edit, setEdit] = useState(false);
  let [content2, setContent2] = useState(false);
  let { deleteApp } = useContext(appContext);
  let [id, setId] = useState("");

  function deleteAppartment() {
    deleteApp(app.id);
  }
  function hideEdit() {
    setEdit(false);
  }
  let buttonContent;
  buttonContent = content2 && (
    <EditApp hide={hideEdit} buttonId={id} app={app} />
  );

  let content;
  content = edit && (
    <button
      className="bg-purple-700 text-white"
      id={app.id}
      onClick={(event) => {
        event.preventDefault();
        setContent2(true);
        setId(event.target.parentNode.id);
        console.log(id);
      }}
    >
      Edit
    </button>
  );

  return (
    <div>
      <h3>Appartment {app.id}:</h3>
      <div>
        <span id="zipcode">
          {app.zipcode}
          {content}{" "}
        </span>
        <span id="city">
          {app.city}
          {content}
        </span>
      </div>
      <div id="size">
        {app.size}
        {content}m2
      </div>
      <div id="price">
        {app.price} {content}$
      </div>
      <div id="condition">
        {app.condition}
        {content}
      </div>
      <div id="type">
        {app.type}
        {content}
      </div>
      <button className="bg-red-400 text-slate-500" onClick={deleteAppartment}>
        Delete
      </button>
      <button
        className="bg-purple-700 text-white"
        onClick={() => {
          setEdit(true);
        }}
      >
        Edit Appartment
      </button>
      {buttonContent}
    </div>
  );
}
export default ShowAdmin;
