import Axios from "axios";
import { curry, curryRight, last } from "lodash";
import { drawData } from "./utils/dom";

const apiUrl = 'http://localhost:3000';

const addBtn = document.getElementById('add'),
    deleteBtn = document.getElementById('delete'),
    wrapper = document.getElementById('data');



Axios.get(apiUrl).then((response) => drawData(response.data, wrapper));

wrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        Axios.get(`${apiUrl}/delete?id=${e.target.dataset.userId}`)
            .then((response) => drawData(response.data, wrapper));
    }
});

addBtn.addEventListener('click', () => {
    Axios.get(`${apiUrl}/add`).then((response) => drawData(response.data, wrapper));
})

deleteBtn.addEventListener('click', () => {
    Axios.get(`${apiUrl}/delete`).then((response) => drawData(response.data, wrapper));
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


