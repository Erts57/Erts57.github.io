var abcs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
    {
        return chr.toUpperCase();
    });
}
function capitalize(str) {
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    return arr.join(" ");
}

class Extras {
    
    constructor() { }
    
    getInfo() {
        return {
            id: "extras",
            name: "Extra",
            
            color1: "#8BC34A",
            color2: "#7CB342",
            
            blocks: [
                {
                    opcode: "boolBlock",

                    blockType: Scratch.BlockType.BOOLEAN,

                    text: "[MENU]",

                    arguments: {
                        MENU: {
                            type: Scratch.ArgumentType.NUMBER,

                            menu: "bools"
                        }
                    }
                }
            ],
            
            menus: {
                bools: {
                    items: ["true", "false"],

                    acceptReporters: true
                }
            }
        }
    }
}
Scratch.extensions.register(new Extras());