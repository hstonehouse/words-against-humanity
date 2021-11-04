const express = require("express");
const router = express.Router();
const colorFormat = require("chalk");
router.use((req, res, next) => {
  let formatted_date = Date();
  let method = req.method;
  let url = req.url;
  let status;
  if (res.statusCode !== 200) {
    status = colorFormat.red(res.statusCode);
  } else {
    status = colorFormat.green(res.statusCode);
  }
  let log = `[${colorFormat.red(formatted_date)}] ${method}:${url} ${status}`;
  console.log(log);
  next();
});
module.exports = router;
