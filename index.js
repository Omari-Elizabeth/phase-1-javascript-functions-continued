function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("swim")
const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home")

function wrapAdjective(param = "*"){

    return function(param1 = "special"){
        return `You are ${param}${param1}${param}!`
    }
}
console.log (wrapAdjective()("hard worker"));
