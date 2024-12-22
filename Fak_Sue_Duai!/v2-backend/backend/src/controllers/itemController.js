import { itemFromObject } from "../models/itemModel.js";
import { items } from "../data/items.js";
import { Console } from "console";

/** @type {import("express").RequestHandler} */
export const createItem = async (req, res) => {
  try {
    const item = itemFromObject(req.body);
    items.push(item);
    res.status(200).json({ message: "OK" });
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: "Bad Request" });
  }
};

/** @type {import("express").RequestHandler} */
export const getItems = async (req, res) => {
  res.status(200).json(items);
};

/** @type {import("express").RequestHandler} */
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const index = items.findIndex(item => item._id === parseInt(id, 10));
    
    if (index === -1) {
      return res.status(404).json({ error: "Item not found" });
    }

    items.splice(index, 1);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/** @type {import("express").RequestHandler} */
export const filterItems = async (req, res) => {
  try {
    const filter = req.body.filter; // Get the filter value from the request body

    // Return all items if the filter is "-- ทั้งหมด --"
    if (filter === "-- ทั้งหมด --") {
      return res.status(200).json(items);
    }

    // Otherwise, filter items based on the filter value
    const filteredItems = items.filter(item => item.name === filter);

    res.status(200).json(filteredItems);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

