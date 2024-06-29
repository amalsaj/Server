const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/db");
const cors = require("cors")
const routes = require("./routes/user")

// Connect to MongoDB
connectDB();

// Set up body parser middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());

//cors
app.use(cors())

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
