class Lists {
    getInfo() {
        return {
            id: "lists",
            
            color1: "#FF661A",
            
            name: "Lists",
            
            blocks: [
                {
                    opcode: "newList",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "new [LIST] with [a][b][c][d][e][f][g][h][i][j]",
                    
                    arguments: {
                        LIST: {
                            menu: "list",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        a: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        b: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        c: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        d: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        e: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        f: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        g: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        h: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        i: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        j: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "listContains",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[LIST][NAME] contains [VALUE]?",
                    
                    arguments: {
                        LIST: {
                            menu: "list",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        NAME: {
                            defaultValue: "array",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        VALUE: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "itemInList",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "item [SLOT] in [LIST][NAME]",
                    
                    arguments: {
                        SLOT: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        LIST: {
                            menu: "list",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        NAME: {
                            defaultValue: "array",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "itemNumberInList",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "item # of [ITEM] in [LIST][NAME]",
                    
                    arguments: {
                        ITEM: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        LIST: {
                            menu: "list",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        NAME: {
                            defaultValue: "array",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                }
            ],
            
            menus: {
                list: {
                    items: ["array", "kit"],
                    
                    acceptReporters: false
                }
            }
        }
    }
    newList({LIST, a, b, c, d, e, f, g, h, i, j}) {
        return "["+[a, b, c, d, e, f, g, h, i, j].toString()+"]";
    }
    listContains({LIST, NAME, VALUE}) {
        return true;
    }
    itemInList({SLOT, LIST, NAME}) {
        return "foo";
    }
    itemNumberInList({ITEM, LIST, NAME}) {
        return 0;
    }
}
Scratch.extensions.register(new Lists());