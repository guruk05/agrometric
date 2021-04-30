import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import Camera from "./Camera";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Main/>
     <Camera/>
    </div>
  );
}

export default App;
