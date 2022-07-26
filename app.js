"use strict";
const form = getSingleHTMLElement('.form');
const tasklist = getSingleHTMLElement('.collections');
const clearTaskBTN = getSingleHTMLElement('.cleartask');
const filter = getSingleHTMLElement('#filter');
const taskInput = getSingleHTMLElement('#task');
// Load all events function
loadAllEvent();
// Events Function
function loadAllEvent() {
    document.addEventListener('DOMContentLoaded', loadLocalStorage);
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', addTask);
    tasklist === null || tasklist === void 0 ? void 0 : tasklist.addEventListener('click', removeTask);
    clearTaskBTN === null || clearTaskBTN === void 0 ? void 0 : clearTaskBTN.addEventListener('click', clearTask);
    filter === null || filter === void 0 ? void 0 : filter.addEventListener('keyup', filterTask);
}
;
// Add Function
function addTask(e) {
    const taskValue = (taskInput.value).trim();
    if (taskValue === '') {
        e.preventDefault();
        return console.log('this is empty string');
    }
    // Create HTML element
    // 
    const li = createHTMLElement('li');
    const liValue = document.createTextNode(taskValue);
    // 
    const anchor = createHTMLElement('a');
    // Appending Elements
    li.classList.add('collection-item');
    anchor.classList.add('delete-item', 'secondary-content');
    anchor.innerHTML = `<i  class="fa fa-remove"></i>`;
    // 
    li.appendChild(liValue);
    li.appendChild(anchor);
    tasklist.appendChild(li);
    addToLocalStorage(taskValue);
    // Clear
    taskInput.value = '';
    e.preventDefault();
}
;
// Remove Task
function removeTask(e) {
    console.group('%cBeginning of  function', ' background-color: green; padding: 0.5em, 1em');
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log(`Conditions met 
        item removed`);
        removefromLS(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
    }
}
//Clear Task
function clearTask(e) {
    while (tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }
}
// Filter Task
function filterTask(e) {
    const text = e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll('.collection-item').forEach((task) => {
        var _a;
        const textV = (_a = task.firstChild) === null || _a === void 0 ? void 0 : _a.textContent;
        if ((textV === null || textV === void 0 ? void 0 : textV.toLocaleLowerCase().indexOf(text)) != -1) {
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    });
}
function getSingleHTMLElement(element) {
    return document.querySelector(element); // getting element from the DOM
}
;
function createHTMLElement(ele) {
    return document.createElement(ele);
}
function addToLocalStorage(value) {
    const tasks = (!localStorage.getItem('tasks')) ? [] : JSON.parse(localStorage.getItem('tasks'));
    tasks.push(value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadLocalStorage() {
    console.log('Loaded local storage');
    const tasks = (!localStorage.getItem('tasks')) ? [] : JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => {
        // Create HTML element
        // 
        const li = createHTMLElement('li');
        const liValue = document.createTextNode(task);
        const anchor = createHTMLElement('a');
        // Appending Elements
        li.classList.add('collection-item');
        anchor.classList.add('delete-item', 'secondary-content');
        anchor.innerHTML = `<i  class="fa fa-remove"></i>`;
        // 
        li.appendChild(liValue);
        li.appendChild(anchor);
        tasklist.appendChild(li);
    });
}
function removefromLS(element) {
    const tasks = (!localStorage.getItem('tasks')) ? [] : JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task, index) => {
        if (element.textContent === task) {
            console.log(task, index);
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
