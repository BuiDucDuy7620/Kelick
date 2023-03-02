const express = require("express");
const organizationRouter = express.Router();
const organizationController = require("../Controller/organizationController.js");
organizationRouter.post("/newOrganizationDetail", organizationController.newOrganizationDetail);
organizationRouter.get("/getAllOrganization", organizationController.getAllOrganization);
organizationRouter.get("/getOrganizationById/:id", organizationController.getOrganizationById);

organizationRouter.get("/updateOrganizationById/:id", organizationController.updateOrganizationById);

organizationRouter.delete("/deleteOrganizationById/:id", organizationController.deleteOrganizationById);

module.exports = organizationRouter;
