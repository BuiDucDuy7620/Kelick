const express = require("express");
const interviewRole1Router = express.Router();
const interviewRole1Controller = require("../Controller/interviewRole1Controller.js");
interviewRole1Router.post("/newIterviewRole1", interviewRole1Controller.newIterviewRole1);
interviewRole1Router.get("/getAllIterviewRole1", interviewRole1Controller.getAllIterviewRole1);
interviewRole1Router.get("/getIterviewRole1ById/:id", interviewRole1Controller.getIterviewRole1ById);
interviewRole1Router.put("/updateIterviewRole1ById/:id", interviewRole1Controller.updateIterviewRole1ById);
interviewRole1Router.delete("/deleteIterviewRole1ById/:id", interviewRole1Controller.deleteIterviewRole1ById);

module.exports = interviewRole1Router;
