//variables
const deckLength = 12;
let temp = "";
let deck = [
    "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank"
];
let card13 = "blank";
const types = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "plus_2", "reverse", "skip"
];
const colors = [
    "blue",
    "green",
    "red",
    "yellow"
];
const otherTypes = [
    "wild", "plus_4"
];

//functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function randomCardType() {
    if (randomNumber(0, 8) == 0) {
        var card = otherTypes[randomNumber(0, otherTypes.length)];
    }
    else {
        var type = types[randomNumber(0, types.length)];
        var color = colors[randomNumber(0, colors.length)];
        var card = color + "_" + type;
    }
    
    return card;
}
function splitCardType(part, type) {
    var array = type.split("_");
    if (part == "color") {
        return array[0];
    }
    else if (part == "type") {
        if (array[1] == "plus") {
            array[1] = "plus_2";
        }
        return array[1];
    }
}
function editCard(cardNumber, type) {
    if (cardNumber > 0 && cardNumber < 13) {
        deck[cardNumber - 1] = type;
    }
    
}
function findRandomSlot(includeOther) {
    var index = 0;
    var rounds = 0;
    while (rounds < 24) {
        index = randomNumber(1, 13);
        rounds++;
        
        if (includeOther) {
            
            if (deck[index = 1] != "blank") {
                
                if (countCards() == 1) {
                    return findSlot("full:io");
                }
                return index;
            }
        }
        else {
            
            if (deck[index - 1] != "blank" && !otherTypes.includes(deck[index - 1])) {
                
                if (countCards() == 1) {
                    temp = colors[randomNumber(0, colors.length)] + "_" + splitCardType("type", deck[findSlot("full:") - 1]);
                    return findSlot("full:");
                }
                temp = colors[randomNumber(0, colors.length)] + "_" + splitCardType("type", deck[index - 1]);
                return index;
            }
        }
    }
    return 0;
}
function findSlot(type) {
    for (let i = 1; i < 13; i++) {
        if (deck[i - 1] != "blank" && type == "full:io") {
            return i;
        }
        if ((deck[i - 1] == "blank" && type == null) || (deck[i - 1] != "blank" && type == "full:" && !otherTypes.includes(deck[i - 1])) || (deck[i - 1] == type && type != null)) {
            return i;
        }
    }
    return null;
}
function addCard(type) {
    if (findSlot() != "null") {
        if (type == "random:") {
            editCard(findSlot(), randomCardType());
        }
        else {
            editCard(findSlot(), type);
        }
    }
    
}
function generateDeck(cards) {
    for (let i = 1; i <= 12 + 1; i++) {
        editCard(i, "blank");
    }
    for (let i = 1; i < cards + 1; i++) {
        addCard("random:");
    }
    card13 = randomCardType();
}
function removeRandomCard() {
    editCard(findRandomSlot(true) != 0 ? findRandomSlot() : 1, "blank");
}
function colorRandomCard(amount) {
    if (amount == null) {
        amount = 1;
    }
    for (let i = 0; i <= amount; i++) {
        editCard(findRandomSlot(false), temp);
    }
}
function deckFull(type) {
    if (type == null) {
        if (deckContains("blank")) {
            return false;
        }
    }
    else {
        for (let i = 1; i <= 12; i++) {
            if (deck[i - 1] != type) {
                return false;
            }
        }
    }
    return true;
}
function deckContains(type, color) {
    for (let i = 1; i <= 12; i++) {
        if (splitCardType("type", deck[i - 1]) == type && splitCardType("color", deck[i - 1]) == color) {
            return true;
        }
        if (deck[i - 1] == type) {
            return true
        }
        if (splitCardType("color", deck[i - 1]) == color) {
            return true;
        }
    }
    return false;
}
function countCards(type) { //counts the cards and returns the number
    var count = 0;
    for (let i = 1; i <= 12; i++) {
        if ((type != null && deck[i - 1] == type) || (type == null && deck[i - 1] != "blank")) {
            count++;
        }
    }
    return count;
}
function canMakeMatch(card) {
    if (splitCardType("type", card13) == splitCardType("type", card) || splitCardType("color", card13) == splitCardType("color", card)) {
        return true;
    }
    return false;
}
function checkCondition(condition) {
    if (condition == "lose" && deckFull() && !otherTypes.includes(card13) && !deckContains("plus_4") && !deckContains("wild")) {
        for (let a = 1; a <= 12; a++) {
            if (canMakeMatch(deck[a - 1])) {
                return "none";
            }
        }
        return condition;
    }
    if (condition == "win" && deckFull("blank")) {
        return condition;
    }
    return "none";
}