const express = require("express");
const shiftRouter = express.Router();
const shiftController = require("../Controller/shiftController.js");
shiftRouter.post("/newShift", shiftController.newShift);
shiftRouter.get("/getAllShift", shiftController.getAllShift);
shiftRouter.get("/getShiftById/:id", shiftController.getShiftById);
shiftRouter.put("/updateShiftById/:id", shiftController.updateShiftById);
shiftRouter.delete("/deleteShiftById/:id", shiftController.deleteShiftById);


shiftRouter.post("/newShiftTemplate", shiftController.newShiftTemplate);
shiftRouter.get("/getAllShiftTemplate", shiftController.getAllShiftTemplate);
shiftRouter.get("/getShiftTemplateById/:id", shiftController.getShiftTemplateById);
shiftRouter.put("/updateShiftTemplateById/:id", shiftController.updateShiftTemplateById);
shiftRouter.delete("/deleteShiftTemplateById/:id", shiftController.deleteShiftById);

module.exports = shiftRouter;
