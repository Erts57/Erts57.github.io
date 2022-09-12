//Refresh
setInterval(() => {

    document.getElementById("starAmount").innerHTML = "Stars: " + stars;
    document.getElementById("clickAmount").innerHTML = "Stars per Click: " + clickAmount;
    document.getElementById("workerAmount").innerHTML = "Stars from Workers: " + (workers * workerPower);

    document.getElementById("gcc").innerHTML = "Golden Click Chance: " + goldenClickChance + "%";
    document.getElementById("gwmc").innerHTML = "Golden Worker Mine Chance: " + goldenWorkerMineChance + "%";

    document.getElementById("shopPrice1").innerHTML = "$" + shopItem1Price;
    document.getElementById("shopPrice2").innerHTML = "$" + shopItem2Price;
    document.getElementById("shopPrice3").innerHTML = "$" + shopItem3Price;
    document.getElementById("shopPrice4").innerHTML = "$" + shopItem4Price;
    document.getElementById("shopPrice5").innerHTML = "$" + shopItem5Price;
    document.getElementById("shopPrice6").innerHTML = "$" + shopItem6Price;
    document.getElementById("shopPrice7").innerHTML = "$" + shopItem7Price;
    document.getElementById("shopPrice8").innerHTML = "$" + shopItem8Price;
    document.getElementById("shopPrice9").innerHTML = "$" + shopItem9Price;

    if (shopOpened) {

        document.getElementById("shop").style.display = "initial";
        document.getElementById("game").style.display = "none";

    }
    else {

        document.getElementById("shop").style.display = "none";
        document.getElementById("game").style.display = "initial";

    }
    
    if (mystery) {
        
        stars += clickAmount;

    }

}, 20);