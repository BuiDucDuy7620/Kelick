const express = require("express");
const organizationRouter = express.Router();
const organizationController = require("../Controller/organizationController.js");
organizationRouter.post("/createEventCalendar", organizationController.createEventCalendar);
organizationRouter.get("/getAllEventCalendar", organizationController.getAllEventCalendar);
organizationRouter.get("/getEventCalendarById/:id", organizationController.getEventCalendarById);

module.exports = organizationRouter;
