import React, { Component } from "react";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
  }
  handleClick(event) {
    // this.setState({ category: this.props.cat.name });
    this.props.getTxnForCat(this.props.cat.name);
  }
  render() {
    return (
      <div className="txn-row" value={this.props.cat.name}>
        <div
          className="txn-data"
          onClick={event => {
            this.handleClick(event);
          }}
          value={this.props.cat.name}
        >
          {this.props.cat.name}
        </div>
        <div className="txn-data">{this.props.cat.budget}</div>
      </div>
    );
  }
}
