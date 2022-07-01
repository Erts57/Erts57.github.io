function alertFunction(message) {
    window.alert(message);
}
class Browser {

    constructor() { }

    getInfo() {
        return {
            id: "browser",
            name: "Browser",

            blocks: [
                {
                    opcode: "alertBlock",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "alert [M]",
                    
                    arguments: {
                        M: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defualtValue: "Hello World!"
                        }
                    }
                }
            ]
        }
    }
    alertBlock({M}) {
        alertFunction(M.toString());
    }
}
Scratch.extensions.register(new Browser());