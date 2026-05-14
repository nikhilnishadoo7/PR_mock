module.exports = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  const auth = req.headers["authorization"];

  if (!apiKey) {
    return res.status(401).json({
      resultCode: "401",
      resultStatus: "ERR",
      resultMessage: "Invalid x-api-key",
    });
  }

  if (!auth) {
    return res.status(401).json({
      resultCode: "401",
      resultStatus: "ERR",
      resultMessage: "Invalid authorization token",
    });
  }

  next();
};