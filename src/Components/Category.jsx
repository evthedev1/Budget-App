import React, { Component } from "react";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="txn-row">
        <div
          className="txn-data"
          onClick={event => {
            this.handleClick(event);
          }}
        >
          {this.props.cat.name}
        </div>
        <div className="txn-data">{this.props.cat.budget}</div>
      </div>
    );
  }
}
