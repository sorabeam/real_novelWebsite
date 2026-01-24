import {Item,Rdata} from "../model/Item.js";

// GET
export async function getItems(req ,res) {
  console.log(req);
  try {
    const items = await Item.find().lean(); // safe here
    console.log(Item);
    return res.json(items);  
  }catch (err) {
    console.error("getItems error:", err);
    return res.status(500).json({ message: "server error" });
  }
}

export async function getRdata(req ,res) {
  try {
    const items = await Rdata.find().lean(); // safe here
    return res.json(items);  
  }catch (err) {
    console.error("getRdata error:", err);
    return res.status(500).json({ message: "server error" });
  }
}

export async function deleteRdata(req, res) {
  try {
    const item = await Rdata.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Rdata not found" });
    }
    res.json({ message: "Deleted", item });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
}

export async function AddReadingNovel(req, res) {
  try {
    const item = new Rdata(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
