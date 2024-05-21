import axios from "axios";
import React, { useEffect } from "react";

const App = () => {

    useEffect(() => {
        axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?i=").then((res) => console.log(res.data))
    })



  return (
    <div>
    <div className="app-container">
        <nav>
            <h2>Cooking app Johnson</h2>
            <input type="text" placeholder="Tapez un nom d'aliment (en anglais)"/>
        </nav>
        
        <div className="card-container">

        </div>
    </div>
    </div>
  );
};

export default App;
