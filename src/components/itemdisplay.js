import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/listings.css";

class ItemDisplay extends React.Component {
  render() {
    const ColoredLine = () => (
      <hr
        style={{
          border: 0,
          background: "orange",
          height: "2px",
          width: "670px",
          marginRight: "50px",
          borderStyle: "inset",
          float: "left",
        }}
      />
    );

    function ButtonOption(props) {
      const buttonType = props.typeIs;
      if (buttonType === "request") {
        return <button className="buttonCall">Give</button>;
      } else {
        return <button className="buttonCall">Request</button>;
      }
    }

    return (
      <Paper className="paper">
        <div className="firstBlock">
          <p className="organizationName">{this.props.item.organization}</p>
          <ColoredLine />
        </div>
        <div className="secondBlock">
          <div>
            <p className="firstText">Item: {this.props.item.item}</p>
          </div>
          <div>
            <p className="secondText">
              Description: {this.props.item.description}
            </p>
          </div>
          <ButtonOption
            className="buttonOption"
            typeIs={this.props.item.type}
          />
        </div>
        <div className="thirdBlock">
          <p>Date listed: {this.props.item.date}</p>
          <p>Location: {this.props.item.location}</p>
        </div>
      </Paper>
    );
  }
}

export default ItemDisplay;
