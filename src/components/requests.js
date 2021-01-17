import React from "react";
import { Paper } from "@material-ui/core/";

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
          <Paper key={i}>
            <p>{request.organization}</p>
            <p>{request.item}</p>
            <p>{request.quantity}</p>
          </Paper>
        ))}
      </div>
    );
  }
}

export default Requests;
