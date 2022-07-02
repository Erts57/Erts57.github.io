class Variables {
    getInfo() {
        return {
            id: "variables",
            
            color1: "#FF8C1A",
            
            name: "Variables",
            
            blocks: [
                {
                    opcode: "newVariable",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set [TYPE] [NAME] to [VALUE]",
                    
                    arguments: {
                        TYPE: {
                            menu: "varTypes",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        NAME: {
                            defaultValue: "var",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        VALUE: {
                            defaultValue: "3",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "setVariable",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set [NAME] to [VALUE]",
                    
                    arguments: {
                        NAME: {
                            defaultValue: "var",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        VALUE: {
                            defaultValue: "10",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "setItemInList",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "replace item [SLOT] in [TYPE] [NAME] to [VALUE]",
                    
                    arguments: {
                        SLOT: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        TYPE: {
                            menu: "list",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        NAME: {
                            defaultValue: "array",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        VALUE: {
                            defaultValue: "8",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
            ],
            
            menus: {
                varTypes: {
                    items: ["int", "string", "kit", "array", "item", "bool"],
                    
                    acceptReporters: false
                },
                list: {
                    items: ["array", "kit"],
                    
                    acceptReporters: false
                }
            }
        }
    }
}
Scratch.extensions.register(new Variables());