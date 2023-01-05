const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "rikoairlan",
  api_key: "615864367573681",
  api_secret: "1EXv8mY08tF7Nidd_Rzr0IqIcF4",
});

module.exports = cloudinary;
