"use strict";
function getSingleHTMLElement(element) {
    return document.querySelector(element); // getting element from the DOM
}
;
const form = getSingleHTMLElement('.form');
const task = getSingleHTMLElement('.collections');
