const express = require("express");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/pdf/",
  filename: function (req, file, cb) {
    cb(null,  file.originalname);
  },
});

module.exports = ( multer({ storage: storage }));
