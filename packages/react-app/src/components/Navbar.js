import React from "react";

import { StyledLink, Button } from "./styling/index.js";
import useWeb3Modal from "./hooks/useWeb3Modal";

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

export default function Navbar() {
    const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

    return (
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav me-auto">
              <li class="nav-item active">
                <h2 class="dapp-title">PH4NT0M FINANCE</h2>
              </li>
            </ul>
          </div>
          <div class="w-50 d-flex mx-auto order-0 justify-content-center">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/interface">Interface</StyledLink>
            <StyledLink to="/flashloans">Flash Loans</StyledLink>
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
