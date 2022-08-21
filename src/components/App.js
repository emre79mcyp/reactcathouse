import React from "react";

import Header from "./Header";
import ShowCat from "./ShowCat";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />

      <ShowCat />
    </div>
  );
};

export default App;
