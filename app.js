"use strict";
function getSingleHTMLElement(element) {
    return document.querySelector(element); // getting element from the DOM
}
;
function createHTMLElement(ele) {
    return document.createElement(ele);
}
const form = getSingleHTMLElement('.form');
const tasklist = getSingleHTMLElement('.collections');
const clearTaskBTN = getSingleHTMLElement('.cleartask');
const filter = getSingleHTMLElement('#filter');
const taskInput = getSingleHTMLElement('#task');
// Load all events function
loadAllEvent();
// Events Function
function loadAllEvent() {
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', addtask);
}
function addtask(e) {
    const taskValue = (taskInput.value).trim();
    if (taskValue === '') {
        return alert('This is empty taskInput');
    }
    // Create HTML element
    const li = createHTMLElement('li');
    const liValue = document.createTextNode(taskValue);
    // Appending Elements
    li.classList.add('collection-item');
    li.appendChild(liValue);
    tasklist.appendChild(li);
    // Clear
    taskInput.value = '';
    e.preventDefault();
}
