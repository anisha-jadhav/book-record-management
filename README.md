# book-record-management

This is book record management API backend for the management of records and books

# Routes and Endpoints

## /users

POST: Create a new user
Get: Get all list of users

## /users/{id}

GET: Get a user by id
PUT: Update a user by id
DELETE: Delete a user by id (check if he/she still has a issued book) (is there any fine to be paid)

## /users/subscription-details/{id}

GET: Get user subscription details

1. Date of subscription
2. Valid till
3. Fine if any

## /books

GET: Get all books
POST: Create/add a new book

## /book/{id}

GET: Get a book by id
PUT: Update a book by id

## /books/issued

GET: Get all issued books

## /books/issued/withFine

GET: Get all issued books with fine

## Subscription Types

Basic (3 months)
Standard (6 months)
Premiun (12 months)
