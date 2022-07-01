var abcs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

class Extras {

    constructor() { }

    getInfo() {
        return {
            id: "sExtras",
            name: "Extras",

            color1: "#8BC34A",
            color2: "#7CB342",

            blocks: [
                
            ],

            menus: {
                startend: {
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
    
}
Scratch.extensions.register(new Extras());