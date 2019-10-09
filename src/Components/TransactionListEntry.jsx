import React from "react";

export default function TransactionListEntry({ txn }) {
  return (
    <div>
      <div>{txn.date}</div>
      <div>{txn.description}</div>
      <div>{txn.amount}</div>
      <div>{txn.category}</div>
    </div>
  );
}
