const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 5500
const cors = require('cors');

app.use(cors());
app.options('*', cors());

app.get("/:api", (req, res) => {
  console.log('in app.get')
  res.json({
    message: "Hey, there! Welcome to this API service"
  });
});

app.post("/:api/posts", verifyToken, (req, res) => {
  console.log('in app.post /api/posts')
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "POST created...",
        authData
      });
    }
  });
});

app.post("/:api/login", (req, res) => {
  console.log('in app.post /api/login')
  const user = {
    id: 1,
    username: "john",
    email: "john@gmail.com"
  };

  jwt.sign({ user: user }, "secretkey", (err, token) => {
    res.send(JSON.stringify(token))
    // res.json({
    //   token
    // });
  });
});

app.listen(port, function () {
  console.log('Web server listening on port', port);
});

function verifyToken(req, res, next) {
  console.log('in verifyToken')
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

// app.listen(5500, () => console.log("Server started"));