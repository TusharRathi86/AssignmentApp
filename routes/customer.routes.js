const controller = require("../controllers/customer.controllers");
const express = require("express");
const router = express.Router();

router.get("/", controller.products);
router.get("/change/:id", controller.changeProduct);
// router.post("/update/:id", controller.updateProduct);
module.exports = router;
