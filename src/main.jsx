
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/root.css";
import "./styles/style.css";
import "./styles/root2.css";
import "./styles/style2.css";
import "./styles/style4.css";
import "./styles/root4.css";
import "./styles/style5.css";

import "./styles/style3.css";
createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
