let addition;
function add(a,b) {
    addition = Number(a) + Number(b);
    return Number(Math.round(addition+'e10')+'e-10');
};

function subtract(a,b) {
    return Number(Math.round((a - b)+'e10')+'e-10');
};

function multiply(a,b) {
    return Number(Math.round(a*b+'e10')+'e-10');
};

function divide(a,b) {
    return (b!=0)? Number(Math.round(a/b+'e10')+'e-10') : displayText.textContent = 'Uh oh, the divisor can\'t be 0.';
};

const plus = document.getElementById('+');
const minus = document.getElementById('-');
const multi = document.getElementById('x');
const divi = document.getElementById('÷');
const equal = document.getElementById('=');
let a;
let b;
let result;
function operate(opr,a,b) {
    if (opr == plus) {
        return result = add(a,b);
    }else if(opr == minus){
        return result = subtract(a,b);
    }else if(opr == multi){
        return result = multiply(a,b);
    }else if(opr == divi){
        return result = divide(a,b);
    }
    else {
        return displayText.textContent = result;
    }; 
};

const displayText = document.querySelector('#text');
let display;
let text = '';
function displayNum(event) {
    if (text.length < 11) {
    text += `${event.target.id}`;
    displayText.textContent = text;
    } else {
        displayText.textContent = 'Oops...too many #s.'
    };
    return display = displayText.textContent;
};

function resetDisplay() {
    return text = '';     
};

const nums = document.querySelectorAll('div.nums > button, div.zerodot > button');
const buttons = document.querySelectorAll('button');
nums.forEach((num) => {
    num.addEventListener('click', displayNum);
});

const operators = document.querySelectorAll('div.rbtns > button');
let clickTimes = 0;
operators.forEach((o) => {
    o.addEventListener ('click', (e) => {
        clickTimes +=1; 
        if (clickTimes == 1) {
            opr = e.target;
            a = display;
            displayText.textContent = display; 
            resetDisplay();        
        };
        if (clickTimes == 2) {
            b = display;           
            operate(opr,a,b);
            displayText.textContent = result; 
            a = result; 
            opr = e.target;
            resetDisplay();          
        };
        if (clickTimes == 3) {
            b = display;
            operate(opr,a,b); 
            displayText.textContent = result; 
            a = result;
            clickTimes = 1;
            resetDisplay(); 
            opr = e.target;
        };       
    });
});

function reset() {
    resetDisplay();
    displayText.textContent = '';
    display = '';
    clickTimes = 0;
    dots = 0;
    dot.disabled = false;
};

const ac = document.querySelector('.clear');
ac.addEventListener('click',reset);

function Neg() {
    display = - displayText.textContent;
    return displayText.textContent = display; 
};

const posNeg = document.querySelector('.posNeg');
let clicks = 0;
posNeg.addEventListener('click', () => {
    clicks ++;
    if (clicks == 1) {
        Neg(); 
    };
    if (clicks == 2) {
        Neg();
        clicks = 0;
    };
});

const percent = document.querySelector('.percent');
percent.addEventListener('click', () => {
    display = Number(Math.round(display/100+'e10')+'e-10');
    return displayText.textContent = display;
});

const dot = document.getElementById('.');
let dots = 0;
dot.addEventListener('click',() => {
    dots++;
    if (dots > 0) {
        dot.disabled = true;
    };
});
