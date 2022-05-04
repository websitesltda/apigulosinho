const sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true, parameterLimit: 500000 }))

const database = new sequelize('CheckBoarding', 'user4t', '#Global21',
  {
    dialect: 'mssql', host: 'dbpoc.ceknk0d7osb8.sa-east-1.rds.amazonaws.com', port: 1433
  });

database.sync();

module.exports = database;
