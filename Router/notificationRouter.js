const express = require("express");
const NotificationRouter = express.Router();
const notificationController = require("../Controller/notificationController.js");
// const MiddlewareVerify = require("../Middleware/verify.js");

NotificationRouter.get("/getAllNotification", notificationController.getAllNotification);
NotificationRouter.get("/getNotificationById/:id", notificationController.getNotificationById);
NotificationRouter.get("/getNotificationByDate",  notificationController.getNotificationByDate);

NotificationRouter.post("/newNotification", notificationController.newNotification);
// NotificationRouter.put("/:id", notificationController.updateOrderById);

module.exports = NotificationRouter;
