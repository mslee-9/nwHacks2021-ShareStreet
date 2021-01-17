import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Button } from "@material-ui/core";
import { BrowserRouter as NavLink } from "react-router-dom";
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
          <NavLink to="/offerform" style={{ textDecoration: "none" }}>
            <Button className="offerButton" variant="outlined">
              Offer
            </Button>
          </NavLink>
          <NavLink to="/requestform" style={{ textDecoration: "none" }}>
            <Button className="requestButton" variant="outlined">
              Receive
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    );
  }
}

export default TopBar;
