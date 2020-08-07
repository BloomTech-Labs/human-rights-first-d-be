const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");


server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

module.exports = server;
