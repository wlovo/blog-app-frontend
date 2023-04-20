import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AppWrapper />
      </Router>
    </div>
  );
}

export default App;
