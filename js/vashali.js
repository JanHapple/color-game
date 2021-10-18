const displayColor= document.querySelector(".rgbColor");
const boxes= document.querySelectorAll(".box")
const reset= document.querySelector(".reset")

const singleRGBColor =()=>{
    let random=Math.floor(Math.random() * boxes.length);
    displayColor.textContent = boxes[random].style.backgroundColor;  
}

let count=3;
const clickOnColorBox=(event)=>{
    if(event.target.style.backgroundColor==displayColor.textContent){
               alert("You won!!")
               resetFun();}
    else{alert(`Oops!! Try again!, You have ${count-1} lives left` )}
    count--;
    if(count==0){
         alert("The Game is over!")
         resetFun();
    }    
}

boxes.forEach((box)=>{ 
    box.style.backgroundColor='rgb(' + Math.floor((Math.random()*(255-1)+1)) + ',' + Math.floor((Math.random()*(255-1)+1)) + ',' + Math.floor((Math.random()*(255-1)+1)) + ')';
    box.addEventListener("click",clickOnColorBox);
});

const resetFun =()=>{
    window.location.reload();
}
 
singleRGBColor();
reset.addEventListener("click",resetFun)