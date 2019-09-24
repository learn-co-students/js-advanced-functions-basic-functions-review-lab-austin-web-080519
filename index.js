// Your code here

function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
};

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`)
};

function wrapAdjective(character = "*"){
    return function(adjective) {
        return (`You are ${character}${adjective}${character}!`)
    } 
};

// defines an object called Calculator
const calculator = Object.assign({}, )

let Calculator = {
    add: () => 1+3,
    subtract: () => 1-3,
    multiply: () => 1*3,
    divide: () => 10/5
}

let actionApplyer = (integer = 0, functions = []) => {
    let currentNumber = integer;
    for (let i=0; i < functions.length; i++) {
        currentNumber = functions[i](currentNumber);
    }
    return currentNumber
}