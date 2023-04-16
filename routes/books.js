const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookById,
  getSingleBookByName,
} = require("../controllers/book.controller");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parameters: none
 */
router.get("/", getAllBooks);

/**
 * Route: /books/:id
 * Method: GET
 * Description: Get a book by id
 * Access: Public
 * Parameters: id
 */
router.get("/:id", getSingleBookById);

/**
 * Route: /books/getBook/:name
 * Method: GET
 * Description: Get a book by name
 * Access: Public
 * Parameters: name
 */
router.get("/getBook/:name", getSingleBookByName);

/**
 * Route: /books/issued/by-user
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parameters: none
 */
router.get("/issued/by-user", getAllIssuedBooks);

/**
 * Route: /books
 * Method: POST
 * Description: Create new book
 * Access: Public
 * Parameters: none
 * Data: id, name, author, genre, price, publisher
 */
router.post("/", addNewBook);

/**
 * Route: /books/:id
 * Method: PUT
 * Description: Update data of book by id
 * Access: Public
 * Parameters: id
 * Data: id, name, author, genre, price, publisher
 */
router.put("/:id", updateBookById);

// default export
module.exports = router;
