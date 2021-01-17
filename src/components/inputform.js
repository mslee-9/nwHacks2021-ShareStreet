import React from "react";
import { InputBase, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class ItemInput extends React.Component {
  render() {
    return (
      <Grid container alignItems="center" justify="center" className="root">
        <Paper className="paper" alignItems="center" justify="center">
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
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
                    placeholder="Description"
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
