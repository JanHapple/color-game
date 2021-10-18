import { boxes, output, feedback, button } from "./variables.js"; 
import startGame from "./startgame.js";

let count = 1;

const winOrLose = event => {
    if (event.target.style.backgroundColor == output.textContent) {
        if (count == 1) {
            feedback.textContent = `Winner! You needed ${count} try to get the right color!`;
        } else {
            feedback.textContent = `Winner! You needed ${count} tries to get the right color!`;
        };
        feedback.style.color = 'yellow';
        feedback.style.fontWeight = 'bolder';
        output.style.color = output.textContent;
        button.removeEventListener('click', startGame);
        button.style.backgroundColor = 'grey';
        output.style.transition = '0.8s';
        boxes.forEach(element => {
            element.style.opacity = '1';
            element.style.transition = '.4s';
        });
        boxes.forEach(box => {
            box.style.backgroundColor = output.textContent;
            box.style.transition = '1s';
        });
        boxes.forEach(box => {
            box.removeEventListener('click', winOrLose);
        });
        setTimeout(() => {
            // window.location.reload();
            feedback.textContent = 'Start a new game!';
            feedback.style.color = 'aliceblue';
            feedback.style.fontWeight = 'normal'
            button.addEventListener('click', startGame);
            button.style.backgroundColor = 'rgb(0, 124, 124)';
            button.addEventListener('mouseover', () => button.style.backgroundColor = 'rgb(0, 172, 172)'); 
            button.addEventListener('mouseleave', () => button.style.backgroundColor = 'rgb(0, 124, 124)'); 
        }, 3000);
        count = 1;
    } else if (event.target.style.backgroundColor != output.textContent && count >= 3) {
        feedback.textContent = `You have lost! You needed more than 3 tries!`;
        feedback.style.color = 'red';
        feedback.style.fontWeight = 'bolder';
        output.style.color = output.textContent;
        button.removeEventListener('click', startGame);
        button.style.backgroundColor = 'grey';
        output.style.transition = '0.8s';
        boxes.forEach(element => {
            element.style.opacity = '1';
            element.style.transition = '.4s';
        });
        boxes.forEach(box => {
            box.style.backgroundColor = output.textContent;
            box.style.transition = '1s';
        });
        boxes.forEach(box => {
            box.removeEventListener('click', winOrLose);
        });
        setTimeout(() => {
            // window.location.reload();
            feedback.textContent = 'Start a new game!';
            feedback.style.color = 'aliceblue';
            feedback.style.fontWeight = 'normal'
            button.addEventListener('click', startGame);
            button.style.backgroundColor = 'rgb(0, 124, 124)';
            button.addEventListener('mouseover', () => button.style.backgroundColor = 'rgb(0, 172, 172)'); 
            button.addEventListener('mouseleave', () => button.style.backgroundColor = 'rgb(0, 124, 124)'); 
        }, 3000);
        count = 1;
    } else {
        feedback.textContent = 'Not yet! Try again!'; 
        event.target.style.opacity = '0';
        event.target.style.transition = '.4s'
        count++;
    };
};

export default winOrLose;