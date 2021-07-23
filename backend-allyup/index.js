const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware");

const app = express();
app.use(cors());

app.use("/", authMiddleware);

app.listen(4000, () => console.log("The server is running at PORT 4000"));