
const sum = (num1, num2) => num1+num2
const sub = (num1, num2) => num1-num2
const mult = (num1, num2) => num1*num2
const div = (num1, num2) => (num2 === 0) ? 'Não é possível divisão por zero!' : num1/num2

/* --- descomentar funções abaixo fará com que seja impossível --- */
/* --- fazer o push, devido ao teste de coverage que exige 80% --- */
/* --- 80% das funções testadas --- */
const func1 = (num1, num2) => num1+1
const func2 = (num1, num2) => num1+2
const func3 = (num1, num2) => num1+3
const func4 = (num1, num2) => num1+4


export {sum, sub, mult, div}