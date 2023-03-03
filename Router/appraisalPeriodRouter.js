const express = require("express");
const leaveRouter = express.Router();
const appraisalPeriodController = require("../Controller/appraisalPeriodController.js");
leaveRouter.post("/newAppraisalPeriod", appraisalPeriodController.newAppraisalPeriod);
leaveRouter.get("/getAllAppraisalPeriod", appraisalPeriodController.getAllAppraisalPeriod);
leaveRouter.get("/getAppraisalPeriodById/:id", appraisalPeriodController.getAppraisalPeriodById);
leaveRouter.put("/updateAppraisalPeriodById/:id", appraisalPeriodController.updateAppraisalPeriodById);
leaveRouter.delete("/deleteAppraisalPeriodById/:id", appraisalPeriodController.deleteAppraisalPeriodById);

module.exports = leaveRouter;
