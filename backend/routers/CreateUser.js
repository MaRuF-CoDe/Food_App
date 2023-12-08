const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const jwtSecret = "ashjdffhjdshjfdfbvbvbvbdhfgdjhfgdf";

// Register route
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    // password must be at least 5 chars long
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      await User.create({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: hashedPassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
// Login route
router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Hash the password before storing it
      // const hashedPassword = await bcrypt.hash(req.body.password, 10);
      let userData = await User.findOne({ email: req.body.email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Input the correct credentials" });
      }
      // Compare the entered password with the hashed password
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        userData.password
      );

      // Check if the passwords match
      if (!passwordMatch) {
        return res.status(400).json({ errors: "Invalid email or password" });
      }
      const data = { id: userData.id };

      const authToken = jwt.sign(data, jwtSecret);

      res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
