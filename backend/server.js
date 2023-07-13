const express = require("express");
const dotenv = require("dotenv");

const { chats } = require("./data/data");

const app = express(); // create an instance
dotenv.config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

// server all the data related to out chat

app.get("/api/chat", (req, res) => {
  res.send(chats);
});
// for getting data for a single chat we are gone crete api using id
app.get("/api/chat/:id", (req, res) => {
  //   console.log(req);
  //   console.log(req.params.id);

  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(5000, () => {
  console.log(`Server running on port ${port}`);
});
