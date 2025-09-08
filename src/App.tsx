import React from "react";
import "./App.css";
import MainContent from "./components/ui/mainContent";
import Docs from "./components/Docs/Docs";

function App() {
  return (
    <div className="App grid-container">
      <MainContent />
      <Docs/>
    </div>
  );
}

export default App;
