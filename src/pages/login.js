import React from "react";
import "../styles/login.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import splashImage from "../images/sharestreet.jpg";
import { Grid, Button, TextField } from "@material-ui/core";

class login extends React.Component {
  render() {
    return (
      <Grid container className="fullWidth">
        <Grid xs={0} md={8} item>
          <img
            src={splashImage}
            className="splashImage"
            alt="share street logo"
          />
        </Grid>
        <Grid xs={4}>
          <Grid xs={12} item className="topMargin">
            <h4 className="introduction">Find What You Need On Share Street</h4>
          </Grid>
          <Grid className="topAutoMargin">
            <Tabs className="tabs">
              <TabList>
                <Tab>Sign Up</Tab>
                <Tab>Log In</Tab>
              </TabList>
              <TabPanel>
                <Grid container direction="column">
                  <TextField
                    color="secondary"
                    className="textField"
                    variant="outlined"
                    placeholder="Organization Name"
                  />
                  <TextField
                    color="secondary"
                    className="textField"
                    variant="outlined"
                    placeholder="E-mail"
                  />
                  <TextField
                    color="secondary"
                    className="textField"
                    variant="outlined"
                    placeholder="Password"
                  />
                  <Button variant="outlined" fullWidth className="loginButton">
                    Sign Up
                  </Button>
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid container direction="column">
                  <TextField
                    color="secondary"
                    className="textField"
                    variant="outlined"
                    placeholder="Username"
                  />
                  <TextField
                    color="secondary"
                    className="textField"
                    variant="outlined"
                    placeholder="Password"
                  />
                  <Button fullWidth className="loginButton" variant="outlined">
                    Log In
                  </Button>
                </Grid>
              </TabPanel>
            </Tabs>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default login;
