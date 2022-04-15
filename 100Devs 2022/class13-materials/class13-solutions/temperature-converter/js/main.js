//Write your pseduo code first! 
//0 -> 32
document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    //need the value that is in selseeyus
    let temp = document.querySelector('#sel').value
    //convert from selseeyus to fairinheight
    temp = temp * 9/5 + 32
    //show it
    document.querySelector('#placeToYell').innerText = temp
  
}

