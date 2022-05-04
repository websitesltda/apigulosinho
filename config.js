const cloudinary = require('cloudinary').v2;

cloudinary.config({

  cloud_name: "caiosoliver",
  api_key: "716483675763965",
  api_secret: "0seryHzroT6n4XOU2lBTgkWr3pk",
  secure: true

});

module.exports = cloudinary;