function saturdayFun(v1='roller-skate') {
    return (`This Saturday, I want to ${v1}!`)
}

function mondayWork (value = 'go to the office') {
    return (`This Monday, I will ${value}.`)
}

function wrapAdjective (value2 = "*") {
    return function inner(value1 = "special"){
        return `You are ${value2}${value1}${value2}!`
    }
}

