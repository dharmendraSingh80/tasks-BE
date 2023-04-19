const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//get the sign up data
module.exports.register = async function (req, res) {
  try {
    if (req.body.password != req.body.confirm_password) {
      return res.status(409).json({
        message: "The password confirmation does not match.",
      });
    }
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user = await User.create({ ...req.body, password: hashedPassword });
      return res.status(201).json({ message: "User created", user });
    } else {
      return res.status(409).json({ message: "Email already taken" });
    }
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
};

//sign in and create a session for the user
module.exports.createSession = async function (req, res) {
  try {
    const { email, password } = req.body;
    //find the user
    let user = await User.findOne({ email });
    if (user) {
      // Check if the password is correct
      const passwordMatch = await bcrypt.compare(password, user.password);
      // Check if the password is correct
      //handle password which doesn't match
      if (!passwordMatch) {
        return res.status(401).json({ message: "Authentication failed" });
      }
      // Generate a JWT
      const token = jwt.sign({ userId: user._id }, "secret");
      return res.status(200).json({
        message: "User succesfully login keep your token safe!",
        token: token,
      });
    } else {
      return res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
};
