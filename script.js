const noButton = document.querySelector(".no-button");

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

noButton.addEventListener("click",function(){
    getValidInput();
});