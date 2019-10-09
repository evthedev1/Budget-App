import React from "react";

export default function TransactionListEntry({ txn }) {
  return (
    <div className="txn-row">
      <div className="txn-data">{txn.date}</div>
      <div className="txn-data">{txn.description}</div>
      <div className="txn-data">{txn.amount}</div>
      <div className="txn-data">{txn.category}</div>
    </div>
  );
}
