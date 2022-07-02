class Events {
    getInfo() {
        return {
            id: "events",
            
            color1: "#ffab19",
            
            name: "Events",
            
            blocks: [
                {
                    opcode: "location",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Location repeat [R] when x:[X] y:[Y] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,

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
                    opcode: "inventory",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Inventory repeat [R] when item:[ITEM] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        ITEM: {
                            defaultValue: "",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        DATA: {
                            defaultValue: "",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "health",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Health repeat [R] when health:[HEALTH] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        HEALTH: {
                            defaultValue: 200,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "score",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Score repeat [R] when score:[SCORE] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        SCORE: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "time",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Time repeat [R] when time:[TIME] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        TIME: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "kill",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Kills repeat [R] when kills:[KILLS] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        KILLS: {
                            defaultValue: 1,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "craft",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Craft repeat [R] when item:[ITEM] do",
                    
                    arguments: {
                        R: {
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
                    opcode: "gamemode",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Gamemode repeat [R] when gamemode:[GAMEMODE] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        GAMEMODE: {
                            menu: "gamemodesF",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "locationInventory",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Location Inventory repeat [R] when x:[X] y:[Y] item:[ITEM] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
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
                        ITEM: {
                            defaultValue: "",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "day",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Day repeat [R] when days:[DAYS] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        DAYS: {
                            defaultValue: 1,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "slot",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Slot repeat [R] when slot:[SLOT] item:[ITEM] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        SLOT: {
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
                    opcode: "locationSlot",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event location Slot repeat [R] when x:[X] y:[Y] slot:[SLOT] item:[ITEM] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
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
                        SLOT: {
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
                    opcode: "recycle",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Recylce repeat [R] when item:[ITEM] do",
                    
                    arguments: {
                        R: {
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
                    opcode: "region",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Region repeat [R] when region:[REGION] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        REGION: {
                            defaultValue: "",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "biome",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event Biome repeat [R] when biome:[BIOME] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        BIOME: {
                            menu: "biomesF",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "world",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event World repeat [R] when world:[WORLD] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        WORLD: {
                            menu: "worldsF",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onKill",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Kill repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onDeath",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Death repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onMove",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Move repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onAttacked",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Attacked repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onTeleport",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Teleport repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onChat",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Chat repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onHeal",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Heal repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onInventoryFull",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Inventory Full repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onMurderMode",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Murder Mode repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onMurderModeFail",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Murder Mode Fail repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onMurderModeComplete",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Murder Mode Complete repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "onRunCommand",
                    
                    blockType: Scratch.BlockType.LOOP,
                    
                    text: "event on Run Command repeat [R] do",
                    
                    arguments: {
                        R: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "endIteration",
                    
                    blockType: Scratch.BlockType.REPORTER,

                    terminal: true,
                    
                    text: "end iteration"
                },
                {
                    opcode: "stopEvent",
                    
                    blockType: Scratch.BlockType.REPORTER,

                    terminal: true,
                    
                    text: "stop event"
                }
            ],
            
            menus: {
                gamemodesF: {
                    items: ["survival", "creative", "godmode", "spectator", "visitor"],
                
                    acceptReporters: false
                },
                worldsF: {
                    items: ["hub-1", "hub-2", "hub-3", "keypvp", "classic-survival", "survival", "snadbox", "event", "bedwars-lobby", "bedwars", "city", "zma", "maze", "tag-lobby", "tag"],
                    
                    acceptReporters: false
                },
                biomesF: {
                    items: ["forest", "winter", "cave", "corrupt forest", "corrupt winter", "lava", "desert", "candy", "island", "ocean", "cave", "beach", "void"],
                
                    acceptReporters: false
                }
            }
        }
    }
}
Scratch.extensions.register(new Events());