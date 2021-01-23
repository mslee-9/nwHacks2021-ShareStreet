import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/listings.css";
import { without } from "lodash";

class MyItems extends React.Component {
  constructor() {
    super();
    this.state = {
      myListings: [],
    };
    this.deleteListing = this.deleteListing.bind(this);
  }

  deleteListing(item) {
    let tempItems = this.state.myListings;
    tempItems = without(tempItems, item);

    this.setState({
      myListings: tempItems,
    });
  }

  render() {
    const myListing = this.props.myItems;

    const ColoredLine = () => (
      <hr
        style={{
          border: 0,
          background: "orange",
          height: "1.5px",
          borderStyle: "inset",
        }}
      />
    );

    function Type(props) {
      const type = props.itemType;
      if (type === "request") {
        return (
          <Paper className="indicator">
            <p
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              Request
            </p>
          </Paper>
        );
      } else {
        return (
          <Paper className="indicator">
            <p
              style={{
                color: "green",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              Offer
            </p>
          </Paper>
        );
      }
    }

    return (
      <div className="background">
        {myListing.map((myitem, i) => (
          <Paper key={i} className="paper">
            <Type itemType={myitem.type} />
            <ColoredLine />
            <div className="div">
              <div className="first">
                <p>Item: {myitem.item}</p>
                <p>Description: {myitem.description}</p>
                <p>Quantity: {myitem.quantity}</p>
              </div>
              <div className="second">
                <button className="editDeleteButton">Edit</button>
                <button
                  className="editDeleteButton bottom"
                  onClick={() => this.deleteListing(myitem)}
                >
                  Delete
                </button>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    );
  }
}

export default MyItems;
