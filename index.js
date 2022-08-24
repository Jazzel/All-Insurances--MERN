const express = require("express");

const mongoose = require("mongoose");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: false }));

app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
