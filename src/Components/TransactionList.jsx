import React from "react";

import TransactionListEntry from "./TransactionListEntry";

export default function TransactionList({ data, getAllTransactions }) {
  const handleClick = () => {
    console.log("hello");
    getAllTransactions();
  };
  return (
    <div className="txn">
      <h3>Transactions</h3>
      {/* <button
        onSubmit={handleSubmit}
        type="submit"
        value="Show All Transactions"
      /> */}
      <button onClick={handleClick} type="button">
        Show All Transactions
      </button>
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Date</div>
          <div className="txn-data">Description</div>
          <div className="txn-data">Amount</div>
          <div className="txn-data">Category</div>
        </div>
        <div className=" txn-rows">
          {data.map(txn => {
            return <TransactionListEntry key={txn["_id"]} txn={txn} />;
          })}
        </div>
      </div>
    </div>
  );
}
