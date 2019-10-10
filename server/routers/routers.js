const router = require("express").Router();
const transControllers = require("../controllers/transactions.js");
const catControllers = require("../controllers/categories.js");

// Transactions
router.post("/transactions/:type", transControllers.addNewTransaction);
router.get("/transactions", transControllers.getTransactions);
router.get("/transactions/chart", transControllers.getChart);
router.get("/transactions/dateRange", transControllers.getTransactionsByDateRange);

// Category Routers
router.get("/categories", catControllers.getCategories);
router.post("/categories", catControllers.addOrUpdateCategory);
router.put("/categories", catControllers.addOrUpdateCategory);

module.exports = router;
