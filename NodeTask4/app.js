const express = require("express");
const db = require('./db').getInstance();
db.setModels();


const app = express();

app.use(express.json());
app.use(express.urlencoded());

const { productsRouter } = require("./routes");

app.use("/products", productsRouter);

app.listen(5000, (error) =>
  error ? console.log(error) : console.log("SERVER IS WORKING ON 5000")
);


// app.post('/mysql', (req,res) => {
//     connection.query('SELECT * FROM products', (err , result) => {
//         res.json(result);
//     });
// });
