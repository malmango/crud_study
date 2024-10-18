import express from "express";
import { Router } from "express";
import * as controller from "../controller/homeController.js";

const router = express.Router();

router.get("/", controller.getBoardList);

export default router;
