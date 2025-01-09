import { MEMBERS } from "./config.js";

export function populateMembers() {
  /** @type {HTMLUListElement} */
  const memberList = document.getElementById("member-list");

  /** @type {HTMLSelectElement} */
  const nameSelect = document.getElementById("name-to-add");

  /** @type {HTMLSelectElement} */
  const filterSelect = document.getElementById("filter-name");

  if (!memberList || !nameSelect || !filterSelect) {
    console.error("One or more HTML elements are missing.");
    return;
  }

  // Clear existing options and list items
  memberList.innerHTML = "";
  nameSelect.innerHTML = "";
  filterSelect.innerHTML = "";

  // Add default filter option
  const allOption = document.createElement("option");
  allOption.value = "-- ทั้งหมด --";
  allOption.textContent = "-- ทั้งหมด --";
  filterSelect.appendChild(allOption);

  // Add member options
  MEMBERS.forEach((member) => {
    // Member list
    const li = document.createElement("li");
    li.textContent = member;
    memberList.appendChild(li);

    // Name select dropdown
    const nameOption = document.createElement("option");
    nameOption.value = member;
    nameOption.textContent = member;
    nameSelect.appendChild(nameOption);

    // Filter dropdown
    const filterOption = document.createElement("option");
    filterOption.value = member;
    filterOption.textContent = member;
    filterSelect.appendChild(filterOption);
  });
}

// Ensure this runs when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  populateMembers();
});
