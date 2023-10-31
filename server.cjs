// import { randomUUID } from "node:crypto";
const jwt = require("jsonwebtoken");
require('dotenv').config();

//const apiKey = process.env.ABLY_API_KEY;
const apiKey = 'i5gX9$Lm@JdAm!Q9:D8ySer-Xf-M5QNPUlu9iXA-l6ikI20hc5MrCw5GFpSPQx2G64AQFQol7epuFjfaptSZ8clRkw6AeoB8PaN7YDg'  
const [ keyId, keySecret ] = apiKey.split(":");

const expiresIn = 3600;
const jwtOptions = { expiresIn, keyId };

const express = require('express');
const app = express();
const port = 5500

app.use('/', express.static(__dirname))

app.get("/auth", (req, res) => {
    console.log("Successfully connected to the server auth endpoint");
  
    const randomId = Math.random().toString(16).slice(-8);
    const clientId = req.query.clientId || randomId;
  
    const header = {
      'alg': 'HS256',
      'typ': 'JWT',
      'kid': keyId
    }
    const payload = {
      scope: 'user',
      name: clientId.split(':')[0],
      email: clientId.split(':')[0],
      exp: Date.now()/1000 + 3600,
      external_id: 'test001'  //crypto.randomUUID()
    };
    const token = jwt.sign(payload, keySecret, header, );
  
    console.log("Sending signed JWT token back to client", tokenId);
    res.send(JSON.stringify(token))

    // const jwtPayload = {
    //   "x-ably-capability": capability,
    //   "x-ably-clientId": clientId,
    // };
  
    // jwt.sign(jwtPayload, keySecret, jwtOptions, (err, tokenId) => {
    //   console.log("JSON Web Token signed by auth server");
  
    //   if (err) return console.trace();
  
    //   res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    //   res.setHeader("Content-Type", "application/json");
  
    //   console.log("Sending signed JWT token back to client", tokenId);
    //   res.send(JSON.stringify(tokenId));
    // });
});

app.listen(port, function () {
    console.log('Web server listening on port', port);
});