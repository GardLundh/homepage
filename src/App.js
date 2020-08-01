import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Projects, Skills, Header, ParticleComp } from "./components";

import "./assets/default.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/homepage" component={Home} />
        <Route exact path="/homepage/skills" component={Skills} />
        <Route exact path="/homepage/projects" component={Projects} />
      </div>
      <ParticleComp />
    </Router>
  );
}

export default App;
