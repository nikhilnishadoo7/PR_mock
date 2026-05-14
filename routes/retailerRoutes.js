const express = require("express");

const router = express.Router();

const {
  generateOtp,
  checkOtp,
  registerRetailer,
  businessDetails,
} = require("../controllers/retailerController");

router.post(
  "/register/retailer/validatemobile/generate_otp",
  generateOtp
);

router.post(
  "/register/retailer/validatemobile/check_otp",
  checkOtp
);

router.post(
  "/register/retailer/new",
  registerRetailer
);

router.post(
  "/retailer/businessdetailsFetchnew",
  businessDetails
);

module.exports = router;