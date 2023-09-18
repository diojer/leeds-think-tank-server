const express = require("express");
const router = express.Router();
const { Reports } = require("../models");

router.get("/", async (req, res) => {
  const listOfReports = await Reports.findAll();
  res.json(listOfReports);
});

router.post("/", async (req, res) => {
  const report = req.body;
  await Reports.create(report);
  res.send("Report Uploaded");
});

module.exports = router;
