"use strict";

const output = document.querySelector('.rgb-to-guess');
const boxes = document.querySelectorAll('.box');
const button = document.querySelector('button');
const feedback = document.querySelector('.feedback');

const createRandomColor = () => {
    let createrandomNum = Math.floor(Math.random() * (255 - 1) + 1);     
    return createrandomNum;
};

const colorGenerator = () => {
    let red = createRandomColor();
    let green = createRandomColor();
    let blue = createRandomColor();

    let newColor = `rgb(${red}, ${green}, ${blue})`;
    return newColor;
};

const startGame = () => {
    boxes.forEach(box => {
        box.addEventListener('click', winOrLose)
    });  

    feedback.textContent = 'Guess the right color!';
    output.style.color = 'aliceblue';
    output.style.transition = '0.8s';
    boxes.forEach(element => {
    element.style.backgroundColor = colorGenerator();
    element.style.transition = '1s';
    });

    let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
 
    output.textContent = boxes[randomNumber].style.backgroundColor;
};

let count = 1;
const winOrLose = event => {
    if (event.target.style.backgroundColor == output.textContent) {
        feedback.textContent = `Winner! You needed ${count} tries to get the right color!`;
        output.style.color = output.textContent;
        button.removeEventListener('click', startGame);
        output.style.transition = '0.8s';
        boxes.forEach(element => element.style.visibility = 'visible');
        boxes.forEach(box => {
        box.style.backgroundColor = output.textContent;
        box.style.transition = '1s';
        });
        boxes.forEach(box => {
            box.removeEventListener('click', winOrLose);
        });
        setTimeout(() => {
            feedback.textContent = 'Start a new game!';
            button.addEventListener('click', startGame);
        }, 3000);
        count = 1;
    } else {
        feedback.textContent = 'Not yet! Try again!'; 
        event.target.style.visibility = 'hidden';
        event.target.style.transition = '0.2s'
        count++;
    };
};

button.addEventListener('click', startGame);