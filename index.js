const express = require("express");
const dotenv = require("dotenv");

//importing routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const DbConnection = require("./databaseConnection");

const { UserModel, BookModel } = require("./models");

dotenv.config();

const app = express();

DbConnection();

const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running.",
  });
});

app.use("/users", usersRouter);
app.use("/books", booksRouter);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "This route does not exist.",
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
