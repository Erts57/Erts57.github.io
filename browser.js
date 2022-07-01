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
        window.alert(M.toString());
    }
}
Scratch.extensions.register(new Browser());