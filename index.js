let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

function doAdd(){
    let result = String(Number(one.value) + Number(two.value));
    output.innerHTML = String(result);
    if(result < 0){
        output.style.color = "red";
    } else {
        output.style.color = "#000000";
        output.style.backgroundColor = "white";
    }
}

function doSubtract(){
    let result = Number(one.value) - Number(two.value);
    output.innerHTML = String(result);
    if(result < 0){
        output.style.color = "red";
    } else {
        output.style.color = "#000000";
        output.style.backgroundColor = "white";
    }
}

function doMultiply(){
    let result = String(Number(one.value) * Number(two.value));
    output.innerHTML = String(result);
    if(result < 0){
        output.style.color = "red";
    } else {
        output.style.color = "#000000";
        output.style.backgroundColor = "white";
    }
}

function doDivide(){
    let result = String(Number(one.value) / Number(two.value));
    output.innerHTML = String(result);
    if(result < 0){
        output.style.color = "red";
    } else {
        output.style.color = "#000000";
        output.style.backgroundColor = "white";
    }


}

function doPower(){
    let base = Number(one.value);
    let exponent = Math.abs(Math.floor(Number(two.value)));
    let result = 1;
    
    for(let i = 0; i < exponent; i++){
        result *= base;
    }
    
    if(Number(two.value) < 0){
        result = 1 / result;
    }
    
    if(Number(two.value) === 0){
        result = 1;
    }
    
    output.innerHTML = String(result);
    if(result < 0){
        output.style.color = "red";
    } else {
        output.style.color = "#000000";
        output.style.backgroundColor = "white";
    }
}

function doClear(){
    one.value = "";
    two.value = "";
    output.innerHTML = "Result will appear here";
    output.style.color = "#000000";
    output.style.backgroundColor = "white";
}