import React from "react";
import ReactDOMClient from "react-dom/client";
import { ECommerceWebsite } from "./screens/ECommerceWebsite";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ECommerceWebsite />);
