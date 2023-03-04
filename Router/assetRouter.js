const express = require("express");
const assetRouter = express.Router();
const assetController = require("../Controller/assetController.js");
assetRouter.post("/newAsset", assetController.newAsset);
assetRouter.get("/getAllAsset", assetController.getAllAsset);
assetRouter.get("/getAssetById/:id", assetController.getAssetById);
assetRouter.put("/updateAssetById/:id", assetController.updateAssetById);
assetRouter.delete("/deleteAssetById/:id", assetController.deleteAssetById);
assetRouter.get("/getAssetByName/", assetController.getAssetByName);

module.exports = assetRouter;
