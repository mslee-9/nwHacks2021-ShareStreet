import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TopBarListing from "../components/topbarnewlisting";
import ItemInput from "../components/inputform";
import "../styles/newlisting.css";
import "../styles/maintabs.css";

class CreateNewOffer extends React.Component {
  constructor() {
    super();
    this.state = {
      offerListings: [],
      lastIndex: 0,
    };
    this.addListing = this.addListing.bind(this);
  }

  componentDidMount() {
    fetch("./offers.json")
      .then((response) => response.json())
      .then((result) => {
        const offers = result.map((offer) => {
          return offer;
        });
        this.setState({
          offerListings: offers,
        });
      });
  }

  addListing(item) {
    let tempListing = this.state.offerListings;
    item.listingId = this.state.lastIndex;
    tempListing.unshift(item);
    this.setState({
      offerListings: tempListing,
      lastIndex: this.state.lastIndex + 1,
    });
  }

  render() {
    return (
      <div>
        <TopBarListing />
        <div>
          <Tabs>
            <TabList>
              <Tab>Create New Offer</Tab>
            </TabList>
            <TabPanel>
              <ItemInput className="background" addListing={this.addListing} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default CreateNewOffer;
