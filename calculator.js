// Add two numbers together.
function add(a, b) { 
    return a + b;
}

// Subtract one number from another.
function subtract(a, b) { 
    return a - b;
}

// Multiply one number with another.
function multiply(a, b) { 
    return a * b;
}

// Divide one number by another.
function divide(a, b) { 
    return a / b;
}

// Testing add()
console.log('------------------ TESTING add() ------------------');
console.log('4 + 5 = ' + add(4,5) + ' (Expected Value: 9)');
console.log('0 + 5 = ' + add(0,5) + ' (Expected Value: 5)');
console.log('-3 + 4 = ' + add(-3,4) + ' (Expected Value: 1)');
console.log('-4 + -5 = ' + add(-4,-5) + ' (Expected Value: -9)');
console.log('0 + 0 = ' + add(0,0) + ' (Expected Value: 0)');
console.log('0 + -5 = ' + add(0,-5) + ' (Expected Value: -5)');
console.log('---------------------------------------------------');

// Testing subtract()
console.log('---------------- TESTING subtract() ---------------');
console.log('4 - 5 = ' + subtract(4,5) + ' (Expected Value: -1)');
console.log('0 - 5 = ' + subtract(0,5) + ' (Expected Value: -5)');
console.log('-3 - 4 = ' + subtract(-3,4) + ' (Expected Value: -7)');
console.log('-4 - -5 = ' + subtract(-4,-5) + ' (Expected Value: 1)');
console.log('0 - 0 = ' + subtract(0,0) + ' (Expected Value: 0)');
console.log('0 - -5 = ' + subtract(0,-5) + ' (Expected Value: 5)');
console.log('---------------------------------------------------');

// Testing multiply()
console.log('---------------- TESTING multiply() ---------------');
console.log('4 * 5 = ' + multiply(4,5) + ' (Expected Value: 20)');
console.log('0 * 5 = ' + multiply(0,5) + ' (Expected Value: 0)');
console.log('-3 * 4 = ' + multiply(-3,4) + ' (Expected Value: -12)');
console.log('-4 * -5 = ' + multiply(-4,-5) + ' (Expected Value: 20)');
console.log('0 * 0 = ' + multiply(0,0) + ' (Expected Value: 0)');
console.log('0 * -5 = ' + multiply(0,-5) + ' (Expected Value: 0)');
console.log('---------------------------------------------------');

// Testing divide()
console.log('---------------- TESTING divide() ---------------');
console.log('4 / 8 = ' + divide(4,8) + ' (Expected Value: 0.5)');
console.log('0 / 5 = ' + divide(12,3) + ' (Expected Value: 4)');
console.log('-3 / 4 = ' + divide(-4,4) + ' (Expected Value: -1)');
console.log('0 / -5 = ' + divide(0,-5) + ' (Expected Value: 0)');
console.log('0 / 0 = ' + divide(0,0) + ' (Expected Value: NaN)');
console.log('0 / -5 = ' + divide(1,3) + ' (Expected Value: 0.33)');
console.log('---------------------------------------------------');