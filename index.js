// Your code here
function saturdayFun(fun = 'roller-skate'){
    return `This Saturday, I want to ${fun}!`;
}
let mondayWork = function(work = 'go to the office'){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(wrapper = '*'){
    return function(adj = 'special'){
        return `You are ${wrapper}${adj}${wrapper}!`
    }
}

const Calculator = {};
Calculator['add'] = function(a, b){
    return a+b;
}
Calculator['subtract'] = function(a, b){
    return a-b;
}
Calculator['multiply'] = function(a, b){
    return a*b;
}
Calculator['divide'] = function(a, b){
    return a/b;
}

function actionApplyer(start, arr){
    let total = start;
    if(arr.length !== 0){
        for(const func of arr) {
            total = func(total);
        }
    }
    return total;
}