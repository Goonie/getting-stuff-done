import { Fragment } from "react";

import Grid from "components/debug/Grid";

import Header from "components/layout/Header";
import Page from "components/layout/Page";

import { useAltKeypress } from "react-utilities/keyboard";

import "App.scss";

function App() {
  const gridVisible = useAltKeypress("KeyG");

  return (
    <Fragment>
      <Grid visible={gridVisible} />

      <Header />

      <Page>
        <h1>Lists</h1>
      </Page>
    </Fragment>
  );
}

export default App;
