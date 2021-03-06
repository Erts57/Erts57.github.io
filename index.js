var abcs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

class Extras {

    constructor() {

    }

    getInfo() {
        return {
            id: "",
            name: "",

            color1: "#8BC34A",
            color2: "#7CB342",

            blocks: [{
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
                STARTEND: {
                    items: ["starts", "ends"]
                },
                CASES: {
                    items: ["UPPERCASE", "lowercase", "camelCase", "Capitalize"]
                },
                BOOLEANS: {
                    items: ["true", "false"],

                    acceptReporters: true
                }
            }
        }
    }
    //https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
    camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }
    boolBlock({
        MENU
    }) {
        if (MENU == "" || MENU == 0 || MENU == null || MENU == false || MENU == "false" || MENU == "f" || MENU == "0") {
            return false;
        } else {
            return true;
        }
    }
    ternaryBlock({
        C,
        T,
        E
    }) {
        return C ? T : E;
    }
    substringBlock({
        F,
        S,
        T
    }) {
        return T.substring(F - 1, S);
    }
    softReplace({
        O,
        N,
        T
    }) {
        return T.toString().replace(O, N);
    }
    startEndWithBlock({
        T,
        MENU,
        L
    }) {
        if (MENU == "starts") {
            return T.startsWith(L);
        } else if (MENU == "ends") {
            return T.endsWith(L);
        }
    }
    searchBlock({
        I,
        T
    }) {
        return T.search(T) + 1;
    }
    toCaseBlock({
        T,
        MENU
    }) {
        if (MENU == "UPPERCASE") {
            return T.toUpperCase();
        } else if (MENU == "lowercase") {
            return T.toLowerCase();
        } else if (MENU == "camelCase") {
            return this.camelize(T);
        } else {
            return T.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))); //https://www.digitalocean.com/community/tutorials/js-capitalizing-strings
        }
    }
    piBlock() {
        return Math.PI;
    }
    microBlock() {
        return 0.000001;
    }
    charCodeBlock({
        I,
        T
    }) {
        return T.charCodeAt(I - 1);
    }
    charCodeToBlock({
        C
    }) {
        return String.fromCharCode(C);
    }
    nanBlock({
        V
    }) {
        return isNaN(V);
    }
    evalBlock({
        A
    }) {
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
    strictReplaceBlock({
        O,
        N,
        T
    }) {
        return T.toString().replace(new RegExp(O, 'gi'), N);
    }
    trimBlock({
        T
    }) {
        return T.trim();
    }
    fetchHTML({
        W
    }) {
        return fetch(W)
            .then(res => res.text())
            .catch(err => '');
    }
}
class Json {

    constructor() {

    }

    getInfo() {
        return {
            id: "",
            name: "",

            blocks: [{
                    opcode: "split",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "split [T] by [V]",

                    arguments: {
                        T: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "How are you doing Bob?"
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
                    opcode: 'parseJSON',

                    blockType: Scratch.BlockType.REPORTER,

                    text: '[PATH] of [JSON_STRING]',
                    arguments: {
                        PATH: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'fruit/apples'
                        },
                        JSON_STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
                        }
                    },

                    func: "parseJSON"
                },
                {
                    opcode: 'fetchFrom',

                    blockType: Scratch.BlockType.REPORTER,

                    text: 'fetch JSON data from [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://translate-service.scratch.mit.edu/translate?language=eo&text=hello'
                        }
                    },

                    func: "fetchJSON"
                }
            ],

            menus: {

            }
        }
    }
    splitBlock({
        T,
        V
    }) {
        const s = T.split(V);
        return s.toString();
    }
    fromArrayBlock({
        I,
        A
    }) {
        const a = A.split(",");
        return a[I - 1];
    }
    //https://sheeptester.github.io/javascripts/utilities.js
    fetchJSON({
        URL
    }) {
        return fetch(URL).then(res => res.text())
            .catch(err => '');
    }
    parseJSON({
        PATH,
        JSON_STRING
    }) {
        try {
            const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
            if (path[0] === '') path.splice(0, 1);
            if (path[path.length - 1] === '') path.splice(-1, 1);
            let json;
            try {
                json = JSON.parse(' ' + JSON_STRING);
            } catch (e) {
                return e.message;
            }
            path.forEach(prop => json = json[prop]);
            if (json === null) return 'null';
            else if (json === undefined) return '';
            else if (typeof json === 'object') return JSON.stringify(json);
            else return json.toString();
        } catch (err) {
            return '';
        }
    }
}
Scratch.extensions.register(new Extras());
Scratch.extensions.register(new Json());