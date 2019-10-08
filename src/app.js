import React from "react";
import AddTransactions from "./Components/AddTransactions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AddTransactions />
        <h2>Budget App</h2>
        <h5>upload csv here</h5>
        <h5>add transactions here</h5>
        <div>TRANSACTIONS</div>
        <div>GRAPHS</div>
      </div>
    );
  }
}

export default App;
