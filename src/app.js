import React from "react";
import AddTransactions from "./Components/AddTransactions";
import AddOneTxn from "./Components/AddOneTxn";
import TransactionList from "./Components/TransactionList.jsx";
import AddCategory from "./Components/AddCategory.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      categories: []
    };
    this.getAllTransactions = this.getAllTransactions.bind(this);
    this.getAllCategories = this.getAllCategories.bind(this);
  }
  componentDidMount() {
    this.getAllTransactions();
  }
  getAllTransactions() {
    return axios
      .get("/transactions")
      .then(({ data }) => {
        this.setState({ transactions: data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  getAllCategories() {
    return axios
      .get("/categories")
      .then(({ data }) => {
        this.setState({ categories: data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h2>Budget App</h2>
        <div className="app">
          <AddTransactions />
          <br />
          <AddOneTxn getAllTransactions={this.getAllTransactions} />
          <br />
          <AddCategory getAllCategories={this.getAllCategories} />
          <br />
          <TransactionList data={this.state.transactions} />

          <br />
          <div>GRAPHS - BY TIME</div>
          <div>GRAPHS - CATEGORY PIE CHART</div>
          <div>GRAPH - BUDGET V ACTUAL</div>
        </div>
      </div>
    );
  }
}

export default App;
