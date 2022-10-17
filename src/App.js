import React from "react";
import Weather from "./Weather";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cherkasy" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://serene-belekoy-cd1ce1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anastasiia Kolomiiets
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ksstassy/react_weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
