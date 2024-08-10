let string = "";
let memory = 0;
let displayValue = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'M+'){
        memory += parseFloat(document.querySelector('input').value || 0);
        console.log("Memory:",memory);
    }
    else if(e.target.innerHTML == 'M+'){
        memory -= parseFloat(document.querySelector('input').value || 0);
        console.log("Memory:",memory); 
    }
    else{
        console.log(e.target.innerHTML);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
  })
});

// function updateDisplay(value){
//     document.getElementById("display").value = value;
// }

// document.getElementById("memoryAdd")
// .addEventListener("click",function(){
//     memory += parseFloat(displayValue);
//     console.log("Memory:", memory);
// });

// document.getElementById("memorySubtract").addEventListener("click", function(){
//     memory -= parseFloat(displayValue);
//     console.log("Memory:", memory);
// });

// function handleInput(value){
//     displayValue = value;
//     updateDisplay (displayValue);
// }