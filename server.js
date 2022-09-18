require("dotenv").config({ path: "./configs/.env" });
const express = require("express");

const PORT = process.env.PORT || 7000;

const connectDB = require("./configs/db");
const route = require("./routes/user.route");
const app = express();
app.use(express.json());
app.use(route);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  connectDB();
});
