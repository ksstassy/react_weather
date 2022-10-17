import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./search.js";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="App">
        <h1>Weather Search Engine</h1>
      </div>
      <br />
      <Search />
     <small>
        <a href="https://github.com/kstasy/weaterapp" target="_blank">
          Open-source code
        </a>
        by Anastasiia Kolomiiets
      </small>
    </div>
  </StrictMode>
);
