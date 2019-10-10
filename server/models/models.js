const { Category, Transaction } = require("../../db/index.js");
const _ = require("underscore");
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
    const newcategory = {
      name: category.name,
      budget: category.budget
    };
    console.log(newcategory);
    return Category.findOneAndUpdate({ name: category.name }, category, { upsert: true, useFindAndModify: false }).catch(err => {
      console.log(err);
    });
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
        console.log(data);
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
  },

  getAllTransactionsByDate: range => {
    return Transaction.find({ date: { $gte: `${range.start}T00:00:00Z`, $lt: `${range.end}T00:00:00Z` } })
      .then(data => {
        return data;
      })
      .catch(err => {
        return err;
      });
  },
  getChartData: () => {
    let chartData = [
      {
        label: "Budget",
        values: []
      },
      {
        label: "Actuals",
        values: []
      }
    ];
    let categories = [];
    return Category.find()
      .select("name budget -_id")
      .then(data => {
        chartData[0].values = data.map(category => {
          categories.push(category.name);
          return { x: category.name, y: category.budget };
        });
      })
      .then(() => {
        return Promise.all(
          categories.map(category => {
            return Transaction.aggregate([
              {
                $match: { category_name: category }
              },
              {
                $group: {
                  _id: category,
                  total: { $sum: "$amount" }
                }
              }
            ]);
          })
        );
      })
      .then(sums => {
        let totalAmounts = _.flatten(sums);
        chartData[1].values = totalAmounts.map(actuals => {
          return { x: actuals._id, y: actuals.total };
        });
        return chartData;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
