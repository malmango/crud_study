import express from "express";
import { Router } from "express";
import * as controller from "../controller/boardDetailController.js";

const router = express.Router();

router.get("/:bid", controller.getBoardDetail);

export default router;
