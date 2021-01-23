import React from "react";
import "react-tabs/style/react-tabs.css";
import "../styles/newlisting.css";
import "../styles/maintabs.css";
import Paper from "@material-ui/core/Paper";
import "../styles/inputform.css";

class CreateNewListing extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "",
      organization: "",
      item: "",
      description: "",
      quantity: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    let tempListing = {
      type: this.state.type.toLowerCase,
      organization: this.state.organization,
      item: this.state.item,
      description: this.state.description,
      quantity: this.state.quantity,
      date: Date().toLocaleString(),
      location: "1243 Oak Street, Vancouver",
    };
    this.props.addListing(tempListing);

    this.setState({
      type: "",
      organization: "",
      item: "",
      description: "",
      quantity: "",
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="background">
        <Paper className="paper" justify="center">
          <form onSubmit={this.handleAdd}>
            <input
              className="input type"
              type="text"
              name="type"
              placeholder="Offer or Request"
              value={this.state.type}
              onChange={this.handleChange}
            />
            <input
              className="input organization"
              type="text"
              name="organization"
              placeholder="Organization"
              value={this.state.organization}
              onChange={this.handleChange}
            />
            <input
              className="input item"
              type="text"
              name="item"
              placeholder="Item"
              value={this.state.item}
              onChange={this.handleChange}
            />
            <input
              className="input-description"
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <input
              className="input quantity"
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <div>
              <button type="submit" className="post">
                Post
              </button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default CreateNewListing;
