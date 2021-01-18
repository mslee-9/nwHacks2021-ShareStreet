import React from "react";
import ItemDisplay from "./itemdisplay";

class Requests extends React.Component {
  constructor() {
    super();
    this.state = {
      requestListings: [],
    };
  }

  componentDidMount() {
    fetch("./requests.json")
      .then((response) => response.json())
      .then((result) => {
        const requests = result.map((request) => {
          return request;
        });
        this.setState({
          requestListings: requests,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.requestListings.map((request, i) => (
          <ItemDisplay item={request} key={i} />
        ))}
      </div>
    );
  }
}

export default Requests;
