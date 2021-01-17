import React from "react";
import { Grid, Button } from "@material-ui/core";
import logo from "../images/logo.png";
import "../styles/topbar.css";

class TopBar extends React.Component {
  render() {
    return (
      <Grid container className="main" direction="row">
        <Grid>
          <img
            className="logo"
            alt="share street logo"
            style={{ width: 140, height: 50 }}
            src={logo}
          />
        </Grid>
        <Grid className="backButton">
          <Button variant="outlined">Back</Button>
        </Grid>
      </Grid>
    );
  }
}

export default TopBar;
