const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, "./2-express-tutorial/navbar-app/index.html")
//   );
//  adding to static assets
//  SSR
// });

app.all(/.*/, (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
