import { Fragment } from "react";

import Grid from "components/debug/Grid";

import Page from "components/layout/Page";

import "App.scss";

import { useAltKeypress } from "react-utilities/keyboard";

function App() {
  const gridVisible = useAltKeypress("KeyG");

  return (
    <Fragment>
      <Grid visible={gridVisible} />

      <Page>
        <h1>Getting Stuff Done</h1>
      </Page>
    </Fragment>
  );
}

export default App;
