const express = require("express");
const roomBookingRouter = express.Router();
const roomBookingController = require("../Controller/roomBookingController.js");
roomBookingRouter.post("/newRoomBooking", roomBookingController.newRoomBooking);
roomBookingRouter.get("/getAllRoomBooking", roomBookingController.getAllRoomBooking);
roomBookingRouter.get("/getRoomBookingById/:id", roomBookingController.getRoomBookingById);
roomBookingRouter.put("/updateRoomBookingById/:id", roomBookingController.updateRoomBookingById);
roomBookingRouter.delete("/deleteRoomBookingById/:id", roomBookingController.deleteRoomBookingById);

module.exports = roomBookingRouter;
