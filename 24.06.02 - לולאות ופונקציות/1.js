let fn = window.prompt("Give me your first number: ");
let sn = window.prompt("Give me your second number: ");


let isPositive
if (fn > 0 && sn > 0) {
    isPositive = ""
}
else {
    isPositive = " NOT"
}
console.log(`Both your numbers are${isPositive} positive`)

let are_zero
if (fn == 0 && sn == 0) {
    are_zero = ""
}
else {
    are_zero = " NOT"
}
console.log(`Both your numbers are${are_zero} zero`)

let isNegative
if (fn < 0 && sn < 0) {
    isNegative = ""
}
else {
    isNegative = " NOT"
}
console.log(`Both your numbers are${isNegative} negative`)


let onePosOneZero
if ((fn > 0 && sn == 0) || (fn == 0 && sn > 0)) {
    console.log(`One is zero and the auther is positive`)

}
else {
    isNegative = " NOT"
}
console.log(`One is zero and the auther is positive`)

