const express = require("express");
const UserRouter = express.Router();
const UserController = require("../Controller/userController.js");
// const MiddlewareVerify = require("../middleware/verify.js");
UserRouter.get("/", UserController.getAllUsers);
// UserRouter.get("/:id", MiddlewareVerify, UserController.getUserById);
// UserRouter.get("/get/count", MiddlewareVerify, UserController.getTotalsUsers);
UserRouter.post("/register", UserController.register);
UserRouter.post("/login", UserController.login);
UserRouter.post("/updatePassword", UserController.updateUser);

UserRouter.post("/forgetPassword", UserController.forgetPassword);
// UserRouter.post("/resetPassword", UserController.resetPassword);



module.exports = UserRouter;
