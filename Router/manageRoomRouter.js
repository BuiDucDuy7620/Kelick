const express = require("express");
const manageRoomRouter = express.Router();
const manageRoomController = require("../Controller/manageRoomController.js");
manageRoomRouter.post("/newManageRoom", manageRoomController.newManageRoom);
manageRoomRouter.get("/getAllManageRoom", manageRoomController.getAllManageRoom);
manageRoomRouter.get("/getManageRoomById/:id", manageRoomController.getManageRoomById);
manageRoomRouter.put("/updateManageRoomById/:id", manageRoomController.updateManageRoomById);
manageRoomRouter.delete("/deleteManageRoomById/:id", manageRoomController.deleteManageRoomById);

module.exports = manageRoomRouter;
