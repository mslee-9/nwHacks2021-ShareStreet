import React from "react";
import { Paper } from "@material-ui/core/";

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
      <div>
        {this.state.offerListings.map((offer, i) => (
          <Paper key={i}>
            <p>{offer.organization}</p>
            <p>{offer.item}</p>
            <p>{offer.quantity}</p>
          </Paper>
        ))}
      </div>
    );
  }
}

export default Offers;
