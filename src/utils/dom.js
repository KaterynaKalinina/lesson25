export const createDataElement = (element) => `<div data-user-id="${element.id}">
    <span>ID: ${element.id}</span>
    <span>Name: ${element.name}</span>
    <span data-user-id="${element.id}" class="delete">X</span>
    </div>`;

export const createData = (data) =>
    data.map((element) => createDataElement(element)).join('');

export const drawData = (data, wrapper = document.body) =>
    (wrapper.innerHTML = createData(data));

