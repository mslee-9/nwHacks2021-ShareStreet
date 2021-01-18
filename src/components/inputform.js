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
      quantity: 0,
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.createListing = this.createListing.bind(this);
  }

  createListing(e) {
    // e.preventDefault();
    // let tempListing = {
    //   organization: this.state.organization,
    //   item: this.state.organization,
    //   quantity: this.state.quantity,
    // };
    // this.props.addListing(tempListing);
    // this.setState({
    //   organization: "",
    //   item: "",
    //   quantity: 0,
    // });
  }

  render() {
    return (
      <Grid container alignItems="center" justify="center" className="root">
        <Paper className="paper" alignItems="center" justify="center">
          <form onSubmit={this.createListing}>
            <Grid container direction="column">
              <InputBase className="title" type="text" placeholder="Title" />
              <InputBase
                className="description"
                type="text"
                placeholder="Description"
              />
              <InputBase
                className="quantity"
                type="number"
                placeholder="Quantity"
              />
              <Grid className="post-button-container">
                <button type="submit" className="post">
                  Post
                </button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default ItemInput;
