import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// **************** import pages ************** //
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';

import Navbar from './components/Navbar';

export default function App() {

  return <Router>

    <Navbar />
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/cocktail/:id">
        <SingleCocktail />
      </Route>

      <Route path="*">
        <Error />
      </Route>

    </Switch>

          </Router>;
}