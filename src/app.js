import React from "react";
import AddTransactions from "./Components/AddTransactions";
import Transactions from "./Components/Transactions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Budget App</h2>
        <h5>add transactions here</h5>
        <AddTransactions />
        <br />
        <Transactions />
        <br />
        <div>TRANSACTIONS</div>
        <div>GRAPHS</div>
      </div>
    );
  }
}

export default App;
