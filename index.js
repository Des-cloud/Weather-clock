// Required modules
const http = require('https');
const express = require('express');
const fs = require('fs');
const app = express();

// Other static files used are placed in the public folder
app.use(express.static("public"));

// Listen
app.listen(process.env.PORT||3000, function() {
  console.log("Server is running on port 3000");
});

// Get
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
