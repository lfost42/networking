//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiNumsInArr(arr){
    let product = 1
    arr.forEach( num => product *= num )
    // for(let i = 0; i < arr.length; i++){
    //     product *= arr[i]
    // }

    alert(product)
}
multiNumsInArr([10,2,3])