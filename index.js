// Your code here
function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`;
}

let mondayWork = (string = "go to the office") => `This Monday, I will ${string}.`

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add: () => 1 + 3,
    subtract: () => 1 - 3,
    multiply: () => 1 * 3,
    divide: () => 10 / 5
}

let actionApplyer = (integer = 0, functions = []) => {
    let currentNumber = integer;
    for (let i = 0; i < functions.length; i++) {
        currentNumber = functions[i](currentNumber);
    }
    return currentNumber
}