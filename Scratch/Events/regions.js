class Regions {
    getInfo() {
        return {
            id: "regions",
            
            color1: "#9233ff",
            
            name: "Regions",
            
            blocks: [
                {
                    opcode: "createRegion",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "create region [NAME] at x1:[TX] y1:[TY] x2:[BX] y2:[BY]",
                    
                    arguments: {
                        NAME: {
                            defaultValue: "region",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        TX: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        TY: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        BX: {
                            defaultValue: 10,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        BY: {
                            defaultValue: 10,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                    }
                },
                {
                    opcode: "editRegion",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    branchCount: 1,
                    
                    text: "edit region [NAME]",
                    
                    arguments: {
                        NAME: {
                            defaultValue: "region",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "setAttribute",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set attribute [ATT] to [VALUE]",
                    
                    arguments: {
                        ATT: {
                            menu: "regionAttributes",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        VALUE: {
                            defaultValue: "0",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                }
            ],
            
            menus: {
                regionAttributes: {
                    items: ["building", "pvp", "pve", "spike damage", "auto heal", "auto feed", "auto warm", "auto water", "auto heal amount", "auto feed amount", "auto warm amount", "auto water amount", "red warm bar", "entities", "animal spawning", "player spawning", "entity movement", "natural regeneration", "breaking", "OP ignore attributes", "death", "players", "drowning", "always day", "crafting", "events", "commands", "dropping", "boxes"],
                    
                    acceptReporters: false
                }
            }
        }
    }
}
Scratch.extensions.register(new Regions());