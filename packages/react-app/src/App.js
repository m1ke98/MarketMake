import React from "react";
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { StyledLink, Body, Button, Image, StdLink } from "./components";
import logo from "./ethereumLogo.png";
import Particles from "react-particles-js";
import useWeb3Modal from "./hooks/useWeb3Modal";

import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";

import Interface from "./components/Interface.js";
import About from "./components/About.js";

async function readOnChainData() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider();
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
  console.log({ tokenBalance: tokenBalance.toString() });
}

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}

function Home() {
  return (
    <div class="p-container">
      <Particles id="particles"
        height="100%"
        width="100%"
        params={{
          particles: {
            color: {
              value: "#ffffff"
            },
            line_linked: {
              color: {
                value: "#ffffff"
              }
            },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <Body>
          <Image src={logo} alt="react-logo" />
          <h1>
            Pending...
          </h1>
          {/* Remove the "hidden" prop and open the JavaScript console in the browser to see what this function does */}
          <Button hidden onClick={() => readOnChainData()}>
            Read On-Chain Balance
          </Button>
          <p>
            The Peer-to-Peer NFT Pawn Shop.
          </p>
          <hr></hr>
          <p class="small-text">
            Shoutout to Markus Waas for the amazing <a href="https://ethereum.org/en/developers/tutorials/kickstart-your-dapp-frontend-development-wth-create-eth-app/#installation">template</a>.
          </p>
        </Body>
      </div>
      <About />
    </div>
  );
}

function Navbar() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);
  return (
    <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav me-auto">
            <li class="nav-item active">
              <h2 class="dapp-title">Pending...</h2>
            </li>
          </ul>
        </div>
        <div class="mx-auto order-0">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/interface">Interface</StyledLink>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <div class="login-button">
                <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  
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
      </div>
    </Router>
  );
}
  
  
export default App;