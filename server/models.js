const { Category, Transaction } = require("../db/index.js");

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

  createOrUpdateCategory: category => {
    const newcategory = Category({
      name: category.name,
      budget: category.budget
    });

    return Category.findOneAndUpdate({ name: category.name }, newcategory, { upsert: true });
  },

  getAllTransactions: () => {
    //get transactions
    return Transaction.find()
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  },

  getAllCategories: () => {
    return Category.find()
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  },

  addManyTransactions: newTransactions => {
    return Transaction.insertMany(newTransactions).catch(err => {
      console.log(err);
    });
  }
};
