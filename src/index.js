import Axios from "axios";
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
    Axios.get(`${apiUrl}/add`)
        .then((response) => drawData(response.data, wrapper));
});

deleteBtn.addEventListener('click', () => {
    Axios.get(`${apiUrl}/delete`)
        .then((response) => drawData(response.data, wrapper));
});

