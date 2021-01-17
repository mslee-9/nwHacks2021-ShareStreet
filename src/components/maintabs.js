import React from "react";
import { Input, Button } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SearchOutlined } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import "react-tabs/style/react-tabs.css";
import "../styles/maintabs.css";

class MainTabs extends React.Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Offers</Tab>
          <Tab>Requests</Tab>
          <Tab style={{ float: "right" }}>My Dashboard</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default MainTabs;
