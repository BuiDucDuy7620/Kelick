const express = require("express");
const attendanceRouter = express.Router();
const attendanceController = require("../Controller/attendanceController.js");
attendanceRouter.post("/newAttendance", attendanceController.newAttendance);
attendanceRouter.get("/getAllAttendance", attendanceController.getAllAttendance);
attendanceRouter.get("/getAttendanceById/:id", attendanceController.getAttendanceById);
attendanceRouter.put("/updateAttendanceById/:id", attendanceController.updateAttendanceById);
attendanceRouter.delete("/deleteAttendanceById/:id", attendanceController.deleteAttendanceById);

module.exports = attendanceRouter;
