const express = require("express");
const organizationRouter = express.Router();
const organizationController = require("../Controller/organizationController.js");
organizationRouter.post("/newOrganizationDetail", organizationController.newOrganizationDetail);
organizationRouter.get("/getAllOrganization", organizationController.getAllOrganization);
organizationRouter.get("/getOrganizationById/:id", organizationController.getOrganizationById);

module.exports = organizationRouter;
