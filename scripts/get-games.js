import games from '../json/games.json' assert { "type": "json" };

function putGameCards() {
    const a = document.getElementById("scratch-area");
    const b = document.getElementById("turbowarp-area");
    const c = document.getElementById("adacraft-area");
    const d = document.getElementById("gamelab-area");
    const e = document.getElementById("html5-area");
    const f = document.getElementById("unity-area");
    
    // ! LEFT OFF WORKING HERE !
    
    if (games['scratch'].length > 0) {
        a.children[0].remove();
        games['scratch'].forEach((i) => {
            var anchor = document.createElement("a");
            var image = document.createElement(i.type);
            anchor.href = i.link;
            image.src = i.src;
            image.alt = i.alt;
            image.style.width = "300px";
            image.style.height = "260px";
            anchor.appendChild(image);
            a.appendChild(anchor);
            
        });
        
    }
}

putGameCards();
