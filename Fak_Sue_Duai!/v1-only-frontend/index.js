const purchaseData = {};

function updateTotals() {
    const totalsList = document.getElementById('totals-list');
    totalsList.innerHTML = '';

    let grandTotal = 0;

    for (const [name, total] of Object.entries(purchaseData)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${name}: ${total} บาท`;
        totalsList.appendChild(listItem);

        grandTotal += total;
    }

    document.getElementById('grand-total').textContent = `รวมทั้งหมด: ${grandTotal} บาท`;
}

document.getElementById('add-newrow').addEventListener('click', function() {
    const item = document.getElementById('item-to-add').value;
    const name = document.getElementById('name-to-add').value;
    const price = parseFloat(document.getElementById('price-to-add').value);

    if (item && name && price) {
        const tableBody = document.querySelector('#main-table tbody');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${item}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td><button class="delete-row">ลบ</button></td>
        `;

        tableBody.appendChild(newRow);

        if (purchaseData[name]) {
            purchaseData[name] += price;
        } else {
            purchaseData[name] = price;
        }

        updateTotals();

        document.getElementById('item-to-add').value = '';
        document.getElementById('price-to-add').value = '';

        newRow.querySelector('.delete-row').addEventListener('click', deleteRow);
    }
});

function deleteRow(event) {
    const row = event.target.closest('tr');
    const name = row.children[1].textContent;
    const price = parseFloat(row.children[2].textContent);

    purchaseData[name] -= price;
    if (purchaseData[name] <= 0) {
        delete purchaseData[name];
    }

    row.remove();

    updateTotals();
}

document.addEventListener('DOMContentLoaded', function() {
    const existingRows = document.querySelectorAll('#main-table tbody tr');

    existingRows.forEach(row => {
        const name = row.children[1].textContent;
        const price = parseFloat(row.children[2].textContent);

        if (purchaseData[name]) {
            purchaseData[name] += price;
        } else {
            purchaseData[name] = price;
        }

        row.querySelector('.delete-row').addEventListener('click', deleteRow);
    });

    updateTotals();
});
