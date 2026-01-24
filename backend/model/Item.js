import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    Image: { type: String, required: true },
    Url: { type: String, required: true },
    VImg: { type: String, required: true },
    Author: String,
    View: String,
    Notification: String
  }
);

const rDataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    Image: { type: String, required: true },
    Url: { type: String, required: true },
    VImg: { type: String, required: true },
    Author: String,
    View: String,
    Notification: String
  }
);

const Item =
  mongoose.models.Item ||
  mongoose.model("Item", itemSchema, "MockData");

const Rdata =
  mongoose.models.Rdata ||
  mongoose.model("Rdata", rDataSchema, "MockReading");

export {Item,Rdata};