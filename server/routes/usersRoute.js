const User = require("../models/userModel");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("../cloudinary");

router.post("/register", async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    if (user) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "user created successfully",
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});
