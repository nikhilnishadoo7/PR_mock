const { v4: uuidv4 } = require("uuid");

const {
  validOtpStore,
} = require("../mockData/mockRetailerData");

// ========================================
// GENERATE OTP
// ========================================

const generateOtp = (req, res) => {
  const { username } = req.body;

  const otp = "179237";

  const otpToken = uuidv4();

  validOtpStore.push({
    mobile: username,
    otp,
    otpToken,
  });

  return res.status(200).json({
    resultCode: "200",
    resultStatus: "TXN",
    resultMessage: `Verification code has been send to mobile number ${username}`,
    otpToken,
  });
};

// ========================================
// CHECK OTP
// ========================================

const checkOtp = (req, res) => {
  const { otp } = req.body;

  const data = validOtpStore.find(
    (x) => x.otp === otp
  );

  if (!data) {
    return res.status(400).json({
      resultCode: "400",
      resultStatus: "ERR",
      resultMessage: "In-valid Otp.",
    });
  }

  return res.status(200).json({
    resultCode: "200",
    resultStatus: "TXN",
    otpToken: uuidv4(),
    resultMessage: "Details not found",
  });
};

// ========================================
// REGISTER RETAILER
// ========================================

const registerRetailer = (req, res) => {
  const {
    CompanyType,
    businessServiceType,
    firstName,
    lastName,
    mobileNo,
    otp,
  } = req.body;

  const data = validOtpStore.find(
    (x) => x.otp === otp
  );

  if (!data) {
    return res.status(400).json({
      resultCode: "400",
      resultStatus: "ERR",
      resultMessage: "Invalid OTP",
    });
  }

  return res.status(200).json({
    status: "true",
    data: "Details found.",
    businessIdentificationCode: "876fb243",
    businessName: "NA",
    businessOwnerName: `${firstName} ${lastName}`,
    mobile: mobileNo,
    businessStatus: "IN COMPLETE",
    isKycOfficer: 0,
    companyType: CompanyType,
    businessServiceType,
    balance: "0",
    businessAuthToken: "sample-token",
    resultMessage: "Retailer Registered Successfully",
    resultCode: "200",
    resultStatus: "TXN",
  });
};

// ========================================
// BUSINESS DETAILS
// ========================================

const businessDetails = (req, res) => {
  const { IdentificationCode } = req.body;

  return res.status(200).json({
    status: "true",
    data: "Details found.",
    businessIdentificationCode: IdentificationCode,
    businessName: "Nikhil Enterprise",
    businessOwnerName: "Nikhil Nishad",
    mobile: "9819631954",
    businessStatus: "IN COMPLETE",
    isKycOfficer: 0,
    companyType: 2,
    businessServiceType: "2",
    balance: "0",
    resultMessage: "Details found.",
    resultCode: "200",
    resultStatus: "TXN",
  });
};

module.exports = {
  generateOtp,
  checkOtp,
  registerRetailer,
  businessDetails,
};