import React from "react";
// import data from "./exampledata";
import TransactionListEntry from "./TransactionListEntry";

export default function TransactionList({ data }) {
  console.log("data", data);
  return (
    <div className="txn">
      <h3>Transactions</h3>
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Date</div>
          <div className="txn-data">Description</div>
          <div className="txn-data">Amount</div>
          <div className="txn-data">Category</div>
        </div>
        <div className=" txn-rows">
          {data.map(txn => {
            return <TransactionListEntry txn={txn} />;
          })}
        </div>
      </div>
    </div>
  );
}
