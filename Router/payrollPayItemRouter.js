const express = require("express");
const payrollPayItemRouter = express.Router();
const payrollPayItemController = require("../Controller/payrollPayItemController.js");
payrollPayItemRouter.post("/newPayrollPayItem", payrollPayItemController.newPayrollPayItem);
payrollPayItemRouter.get("/getAllPayrollPayItem", payrollPayItemController.getAllPayrollPayItem);
payrollPayItemRouter.get("/getPayrollPayItemById/:id", payrollPayItemController.getPayrollPayItemById);
payrollPayItemRouter.put("/updatePayrollPayItemById/:id", payrollPayItemController.updatePayrollPayItemById);
payrollPayItemRouter.delete("/deletePayrollPayItemById/:id", payrollPayItemController.deletePayrollPayItemById);

module.exports = payrollPayItemRouter;
