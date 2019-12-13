import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import NavigationList from "./components/NavigationList";
import ImageButton from "./components/Button";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <div className="Nav">
       <NavigationList/>
      </div>
      <h1>NASA Photo of the Day</h1>
      <PhotoList/>
      <ImageButton/>
    </div>
  );
}

export default App;
