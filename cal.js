let view=document.getElementById('result')

let sum = "";

const display=(n) =>{
view.value +=n
}
const deleteAll=()=>{
    view.value ='';
}
const calculate = ()=>{
    view.value = eval(view.value)
}

function add (n) {
    view.value += n;
} 

function percent (n) {
    view.value += n;
} 

function substract (n) {
    view.value += n;
} 

function divide (n) {
    view.value += n; 
}


function multiply (n) {
    view.value += n;
} 


const delete2 = () =>{
    result.value=result.value.slice(0,-1)
}

