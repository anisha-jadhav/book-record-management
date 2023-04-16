
# Book-record-management

This is book record management API backend for the management of records of books and users.


## 🔗 API Documentation Link
https://documenter.getpostman.com/view/25268357/2s93XyTi87


# Routes and Endpoints
## Users 


#### Get list of all users

```http
  GET :  /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none ` | `none ` |   -  |


#### Create/Add a new user

```http
  POST :  /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none ` | `none ` |   -  |


#### Get a user by id

```http
  GET :  /users/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` |   **Required**. Id of user  |

#### Delete a user by id

```http
  DELETE :  /users/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` |   **Required**. Id of user , check if the user still have |
|          |  |any issued book and validity of subscription |

#### Update a user by id

```http
  PUT :  /users/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` |   **Required**. Id of user , check if user exist |

#### Get user subscription details by id

```http
  GET :  /users/subscription-details/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` |   **Required**. Id of user  
|   |  |  **Condition** 1. Date of subscription|
|  | |                  2. Valid till| 
| | |                    3. Fine if any |



## Books

#### Get list of all books

```http
  GET :  /books
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` |   -    |

#### Create/Add a new book 

```http
  POST :  /books
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` |  -   |

#### Get a book by id

```http
  GET :  /books/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` |   **Required**. Id of book  |

#### Get a book by name

```http
  GET :  /books/{name}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` |   **Required**. name of book |

#### Update a book by id

```http
  PUT :  /books/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` |   **Required**. Id of book |



#### Get all issued books

```http
  GET :  /books/issued/by-user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` |   |

#### Get all issued books with fine

```http
  GET :  /books/issued/withFine
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` |   |


# Subscription Types


Basic (3 months) 

Standard (6 months) 

Premium (12 months)

NOTE: Date is in the format mm/dd/yyyy

If subscription date is 01/08/22 and Subscription type is Standard the valid till date will be 01/02/23

If he has an issued book and the issued book is to be returned at 01/01/23 If he missed the date of return, then he gets a fine of Rs. 100

If he has an issued book and the issued book is to be returned at 01/01/23 If he missed the date of return and his subscription also expires, then he gets a fine of Rs. 200
