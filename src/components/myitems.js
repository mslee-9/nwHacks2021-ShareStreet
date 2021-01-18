import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/listings.css";

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
          height: "1.5px",
          borderStyle: "inset",
        }}
      />
    );

    function Type(props) {
      const type = props.itemType;
      if (type === "Request") {
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
      <div>
        {this.state.myListings.map((myitem, i) => (
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
                <button className="editDeleteButton bottom">Delete</button>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    );
  }
}

export default MyItems;
