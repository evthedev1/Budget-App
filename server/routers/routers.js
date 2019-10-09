const router = require("express").Router();
const transControllers = require("../controllers/transactions.js");
const catControllers = require("../controllers/categories.js");

router.post("/transactions/:type", transControllers.addNewTransaction);

router.get("/transactions", (req, res) => {
  return models
    .getAllTransactions()
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

router.post("/categories", (req, res) => {
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

router.get("/categories", (req, res) => {
  return models
    .getAllCategories()
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});
router.put("/categories", (req, res) => {
  models
    .createOrUpdateCategory(req.body)
    .then(res.sendStatus(201))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});
