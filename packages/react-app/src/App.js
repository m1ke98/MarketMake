import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GET_TRANSFERS from "./graphql/subgraph";

import Interface from "./components/Interface.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";

function App() {
  const ethereum = window.ethereum;
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [address, setAddress]= useState("");

  if (ethereum) {
    ethereum.on('accountsChanged', function (accounts) {
      setAddress(accounts[0]);
    });
  }

  useEffect(() => {
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
            {address}
          </h1>
        </div>
      </div>
    </Router>
  );
}

export default App;