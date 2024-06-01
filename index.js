const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const fileRoutes = require("./routes/file");

const app = express();

app.use(express.json());

mongoose

  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connection established successfully"))
  .catch((err) => console.log("Error while connecting database", err));

app.use(fileRoutes);

app.use((err, res, req, next) => {
  // No use
});

app.listen(8080, () => console.log("App is up and running on port 8080"));
