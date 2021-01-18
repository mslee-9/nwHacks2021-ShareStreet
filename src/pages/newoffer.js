import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TopBarListing from "../components/topbarnewlisting";
import ItemInput from "../components/inputform";
import "../styles/newlisting.css";
import "../styles/maintabs.css";

class CreateNewOffer extends React.Component {
  render() {
    return (
      <div>
        <TopBarListing />
        <div>
          <Tabs>
            <TabList>
              <Tab>Create New Offer</Tab>
            </TabList>
            <TabPanel className="background">
              <ItemInput />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default CreateNewOffer;
