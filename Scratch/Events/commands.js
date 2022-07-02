class Commands {
    getInfo() {
        return {
            id: "commands",
            
            color1: "#00a6ff",
            
            name: "Commands",
            
            blocks: [
                {
                    opcode: "kill",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "kill [ID] for [REASON]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        REASON: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "killall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "kill everyone for [REASON] | ignore OP [OPTION]",
                    
                    arguments: {
                        REASON: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "killat",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "kill at x:[X] y:[Y] for [REASON] | ignore OP [OPTION]",
                    
                    arguments: {
                        X: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        Y: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        REASON: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "heal",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "heal [ID]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "healall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "heal everyone",
                    
                    arguments: {
                        
                    }
                },
                {
                    opcode: "tp",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "teleport [ID] to x:[X] y:[Y]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        X: {
                            defaultValue: 10,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        Y: {
                            defaultValue: 10,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "tpt",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "teleport [ID] to [OTHER]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        OTHER: {
                            defaultValue: 2,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "tpa",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "teleport everyone to x:[X] y:[Y] | ignore OP [OPTION]",
                    
                    arguments: {
                        X: {
                            defaultValue: 2,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        Y: {
                            defaultValue: 2,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "tpat",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "teleport everyone to [ID] | ignore OP [OPTION]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 7,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "tpw",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "teleport [ID] to [WORLD]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        WORLD: {
                            menu: "worlds",

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "flag",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set [RULE] to [OPTION]",
                    
                    arguments: {
                        RULE: {
                            menu: "rules",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        OPTION: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "killentity",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "kill all entity [ENTITIES]",
                    
                    arguments: {
                        ENTITIES: {
                            menu: "entityTags",

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "kick",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "kick [ID] for [REASON]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 3,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        REASON: {
                            defaultValue: "Spamming",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "kickall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "kick everyone | ignore OP [OPTION]",
                    
                    arguments: {
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "ban",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "ban [ID] for [REASON]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 3,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        REASON: {
                            defaultValue: "Lots of Hacking",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "tempban",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "temperary ban [ID] for [TIME] minutes for [REASON]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 3,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        TIME: {
                            defaultValue: 60,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        REASON: {
                            defaultValue: "Hacking",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "broadcast",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "broadcast [MESSAGE]",
                    
                    arguments: {
                        MESSAGE: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "broadcastto",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "broadcast [MESSAGE] to [ID]",
                    
                    arguments: {
                        MESSAGE: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        },
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "clearchat",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "clear chat"
                },
                {
                    opcode: "chat",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "chat [MESSAGE] with hover [HOVER]",
                    
                    arguments: {
                        MESSAGE: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        },
                        HOVER: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "chatto",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "chat [MESSAGE] to [ID] with hover [HOVER]",
                    
                    arguments: {
                        MESSAGE: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        },
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        HOVER: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "sudochat",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "sudo [ID] to chat [MESSAGE]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        MESSAGE: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "deletelastmessage",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "delete last message for [ID]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "cancelcraft",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "cancel current craft for [ID]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "welcome",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set welcome to [MESSAGE]",
                    
                    arguments: {
                        MESSAGE: {
                            defaultValue: "Welcome to the server!",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "reload",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "reload [RELOAD]",
                    
                    arguments: {
                        RELOAD: {
                            menu: "reloadable",

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "reloadworld",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "reload world [WORLD]",
                    
                    arguments: {
                        WORLD: {
                            menu: "worlds",

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "restart",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "restart server"
                },
                {
                    opcode: "gamemode",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set gamdmode for [ID] to [GAMEMODE]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        GAMEMODE: {
                            menu: "gamemodes",

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "gamemodeall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set gamemode for everyone to [GAMEMODE] | ignore OP [OPTION]",
                    
                    arguments: {
                        GAMEMODE: {
                            menu: "gamemodes",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "clearinv",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "clear inventory for [ID]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "clearinvall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "clear inventory for everyone | ignore OP [OPTION]",
                    
                    arguments: {
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "give",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "give [ID] [ITEM]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        ITEM: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "giveall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "give everyone [ITEM]",
                    
                    arguments: {
                        ITEM: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "remove",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "remove [ITEM] from [ID]",
                    
                    arguments: {
                        ITEM: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        },
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "removeall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "remove [ITEM] from everyone | ignore OP [OPTION]",
                    
                    arguments: {
                        ITEM: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "givekit",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "give [ID] kit [KIT]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        KIT: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "givekitall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "give everyone kit [KIT] | ignore OP [OPTION]",
                    
                    arguments: {
                        KIT: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "set",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set [SKD] to [VALUE] for [ID]",
                    
                    arguments: {
                        SKD: {
                            menu: "skd",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        VALUE: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "setall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set [SKD] to [VALUE] for everyone | ignore OP [OPTION]",
                    
                    arguments: {
                        SKD: {
                            menu: "skd",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        VALUE: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "changeall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "change [SKD] by [VALUE] for everyone | ignore OP [OPTION]",
                    
                    arguments: {
                        SKD: {
                            menu: "skd",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        VALUE: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "clearallbuildings",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "clear all buildings"
                },
                {
                    opcode: "clearbuilding",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "clear building:[BUILDING] at x:[X] y:[Y] ",
                    
                    arguments: {
                        BUILDING: {
                            menu: "buildingsWany",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        X: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        Y: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "spawnbuilding",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "spawn building:[BUILDING] at x:[X] y:[Y]",
                    
                    arguments: {
                        BUILDING: {
                            menu: "buildings",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        X: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        Y: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "spawnchest",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "spawn chest at x:[X] y:[Y] with [ITEM]",
                    
                    arguments: {
                        X: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        Y: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        ITEM: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "dropitem",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "drop [ITEM] at x:[X] y:[Y]",
                    
                    arguments: {
                        ITEM: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        },
                        X: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        Y: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "effect",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "effect [ID] with [EFFECT] for [TIME] seconds",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        EFFECT: {
                            menu: "effects",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        TIME: {
                            defaultValue: 60,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "effectall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "effect everyone with [EFFECT] for [TIME] seconds",
                    
                    arguments: {
                        EFFECT: {
                            menu: "effects",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        TIME: {
                            defaultValue: 60,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "mudermode",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "start mudermode for [TIME] seconds [DEAD] dead | ignore OP [OPTION]",
                    
                    arguments: {
                        TIME: {
                            defaultValue: 600,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        DEAD: {
                            defaultValue: 10,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "stopmurdermode",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "end murder mode"
                },
                {
                    opcode: "removeeffect",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "remove [EFFECT] from [ID]",
                    
                    arguments: {
                        EFFECT: {
                            menu: "effectsWall",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "removeeffectall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "remove [EFFECT] from everyone | ignore OP [OPTION]",
                    
                    arguments: {
                        EFFECT: {
                            menu: "effectsWall",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "forcedrop",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "make [ID] drop slot [SLOT]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        SLOT: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "replaceslot",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "replace slot [SLOT] of [ID] to [ITEM]",
                    
                    arguments: {
                        SLOT: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        ITEM: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "replaceslotall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "replace slot [SLOT] of everyone to [ITEM] | ignore OP [OPTION]",
                    
                    arguments: {
                        SLOT: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        ITEM: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        },
                        OPTION: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "refreshid",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "refresh id for [ID]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,

                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "refreshidall",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "refresh id for everyone"
                },
                {
                    opcode: "spawn",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "spawn [ENTITY] at x:[X] y:[Y] with extra data [DATA]",
                    
                    arguments: {
                        ENTITY: {
                            menu: "entities",

                            type: Scratch.ArgumentType.NUMBER
                        },
                        X: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        Y: {
                            defaultValue: 0,

                            type: Scratch.ArgumentType.NUMBER
                        },
                        DATA: {
                            defaultValue: "",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
            ],
            
            menus: {
                worlds: {
                    items: ["hub-1", "hub-2", "hub-3", "keypvp", "classic-survival", "survival", "snadbox", "event", "bedwars-lobby", "bedwars", "city", "zma", "maze", "tag-lobby", "tag"],
                    
                    acceptReporters: true
                },
                entityTags: {
                    items: ["ALL", "animals", "evil", "boxes", "arrows", "other"],
                
                    acceptReporters: true
                },
                reloadable: {
                    items: ["plugins", "mods", "cache"],
                
                    acceptReporters: true
                },
                skd: {
                    items: ["score", "kills", "days"],
                
                    acceptReporters: true
                },
                gamemodes: {
                    items: ["survival", "creative", "godmode", "spectator", "visitor"],
                
                    acceptReporters: true
                },
                effects: {
                    items: ["speed", "slowness", "blinding", "floating", "ghostly", "poison", "regeneration", "luck", "strength", "weakness", "build fatigue", "pure heart", "grimm heart"],
                
                    acceptReporters: true
                },
                effectsWall: {
                    items: ["ALL", "speed", "slowness", "blinding", "floating", "ghostly", "poison", "regeneration", "luck", "strength", "weakness", "build fatigue", "pure heart", "grimm heart"],
                
                    acceptReporters: true
                },
                buildings: {
                    items: ["Wood Spike", "Wood Wall", "Wood Door", "Wood Spike Door", "Stone Spike", "Stone Wall", "Stone Door", "Stone Spike Door", "Gold Spike", "Gold Wall", "Gold Door", "Gold Spike Door", "Iron Spike", "Iron Wall", "Iron Door", "Iron Spike Door", "Diamond Spike", "Diamond Wall", "Diamond Door", "Diamond Spike Door", "Ruby Spike", "Ruby Wall", "Ruby Door", "Ruby Spike Door", "Emerald Spike", "Emerald Wall", "Emerald Door", "Emerald Spike Door", "Red Diamond Spike", "Red Diamond Wall", "Red Diamond Door", "Red Diamond Spike Door", "Plot", "Roof", "Stone Roof", "Clay Plot", "Wood Flooring", "Resurrection Stone", "Campfire", "Big Campfire", "Furnace", "Power Furnace", "Crafting Bench", "Chest", "Iron Chest", "Diamond Chest", "Totem", "Well", "Score Generator", "Bridge", "Stone Bridge", "Sign", "Bed", "Tower", "Iron Tower", "Stone Tower", "Strawberry Seeds", "Wheat Seeds", "Pumpkin Seeds", "Jack O' Lantern", "Potato Seeds", "Garlic Seeds", "Tomato Seeds", "Thornbush Seeds", "Watermelon Seeds", "Carrot Seeds", "Aloe Vera Seeds", "Windmill", "Bread Oven", "Glass Roof", "Admin Wall", "Admin Door", "Admin Spike", "Admin Spike Door", "Admin Bridge", "Admin Roof", "Admin Tower", "Red Team Wall", "Blue Team Wall", "Green Team Wall", "Yellow Team Wall", "Orange Team Wall", "Purple Team Wall", "Teal Team Wall", "Pink Team Wall", "Red Team Door", "Blue Team Door", "Green Team Door", "Yellow Team Door", "Orange Team Door", "Purple Team Door", "Teal Team Door", "Pink Team Door", "Red Team Spike", "Blue Team Spike", "Green Team Spike", "Yellow Team Spike", "Orange Team Spike", "Purple Team Spike", "Teal Team Spike", "Pink Team Spike", "Red Team Spike Door", "Blue Team Spike Door", "Green Team Spike Door", "Yellow Team Spike Door", "Orange Team Spike Door", "Purple Team Spike Door", "Teal Team Spike Door", "Pink Team Spike Door", "Red Team Roof", "Blue Team Roof", "Green Team Roof", "Yellow Team Roof", "Orange Team Roof", "Purple Team Roof", "Teal Team Roof", "Pink Team Roof", "Red Team Tower", "Blue Team Tower", "Green Team Tower", "Yellow Team Tower", "Orange Team Tower", "Purple Team Tower", "Teal Team Tower", "Pink Team Tower"],
                
                    acceptReporters: true
                },
                buildingsWany: {
                    items: ["ANY", "Wood Spike", "Wood Wall", "Wood Door", "Wood Spike Door", "Stone Spike", "Stone Wall", "Stone Door", "Stone Spike Door", "Gold Spike", "Gold Wall", "Gold Door", "Gold Spike Door", "Iron Spike", "Iron Wall", "Iron Door", "Iron Spike Door", "Diamond Spike", "Diamond Wall", "Diamond Door", "Diamond Spike Door", "Ruby Spike", "Ruby Wall", "Ruby Door", "Ruby Spike Door", "Emerald Spike", "Emerald Wall", "Emerald Door", "Emerald Spike Door", "Red Diamond Spike", "Red Diamond Wall", "Red Diamond Door", "Red Diamond Spike Door", "Plot", "Roof", "Stone Roof", "Clay Plot", "Wood Flooring", "Resurrection Stone", "Campfire", "Big Campfire", "Furnace", "Power Furnace", "Crafting Bench", "Chest", "Iron Chest", "Diamond Chest", "Totem", "Well", "Score Generator", "Bridge", "Stone Bridge", "Sign", "Bed", "Tower", "Iron Tower", "Stone Tower", "Strawberry Seeds", "Wheat Seeds", "Pumpkin Seeds", "Jack O' Lantern", "Potato Seeds", "Garlic Seeds", "Tomato Seeds", "Thornbush Seeds", "Watermelon Seeds", "Carrot Seeds", "Aloe Vera Seeds", "Windmill", "Bread Oven", "Glass Roof", "Admin Wall", "Admin Door", "Admin Spike", "Admin Spike Door", "Admin Bridge", "Admin Roof", "Admin Tower", "Red Team Wall", "Blue Team Wall", "Green Team Wall", "Yellow Team Wall", "Orange Team Wall", "Purple Team Wall", "Teal Team Wall", "Pink Team Wall", "Red Team Door", "Blue Team Door", "Green Team Door", "Yellow Team Door", "Orange Team Door", "Purple Team Door", "Teal Team Door", "Pink Team Door", "Red Team Spike", "Blue Team Spike", "Green Team Spike", "Yellow Team Spike", "Orange Team Spike", "Purple Team Spike", "Teal Team Spike", "Pink Team Spike", "Red Team Spike Door", "Blue Team Spike Door", "Green Team Spike Door", "Yellow Team Spike Door", "Orange Team Spike Door", "Purple Team Spike Door", "Teal Team Spike Door", "Pink Team Spike Door", "Red Team Roof", "Blue Team Roof", "Green Team Roof", "Yellow Team Roof", "Orange Team Roof", "Purple Team Roof", "Teal Team Roof", "Pink Team Roof", "Red Team Tower", "Blue Team Tower", "Green Team Tower", "Yellow Team Tower", "Orange Team Tower", "Purple Team Tower", "Teal Team Tower", "Pink Team Tower"],
                
                    acceptReporters: true
                },
                entities: {
                    items: ["Rabbit", "Spider", "Wolf", "Winter Fox", "Penguin", "Polar Bear", "Mammoth", "Baby Mammoth", "Snake", "Vulture", "Sandworm", "Birb", "Boar", "Lava Dragon", "Dragon", "Baby Lava Dragon", "Baby Dragon", "Fish", "Kraken", "Chicken", "FireFly", "Candy Hog", "Chest Monster", "Bot", "Building"],
                    
                    acceptReporters: true
                }
            }
        }
    }
}
Scratch.extensions.register(new Commands());