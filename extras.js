var abcs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

class Extras {

    //constructor() { }

    getInfo() {
        return {
            id: "extras",
            name: "Extra",

            color1: "#8BC34A",
            color2: "#7CB342",

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

                            menu: "startend"
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

                    arguments: {},

                    func: "piBlock"
                },
                {
                    opcode: "micro",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "micro",

                    arguments: {},

                    func: "microBlock"
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
                    opcode: "notANumber",

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
                    opcode: "ms",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "current millisecond",

                    arguments: {},

                    func: "msBlock"
                },
                {
                    opcode: "abcs",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "ABCs array",

                    arguments: {},

                    func: "abcBlock"
                },
                {
                    opcode: "fetchHTML",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "fetch html from [W]",

                    arguments: {
                        W: {
                            type: Scratch.BlocksType.STRING,

                            defaultValue: "https://www.google.com"
                        }
                    },

                    func: "fetchHTML"
                }
            ],

            menus: {
                startend: {
                    items: ["starts", "ends"]
                },
                cases: {
                    items: ["UPPERCASE", "lowercase", "camelCase", "Capitalize"]
                },
                bools: {
                    items: ["true", "false"],

                    acceptReporters: true
                }
            }
        }
    }
    
}
Scratch.extensions.register(new Extras());