import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/newlisting.css";

class ItemDisplay extends React.Component {
  render() {
    const ColoredLine = () => (
      <hr
        style={{
          border: 0,
          background: "orange",
          height: "2px",
          width: "200px",
          marginRight: "50px",
          borderStyle: "inset",
          float: "left",
        }}
      />
    );

    function ButtonOption(props) {
      const buttonType = props.typeIs;
      if (buttonType === "Request") {
        return <button>Give</button>;
      } else {
        return <button>Request</button>;
      }
    }

    return (
      <Paper className="paper">
        <div>
          <p>{this.props.item.organization}</p>
          <ColoredLine />
        </div>
        <div>
          <p>Item: {this.props.item.item}</p>
          <p>Description: {this.props.item.description}</p>
          <ButtonOption typeIs={this.props.item.type} />
        </div>
        <div>
          <p>Date listed: {this.props.item.date}</p>
          <p>Location: {this.props.item.location}</p>
        </div>
      </Paper>
    );
  }
}

export default ItemDisplay;
