
// another display method via array instead of string methods
let numA = [];
function displayA(event) {
    numA.push(`${event.target.id}`);
    const displayValue = numA.join('');
    display = displayText.textContent = Number(displayValue);
    return display;
};

// string multiple operators following precedence rules
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const displayValue = `${btn.id}`;
        display = displayText.textContent += displayValue;
        let input = [...display];
        
        equal.addEventListener('click', () => { 
            input.map(function(val) {
                function check(){
                    if (input.some(i => i =='x')){
                        val = input.find(i => i =='x');
                        const indexX = input.findIndex(i => i =='x')
                        const resultM = operate(val, input[indexX-1], input[indexX+1]); 
                        input.splice(indexX-1, 3, resultM);
                        return input;                
                    };                   
                    if (input.some(i => i =='÷')){
                        val = input.find(i => i =='÷');  
                        const indexD = input.findIndex(i => i =='÷');
                        const resultD = operate(val, input[indexD-1], input[indexD+1]);
                        input.splice(indexD-1, 3, resultD); 
                        return input;
                    };                
                    if (input.some(i => i =='+')){
                        val = input.find(i => i =='+');  
                        const indexP = input.findIndex(i => i =='+');
                        const resultP = operate(val, input[indexP-1], input[indexP+1]);
                        input.splice(indexP-1, 3, resultP);
                        return input;
                    };                
                    if (input.some(i => i =='-')){
                        val = input.find(i => i =='-');  
                        const indexMi = input.findIndex(i => i =='-');
                        const resultMi = operate(val, input[indexMi-1], input[indexMi+1]);
                        input.splice(indexMi-1, 3, resultMi);
                        return input;
                    };
                };
                for (let j=0; j<=input.length; j++){
                    check();
                    if(input.length!=1) continue;
                };
                return input; 
            });            
            displayText.textContent = display + input;   
        });
    });
});
