import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

try {
  const root = document.getElementById("root");

  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }
} catch (error) {
  console.error(error);
}
