const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require('../controllers/captain.controller'); 
const authMiddleware = require('../middlewares/auth.middleware');

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 2 })
      .withMessage("Name must be at least 2 characters"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
    body("email").isEmail().withMessage("Invalid email"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color mush be at least 3 characters"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage(
        "Vehicle type must be one of the following: car, motorcycle, auto"
      ),
  ],
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be atleast 8 characters"),
  ],
  captainController.loginCaptain
);

router.get("/profile", authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get("/logout", authMiddleware.authCaptain, captainController.logoutCaptain)


module.exports = router;
