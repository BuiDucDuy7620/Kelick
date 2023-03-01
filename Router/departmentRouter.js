const express = require("express");
const departmentRouter = express.Router();
const departmentController = require("../Controller/departmentController.js");
departmentRouter.post("/newDepartment", departmentController.newDepartment);
departmentRouter.get("/getAllDepartment", departmentController.getAllDepartment);
departmentRouter.get("/getDepartmentById/:id", departmentController.getDepartmentById);

module.exports = departmentRouter;
