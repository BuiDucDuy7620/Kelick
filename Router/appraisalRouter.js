const express = require("express");
const appraisalRouter = express.Router();
const appraisalController = require("../Controller/appraisalController.js");
appraisalRouter.post("/newAppraisal", appraisalController.newAppraisal);
appraisalRouter.get("/getAllAppraisal", appraisalController.getAllAppraisal);
appraisalRouter.get("/getAppraisalById/:id", appraisalController.getAppraisalById);
appraisalRouter.put("/updateAppraisalById/:id", appraisalController.updateAppraisalById);
appraisalRouter.delete("/deleteAppraisalById/:id", appraisalController.deleteAppraisalById);


appraisalRouter.post("/newAppraisalTemplate", appraisalController.newAppraisalTemplate);
appraisalRouter.get("/getAppraisalTemplate", appraisalController.getAppraisalTemplate);
appraisalRouter.get("/getAppraisalTemplateById/:id", appraisalController.getAppraisalTemplateById);
appraisalRouter.put("/updateAppraisalTemplateById/:id", appraisalController.updateAppraisalTemplateById);
appraisalRouter.delete("/deleteAppraisalTemplateById/:id", appraisalController.deleteAppraisalTemplateById);


module.exports = appraisalRouter;
