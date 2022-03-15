// *Variables*
// Create a variable and console log the value
let almostDone = 5
console.log(almostDone)
// Create a variable, add 10 to it, and alert the value
let num = 55
num += 10
alert(num)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourAndAlert(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}
// Create a function that divides one number by another and returns the remainder
function returnRemainder(zebra,unicorn){
    return zebra % unicorn
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sumGreaterThan50Jumanji(n1,n2){
    let sum = n1 + n2
    if(sum > 50){
        alert('Jumanji')
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiThreeAndAlertZebra(n1,n2,n3){
    let product = n1 * n2 * n3
    if(product % 3 === 0){
        alert('Zebra')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWordXTimes(word,num){
    for(let i = 1; i <= num; i++){
        console.log(word)
    }
}
