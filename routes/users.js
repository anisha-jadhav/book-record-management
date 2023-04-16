const express = require("express");
const {
  getAllUsers,
  getSingleUserById,
  deleteUserById,
  updateUserById,
  createNewUser,
  
  getSubscriptionDetailsById,
} = require("../controllers/user-controller");
const { users } = require("../data/users.json");
const { UserModel, BookModel } = require("../models");

const router = express.Router();

/**
 * Route: /users
 * Method: GET
 * Description: Get all users
 * Access: Public
 * Parameters: none
 */
router.get("/", getAllUsers);

/**
 * Route: /users/:id   //:id means id is variable here
 * Method: GET
 * Description: Get single user by id
 * Access: Public
 * Parameters: id
 */
router.get("/:id", getSingleUserById);

/**
 * Route: /users
 * Method: POST
 * Description: Create a new user
 * Access: Public
 * Parameters: none
 */
router.post("/", createNewUser);

/**
 * Route: /users/:id   //:id means id is variable here
 * Method: PUT
 * Description: Update a user by id
 * Access: Public
 * Parameters: id
 */
router.put("/:id", updateUserById);



/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Delete a user by id
 * Access: Public
 * Parameters: id
 */
router.delete("/:id", deleteUserById);

/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Description: Get all user subscription details
 * Access: Public
 * Parameters: id
 */
router.get("/subscription-details/:id", getSubscriptionDetailsById);

// default export
module.exports = router;
