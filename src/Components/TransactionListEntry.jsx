import React from "react";

export default function TransactionListEntry({ txn }) {
  return (
    <div>
      <div className="txn-row">
        <div className="txn-row">{txn.date}</div>
        <div className="txn-row">{txn.description}</div>
        <div className="txn-row">{txn.amount}</div>
        <div className="txn-row">{txn.category}</div>
      </div>
    </div>
  );
}
