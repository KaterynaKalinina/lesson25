import { curry, curryRight, last } from "lodash";
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

const later = (value,cb, time = 1000) => setTimeout(() => cb(value), time);
const promisifyLater = (value, time = 1000) => 
    new Promise((res) => later(value, res, time));

const firstTask = (value) => console.log(`First: ${value}`);
const secondTask = (value) => console.log(`Second: ${value}`);

const half = (value) => value / 2;
const sqrt = (value) => Math.sqrt(value);

const pr = promisifyLater(200);
const halfPr = pr.then(half)
                    .then(half)
                    .then(curryRight(Math.pow)(2))
                    .then(half)
                    .then(half)
                    .then(console.log);


