const express = require("express");
const eventCalendarRouter = express.Router();
const eventCalendarController = require("../Controller/eventCalendarController.js");
eventCalendarRouter.post("/createEventCalendar", eventCalendarController.createEventCalendar);
eventCalendarRouter.get("/getAllEventCalendar", eventCalendarController.getAllEventCalendar);
eventCalendarRouter.get("/getEventCalendarById/:id", eventCalendarController.getEventCalendarById);

module.exports = eventCalendarRouter;
