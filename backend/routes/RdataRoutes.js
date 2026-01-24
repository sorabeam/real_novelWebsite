import express from "express";

import * as itemController from "../controller/itemController.js";

const router = express.Router();

router.get("/", itemController.getRdata);
router.post("/", itemController.AddReadingNovel);
router.delete("/:id", itemController.deleteRdata);

export default router;