import React from "react";
import { Grid } from "@material-ui/core";
import TopBar from "../components/topbar";
import MainTabs from "../components/maintabs";

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <TopBar />
        <MainTabs />
      </Grid>
    );
  }
}

export default Home;
