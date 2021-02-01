import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GET_TRANSFERS from "./graphql/subgraph";

import Interface from "./components/Interface.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);
  
  return (
    <Router>
      <div class="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/interface">
            <Interface />
          </Route>
        </Switch>
        <div>
          <h1>
            Hi
          </h1>
        </div>
      </div>
    </Router>
  );
}

export default App;