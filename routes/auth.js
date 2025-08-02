const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.status(200).send({ success: true, msg: "Welcome" });
});

module.exports = router;
