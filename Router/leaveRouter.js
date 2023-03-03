const express = require("express");
const leaveRouter = express.Router();
const leaveController = require("../Controller/leaveController.js");
leaveRouter.post("/newLeave", leaveController.newLeave);
leaveRouter.get("/getAllLeave", leaveController.getAllLeave);
leaveRouter.get("/getLeaveById/:id", leaveController.getLeaveById);
leaveRouter.put("/updateLeaveById/:id", leaveController.updateLeaveById);
leaveRouter.delete("/deleteLeaveById/:id", leaveController.deleteLeaveById);

module.exports = leaveRouter;
