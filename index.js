//list down all the winning combinations

let winningCombination = [
    [1, 2, 3], //vertical
    [4, 5, 6], //vertical
    [7, 8, 9], //vertical
    [1, 4, 7], //horizontal
    [2, 5, 8], //horizontal
    [3, 6, 9], //horizontal
    [1, 5, 9],
    [3, 5, 7]
];

//accessing all boxes

let boxElement = document.querySelectorAll(".box");

//providing event listener to all the boxes

for(elem of boxElement){
    elem.addEventListener("click", handleClick);
}

let isWon = false;
let click = 0;
let xAttempts = [];
let oAttempts = [];

function handleClick(event){
    console.log(event.target.id);
    let id = event.target.id;
    let pTag = document.createElement("p");
    pTag.style.color = '#FAB201';
    pTag.textContent = "X";
    boxElement[id - 1].appendChild(pTag);
    if(click%2 == 0){
        pTag.textContent = "X"
        click++
        xAttempts.push(parseInt(id))
        console.log("X", xAttempts)
        result(xAttempts, "X")
    }else{
        pTag.textContent = "O"
        click++
        oAttempts.push(parseInt(id))
        console.log("O",oAttempts)
        result(oAttempts,"O")
    }
    console.log("clicks",click)

    if(click == 9 && isWon == false){
        setTimeout(() =>{
            resultBox.style.visibility = "visible"
            messageBox.textContent = "It is a draw"
        })
    }
}

let resultBox = document.getElementById("result")
let messageBox = document.getElementById("message")
let playAgain = document.getElementById("button")
playAgain.addEventListener("click", ()=>{
    window.open("index.html", "_self")
}
)

function result(playerArray, player){
    console.log(player, playerArray);
    for(let i = 0; i<winningCombination.length; i++){
        let check = true;
        for(let j = 0; j<winningCombination[i].length;j++){
            if(playerArray.includes(winningCombination[i][j])== false){
                check = false
                break
            }
        }
        if (check == true){
            isWon = true;
            resultBox.style.visibility = "visible";
            console.log(player, "won the game")
            messageBox.textContent = player + " Won the game";
        }
    }
}