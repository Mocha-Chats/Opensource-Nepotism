// assets/js/fetch-data.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Testing to see if it's called twice")
    fetch('https://api.sheety.co/a41c4d15eebf5e9221603a4f7d317c3a/opensourceNepo/sheet1')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const table = document.getElementById('table');
            const rows = data.sheet1;

            rows.forEach(row => {
                const tr = document.createElement('tr');
                Object.values(row).forEach(value => {
                        const td = document.createElement('td');
                        td.textContent = value;
                        tr.appendChild(td);
                });
                table.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
