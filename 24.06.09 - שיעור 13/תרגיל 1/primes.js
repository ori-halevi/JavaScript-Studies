function print(log){
    console.log(log)
}

print("start...")


function is_div(num, div){
    if (div === 1){
        return true
    }
    
    else if(num % div === 0){
        
        return false
    }
    return is_div(num, div - 1)
}
function is_div2(num){
    return is_div(num, num -1);
}


let arr = []
for (let i = 0; i < 100; i++) {
    if (is_div2(i)){
        arr.push(i)
    }
}
arr = JSON.stringify(arr)
print(arr)