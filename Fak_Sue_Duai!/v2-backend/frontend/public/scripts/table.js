import { createItem, deleteItem, filterItem, getItems } from "./api.js";

/** @typedef {import("./config.js").Item} Item */
/** @typedef {import("./config.js").ItemPayload} ItemPayload */

function drawTable(items) {
  /** @type {HTMLTableSectionElement} */
  const table = document.getElementById("main-table-body");

  table.innerHTML = "";

  if (items.length === 0) {
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.colSpan = 4;
    cell.innerText = "No items found";
    return;
  }

  for (const item of items) {
    const row = table.insertRow();
    row.insertCell().innerText = item.item;
    row.insertCell().innerText = item.name;
    row.insertCell().innerText = item.price;

    const button = document.createElement("button");
    button.addEventListener("click", () => handleDelete(item._id));
    button.innerText = "ลบ";

    row.insertCell().appendChild(button);
  }
}

export async function fetchAndDrawTable() {
  const items = await getItems();
  drawTable(items);
}

export async function handleDelete(id) {
  await deleteItem(id);
  await fetchAndDrawTable();
}

export async function handleCreateItem() {
  /** @type {HTMLInputElement} */
  const itemToAdd = document.getElementById("item-to-add");

  /** @type {HTMLSelectElement} */
  const nameToAdd = document.getElementById("name-to-add");

  /** @type {HTMLInputElement} */
  const priceToAdd = document.getElementById("price-to-add");

  const payload = {
    item: itemToAdd.value,
    name: nameToAdd.value,
    price: priceToAdd.value,
  };

  await createItem(payload);
  await fetchAndDrawTable();

  itemToAdd.value = "";
  nameToAdd.value = "0";
  priceToAdd.value = "";
}

export async function handleFilterItem() {
  const name = document.getElementById("filter-name").value;
  
  try {
    const filteredItems = await filterItem(name);
    drawTable(filteredItems);
  } catch (error) {
    console.error("Error filtering items:", error);
  }
}
