import React from "react";
import AddTransactions from "./Components/AddTransactions";
import AddOneTxn from "./Components/AddOneTxn";
import TransactionList from "./Components/TransactionList.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      categories: []
    };
    this.getAllTransactions = this.getAllTransactions.bind(this);
  }
  componentDidMount() {
    this.getAllTransactions();
  }
  getAllTransactions() {
    return axios
      .get("/transactions")
      .then(({ data }) => {
        // console.log(data);
        this.setState({ transactions: data });
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
          <AddCategory />
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
