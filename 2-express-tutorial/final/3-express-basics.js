const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all(/.*/, (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
