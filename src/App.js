import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stary Sącz" />

        <footer>
          Coded by <a>Małgorzata Czop</a> and is{" "}
          <a
            href="https://github.com/gosiaczop/reactweatherapp_1"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
