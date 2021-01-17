import React, { useState } from "react";
import { InputBase, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";

class ItemInput extends React.Component {
  createListing = () => {};

  render() {
    return (
      <Grid container alignItems="center" justify="center" className="root">
        <Paper className="paper" alignItems="center" justify="center">
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid
                className="second"
                item
                xs
                container
                direction="column"
                spacing={2}
              >
                <Grid item xs>
                  <Grid>
                    <p className="fileLabel">Attach an image</p>
                    <InputBase
                      className="chooseFile"
                      type="file"
                      inputProps={{ accept: "image/*" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <InputBase
                    className="title"
                    type="text"
                    placeholder="Title"
                  />
                  <InputBase
                    className="description"
                    type="text"
                    placeholder="  Description"
                  />
                  <InputBase
                    className="quantity"
                    type="number"
                    placeholder="Quantity"
                  />
                  <Grid item>
                    <Button
                      type="outline"
                      onClick={this.createListing}
                      className="post"
                    >
                      Post
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default ItemInput;
