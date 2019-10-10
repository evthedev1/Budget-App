import React from "react";
import AddTransactions from "./Components/AddTransactions";
import AddOneTxn from "./Components/AddOneTxn";
import TransactionList from "./Components/TransactionList.jsx";
import AddCategory from "./Components/AddCategory.jsx";
import axios from "axios";
import BudgetActualGraph from "./Components/BudgetActualGraph";
import PieChart from "./Components/PieChart.jsx";
import Categories from "./Components/Categories.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      categories: []
    };
    this.getAllTransactions = this.getAllTransactions.bind(this);
    this.getAllCategories = this.getAllCategories.bind(this);
    this.getTxnForCat = this.getTxnForCat.bind(this);
  }
  componentDidMount() {
    this.getAllTransactions();
    this.getAllCategories();
  }
  getTxnForCat(cat) {
    this.getAllTransactions()
      .then(() => {
        let txn = [];
        this.state.transactions.forEach(trans => {
          if (trans.category_name === cat) {
            txn.push(trans);
          }
        });
        return txn;
      })
      .then(filteredValues => {
        this.setState({ transactions: filteredValues });
      })
      .catch(err => {
        console.log(err);
      });
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
          <h1>Budget App</h1>
          <AddTransactions getAllTransactions={this.getAllTransactions} getAllCategories={this.getAllCategories} />
          <br />
          <div className="details">
            <AddOneTxn getAllTransactions={this.getAllTransactions} />
            <br />
            <AddCategory getAllCategories={this.getAllCategories} />
          </div>
          <br />
          <div className="details">
            <TransactionList data={this.state.transactions} getAllTransactions={this.getAllTransactions} />
            <Categories getTxnForCat={this.getTxnForCat} categories={this.state.categories} />
          </div>
          <br />
          <div className="graphs">
            <BudgetActualGraph />
            {/* <PieChart /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
