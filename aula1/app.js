//representaçao do button esta armazenado no buttonEl 
const buttonEl = document.querySelector('button'); 
const inputEl = document.querySelector('goal'); 
const listEl = document.querySelector('ul'); 

function addGoal(){ 
    const enteredValue = input.valueEl; 
    const listItem = document.createElement('li'); 
    listItem.textContent = enteredValue; 
    listEl.appendChild(listItem); 
    inputEl.value = ''; 
} 
    
buttonEl.addEventListener('click', addGoal) 