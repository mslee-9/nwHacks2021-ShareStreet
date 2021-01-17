import React from "react";
import { InputBase, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../styles/inputform.css";

class ItemInput extends React.Component {
  createListing = () => {};

  render() {
    return (
      <Grid container alignItems="center" justify="center" className="root">
        <Paper className="paper" alignItems="center" justify="center">
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
            <Grid justify="center">
              <Button
                type="outline"
                onClick={this.createListing}
                className="post"
              >
                Post
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default ItemInput;
