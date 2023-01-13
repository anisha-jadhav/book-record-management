const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
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
router.post("/", (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({
      success: false,
      message: "No data provided",
    });
  }

  const book = books.find((each) => each.id === data.id);

  if (book) {
    return res.status(404).json({
      success: false,
      message: "Book already exists with this id, please use a unique id",
    });
  }

  const allBooks = [...books, data];

  return res.status(201).json({
    success: true,
    data: allBooks,
  });
});

/**
 * Route: /books/:id
 * Method: PUT
 * Description: Update data of book by id
 * Access: Public
 * Parameters: id
 * Data: id, name, author, genre, price, publisher
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const book = books.find((each) => each.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found with this id",
    });
  }

  const updatedData = books.map((each) => {
    if (each.id === id) {
      return { ...each, ...data };
    }
    return each;
  });

  return res.status(200).json({
    success: true,
    data: updatedData,
  });
});

// default export
module.exports = router;
