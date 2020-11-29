import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import { NavBar, Footer } from "./components";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Services from "./pages/ServicesPage/Services";
import Signup from "./pages/SignUp/Signup";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={Signup} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
