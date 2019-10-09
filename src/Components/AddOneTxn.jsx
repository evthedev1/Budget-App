import React, { Component } from "react";
import axios from "axios";

export default class AddOneTxn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      description: "",
      amount: "",
      transaction_type: "",
      category_name: "",
      account_name: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit() {
    event.preventDefault();
    //async issue?
    if (this.state.amount >= 0) {
      this.setState({ transaction_type: "credit" });
    } else {
      this.setState({ transaction_type: "debit" });
    }
    const newTransaction = {
      date: this.state.date,
      description: this.state.description,
      amount: this.state.amount,
      transaction_type: this.state["transaction_type"],
      category_name: this.state["category_name"],
      account_name: this.state["account_name"]
    };
    return axios
      .post("/transactions/individual", newTransaction)
      .then(results => {
        console.log(results);
        this.props.getAllTransactions();
      })
      .catch(err => {
        console.log("error posting");
      });
  }
  render() {
    return (
      <div>
        ADD SINGLE TRANSACTION
        <form onSubmit={this.handleSubmit}>
          <label>
            Date:
            <input
              name="date"
              type="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Amount:
            <input
              name="amount"
              type="number"
              value={this.state.amount}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Category:
            <input
              name="category_name"
              type="text"
              value={this.state["category_name"]}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Account:
            <input
              name="account_name"
              type="text"
              value={this.state["account_name"]}
              onChange={this.handleInputChange}
            />
          </label>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
