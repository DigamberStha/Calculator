// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function ClearDisplay(){
    display.value = "";
}
function Delete(){
    var str = document.getElementById('display').value;
    str = str.substr(0,str.length-1);
    document.getElementById('display').value = str;
}
function Square(){
    const x = document.getElementById('display').value;
    document.getElementById('display').value = Math.pow(x,2)
}
function sqrt(){
    const x = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(x)
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value ="Error";
    }
}