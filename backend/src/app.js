const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const router = require("./routes/chat.route")

const app = express();


app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// route
app.use("/chat", router);

module.exports = app;
