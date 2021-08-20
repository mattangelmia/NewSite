let text = document.querySelector(".text")


let innerText = "My name is Matthew Angel. Welcome to my page";

window.onload = function () {
  
  'use strict';
  
  let x = 0;
  
  let typer = setInterval(function () {
    
    text.textContent += innerText[x]
    
    x++
    
    if (x > innerText.length - 1){
    
    clearInterval(typer)
    
  }
    
  },90)
  
}