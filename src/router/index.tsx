import React from "react";
import Home from "@/views/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function router() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
