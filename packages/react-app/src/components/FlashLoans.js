import React from "react";

import { Button, Body } from "./styling/index.js";

export default function FlashLoans(props) {

  return (
    <Body>
      <h1>
        {props.user}
      </h1>
      <Button>
        {"Do Something"}
      </Button>
    </Body>
  );
}