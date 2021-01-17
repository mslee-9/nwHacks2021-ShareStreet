import React from "react";
import { Input, Button } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../styles/maintabs.css";
import "react-tabs/style/react-tabs.css";
import Offers from "./offers";
import Requests from "./requests";
import MyItems from "./myitems";

class MainTabs extends React.Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Offers</Tab>
          <Tab>Requests</Tab>
          <Tab style={{ float: "right" }}>My Dashboard</Tab>
        </TabList>
        <TabPanel className="background">
          <Offers />
        </TabPanel>
        <TabPanel className="background">
          <Requests />
        </TabPanel>
        <TabPanel className="background">
          <MyItems />
        </TabPanel>
      </Tabs>
    );
  }
}

export default MainTabs;
