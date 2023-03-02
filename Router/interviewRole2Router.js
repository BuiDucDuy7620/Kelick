const express = require("express");
const interviewRole2Router = express.Router();
const interviewRole2Controller = require("../Controller/interviewRole2Controller.js");
interviewRole2Router.post("/newIterviewRole2", interviewRole2Controller.newIterviewRole2);
interviewRole2Router.get("/getAllIterviewRole2", interviewRole2Controller.getAllIterviewRole2);
interviewRole2Router.get("/getIterviewRole2ById/:id", interviewRole2Controller.getIterviewRole2ById);
interviewRole2Router.put("/updateIterviewRole2ById/:id", interviewRole2Controller.updateIterviewRole2ById);
interviewRole2Router.delete("/deleteIterviewRole2ById/:id", interviewRole2Controller.deleteIterviewRole2ById);

module.exports = interviewRole2Router;
