import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "App";

const RootComponent = (
  <StrictMode>
    <App />
  </StrictMode>
);

ReactDOM.render(RootComponent, document.getElementById("react-app"));
