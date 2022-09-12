//Created by Erts57

let stars = 0;
let clickAmount = 1;

let shopOpened = false;

let workers = 0;
let workerPower = 1;

let goldenClickChance = 0.5;
let goldenWorkerMineChance = 0.2;

let mystery = false;

//Shop Item Prices
let shopItem1Price = 100;
let shopItem2Price = 450;
let shopItem3Price = 1900;
let shopItem4Price = 505;
let shopItem5Price = 2010;
let shopItem6Price = 1000;
let shopItem7Price = 2500;
let shopItem8Price = 3100;
let shopItem9Price = 1000000000;

//Shop Item Price Addons
let shopItem1PriceAddon = 1;
let shopItem2PriceAddon = 1;
let shopItem3PriceAddon = 1;
let shopItem4PriceAddon = 1;
let shopItem5PriceAddon = 1;
let shopItem6PriceAddon = 1;
let shopItem7PriceAddon = 1;
let shopItem8PriceAddon = 1;

function clickStar() { //Add Stars when Star Clicked

    var random = Math.floor(Math.random() * 100) + goldenClickChance;
    if (random > 100) {

        stars += clickAmount * 2;

    } else {

        stars += clickAmount;

    }

}

//Show or Hide Shop Div Element
function toggleShop() {

    shopOpened = !shopOpened;
    if (shopOpened) {
        document.getElementById("shopButton").innerHTML = "Close Shop";
    }
    else {
        document.getElementById("shopButton").innerHTML = "Open Shop";
    }

}

function buyItem(shopItem) { //Buy Shop Items
    if (shopItem === 1) {
        if (stars >= shopItem1Price) {

            stars -= shopItem1Price;
            clickAmount += 1; //Clicks

            shopItem1PriceAddon = shopItem1PriceAddon * 1.15;
            shopItem1Price = Math.ceil(shopItem1Price + shopItem1PriceAddon);

        }
    }
    else if (shopItem === 2) {
        if (stars >= shopItem2Price) {

            stars -= shopItem2Price;
            clickAmount += 5; //Clicks x5

            shopItem2PriceAddon = shopItem2PriceAddon * 1.15;
            shopItem2Price = Math.ceil(shopItem2Price + shopItem2PriceAddon);

        }
    }
    else if (shopItem === 3) {
        if (stars >= shopItem3Price) {

            stars -= shopItem3Price;
            clickAmount += 20; //Clicks x20

            shopItem3PriceAddon = shopItem3PriceAddon * 1.155;
            shopItem3Price = Math.ceil(shopItem3Price + shopItem3PriceAddon);

        }
    }
    else if (shopItem === 4) {
        if (stars >= shopItem4Price) {

            stars -= shopItem4Price;
            workers += 1; //Workers

            shopItem4PriceAddon = shopItem4PriceAddon * 1.15;
            shopItem4Price = Math.ceil(shopItem4Price + shopItem4PriceAddon);

        }
    }
    else if (shopItem === 5) {
        if (stars >= shopItem5Price) {

            stars -= shopItem5Price;
            workers += 4; //Workers x4

            shopItem5PriceAddon = shopItem5PriceAddon * 1.155;
            shopItem5Price = Math.ceil(shopItem5Price + shopItem5PriceAddon);

        }
    }
    else if (shopItem === 6) {
        if (stars >= shopItem6Price) {

            stars -= shopItem6Price;
            workerPower += 1; //Worker Power

            shopItem6PriceAddon = shopItem6PriceAddon * 1.152;
            shopItem6Price = Math.ceil(shopItem6Price + shopItem6PriceAddon);

        }
    }
    else if (shopItem === 7) {
        if (stars >= shopItem7Price) {

            stars -= shopItem7Price;
            goldenClickChance += 0.5;

            shopItem7PriceAddon = shopItem7PriceAddon * 1.1;
            shopItem7Price = Math.ceil(shopItem7Price + shopItem7PriceAddon);

        }
    }
    else if (shopItem === 8) {
        if (stars >= shopItem8Price) {

            stars -= shopItem8Price;
            goldenWorkerMinecChance += 0.2;

            shopItem8PriceAddon = shopItem8PriceAddon * 1.1;
            shopItem8Price = Math.ceil(shopItem8Price + shopItem8PriceAddon);

        }
    }
    else if (shopItem === 9) {
        if (stars >= shopItem9Price) {

            stars -= shopItem9Price;
            shopItem9Price = 'ez';
            mystery = true;

        }
    }
}




setInterval(() => {

    if (workers > 0 && !shopOpened) {

        var workerRandom = Math.floor(Math.random() * 100) + goldenWorkerMineChance;
        if (workerRandom > 100) {

            stars += (workers * workerPower) * 2;

        } else {

            stars += (workers * workerPower);

        }

    }

}, 1500);


//topnav
function toggleTopnav() {

    var variable = document.getElementById("topnav");
    if (variable.className === "topnav") {

        variable.className += " responsive";

    }
    else {

        variable.className = "topnav";

    }

}