import React from "react";
import AddTransactions from "./Components/AddTransactions";
import AddOneTxn from "./Components/AddOneTxn";
import TransactionList from "./Components/TransactionList.jsx";
import AddCategory from "./Components/AddCategory.jsx";
import axios from "axios";
import BudgetActualGraph from "./Components/BudgetActualGraph";

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
        <div className="app">
          <h2>Budget App</h2>
          <AddTransactions getAllTransactions={this.getAllTransactions} />
          <br />
          <AddOneTxn getAllTransactions={this.getAllTransactions} />
          <br />
          <AddCategory getAllCategories={this.getAllCategories} />
          <br />
          <TransactionList data={this.state.transactions} />
          <div>CATEGORIES</div>
          <br />
          <BudgetActualGraph />
          <div>GRAPHS - BY TIME</div>
          <div>GRAPHS - CATEGORY PIE CHART</div>
        </div>
      </div>
    );
  }
}

export default App;
