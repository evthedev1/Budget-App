import React, { Component } from "react";
import Category from "./Category.jsx";

export default function Categories({ categories, getTxnForCat }) {
  return (
    <div className="categories-table">
      Categories
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Name</div>
          <div className="txn-data">Budget</div>
        </div>
        <div className=" txn-rows">
          {categories.map(item => {
            return <Category getTxnForCat={getTxnForCat} cat={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
