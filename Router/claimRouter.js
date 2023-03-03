const express = require("express");
const claimRouter = express.Router();
const claimController = require("../Controller/claimController.js");
claimRouter.post("/newClaim", claimController.newClaim);
claimRouter.get("/getAllClaim", claimController.getAllClaim);
claimRouter.get("/getClaimById/:id", claimController.getClaimById);
claimRouter.put("/updateClaimById/:id", claimController.updateClaimById);
claimRouter.delete("/deleteClaimById/:id", claimController.deleteClaimById);

module.exports = claimRouter;
