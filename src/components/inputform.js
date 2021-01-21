import React from "react";
import { InputBase } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../styles/inputform.css";

class ItemInput extends React.Component {
  constructor() {
    super();
    this.state = {
      organization: "",
      item: "",
      description: "",
      quantity: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.createListing = this.createListing.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  createListing(e) {
    e.preventDefault();
    let tempListing = {
      organization: this.state.organization,
      item: this.state.item,
      description: this.state.description,
      quantity: this.state.quantity,
    };
    this.props.addListing(tempListing);
    this.setState({
      organization: "",
      item: "",
      quantity: 0,
    });
  }

  render() {
    return (
      <div className="background">
        <Paper className="paper" alignItems="center" justify="center">
          <form onSubmit={this.createListing}>
            {/* <Grid container direction="column"> */}
            <InputBase
              className="organization"
              type="text"
              placeholder="Organization"
              onChange={this.handleChange}
            />
            <InputBase
              className="item"
              type="text"
              placeholder="Item"
              onChange={this.handleChange}
            />
            <InputBase
              className="description"
              type="text"
              placeholder="Description"
              onChange={this.handleChange}
            />
            <InputBase
              className="quantity"
              type="number"
              placeholder="Quantity"
              onChange={this.handleChange}
            />
            <Grid className="post-button-container">
              <button type="submit" className="post">
                Post
              </button>
            </Grid>
            {/* </Grid> */}
          </form>
        </Paper>
      </div>
    );
  }
}

export default ItemInput;
