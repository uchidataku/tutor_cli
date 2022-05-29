import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/global.scss";
import App from "./config/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
