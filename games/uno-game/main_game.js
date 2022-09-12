var turns = 0;

generateDeck(7);

function clickedCard(card) {
    if (deck[card - 1] != "blank" || card == 0) {
        
        var target = deck[card - 1];
        
        if (card == 0) {
            addCard("random:");
        }
        else { //action
            if (otherTypes.includes(card13) || otherTypes.includes(target) || canMakeMatch(target)) {
                card13 = target;
                editCard(card, "blank");
                if (splitCardType("type", card13) == "plus_2" || card13 == "plus_4") {
                    addCard("random:");
                    addCard("random:");
                    if (card13 == "plus_4") {
                        addCard("random:");
                        addCard("random:");
                    }
                }
                else if (splitCardType("type", card13) == "skip") {
                    removeRandomCard();
                }
                else if (splitCardType("type", card13) == "reverse") {
                    colorRandomCard(randomNumber(2, countCards()));
                }
                turns++;
            }
            
        }
        
    }
}
