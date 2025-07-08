const noButton = document.querySelector(".no-button");
const squareContainer = document.querySelector(".square-container");

function getValidInput(){
    const LOWER_LIMIT = 1;
    const UPPER_LIMIT = 20;
    input = Number(prompt(`Enter the number of square per side (${LOWER_LIMIT} to ${UPPER_LIMIT}): `));
    while(true){
        let isNumber = !Number.isNaN(input);
        if(isNumber){
            if(input >= LOWER_LIMIT && input <= UPPER_LIMIT){
                break;
            }
            else{
                input = Number(prompt(`Your Number is out of range !. Please enter the number of square per side (${LOWER_LIMIT} to ${UPPER_LIMIT}): `));
            }
        } 
        else{
            input = Number(prompt(`Your input is not a number !.Enter the number of square per side (${LOWER_LIMIT} to ${UPPER_LIMIT}): `));
        }
    }
    return input;
}

//create total n*n squares 
function createSquare(n){
    for(let i=1 ; i<=n*n ; i++){
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.boxSizing = "border-box";
        square.style.width = `${1/n *100}%`;
        square.style.height = `${1/n *100}%`;
        square.classList.add("square");
        squareContainer.appendChild(square);    
    }
}

noButton.addEventListener("click",function(){
    let noOfSqure = getValidInput();
    createSquare(noOfSqure);
});