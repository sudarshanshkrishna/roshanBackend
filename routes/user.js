const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  userPurchaseList,
} = require("../controllers/user");
const { isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isAuthenticated, getUser);
router.put("/user/:userId", isAuthenticated, updateUser);

router.get(
  "/orders/user/:userId",

  isAuthenticated,
  userPurchaseList
);

module.exports = router;
