const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const db = require("./config/mongoose");
app.use(cors());

app.use(express.urlencoded());

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in connecting with server ${err}`);
  }
  console.log(`server is running on port ${port}`);
});
