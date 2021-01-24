import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../styles/maintabs.css";
import "react-tabs/style/react-tabs.css";
import Offers from "./offers";
import Requests from "./requests";
import MyItems from "./myitems";
import NewListing from "./newlisting";
import { without } from "lodash";

class MainTabs extends React.Component {
  constructor() {
    super();
    this.state = {
      myListings: [],
      lastIndex: 0,
    };
    this.addListing = this.addListing.bind(this);
    this.deleteListing = this.deleteListing.bind(this);
  }

  deleteListing(item) {
    let tempItems = this.state.myListings;
    tempItems = without(tempItems, item);

    this.setState({
      myListings: tempItems,
    });
  }

  addListing(item) {
    let tempListings = this.state.myListings;
    item.listingId = this.state.lastIndex;
    tempListings.unshift(item);
    this.setState({
      myListings: tempListings,
      lastIndex: this.state.lastIndex + 1,
    });
  }

  componentDidMount() {
    fetch("./myitems.json")
      .then((response) => response.json())
      .then((result) => {
        const myItems = result.map((item) => {
          return item;
        });
        this.setState({
          myListings: myItems,
        });
      });
  }

  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Offers</Tab>
          <Tab>Requests</Tab>
          <Tab>My Dashboard</Tab>
          <Tab style={{ float: "right" }}>New Listing</Tab>
        </TabList>
        <TabPanel>
          <Offers />
        </TabPanel>
        <TabPanel>
          <Requests />
        </TabPanel>
        <TabPanel>
          <MyItems
            myItems={this.state.myListings}
            deleteListing={this.deleteListing}
          />
        </TabPanel>
        <TabPanel>
          <NewListing addListing={this.addListing} />
        </TabPanel>
      </Tabs>
    );
  }
}

export default MainTabs;
