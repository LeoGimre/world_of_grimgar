import React from "react";
import { render } from "react-dom";
import App from "./pages/App";
import { AuthProvider } from "./context/authContext";

const appDiv = document.getElementById("app");

render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  appDiv
);