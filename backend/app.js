require("dotenv").config();
const connectToMongo=require('../backend/db');
connectToMongo();
const express = require("express");
const dataModel=require('../backend/Models/Event');

const Router = require("../backend/Router/routes");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Router);
app.get("/", async (req, res) => {
  res.send("Welcome TO Event Booking");
});
app.listen(process.env.port2 || 5000, () => {
  
  console.log(`Serving on http://127.0.0.1:8000`);
});

// contract_address="0xBce5b03a8663638BB33D536899Df2C5C0778B639"
// token_contract="0xC6bc3fE68aBFC82bbF0818D6835818696D16c048"
