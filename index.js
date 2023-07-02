const length = 10;
const tbody = document.querySelector('table > tbody');
let counter = 1;

Array.from({length}, () => {
    const tr = document.createElement('tr');
    tr.classList.add('line');

    Array.from({length}, () => {
    const td = document.createElement('td');
    td.classList.add('box');
    td.innerText = counter;
    counter++;
    tr.appendChild(td);
    });
    
    tbody.appendChild(tr);
});