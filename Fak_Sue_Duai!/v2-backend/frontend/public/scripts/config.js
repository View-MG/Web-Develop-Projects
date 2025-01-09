/**
 * @typedef {Object} Item
 * @property {string} _id
 * @property {string} item
 * @property {string} name
 * @property {number} price
 */

/** @typedef {Omit<Item, "_id">} ItemPayload */

export const BACKEND_URL = "http://52.64.186.202:3222";

export const MEMBERS = [
  "Chris Hemsworth",
  "Mark Ruffalo",
  "Chris Evans",
  "Scarlett Johansson",
  "Tom Hiddleston"
];
