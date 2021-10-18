import { button, boxes, output, feedback } from "./variables.js"; 
import colorGenerator from "./generatecolor.js";
import winOrLose from "./reset.js";

const startGame = () => {
    boxes.forEach(box => {
        box.addEventListener('click', winOrLose)
    });  

    button.removeEventListener('mouseover', () => button.style.backgroundColor = 'rgb(0, 172, 172)'); 
    button.removeEventListener('mouseleave', () => button.style.backgroundColor = 'rgb(0, 124, 124)'); 
    feedback.textContent = 'Guess the right color in 3 tries!';
    output.style.color = 'aliceblue';
    output.style.transition = '0.8s';
    boxes.forEach(element => {
        element.style.backgroundColor = colorGenerator();
        element.style.transition = '1s';
    });

    let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
 
    output.textContent = boxes[randomNumber].style.backgroundColor;
};

export default startGame;