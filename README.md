# Car API Project

This project demonstrates how to build a RESTful API for managing car data. The API supports basic CRUD operations (Create, Read, Update, Delete) using HTTP methods **GET**, **POST**, **PATCH**, and **DELETE**. It also implements validation and error handling for request parameters.

---

## Features

- Manage a collection of cars using an in-memory array.
- **GET**, **POST**, **PATCH**, and **DELETE** endpoints to handle different operations.
- Error handling for invalid inputs and missing records.
- Proper use of HTTP status codes.

---

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Framework for building the REST API.

---

## API Endpoints

```bash
- GET /cars: Return all cars.
- GET /cars/:id: Return a car by ID with proper error handling.
- POST /cars/create: Add a new car.
- PATCH /cars/update/:id: Update an existing car by ID with proper error handling.
- DELETE /cars/:id: Delete a car by ID with proper error handling.
```
## How to run the project
1: Start the server:
```bash
node server.js
```
2: Use an API testing tool like Postman, cURL, or your browser to test the endpoints.