import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={null} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
