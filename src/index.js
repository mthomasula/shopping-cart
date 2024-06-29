import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { StoreProvider } from "./context-and-reducer/StoreContext";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
