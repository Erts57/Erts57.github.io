class MoreBlocks {
    getInfo() {
        return {
            id: "moreblocks",
            
            color1: "#eb4034",
            color2: "#db3a2e",
            
            name: "More Blocks",
            
            blocks: [
                {
                    opcode: "ternary",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "if [A] then [B] else [C]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.BOOLEAN
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "this"
                        },
                        C: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "that"
                        }
                    },
                    
                    func: "ternary"
                },
                {
                    opcode: "substring",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "letters [A] to [B] of [C]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 1
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 5
                        },
                        C: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hello World!"
                        }
                    },
                    
                    func: "substring"
                },
                {
                    opcode: "replace",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "replace [A] with [B] in [C]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "World"
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Universe"
                        },
                        C: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hello World"
                        }
                    },
                    
                    func: "replace"
                },
                {
                    opcode: "endsWith",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[A] ends with [B] ?",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hello there person"
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "person"
                        }
                    },
                    
                    func: "endsWith"
                },
                {
                    opcode: "search",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "index of [A] in [B]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "sunny"
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "It is sunny outside?"
                        }
                    },
                    
                    func: "search"
                },
                {
                    opcode: "startsWith",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[A] starts with [B] ?",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hello there person"
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hello"
                        }
                    },
                    
                    func: "startsWith"
                },
                {
                    opcode: "toCase",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "make [A] to [MENU]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hey there friend!!!"
                        },
                        MENU: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            menu: "cases"
                        }
                    },
                    
                    func: "toCase"
                },
                {
                    opcode: "pi",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "pi",
                    
                    arguments: { },
                    
                    func: "pi"
                },
                {
                    opcode: "exponent",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "[A] ^ [B]",
                    
                    arguments: {
                        A: {
                            type: Scratch.BlockType.NUMBER,

                            defaultValue: 2
                        },
                        B: {
                            type: Scratch.BlockType.NUMBER,

                            defaultValue: 3
                        }
                    },
                    
                    func: "exponent"
                },
                {
                    opcode: "split",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "split [A] by [B]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "How are you doing?"
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "o"
                        }
                    },
                    
                    func: "split"
                },
                {
                    opcode: "fromArray",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "item [A] from array [B]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 1
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "1,2,6,8,5,3,4"
                        }
                    },
                    
                    func: "fromArray"
                },
                {
                    opcode: "charCodeAt",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "character code at [A] in [B]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 1
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "text"
                        }
                    },
                    
                    func: "charCodeAt"
                },
                {
                    opcode: "fromCharCode",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "character from character code [A]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 65
                        }
                    },
                    
                    func: "fromCharCode"
                },
                {
                    opcode: "isnan",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "is [A] NaN?",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: 10
                        }
                    },
                    
                    func: "isnan"
                },
                {
                    opcode: "evalReturn",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "run JavaScript: [A]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "4 * 4"
                        }
                    },
                    
                    func: "evalReturn"
                },
                {
                    opcode: "evalBlock",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "run JavaScript: [A]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "/*do something*/"
                        }
                    },
                    
                    func: "evalBlock"
                },
                {
                    opcode: "evalError",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "eval error",
                    
                    arguments: { },
                    
                    func: "evalError"
                },
                {
                    opcode: "millisecond",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "millisecond",
                    
                    arguments: { },
                    
                    func: "millisecond"
                }
            ],
            
            menus: {
                cases: {
                    items: ["UpperCase", "LowerCase"]
                }
            }
        };
    };
    millisecond() {
        return Date.now() % 1000;
    };
    exponent({A, B}) {
        return Math.pow(A, B);
    };
    ternary({A, B, C}) {
        return A ? B : C;
    };
    substring({A, B, C}) {
        return C.substring(A - 1, B);
    };
    replace({A, B, C}) {
        return C.replace(A, B);
    };
    endsWith({A, B}) {
        return A.endsWith(B);
    };
    search({A, B}) {
        return B.search(A) + 1;
    };
    startsWith({A, B}) {
        return A.startsWith(B);
    };
    toCase({A, MENU}) {
        if (MENU == "UpperCase") {
            return A.toUpperCase();
        }
        else {
            return A.toLowerCase();
        }
    };
    pi() {
        return Math.PI;
    };
    split({A, B}) {
        const thing = A.split(B);
        return thing.toString();
    };
    fromArray({A, B}) {
        const thing = B.split(",");
        return thing[A - 1];
    };
    charCodeAt({A, B}) {
        return B.charCodeAt(A - 1);
    };
    fromCharCode({A}) {
        return String.fromCharCode(A);
    };
    isnan({A}) {
        return isNaN(A);
    };
    evalReturn({A}) {
        return eval(A);
    };
    evalBlock({A}) {
        eval(A);
    };
    evalError() {
        return EvalError;
    };
}
Scratch.extensions.register(new MoreBlocks());