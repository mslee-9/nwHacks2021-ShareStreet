import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import "../styles/myitems.css";

class MyItems extends React.Component {
  constructor() {
    super();
    this.state = {
      myListings: [],
    };
  }

  componentDidMount() {
    fetch("./myitems.json")
      .then((response) => response.json())
      .then((result) => {
        const myitems = result.map((myitem) => {
          return myitem;
        });
        this.setState({
          myListings: myitems,
        });
      });
  }

  render() {
    const ColoredLine = () => (
      <hr
        style={{
          border: 0,
          background: "orange",
          height: 1,
          borderStyle: "inset",
        }}
      />
    );

    return (
      <div>
        {this.state.myListings.map((myitem, i) => (
          <Paper key={i}>
            Request or Offer
            <ColoredLine />
            <p>{myitem.item}</p>
            <p>{myitem.description}</p>
            <p>{myitem.quantity}</p>
          </Paper>
        ))}
      </div>
    );
  }
}

export default MyItems;
