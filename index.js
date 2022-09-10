const express = require("express");

const app = express();
const port = 3000; // Port where app will run

// Creating an Endpoint on get method
app.get("", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});