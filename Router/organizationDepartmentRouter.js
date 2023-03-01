const express = require("express");
const organizationDepartmentRouter = express.Router();
const organizationDepartmentController = require("../Controller/organizationDepartmentController.js");
organizationDepartmentRouter.post("/newOrganizationDepartment", organizationDepartmentController.newOrganizationDepartment);
organizationDepartmentRouter.get("/getAllOrganizationDepartment", organizationDepartmentController.getAllOrganizationDepartment);
organizationDepartmentRouter.get("/getOrganizationDepartmentById/:id", organizationDepartmentController.getOrganizationDepartmentById);

module.exports = organizationDepartmentRouter;
