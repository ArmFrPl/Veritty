import React from "react";
import '../Styles/App.css';
import {Lottery} from "./Lottery";
import {Results} from "./Results";
import {Leaderboards} from "./Leaderboards";
import {Dashboard} from "./Dashboard";
import {Layout} from "./Layout";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
