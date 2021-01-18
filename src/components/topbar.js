import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Navbar } from "react-bootstrap";
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
      <Navbar className="navbar">
        <div className="main">
          <div className="logoContainer">
            <img
              className="logo"
              alt="share street logo"
              style={{ width: 140, height: 50 }}
              src={logo}
            />
          </div>
          <div className="buttons">
            <div className="iconButtons">
              <IconButton>
                <InboxOutlined />
              </IconButton>
              <IconButton>
                <MessageOutlined />
              </IconButton>
              <IconButton>
                <NotificationsOutlined />
              </IconButton>
            </div>
            <div className="mainButtons">
              <button className="button offerButton" variant="outlined">
                OFFER
              </button>
              <button className="button" onClick={this.newRequest}>
                RECEIVE
              </button>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default TopBar;
