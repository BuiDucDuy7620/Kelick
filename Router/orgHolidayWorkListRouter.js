const express = require("express");
const orgHolidayWorkListRouter = express.Router();
const orgHolidayWorkListController = require("../Controller/orgHolidayWorkListController.js");
orgHolidayWorkListRouter.post("/newOrgHolidayWorkList", orgHolidayWorkListController.newOrgHolidayWorkList);
orgHolidayWorkListRouter.get("/getAllOrgHolidayWorkList", orgHolidayWorkListController.getAllOrgHolidayWorkList);
orgHolidayWorkListRouter.get("/getOrgHolidayWorkListById/:id", orgHolidayWorkListController.getOrgHolidayWorkListById);
orgHolidayWorkListRouter.put("/updateOrgHolidayWorkListById/:id", orgHolidayWorkListController.updateOrgHolidayWorkListById);
orgHolidayWorkListRouter.delete("/deleteOrgHolidayWorkListById/:id", orgHolidayWorkListController.deleteOrgHolidayWorkListById);

module.exports = orgHolidayWorkListRouter;
