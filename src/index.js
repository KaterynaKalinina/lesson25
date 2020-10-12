import { last } from "lodash";
import { drawData } from "./utils/dom";

const apiUrl = 'http://localhost:3000';

const addBtn = document.getElementById('add'),
    deleteBtn = document.getElementById('delete'),
    wrapper = document.getElementById('data');



fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => drawData(data, wrapper));

wrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        fetch(`${apiUrl}/delete?id=${e.target.dataset.userId}`).then((response) => response.json()).then((data) => drawData(data, wrapper));
    }
});

addBtn.addEventListener('click', () => {
    fetch(`${apiUrl}/add`).then((response) => response.json()).then((data) => drawData(data, wrapper));
})

deleteBtn.addEventListener('click', () => {
    fetch(`${apiUrl}/delete`).then((response) => response.json()).then((data) => drawData(data, wrapper));
})

console.log(last([1,2,3]));
console.log("Hello");