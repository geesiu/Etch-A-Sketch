let btn = document.querySelector('button');
let div = document.querySelector('.box');

btn.addEventListener('click', getNumber);


function getNumber() {
    let amount = parseInt(prompt('Desired number?'));
    
    if (amount == isNaN) { 
        alert('Please return a number');
        return;
    } else if (amount >= 1 && amount <= 100)  {
        createGrid(amount); 
    } 

}


function createGrid(number) {
   // resets grid 
    div.textContent="";

    let totalSquares = number * number;
    
    for (let i = 0; i < totalSquares; i++) {
        let createDiv = document.createElement('div');
        div.appendChild(createDiv);
        createDiv.addEventListener('mouseover', () => {
            createDiv.classList.add("color-me");
        })
    } 
    div.style.gridTemplateColumns = `repeat(${number}, 1fr)`;  
}  



