var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

class Extras {
    getInfo() {
        return {
            id: "extras",
            name: "Extra",
            
            color1: "#eb4034",
            color2: "#db3a2e",
            
            blocks: [
                {
                    opcode: "bool",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[MENU]",
                    
                    arguments: {
                        MENU: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            menu: "bools"
                        }
                    },
                    
                    func: "boolBlock"
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
                    },
                    
                    func: "ternaryBlock"
                },
                {
                    opcode: "substring",
                    
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
                    },
                    
                    func: "substringBlock"
                },
                {
                    opcode: "softReplace",
                    
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
                    },
                    
                    func: "softReplaceBlock"
                },
                {
                    opcode: "strictReplace",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "[O] = [N] | [T]",
                    
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
                    },
                    
                    func: "strictReplaceBlock"
                },
                {
                    opcode: "startEndWith",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[T] [MENU] with [L] ?",
                    
                    arguments: {
                        T: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Sample Text"
                        },
                        MENU: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            menu: "startEnd"
                        },
                        L: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Text"
                        }
                    },
                    
                    func: "startEndWithBlock"
                },
                {
                    opcode: "search",
                    
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
                    },
                    
                    func: "searchBlock"
                },
                {
                    opcode: "toCase",
                    
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
                    },
                    
                    func: "toCaseBlock"
                },
                {
                    opcode: "pi",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "math PI",
                    
                    arguments: { },
                    
                    func: "piBlock"
                },
                {
                    opcode: "e",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "math E",
                    
                    arguments: { },
                    
                    func: "eBlock"
                },
                {
                    opcode: "split",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "split [T] by [V]",
                    
                    arguments: {
                        T: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "How are you?"
                        },
                        V: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "o"
                        }
                    },
                    
                    func: "splitBlock"
                },
                {
                    opcode: "fromArray",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "item [I] from array [A]",
                    
                    arguments: {
                        I: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 2
                        },
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: "1,9,3,8,5,6"
                        }
                    },
                    
                    func: "fromArrayBlock"
                },
                {
                    opcode: "charCode",
                    
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
                    },
                    
                    func: "charCodeBlock"
                },
                {
                    opcode: "charCodeTo",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "character code [C] to character",
                    
                    arguments: {
                        C: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 47
                        }
                    },
                    
                    func: "charCodeToBlock"
                },
                {
                    opcode: "trim",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "trim [T]",
                    
                    arguments: {
                        T: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: '     trim me      '
                        }
                    },
                    
                    func: "trimBlock"
                },
                {
                    opcode: "nan",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "is [V] NaN?",
                    
                    arguments: {
                        V: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "hi"
                        }
                    },
                    
                    func: "nanBlock"
                },
                {
                    opcode: "eval",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "evaluate [JS]",
                    
                    arguments: {
                        JS: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "2 + 2"
                        }
                    },
                    
                    func: "evalBlock"
                },
                {
                    opcode: "ms",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "current millisecond",
                    
                    arguments: { },
                    
                    func: "msBlock"
                },
                {
                    opcode: "abcs",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "ABCs array",
                    
                    arguments: { },
                    
                    func: "abcBlock"
                }
            ],
            
            menus: {
                startEnd: {
                    items: ["starts", "ends"]
                },
                cases: {
                    items: ["UPPERCASE", "lowercase"]
                },
                bools: {
                    items: ["true", "false"],
                    
                    acceptReporters: true
                }
            }
        }
    }
    boolBlock({MENU}) {
        if (MENU == "" || MENU == 0 || MENU == null || MENU == false || MENU == "false" || MENU == "f" || MENU == "0") {
            return false;
        } else {
            return true;
        }
    }
    ternaryBlock({C, T, E}) {
        return C ? T : E;
    }
    substringBlock({F, S, T}) {
        return T.substring(F - 1, S);
    }
    softReplace({O, N, T}) {
        return T.toString().replace(O, N);
    }
    startEndWithBlock({T, MENU, L}) {
        if (MENU == "starts") {
            return T.startsWith(L);
        } else if (MENU == "ends") {
            return T.endsWith(L);
        }
    }
    searchBlock({I, T}) {
        return T.search(T) + 1;
    }
    toCaseBlock({T, MENU}) {
        if (MENU == "UPPERCASE") {
            return T.toUpperCase();
        } else if (MENU == "lowercase") {
            return T.toLowerCase();
        }
    }
    piBlock() {
        return Math.PI;
    }
    eBlock() {
        return Math.E;
    }
    splitBlock({T, V}) {
        const s = T.split(V);
        return s.toString();
    }
    fromArrayBlock({I, A}) {
        const a = A.split(",");
        return a[I - 1];
    }
    charCodeBlock({I, T}) {
        return T.charCodeAt(I - 1);
    }
    charCodeToBlock({C}) {
        return String.fromCharCode(C);
    }
    nanBlock({V}) {
        return isNaN(V);
    }
    evalBlock({A}) {
        try {
            return eval(A);
        } catch (err) {
            return err;
        }
    }
    msBlock() {
        return Date.now() % 1000;
    }
    abcBlock() {
        return abc.toString();
    }
    strictReplaceBlock({O, N, T}) {
        return T.toString().replace(new RegExp(O, 'gi'), N);
    }
    trimBlock({T}) {
        return T.trim();
    }
}
Scratch.extensions.register(new Extras());