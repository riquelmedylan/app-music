import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "swiper/swiper.scss";
import "./styles/styles.scss";
const root = document.querySelector("#root");

ReactDOM.render(
     <React.StrictMode>
          <App />
     </React.StrictMode>,

     root
);
