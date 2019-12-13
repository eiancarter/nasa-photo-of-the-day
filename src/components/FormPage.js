import React from "react";
import NavigationList from "./NavigationList";
import Example from "./FormExample";

function FormApp() {
    return (
      <div className="App">
        <div className="Nav">
         <NavigationList/>
        </div>
        <h1>NASA Photo of the Day</h1>
        <Example/>
      </div>
    );
  }
  
  export default FormApp;