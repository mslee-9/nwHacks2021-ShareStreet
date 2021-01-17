import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Button } from "@material-ui/core";
import {
  InboxOutlined,
  MessageOutlined,
  NotificationsOutlined,
} from "@material-ui/icons";
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
        <Grid className="iconButtons">
          <IconButton>
            <InboxOutlined />
          </IconButton>
          <IconButton>
            <MessageOutlined />
          </IconButton>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
        </Grid>
        <Grid className="mainButtons">
          <Button className="offerButton" variant="outlined">
            Offer
          </Button>
          <Button variant="outlined" onClick={this.newRequest}>
            Receive
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default TopBar;
