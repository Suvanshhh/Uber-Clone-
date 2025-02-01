const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const isBlacklisted = await userModel.findOne({ token: token });
    if (isBlacklisted) {
      return res
        .status(401)
        .json({ message: "Access denied. Token blacklisted." });
    }
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next(); // Call next middleware
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Access denied. Token blacklisted." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);

    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(401).json({ message: "Unauthorized - Captain not found" });
    }

    req.captain = captain;
    console.log("Captain Found:", captain);

    next(); // Move to next middleware
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
