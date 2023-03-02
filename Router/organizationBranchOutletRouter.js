const express = require("express");
const organizationBranchOutletRouter = express.Router();
const organizationBranchOutletController = require("../Controller/organizationBranchOutletController.js");
organizationBranchOutletRouter.post("/newOrganizationBranchOutlet", organizationBranchOutletController.newOrganizationBranchOutlet);
organizationBranchOutletRouter.get("/getAllOrganizationBranchOutlet", organizationBranchOutletController.getAllOrganizationBranchOutlet);
organizationBranchOutletRouter.get("/getOrganizationBranchOutletById/:id", organizationBranchOutletController.getOrganizationBranchOutletById);
organizationBranchOutletRouter.put("/updateOrganizationBranchOutletById/:id", organizationBranchOutletController.updateOrganizationBranchOutletById);
organizationBranchOutletRouter.delete("/deleteOrganizationBranchOutletById/:id", organizationBranchOutletController.deleteOrganizationBranchOutletById);

module.exports = organizationBranchOutletRouter;
