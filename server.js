require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const PORT = process.env.PORT || 8000;
const app = express();
const products = require("./routes/customer.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// View Engine
app.set("view engine", "ejs");

// Routes
app.use("/", products);

// Server
app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
