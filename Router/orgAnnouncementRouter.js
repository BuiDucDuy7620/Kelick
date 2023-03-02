const express = require("express");
const orgAnnouncementRouter = express.Router();
const OrgAnnouncementController = require("../Controller/OrgAnnouncementController.js");
orgAnnouncementRouter.post("/newOrgAnnouncement", OrgAnnouncementController.newOrgAnnouncement);
orgAnnouncementRouter.get("/getAllOrgAnnouncement", OrgAnnouncementController.getAllOrgAnnouncement);
orgAnnouncementRouter.get("/getOrgAnnouncementById/:id", OrgAnnouncementController.getOrgAnnouncementById);
orgAnnouncementRouter.put("/updateOrgAnnouncementById/:id", OrgAnnouncementController.updateOrgAnnouncementById);
orgAnnouncementRouter.delete("/deleteOrgAnnouncementById/:id", OrgAnnouncementController.deleteOrgAnnouncementById);
module.exports = orgAnnouncementRouter;
