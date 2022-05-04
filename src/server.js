const express = require('express');
const api = express();
const routes = require('./router');


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
//'/static',
  app.use( express.static('public/images'));
  app.use('/pdf', express.static('public/pdf'));

api.use(express.json());
api.use(routes);
const PORT = process.env.PORT || 3000;
api.listen(3000);
