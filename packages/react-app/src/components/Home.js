import React from "react";

import { Body, Image } from "./styling/index.js";
import logo from "./images/ethereumLogo.png";
import Particles from "react-particles-js";
import About from "./About.js";

export default function Home() {
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
            {/* Remove the "hidden" prop and open the JavaScript console in the browser to see what this function does
            <Button hidden onClick={() => readOnChainData()}>
              Read On-Chain Balance
            </Button>
            */}
            <p>
              Manage your liquidity in one place.
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