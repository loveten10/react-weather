import React from "react";
import ReactDOM from "react-dom";
import SideMenu from "./components/side-menu";
import "./index.model.scss";
import Home from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import { Drawer } from "@mui/material";
ReactDOM.render(
    <React.StrictMode>
        <div className="body">
            <SideMenu></SideMenu>
            <Home></Home>
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
