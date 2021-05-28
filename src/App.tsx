import { Fragment } from "react";

import Grid from "components/debug/Grid";

import Page from "components/layout/Page";

import "App.scss";

function App() {
  return (
    <Fragment>
      <Grid visible={true} />

      <Page>
        <h1>Getting Stuff Done</h1>
      </Page>
    </Fragment>
  );
}

export default App;
