const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/db");
const cors = require("cors");
const routes = require("./routes/user");

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());

//cors
app.use(cors());

//routes defined
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
