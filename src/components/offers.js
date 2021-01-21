import React from "react";
import ItemDisplay from "./itemdisplay";

class Offers extends React.Component {
  constructor() {
    super();
    this.state = {
      offerListings: [],
    };
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

  render() {
    return (
      <div className="background">
        {this.state.offerListings.map((offer, i) => (
          <ItemDisplay item={offer} key={i} />
        ))}
      </div>
    );
  }
}

export default Offers;
