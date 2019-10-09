import React from "react";
import data from "./exampledata";
import TransactionListEntry from "./TransactionListEntry";

export default function TransactionList() {
  console.log("data", data);
  return (
    <div>
      <h3>Transactions</h3>
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Date</div>
          <div className="txn-data">Description</div>
          <div className="txn-data">Amount</div>
          <div className="txn-data">Category</div>
          {data.map(txn => {
            return <TransactionListEntry txn={txn} />;
          })}
        </div>
      </div>
    </div>
  );
}
