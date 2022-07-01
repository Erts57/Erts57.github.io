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
                },
                {
                    opcode: "ternary",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "if [C] then [T] else [E]",

                    arguments: {
                        C: {
                            type: Scratch.ArgumentType.BOOLEAN
                        },
                        T: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "this"
                        },
                        E: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "that"
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
    boolBlock({MENU}) {
        if (MENU == "" || MENU == 0 || MENU == null || MENU == false || MENU.toString().toLowerCase() == "false" || MENU.toString().toLowerCase() == "f" || MENU.toString() == "0" || MENU <= 0) {
            return false;
        } else {
            return true;
        }
    }
    ternaryBlock({C,T,E}) {
        return C ? T : E;
    }
}
Scratch.extensions.register(new Extras());