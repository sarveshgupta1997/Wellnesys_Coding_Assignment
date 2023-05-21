# Express Web Application

This is a basic web application built using Node.js and the Express framework. It provides a server that listens on a specified port and implements three different routes: a root URL route, a POST route to save user information, and a GET route to retrieve user information.


## Features

- Get all users
- Save a User

## Tech Stack

**Server:** Node.js, Express.js


## Run Locally

Clone the project

```bash
  git clone https://github.com/sarveshgupta1997/Wellnesys_Coding_Assignment.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server.js
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`port`


## API Reference

#### Welcome

```http
  GET /
```

Displays a welcome message.  
`Response - {msg:"Welcome to the web application!"} `

#### User Save

```http
  POST /api/user
```
`body{
  _id: ObjectId,
  name: String,
  email: String,
  password: String
}`

Saves user information to a users.json file.
`body{
  "name": "John Doe",
  "email": "john.doe@example.com"
}`
`Response - { message: "User created successfully" } `

#### Get all Users

```http
  GET /api/users
```

Retrieves user information from the users.json file.
`Response - { message: "ALL Users ", users } `


#### Invalid Endpoints

```http
  GET /Invalid Endpoints
```
Gives Invalid Endpoint error
`Response - { error: "Invalid route" } `


## Demo

[https://wellnesys-coding-assignment.onrender.com/](https://wellnesys-coding-assignment.onrender.com/)

## Authors

- [@sarveshgupta1997](https://github.com/sarveshgupta1997)


### Documenting Steps, Challenges, and Lessons Learned

#### Steps Followed:
1. Set up a new Node.js project using npm and initialized the project.
2. Installed Express framework and other dependencies like morgan fs and dotenv.
3. Created a server file (server.js) and imported the necessary modules.
4. Set up a basic Express server that listens on a specific port.
5. Implemented three routes: a root URL route, a POST route for saving user information, and a GET route for retrieving user information.
6. Used middleware for logging and error handling.

#### Challenges Faced:
1. File handling: One challenge I faced was reading and writing user information to a JSON file. I had to ensure proper error handling and data parsing to handle scenarios like file not found or invalid JSON data.
2. Middleware implementation: Implementing morgan middleware for logging  required careful understanding of the Express middleware concept and ensuring it was placed in the correct order in the application flow.

#### Lessons Learned:
1. Express routing: I gained a better understanding of how to define routes in Express, handle different HTTP methods, and send appropriate responses based on the requested route.
2. Middleware usage: I learned how to utilize middleware in Express to handle common tasks like logging and error handling. This helped keep the code modular and improved code reusability.
3. Asynchronous file operations: Working with file operations asynchronously in Node.js helped me grasp concepts related to handling asynchronous operations, including proper error handling and callback functions.