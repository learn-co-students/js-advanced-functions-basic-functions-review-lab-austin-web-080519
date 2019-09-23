// Your code here

const saturdayFun = (activity = 'roller-skate') => {
    return "This Saturday, I want to " + activity + "!"
}

const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (string = '*') => {
    return (function(param = 'special') {
        return `You are ${string}${param}${string}!`
    })
}

const Calculator =  {
    add: (function(){return 1 + 3 }),
    subtract: (function(){return 1 - 3 }),
    multiply: (function(){return 1 * 3 }),
    divide: (function(){return 10 / 5 })
}

const actionApplyer = (start, array = 0) => {
    let current = start
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
        current = array[i](current)
        console.log(current)
    }
    return current
}