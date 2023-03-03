const express = require("express");
const payrollListRouter = express.Router();
const payrollListController = require("../Controller/payrollListController.js");
payrollListRouter.post("/newPayrollList", payrollListController.newPayrollList);
payrollListRouter.get("/getAllPayrollList", payrollListController.getAllPayrollList);
payrollListRouter.get("/getPayrollListById/:id", payrollListController.getPayrollListById);
payrollListRouter.put("/updatePayrollListById/:id", payrollListController.updatePayrollListById);
payrollListRouter.delete("/deletePayrollListById/:id", payrollListController.deletePayrollListById);
payrollListRouter.get("/exportPDFPayrollList", payrollListController.exportPDFPayrollList);

module.exports = payrollListRouter;
