import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Projects, Skills, Header, ParticleComp } from "./components";

import "./assets/default.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/gardlundh" component={Home} />
        <Route exact path="/gardlundh/skills" component={Skills} />
        <Route exact path="/gardlundh/projects" component={Projects} />
      </div>
      <ParticleComp />
    </Router>
  );
}

export default App;
