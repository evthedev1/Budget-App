const models = require("../models/models.js");
const csv = require("csvtojson");

module.exports = {
  addNewTransaction: (req, res) => {
    if (req.params.type === "file") {
      csv({
        noheader: false,
        output: "json"
      })
        .fromString(req.body.csv)
        .then(csvData => {
          models
            .addManyTransactions(csvData)
            .then(() => {
              models
                .getAllTransactions()
                .then(transactions => {
                  let category = new Set();
                  transactions.forEach(transaction => {
                    category.add(transaction.category_name);
                  });
                  return category;
                })
                .then(categories => {
                  models.getAllCategories().then(currentCategories => {
                    categories.forEach(categoryItem => {
                      if (!currentCategories.includes(categoryItem)) {
                        models.createOrUpdateCategory({
                          name: categoryItem,
                          budget: 0
                        });
                      }
                    });
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.sendStatus(500);
                });
            })
            .then(() => {
              res.sendStatus(201);
            })
            .catch(err => {
              console.log(err);
              res.sendStatus(500);
            });
        });
    }
    if (req.params.type === "individual") {
      //format should be {date: description: amount: transaction_type: category_name: account_name:}
      models
        .newTransaction(req.body)
        .then(() => {
          res.sendStatus(201);
        })
        .catch(err => {
          console.log(err);
          res.sendStatus(500);
        });
    }
  },
  getTransactions: (req, res) => {
    return models
      .getAllTransactions()
      .then(results => {
        res.send(results).status(200);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },
  getTransactionsByDateRange: (req, res) => {
    return models
      .getAllTransactionsByDate(req.body)
      .then(transactions => {
        res.send(transactions).status(200);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getChart: (req, res) => {
    return models.getChartData().then(data => {
      res.send(data).status(200);
    });
  },
  getTransactionsByCategory: (req, res) => {
    console.log(req.body);
    return models.getTransactionsByCategory(req.body).then(data => {
      res.send(data).status(200);
    });
  }
};
