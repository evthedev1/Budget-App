import React from "react";
import AddTransactions from "./Components/AddTransactions";
import AddOneTxn from "./Components/AddOneTxn";
import TransactionList from "./Components/TransactionList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  render() {
    return (
      <div>
        <h2>Budget App</h2>
        <div className="app">
          <AddTransactions />
          <br />
          <AddOneTxn />
          <br />
          <AddCategory />
          <br />
          <TransactionList />

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
