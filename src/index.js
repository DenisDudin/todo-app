import React from "react";
import ReactDOM from "react-dom/client";
import ToDo from "./components/todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);
