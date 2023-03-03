const express = require("express");
const interviewHiringRouter = express.Router();
const interviewHiringController = require("../Controller/interviewHiringController.js");
interviewHiringRouter.post("/newIterviewHiring", interviewHiringController.newIterviewHiring);
interviewHiringRouter.get("/getAllIterviewHiring", interviewHiringController.getAllIterviewHiring);
interviewHiringRouter.get("/getIterviewHiringById/:id", interviewHiringController.getIterviewHiringById);
interviewHiringRouter.put("/updateIterviewHiringById/:id", interviewHiringController.updateIterviewHiringById);
interviewHiringRouter.delete("/deleteIterviewHiringById/:id", interviewHiringController.deleteIterviewHiringById);

module.exports = interviewHiringRouter;
