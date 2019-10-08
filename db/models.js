const { Category, Transaction } = require("./index.js");

module.exports = {
  newTransaction: data => {
    const newtransaction = new Transaction({
      date: data.date,
      description: data.description,
      amount: data.amount,
      transaction_type: data.transaction_type,
      category_name: data.category_name,
      account_name: data.account_name
    });
    return newtransaction.save();
  },

  newCategory: category => {
    const newcategory = new Category({
      name: category.name,
      budget: category.budget
    });
    console.log("name", category.name);
    return newcategory.save();
  },

  getAllTransactions: () => {
    //get transactions
    return db.Transaction.find();
  },

  getAllCategories: () => {
    return db.Category.find();
  }
};
