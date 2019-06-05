"use strict"; // Ensures our code is compiled in strict mode

// Lets import our web framework
var express = require("express");
var mongoose = require("mongoose");

// Initialise our app
const app = express();

// Lets set our port
/**
 * The default port number is `3000`
 * Take note on that as we will come to that.
 */
app.set("port", process.env.PORT || 3000);


// Connect to database
mongoose.connect("mongodb://mongo:27017/docker_nodejs_app", {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("open", err => {
  if (err) console.log("Error connecting to our mongo database");
  console.log("Connected to mongo database successfully");
});

/**
 * To ensure works as it should we will create a
 * simple endpoint to return a json response
 */

// Define our json response
const data = {
  blog_name: "docker_nodejs_app",
  blog_author: "wachira (tesh254)",
  blog_author_twitter: "@wachira_dev"
};

// Define out GET request endpoint
app.get("/", (req, res) => {
  res.status(200).json(data);
});

// Initialize our server
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
