const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "Javed") {
    req.user = { name: "Javed", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
  console.log("authorize");
  next();
};

module.exports = authorize;
