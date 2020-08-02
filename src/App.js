import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Home, Projects, Skills, Header, ParticleComp } from "./components";

import "./assets/default.scss";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
      </div>
      <ParticleComp />
    </Router>
  );
}

export default App;
