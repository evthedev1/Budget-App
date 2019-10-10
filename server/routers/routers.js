const router = require("express").Router();
const transControllers = require("../controllers/transactions.js");
const catControllers = require("../controllers/categories.js");

router.post("/transactions/:type", transControllers.addNewTransaction);
router.get("/transactions", transControllers.getTransactions);
router.get("/transactions/chart", transControllers.getChart);
router.get("/transactions/dateRange", transControllers.getTransactionsByDateRange);
router.post("/categories", catControllers.addOrUpdateCategory);
router.get("/categories", catControllers.getCategories);
router.put("/categories", catControllers.addOrUpdateCategory);

module.exports = router;
