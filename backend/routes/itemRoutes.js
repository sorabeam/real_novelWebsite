import express from "express";

import * as itemController from "../controller/itemController.js";

const router = express.Router();

router.get("/", itemController.getItems);

export default router;