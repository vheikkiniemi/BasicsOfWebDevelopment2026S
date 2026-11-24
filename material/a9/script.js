const form = document.querySelector('#entry-form');
const tableRows = document.querySelector('#table-rows');

// Load saved rows
const savedRows = JSON.parse(localStorage.getItem('tableRows') || '[]');

savedRows.forEach(data => addRow(data));

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const rowData = {};

    for (const [key, value] of formData.entries()) {
        rowData[key] = value;
    }

    addRow(rowData);

    // Save to localStorage
    savedRows.push(rowData);
    localStorage.setItem('tableRows', JSON.stringify(savedRows));

    form.reset();
    form.querySelector('input').focus();
});

function addRow(data) {
    const row = document.createElement('tr');

    const columns = tableRows.closest('table')
        .querySelectorAll('thead th[data-field]');

    for (const column of columns) {
        const fieldName = column.dataset.field;

        const cell = document.createElement('td');
        cell.textContent = data[fieldName] || '';

        row.appendChild(cell);
    }

    tableRows.appendChild(row);
}

document.querySelector('#clear-table').addEventListener('click', () => {
    localStorage.removeItem('tableRows');
    tableRows.innerHTML = '';
});