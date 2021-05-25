"use strict";
var Game = {
    score: 0,
    time: 2,
};
var startScreenElement = document.querySelector('#start-screen');
var buttonElement = startScreenElement.querySelector('button');
buttonElement.addEventListener('click', function () {
    startScreenElement.style.display = 'none';
});
var squareElement = document.querySelector('#square');
