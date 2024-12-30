let operand1 = null;
let operand2 = null;
let operator = null;
let displayValue = "0";
const display = document.querySelector('#calc-display');
const buttons = document.querySelectorAll('button');

function updateDisplay(){
    display.textContent = displayValue;
    if(displayValue.length > 16) {
        display.innerText = displayValue.substring(0, 16);
    }
}

updateDisplay();

function prepareBtns (){
    buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            if(button.classList.contains('operand')){
                updateOperand(button.textContent);
                console.log("operand")
                
            }else if (button.classList.contains('operator')){
                console.log("operator")
                operate(button);
            }else if (button.classList.contains('clear')){
                console.log("clear")
                clearDisplay();
                
            }else if (button.classList.contains('equals')){
                console.log("equals");
                if(canOperate()){
                    result();
                }else{alert("Error: need an Operation.")};
            }else if (button.classList.contains('decimal')){
                console.log("decimal")
            };
        });
    });
};

prepareBtns();

function updateOperand(btnValue){
    let operand = `${btnValue}`;
    if(operator === null && operand1 == null){
        if(displayValue[0] === '0'){
            displayValue = operand;
        }else {
            displayValue = displayValue.concat(operand);
        }
    }else{
        if(displayValue[0] === '0' || operand2 == null){
            displayValue = operand;
            operand2 = Number(displayValue);
        }else{
            displayValue = displayValue.concat(operand);
            operand2 = Number(displayValue);
        }
        
    }
    
    updateDisplay();
}

function operate (operateBtn){
    if(operator !== null && operand1 !== null && operand2 == null){
        operator = operateBtn.textContent;
    }else if(canOperate()){
        result();
        operator = operateBtn.textContent;
    }else{
        operator = operateBtn.textContent;
        operand1 = Number(displayValue);
        console.log(operator);
        console.log(operand1);
    }
    
}

function canOperate(){
    return (operand1 !== null && operand2 !== null && operator !== null);
}

function result (){
    switch(operator){
        case '+':
            add(operand1, operand2);
            break;
        case '-':
            subtract(operand1, operand2);
            break;
        case '*':
            multiply(operand1, operand2);
            break;
        case '/':
            divide(operand1, operand2);
    }
    console.log(operand1);
}

function clearDisplay(){
    displayValue = '0';
    operand1 = null;
    operand2 = null;
    operator = null;
    updateDisplay();    
}

function add(x, y){
    console.log("add")
    operand1 = x+y;
    operand2 = null;
    operator = null;
    displayValue = `${operand1}`;
    updateDisplay();
};

function subtract(x, y){
    console.log("substract")
    operand1 = x-y;
    operand2 = null;
    operator = null;
    displayValue = `${operand1}`;
    updateDisplay();
};

function multiply(x, y){
    operand1 = x * y;
    operand2 = null;
    operator = null;
    displayValue = `${operand1}`;
    updateDisplay();
    console.log("multiply");
};

function divide(x, y){
    if(y != 0){
        operand1 = x/y;
        operand2 = null;
        operator = null;
        displayValue = `${operand1}`;
        updateDisplay();
    }else{
        alert("can't divide by 0.");
        return;
    }
    console.log("divide");
};