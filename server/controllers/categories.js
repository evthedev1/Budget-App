const models = require("../models/models.js");

module.exports = {
  addOrUpdateCategory: (req, res) => {
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
  },
  getCategories: (req, res) => {
    return models
      .getAllCategories()
      .then(results => {
        res.send(results);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  }
};
