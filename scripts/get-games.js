import games from '../json/games.json' assert { "type": "json" };

function putGameCards() {
    const a = document.getElementById("scratch-area");
    const b = document.getElementById("turbowarp-area");
    const c = document.getElementById("adacraft-area");
    const d = document.getElementById("gamelab-area");
    const e = document.getElementById("html5-area");
    const f = document.getElementById("unity-area");
    
    const gameTypes = {
        types: [
            'scratch',
            'turbowarp',
            'adacraft',
            'gamelab',
            'html5',
            'unity'
        ],
        elements: [
            a, b, c, d, e, f // This seems weird but it works
        ]
    };
    
    gameTypes.types.forEach((o) => {
        if (games[o].length > 0) {
            gameTypes.elements[gameTypes.types.indexOf(o)].children[0].remove();
            games[o].forEach((i) => {
                var anchor = document.createElement("a");
                var image = document.createElement(i.type);
                anchor.href = i.link;
                image.src = i.src;
                image.alt = i.alt;
                anchor.appendChild(image);
                gameTypes.elements[gameTypes.types.indexOf(o)].appendChild(anchor);
                
            });
            
        }
    });
    
}

putGameCards();
