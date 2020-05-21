const express = require("express");
const expBars = require("express-handlebars");
const path = require("path");

const app = express();

const users = [
  { name: "Sasha", email: "sasha@gmail.com", password: "123" },
  { name: "Petro", email: "petro@gmail.com", password: "321" },
  { name: "Ivan", email: "ivan@gmail.com", password: "111" },
];

const validateUserLog = (user) => {
  return users.find(
    (el) => el.email === user.email && el.password === user.password
  );
};

const validateUserReg = (user) => {
  return users.some((el) => el.email === user.email);
};

app.use(express.json());
app.use(express.urlencoded());

express.static(path.join(__dirname, "views"));

app.engine(
  ".hbs",
  expBars({
    defaultLayout: false,
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/users", (req, res) => {
  res.render("users", { users });
});

app.post("/logged", (req, res) => {
  const user = validateUserLog(req.body);
  user ? res.end(`Welcome ${user.name}`) : res.redirect("/register");
});

app.post("/reg", (req, res) => {
  const user = validateUserReg(req.body);
  user
    ? res.end(`This email already registered`)
    : users.push(req.body) && res.end("You have been successfully registered");
});

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Lister");
  }
});
