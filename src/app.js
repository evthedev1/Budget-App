import React from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
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
