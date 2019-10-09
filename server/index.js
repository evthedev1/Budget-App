const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const models = require("./models.js");
const csv = require("csvtojson");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../dist")));

app.post("/transactions/:type", (req, res) => {
  if (req.params.type === "file") {
    //map over each transaction
    let transactions = req.body;
    models
      .addManyTransactions(transactions)
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
                  models.newCategory({ name: categoryItem, budget: 0 });
                }
              });
            });
          })
          .catch(err => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .then(res.sendStatus(201))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
    //call models.newTransaction
  }
  if (req.params.type === "individual") {
    //format should be {date: description: amount: transaction_type: category_name: account_name:}
    models
      .newTransaction(req.body)
      .then(res.sendStatus(201))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
});

app.post("/categories", (req, res) => {
  //take in request body...should be formatted {name: categoryname}
  //invoke models.newCategory
  return models
    .createOrUpdateCategory(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

app.get("/transactions", (req, res) => {
  return models
    .getAllTransactions()
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

app.get("/categories", (req, res) => {
  return models
    .getAllCategories()
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});
app.put("/categories", (req, res) => {
  models
    .createOrUpdateCategory(req.body)
    .then(res.sendStatus(201))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
