import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavProvider } from "./navigationFolder/navigationContext";
import { AppProvider } from "./context";
import "./index.css";

let el = document.getElementById("root");
let root = ReactDOM.createRoot(el);
root.render(
  <AppProvider value>
    {" "}
    <NavProvider>
      <App value />
    </NavProvider>
  </AppProvider>
);
