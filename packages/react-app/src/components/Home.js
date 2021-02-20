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
              PH4NT0M
            </h1>
            {/* Remove the "hidden" prop and open the JavaScript console in the browser to see what this function does
            <Button hidden onClick={() => readOnChainData()}>
              Read On-Chain Balance
            </Button>
            */}
            <p>
              DEX Aggregator and Arbitrage Oracle
            </p>
            <hr></hr>
          </Body>
        </div>
        <About />
      </div>
    );
}