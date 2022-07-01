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
                    opcode: "ternaryBlock",

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
                },
                {
                    opcode: "substringBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "letters [F] to [S] of [T]",

                    arguments: {
                        F: {
                            type: Scratch.ArgumentType.NUMBER,

                            defaultValue: 2
                        },
                        S: {
                            type: Scratch.ArgumentType.NUMBER,

                            defaultValue: 4
                        },
                        T: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "string"
                        }
                    }
                },
                {
                    opcode: "softReplaceBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "replace [O] with [N] in [T]",

                    arguments: {
                        O: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "World"
                        },
                        N: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "Universe"
                        },
                        T: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "Hello World!"
                        }
                    }
                },
                {
                    opcode: "strictReplaceBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "[O] = [N] in [T]",

                    arguments: {
                        O: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "e"
                        },
                        N: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "a"
                        },
                        T: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "eaeeeaea"
                        }
                    }
                },
                {
                    opcode: "startEndWithBlock",

                    blockType: Scratch.BlockType.BOOLEAN,

                    text: "[T] [MENU] with [L] ?",

                    arguments: {
                        T: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "Sample Text"
                        },
                        MENU: {
                            type: Scratch.ArgumentType.NUMBER,

                            menu: "startend"
                        },
                        L: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "Text"
                        }
                    }
                },
                {
                    opcode: "searchBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "index of [I] in [T]",

                    arguments: {
                        I: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "are"
                        },
                        T: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "How are you?"
                        }
                    }
                },
                {
                    opcode: "toCaseBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "make [T] to [MENU]",

                    arguments: {
                        T: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "HeLlO pEoPlE"
                        },
                        MENU: {
                            type: Scratch.ArgumentType.NUMBER,

                            menu: "cases"
                        }
                    }
                },
                {
                    opcode: "piBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "pi",

                    arguments: { }
                },
                {
                    opcode: "microBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "micro",

                    arguments: { }
                },
                {
                    opcode: "charCodeBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "character code at [I] in [T]",

                    arguments: {
                        I: {
                            type: Scratch.ArgumentType.NUMBER,

                            defaultValue: 1
                        },
                        T: {
                            type: Scratch.ArgumentType.NUMBER,

                            defaultValue: "foo"
                        }
                    }
                },
                {
                    opcode: "charCodeToBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "character code [C] to character",

                    arguments: {
                        C: {
                            type: Scratch.ArgumentType.NUMBER,

                            defaultValue: 47
                        }
                    }
                },
                {
                    opcode: "trimBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "trim [T]",

                    arguments: {
                        T: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: '     trim me      '
                        }
                    }
                },
                {
                    opcode: "nanBlock",

                    blockType: Scratch.BlockType.BOOLEAN,

                    text: "is [V] NaN?",

                    arguments: {
                        V: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "hi"
                        }
                    }
                },
                {
                    opcode: "msBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "current millisecond",

                    arguments: { }
                },
                {
                    opcode: "abcsBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "ABCs array",

                    arguments: { }
                }/*,
                {
                    opcode: "fetchHTMLBlock",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "fetch html from [W]",

                    arguments: {
                        W: {
                            type: Scratch.BlocksType.STRING,

                            defaultValue: "https://www.google.com"
                        }
                    }
                }*/
            ],
            
            menus: {
                bools: {
                    items: ["true", "false"],

                    acceptReporters: true
                },
                startend: {
                    items: ["starts", "ends"]
                },
                cases: {
                    items: ["UPPERCASE", "lowercase", "camelCase", "Capitalize"]
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
    substringBlock({F,S,T}) {
        return T.substring(F - 1, S);
    }
    softReplaceBlock({O,N,T}) {
        return T.toString().replace(O, N);
    }
    strictReplaceBlock({O,N,T}) {
        return T.toString().replace(new RegExp(O, 'gi'), N);
    }
    startEndWithBlock({T,MENU,L}) {
        if (MENU == "starts") {
            return T.startsWith(L);
        } else if (MENU == "ends") {
            return T.endsWith(L);
        }
    }
    searchBlock({I,T}) {
        return T.search(I) + 1;
    }
    toCaseBlock({T,MENU}) {
        switch (MENU) {
            case "UPPERCASE":
                return T.toUpperCase();
            case "lowercase":
                return T.toLowerCase();
            case "camelCase":
                return camelize(T);
            case "Capitalize":
                return capitalize(T);
        }
    }
    piBlock() {
        return Math.PI;
    }
    microBlock() {
        return 0.000001;
    }
    charCodeBlock({I,T}) {
        return T.charCodeAt(I - 1);
    }
    charCodeToBlock({C}) {
        return String.fromCharCode(C);
    }
    trimBlock({T}) {
        return T.trim();
    }
    nanBlock({V}) {
        return isNaN(V);
    }
    msBlock() {
        return Date.now() % 1000;
    }
    abcsBlock() {
        return abcs.toString();
    }
    /*fetchHTMLBlock({W}) {
        return fetch(W).then(res => res.text())
            .catch(err => '');
    }*/
}
Scratch.extensions.register(new Extras());