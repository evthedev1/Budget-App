import React, { Component } from "react";
import Axios from "axios";

export default class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      budget: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const newCat = {
      name: this.state.name,
      budget: this.state.budget
    };
    return Axios.post("/categories", newCat)
      .then(() => {
        this.props.getAllCategories();
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>ADD CATEGORY</div>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Budget:
          <input
            name="budget"
            type="number"
            value={this.state.budget}
            onChange={this.handleInputChange}
          />
        </label>
         <input type="submit" value="Submit" />
      </form>
    );
  }
}
