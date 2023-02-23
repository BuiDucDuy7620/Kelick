const express = require("express");
const solutionsRouter = express.Router();
const solutionsController = require("../Controller/solutionsController.js");
solutionsRouter.post("/createPostDetailListSolutions", solutionsController.createPostDetailListSolutions);
solutionsRouter.get("/getListPostByType/:type", solutionsController.getListPostByType);
solutionsRouter.get("/getListPostById/:id", solutionsController.getListPostById);
solutionsRouter.get("/getAllListPost", solutionsController.getAllListPost);

module.exports = solutionsRouter;
