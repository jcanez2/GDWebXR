import React from "react";
// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
import Helmet from "./Helmet";
import Astromodel from "./Astromodel";
import Gdmodel from "./Gdmodel";
import { Route, Link } from "react-router-dom";
import NavBar from "./NaveBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/helmet" component={Helmet} />
      <Route exact path="/gdmodel" component={Gdmodel} />
      <Route exact path="/astromodel" component={Astromodel} />
    </div>
  );
}

export default App;
