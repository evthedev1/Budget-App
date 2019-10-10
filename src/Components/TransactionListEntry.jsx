import React from "react";

export default function TransactionListEntry({ txn }) {
  // const date = new Date(txn.daate);
  // console.log("date", date.toDateString());
  // console.log("date", txn.date.toString());
  return (
    <div className="txn-row">
      <div className="txn-data">{txn.date}</div>
      <div className="txn-data">{txn.description}</div>
      <div className="txn-data">{txn.amount}</div>
      <div className="txn-data">{txn.category_name}</div>
    </div>
  );
}
