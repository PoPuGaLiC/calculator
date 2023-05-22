let operationsList = document.getElementById("operations").children;
let inputField = document.getElementById("inputField");
let expression = document.getElementById("expression");
let value1 = 0;
let value2 = 0;
let flag = "";
let values = "";
let operation = "";
if(value1 === 0){
    inputField.value=0;
}
function parse(str){
    return Function(`'use strict';return(${str})`)()
}
for(let i=0; i<operationsList.length; i++){
    operationsList[i].addEventListener("click",function(){
        if(flag === "operation"){
            if(this.innerHTML.includes("backspace")){
                inputField.value = inputField.value.slice(0,-1)
                if(inputField.value ===""){
                    inputField.value=0;
                    value1=0;
                }
            }else if(this.innerHTML.includes("multiply")){
                inputField.value = "*";
                flag = "operation";
                
    
            }else if(this.innerHTML.includes("division")){
                inputField.value = "/";
                flag = "operation";
            }else{
                inputField.value = this.innerHTML;
                flag = "operation";
            }
        }else{
            if(this.innerHTML.includes("backspace")){
                inputField.value = inputField.value.slice(0,-1)
                if(inputField.value ===""){
                    inputField.value=0;
                    value1=0;
                }
            }else if(this.innerHTML.includes("multiply")){
                value1 = inputField.value
                inputField.value = "*";
                flag = "operation";
                
                expression.innerText = expression.innerText+value1;
    
            }else if(this.innerHTML.includes("division")){
                value1 = inputField.value
                inputField.value = "/";
                
                expression.innerText= expression.innerText+value1;
                flag = "operation";
            }else{
                value1 = inputField.value
                inputField.value = this.innerHTML;
                
                expression.innerText = expression.innerText+value1;
                flag = "operation";
            }
        }
        console.log(flag);
        
    });
}

let numbersList = document.getElementById("numbers").children;
for(let i=0; i < numbersList.length; i++){
    numbersList[i].addEventListener("click",function(){
        if(this.innerHTML.includes("AC")){
            inputField.value = 0;
            
            value1 = 0;
            value2 = 0;
            expression.innerText = "";
        }else if (this.innerHTML.includes("%")){
            inputField.value = inputField.value+this.innerHTML;
        }else if (this.innerHTML.includes(",")){
            inputField.value = inputField.value+".";
        }else if (this.innerHTML.includes("=")){
            value2 = inputField.value;
            expression.innerText = expression.innerText+value2;
            inputField.value = parse(expression.innerText);
            expression.innerText  = "";
            value1 = inputField.value;
            value2 = 0;
            flag = "";

            
        }else if (this.innerHTML.includes("+/-")){
            if(inputField.value!=0){
                inputField.value = inputField.value > 0? "-"+inputField.value : inputField.value.slice(1);
            }

        }else if(value1 === 0){
            
            
            inputField.value = this.innerHTML;
            
            value1 =value1+inputField.value;

            flag = "value";
            
        }else{
            if(flag === "operation"){
                expression.innerText = expression.innerText+inputField.value;
                inputField.value = this.innerHTML;
            }else{
                inputField.value = inputField.value+this.innerHTML;
            }
            
            value1 = value1+inputField.value;
            flag = "value";
        }
        
        console.log(expression);
    });
}

