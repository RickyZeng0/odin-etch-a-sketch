const noButton = document.querySelector(".no-button");
const squareContainer = document.querySelector(".square-container");

function getValidInput(){
    const LOWER_LIMIT = 1;
    const UPPER_LIMIT = 50;
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

function highlightSquare(event){
    event.target.style.backgroundColor = "black";
}

//create total n*n squares 
function createSquare(n){
    for(let i=1 ; i<=n*n ; i++){
        const square = document.createElement("div");
        square.style.width = `${1/n *100}%`;
        square.style.height = `${1/n *100}%`;
        square.classList.add("square");
        square.addEventListener("mouseenter",highlightSquare);
        squareContainer.appendChild(square);    
    }
}

function removeAllSquare(){
    while(squareContainer.firstChild){
        squareContainer.removeChild(squareContainer.firstChild);
    }
}

noButton.addEventListener("click",function(){
    let noOfSqure = getValidInput();
    removeAllSquare();
    createSquare(noOfSqure);
});

//start here
createSquare(16);