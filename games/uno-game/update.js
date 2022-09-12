var condition = null;

function refresh() {
    if (condition == null) {
        for (let i = 1; i <= deckLength; i++) {
            document.getElementById("card" + i + "Image").src = "Images/" + deck[i - 1] + ".png";
        }
        
        document.getElementById("card13Image").src = "Images/" + card13 + ".png";
    }
    if (checkCondition("win") == "win" && condition != "lose") {
        condition == "win";
        document.getElementById("win").style.display = "initial";
    }
    else if (checkCondition("lose") == "lose" && condition != "win") {
        condition == "lose";
        document.getElementById("gameOver").style.display = "initial";
    }
    else {
        condition = null;
        document.getElementById("win").style.display = "none";
        document.getElementById("gameOver").style.display = "none";
    }
}

setInterval(() => {
    refresh();
}, 20);
