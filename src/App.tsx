import { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useAltKeypress } from "react-utilities/keyboard";

import Grid from "components/debug/Grid";

import Header from "components/layout/Header";

import Dashboard from "pages/Dashboard";
import NotFound from "pages/NotFound";

import "App.scss";

function App() {
  const gridVisible = useAltKeypress("KeyG");

  return (
    <Fragment>
      <Grid visible={gridVisible} />

      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
