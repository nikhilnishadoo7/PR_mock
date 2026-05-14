const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const retailerRoutes = require("./routes/retailerRoutes");
const apiHeaderMiddleware = require("./middleware/apiHeaderMiddleware");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(apiHeaderMiddleware);

app.use("/", retailerRoutes);

const PORT = 7118;

app.listen(PORT, () => {
  console.log(`Mock API running on port ${PORT}`);
});