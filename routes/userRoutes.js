import express from "express";
const router = express.Router();

import userController from "../controllers/userController.js";

router.get("/", userController.getUsers);

router.post("/", userController.createUser);

export default router;
