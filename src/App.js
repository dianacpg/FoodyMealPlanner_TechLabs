import React from "react";
import Navbar from "./Navbar";
import Meals from "./MealPlanner";
import Home from "./Home";
import InspirationalQuotes from "./Quotespage";
import Quotes from "./Quotes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/plan">
            <Meals />
          </Route>
          <Route path="/quotes" component={InspirationalQuotes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
