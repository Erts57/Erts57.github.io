class Functions {
    getInfo() {
        return {
            id: "functions",
            
            color1: "#9de600",
            
            name: "Functions",
            
            blocks: [
                {
                    opcode: "doOnceServerSide",
                    
                    blockType: Scratch.BlockType.HAT,
                    
                    text: "do once server-side"
                },
                {
                    opcode: "globalEvents",
                    
                    blockType: Scratch.BlockType.HAT,
                    
                    text: "global events"
                },
                {
                    opcode: "eventsForWorld",
                    
                    blockType: Scratch.BlockType.HAT,
                    
                    text: "events for world [WORLD]",
                    
                    arguments: {
                        WORLD: {
                            menu: "worlds",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "commandExecuted",
                    
                    blockType: Scratch.BlockType.HAT,
                    
                    text: "when custom command [CMD] is executed",
                    
                    arguments: {
                        CMD: {
                            defaultValue: "",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "setStarterKit",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set starter kit to [KIT]",
                    
                    arguments: {
                        KIT: {
                            defaultValue: "",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "doForWorld",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "do for world [WORLD]",
                    
                    arguments: {
                        WORLD: {
                            menu: "worlds",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                }
            ],
            
            menus: {
                worlds: {
                    items: ["hub-1", "hub-2", "hub-3", "keypvp", "classic-survival", "survival", "snadbox", "event", "bedwars-lobby", "bedwars", "city", "zma", "maze", "tag-lobby", "tag"],
                    
                    acceptReporters: true
                }
            }
        }
    }
}
Scratch.extensions.register(new Functions());