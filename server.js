// Importing dependincies
const fs = require("fs");
require("dotenv").config();
const express = require("express");
const { errorLogger } = require("./middlewares/errorLoggerMiddleware");
const { loogerMiddleware } = require("./middlewares/loogerMiddleware");

// Create an express app
const app = express();
app.use(express.json());

// error Handling middleware.
app.use(errorLogger);

//  looger Middleware which will write logs into logs.log file
app.use(loogerMiddleware);

// Route 1: Handle GET requests for the root URL ("/") and display a welcome message
app.get("/", (req, res) => {
  res.send("Welcome to the web application!");
});

// Route 2: POST requests to "/api/users" for saving user information to users.json file
app.post("/api/users", (req, res) => {
  const user = req.body;

  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
      // If the file doesn't exist, create a new array with the current user
      const users = [user];
      fs.writeFile("users.json", JSON.stringify(users), (err) => {
        if (err) {
          res.status(500).send({ error: "Error in creating user" });
        } else {
          res.status(201).send({ message: "User created successfully" });
        }
      });
    } else {
      // If the file exists, parse the data and add the current user
      const users = JSON.parse(data);
      users.push(user);
      fs.writeFile("users.json", JSON.stringify(users), (err) => {
        if (err) {
          res.status(500).send({ error: "Error in creating user" });
        } else {
          res.status(201).send({ message: "User created successfully" });
        }
      });
    }
  });
});

// Route 3: GET requests to "/api/users" and getting user information from users.json file
app.get("/api/users", (req, res) => {
  fs.readFile("users.json", "utf8", (err, data) => {
    if (data) {
      const users = JSON.parse(data);
      res.status(200).json({ message: "ALL Users ", users });
    } else {
      res.status(500).send({ error: "Error while fetching user" });
    }
  });
});

// Invalid route middleware
app.use((req, res, next) => {
  res.status(404).json({ error: "Invalid route" });
});


app.listen(process.env.port, () => {
  console.log(`Server is listening on port ${process.env.port}`);
});
