const process = require('process'); 

function print(log){
    return console.log(log);
}

function factorial(num){
    if (num === 1){
        return num
    }
    return factorial(num - 1) * num
}

let input = process.argv[2]

if (input == Number(input)){
    print(factorial(Number(input)))
}