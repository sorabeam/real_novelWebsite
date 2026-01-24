import express from "express";

import * as itemController from "../controller/itemController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error("ITEMS ERROR:", err);
    res.status(500).json({
      message: "server error",
      error: err.message,
      stack: err.stack
    });
  }
});

export default router;