var board = "000000000";
var turn = 1;

function addThing(square) {
    if (turn == 1) {
        turn = 2;
        document.getElementById(square.toString()).innerHTML = "X";
    }
    else {
        turn = 1;
        document.getElementById(square.toString()).innerHTML = "0";
    }
}

function checkForWin(type) {
    if (type == "tlbr") {
        
    }
}