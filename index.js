let json = getFile("Info57/updates.json")

json.updates.forEach(addElement);

function addElement(element) {
    var updates = document.getElementById("updates");
    var elementThing = document.createElement(element.element);
    if (element.element == "p") {
        elementThing.innerHTML = element.innerText;
    }
    updates.appendChild(elementThing);
}

async function getFile(src) {
    let myObject = await fetch(src)
    let myJson = myObject.json();
    return myJson;
}