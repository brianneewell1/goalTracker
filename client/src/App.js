import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Goals from "./pages/Goals";
import Notes from "./pages/Notes";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/goals"]}>
            <Goals />
          </Route>
          <Route exact path="/goals/:id">
            <Notes />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
