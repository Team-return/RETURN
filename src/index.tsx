import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import "./styles/displaySize.scss";
import { Router } from "./router";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
    <Analytics />
  </React.StrictMode>
);
