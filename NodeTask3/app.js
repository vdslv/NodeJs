const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const { productsRouter } = require("./routes");

app.use("/products", productsRouter);

app.listen(5000, (error) =>
  error ? console.log(error) : console.log("SERVER IS WORKING ON 5000")
);
