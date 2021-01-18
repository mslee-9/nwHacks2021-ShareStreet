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
          height: 1.5,
          borderStyle: "inset",
        }}
      />
    );

    return (
      <div>
        {this.state.myListings.map((myitem, i) => (
          <Paper key={i} className="paper">
            <p>{myitem.type}</p>
            <ColoredLine />
            <div className="div">
              <div className="first">
                <p>Item: {myitem.item}</p>
                <p>Description: {myitem.description}</p>
                <p>Quantity: {myitem.quantity}</p>
              </div>
              <div className="second">
                <button className="editDeleteButton">Edit</button>
                <button className="editDeleteButton">Delete</button>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    );
  }
}

export default MyItems;
