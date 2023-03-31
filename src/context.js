import { createContext, useState } from "react";
import axios from "axios";
let appContext = createContext();
function AppProvider({ children }) {
  let [appartments, setAppartments] = useState([]);
  let [string, setString] = useState("");
  let [autoApps, setAutoApps] = useState([]);
  let [views, setViews] = useState([]);
  async function fetchViews() {
    let response = await axios.get("http://localhost:3001/viewList");
    setViews(response.data);
  }
  async function deleteView(id) {
    await axios.delete(`http://localhost:3001/viewList/${id}`);
    let newViews = views.filter(function (view) {
      return view.id !== id;
    });
    setViews(newViews);
  }
  async function addViews(view) {
    console.log(views);
    let isExistingView = false;

    for (let ap of views) {
      if (ap.apId == view.id) {
        isExistingView = true;
      }
    }

    if (!isExistingView) {
      let response = await axios.post("http://localhost:3001/viewList", {
        city: view.city,
        zipcode: view.zipcode,
        price: view.price,
        size: view.size,
        type: view.type,
        condition: view.condition,
        apId: view.id,
      });
      let newViews = [...views, response.data];
      setViews(newViews);
      console.log(response);

      console.log("VIEWS: ", views);
    }
  }

  function getFilter(obj) {
    let array = Object.entries(obj);
    console.log(array);
    let array2 = [];
    for (let item of array) {
      if (item[1] !== "") {
        array2.push(item.join("="));
      }
    }
    let newString = array2.join("&");
    setString(newString);
  }
  // console.log(string);
  async function fetchAppartments() {
    let response = await axios.get(
      `http://localhost:3001/appartments?${string}`
    );

    setAppartments(response.data);

    let response2 = await axios.get(`http://localhost:3001/appartments`);
    setAutoApps(response2.data);
  }

  async function createAppartment(
    appzipcode,
    appcity,
    appsize,
    appPrice,
    appCondition,
    appType
  ) {
    let response = await axios.post("http://localhost:3001/appartments", {
      zipcode: appzipcode,
      city: appcity,
      size: appsize,
      price: appPrice,
      condition: appCondition,
      type: appType,
    });

    let newArr = [...appartments, response.data];
    setAppartments(newArr);
  }
  async function deleteApp(id) {
    await axios.delete(`http://localhost:3001/appartments/${id}`);
    let newApp = appartments.filter(function (app) {
      return app.id !== id;
    });
    setAppartments(newApp);
  }
  async function editApp(
    newZip,
    newCity,
    newSize,
    newPrice,
    newCondition,
    newType,
    editId
  ) {
    let response = await axios.put(
      `http://localhost:3001/appartments/${editId}`,
      {
        zipcode: newZip,
        city: newCity,
        size: newSize,
        price: newPrice,
        condition: newCondition,
        type: newType,
      }
    );
    let editedApp = appartments.filter((ap) => {
      if (ap.id === editId) {
        console.log(ap.id, editId, ap, response.data);
        return { ...ap, ...response.data };
      } else {
        return ap;
      }
    });
    console.log(newZip, editId, response);
    setAppartments(editedApp);
  }
  const valueToShare = {
    fetchAppartments: fetchAppartments,
    appartments: appartments,
    createAppartment: createAppartment,
    deleteApp: deleteApp,
    editApp: editApp,
    getFilter: getFilter,
    string: string,
    autoApps: autoApps,
    views: views,
    fetchViews: fetchViews,
    addViews: addViews,
    deleteView: deleteView,
  };

  return (
    <appContext.Provider value={valueToShare}>{children}</appContext.Provider>
  );
}
export default appContext;
export { AppProvider };
