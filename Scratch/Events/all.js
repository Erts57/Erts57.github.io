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

class Library {
    getInfo() {
        return {
            id: "library",
            
            color1: "#00db9d",
            
            name: "Lib",
            
            blocks: [
                {
                    opcode: "pName",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "name of [ID]",
                    
                    arguments: {
                        ID: {
                            defaultValue: 1,
                        
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "id",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "id"
                },
                {
                    opcode: "playerX",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "player x"
                },
                {
                    opcode: "playerY",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "player y"
                },
                {
                    opcode: "ping",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "ping"
                },
                {
                    opcode: "kills",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "kills of [ID]",

                    arguments: {
                        ID: {
                            defaultValue: 1,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "deaths",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "deaths of [ID]",

                    arguments: {
                        ID: {
                            defaultValue: 1,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "days",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "days of [ID]",

                    arguments: {
                        ID: {
                            defaultValue: 1,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "secondsOnline",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "seconds online"
                },
                {
                    opcode: "op",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "operator"
                },
                {
                    opcode: "lastPlace",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "last place id"
                },
                {
                    opcode: "teamId",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "id if team [TEAM]",
                    
                    arguments: {
                        TEAM: {
                            menu: "teams",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "teamScoreTotal",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "team [TEAM] score total",
                    
                    arguments: {
                        TEAM: {
                            menu: "teams",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "teamKillsTotal",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "team [TEAM] kills total",
                    
                    arguments: {
                        TEAM: {
                            menu: "teams",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "bestKills",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "best kills id"
                },
                {
                    opcode: "bestDays",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "best days id"
                },
                {
                    opcode: "bestScore",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "best score id"
                },
                {
                    opcode: "mostCrafts",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "most crafts id"
                },
                {
                    opcode: "score",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "score of [ID]",

                    arguments: {
                        ID: {
                            defaultValue: 1,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "config",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "server config"
                },
                {
                    opcode: "lastChatMessage",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "last chat message"
                },
                {
                    opcode: "playerList",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "player list"
                },
                {
                    opcode: "playersInWorld",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "players in world [WORLD]",

                    arguments: {
                        WORLD: {
                            menu: "worlds",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                }
            ],
            
            menus: {
                teams: {
                    items: ["1", "2", "3", "4", "5", "6", "7", "8"],
                    
                    acceptReporters: true
                },
                worlds: {
                    items: ["hub-1", "hub-2", "hub-3", "keypvp", "classic-survival", "survival", "snadbox", "event", "bedwars-lobby", "bedwars", "city", "zma", "maze", "tag-lobby", "tag"],
                    
                    acceptReporters: true
                }
            }
        }
    }
    pName({ID}) {
        return "player#" + ID;
    }
    id() {
        return 1;
    }
    playerX() {
        return 11;
    }
    playerY() {
        return 20;
    }
    ping() {
        return 121;
    }
    kills({ID}) {
        return 1;
    }
    deaths({ID}) {
        return ID/Math.abs(ID);
    }
    days({ID}) {
        return 35;
    }
    secondsOnline() {
        return 6092;
    }
    op() {
        return true;
    }
    lastPlace() {
        return 10;
    }
    teamId({TEAM}) {
        return TEAM;
    }
    teamScoreTotal({TEAM}) {
        return TEAM*1000;
    }
    teamKillsTotal({TEAM}) {
        return 1;
    }
    bestKills() {
        return 9;
    }
    bestDays() {
        return 5;
    }
    bestScore() {
        return 4;
    }
    mostCrafts() {
        return 2;
    }
    score({ID}) {
        return 40000;
    }
    config() {
        return `{"item":"imagine this is the config"}`;
    }
    lastChatMessage() {
        return "Follow Me!";
    }
    playerList() {
        return "[imagine, this, is, the, player, list]";
    }
    playersInWorld({WORLD}) {
        return 120;
    }
}
Scratch.extensions.register(new Library());

class Regions {
    getInfo() {
        return {
            id: "regions",
            
            color1: "#9233ff",
            color2: "#9233ff",
            
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

class Commands {
    getInfo() {
        return {
            id: "commands",
            
            color1: "#00a6ff",
            color2: "#00a6ff",
            
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

class Operations {
    getInfo() {
        return {
            id: "operations",
            
            color1: "#59C059",
            
            name: "Operations",
            
            blocks: [
                {
                    opcode: "operator",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "[A] [OPERATOR] [B]",
                    
                    arguments: {
                        A: {
                            defaultValue: 5,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        OPERATOR: {
                            menu: "operators",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        B: {
                            defaultValue: 5,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "oJoinTwo",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "join [A] [B]",
                    
                    arguments: {
                        A: {
                            defaultValue: "a",

                            type: Scratch.ArgumentType.STRING
                        },
                        B: {
                            defaultValue: " b",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "joinThree",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "join [A] [B] [C]",
                    
                    arguments: {
                        A: {
                            defaultValue: "a",

                            type: Scratch.ArgumentType.STRING
                        },
                        B: {
                            defaultValue: " b",

                            type: Scratch.ArgumentType.STRING
                        },
                        C: {
                            defaultValue: " c",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "joinFour",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "join [A] [B] [C] [D]",
                    
                    arguments: {
                        A: {
                            defaultValue: "a",

                            type: Scratch.ArgumentType.STRING
                        },
                        B: {
                            defaultValue: " b",

                            type: Scratch.ArgumentType.STRING
                        },
                        C: {
                            defaultValue: " c",

                            type: Scratch.ArgumentType.STRING
                        },
                        D: {
                            defaultValue: " d",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "oContains",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[A] contains [B]?",
                    
                    arguments: {
                        A: {
                            defaultValue: "thing",

                            type: Scratch.ArgumentType.STRING
                        },
                        B: {
                            defaultValue: "i",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "compare",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[A] [COMPARE] [B]",
                    
                    arguments: {
                        A: {
                            defaultValue: "0",

                            type: Scratch.ArgumentType.STRING
                        },
                        COMPARE: {
                            menu: "compare",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        B: {
                            defaultValue: "50",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "checkType",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "is [A] type [TYPE]",
                    
                    arguments: {
                        A: {
                            defaultValue: "hello!",

                            type: Scratch.ArgumentType.STRING
                        },
                        TYPE: {
                            menu: "types",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "item",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "item [ITEM] amount [AMOUNT] ED [DATA]",
                    
                    arguments: {
                        ITEM: {
                            menu: "items",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        AMOUNT: {
                            defaultValue: 1,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        DATA: {
                            defaultValue: "{}",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "oRound",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "round [A]",
                    
                    arguments: {
                        A: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "oOf",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "[FUNC] of [A]",
                    
                    arguments: {
                        FUNC: {
                            menu: "mathFunctions",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        A: {
                            defaultValue: 10,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "pi",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "Pi"
                },
                {
                    opcode: "oPickRandom",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "pick random number from [A] to [B]",
                    
                    arguments: {
                        A: {
                            defaultValue: 0,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        B: {
                            defaultValue: 100,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "andOr",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[A] [ANDOR] [B]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.BOOLEAN
                        },
                        ANDOR: {
                            menu: "andor",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        B: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "oNot",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "not [A]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: "oLetter",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "letter [A] of [B]",
                    
                    arguments: {
                        A: {
                            defaultValue: 1,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        B: {
                            defaultValue: "server :D",

                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "letters",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "letters [A] to [B] of [C]",
                    
                    arguments: {
                        A: {
                            defaultValue: 1,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        B: {
                            defaultValue: 5,
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        C: {
                            defaultValue: "Hello there!",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "ternary",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "if [A] then [B] else [C]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.BOOLEAN
                        },
                        B: {
                            defaultValue: "foo",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        C: {
                            defaultValue: "bar",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "serverStats",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "server [STATS]",
                    
                    arguments: {
                        STATS: {
                            menu: "serverStats",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "oCurrent",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "current [TIME]",
                    
                    arguments: {
                        TIME: {
                            menu: "time",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "bool",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[BOOL]",
                    
                    arguments: {
                        BOOL: {
                            menu: "booleans",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "even",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "is [A] even?",
                    
                    arguments: {
                        A: {
                            defaultValue: 2,
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "make",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "make [A] [CASE]",
                    
                    arguments: {
                        A: {
                            defaultValue: "Text",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        CASE: {
                            menu: "cases",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "oLength",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "length of [A]",
                    
                    arguments: {
                        A: {
                            defaultValue: "string",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                }
            ],
            
            menus: {
                operators: {
                    items: ["+", "-", "*", "/", "^", "mod"],
                
                    acceptReporters: false
                },
                compare: {
                    items: ["==", ">", "<", ">=", "<=", "!="],
                
                    acceptReporters: false
                },
                types: {
                    items: ["string", "number", "boolean", "item", "list"],
                
                    acceptReporters: false
                },
                mathFunctions: {
                    items: ["abs", "floor", "ceil", "sqrt", "sin", "cos", "tan", "asin", "acos", "atan", "log", "10 ^", "cbrt"],
                
                    acceptReporters: false
                },
                serverStats: {
                    items: ["timer", "tps", "id", "name", "owner"],
                
                    acceptReporters: false
                },
                time: {
                    items: ["year", "month", "day of the week", "day", "hour", "minute", "second", "millisecond"],
                
                    acceptReporters: false
                },
                booleans: {
                    items: ["false", "true"],
                
                    acceptReporters: true
                },
                cases: {
                    items: ["lowercase", "UPPERCASE"],
                
                    acceptReporters: false
                },
                items: {
                    items: ["Wood", "Copper", "Stone", "Gold", "Iron", "Diamond", "Ruby", "Emerald", "Flames", "Wood Pick", "Copper Pick", "Stone Pick", "Gold Pick", "Iron Pick", "Diamond Pick", "Ruby Pick", "Red Diamond Pick", "Wood Sword", "Wood Spear", "Wood Helmet", "Wood Shield", "Wood Bow", "Wood Arrow", "Stone Sword", "Stone Spear", "Stone Helmet", "Stone Shield", "Stone Bow", "Stone Arrow", "Copper Sword", "Copper Spear", "Copper Helmet", "Copper Shield", "Gold Sword", "Gold Spear", "Gold Helmet", "Gold Shield", "Gold Bow", "Gold Arrow", "Iron Sword", "Iron Spear", "Iron Helmet", "Iron Shield", "Diamond Sword", "Diamond Spear", "Diamond Helmet", "Diamond Shield", "Diamond Bow", "Diamond Arrow", "Ruby Sword", "Ruby Spear", "Ruby Helmet", "Ruby Shield", "Ruby Bow", "Ruby Arrow", "Red Diamond Sword", "Red Diamond Spear", "Red Diamond Helmet", "Red Diamond Shield", "Red Diamond Bow", "Red Diamond Arrow", "Fiery Sword", "Fiery Spear", "Fiery Helmet", "Copper Hammer", "Stone Hammer", "Gold Hammer", "Iron Hammer", "Diamond Hammer", "Ruby Hammer", "Red Diamond Hammer", "Fiery Hammer", "Wrench", "Gold Wrench", "Machete", "Dirt Sand", "Clay", "Ice Cube", "Snowball", "Rabbit Fur", "Wolf Fur", "Fox Fur", "Boar Fur", "Mammoth Fur", "Snake Scales", "Fish Scales", "Kraken Skin", "Birb Feathers", "Penguin Feathers", "Vulture Feathers", "Chicken Feathers", "Raw Fish", "Raw Meat", "String", "Sandworm Juice", "Dragon Heart", "Lava Heart", "Blue Gem", "Green Gem", "Orange Gem", "White Gem", "Red Gem", "Violet Gem", "Dark Wolf Fur", "Light Wolf Fur", "Pitchfork", "Golden Pitchfork Part", "Pilot Glasses", "Pilot Hat", "Strawberry", "Wheat", "Flour", "Bread", "Golden Bread", "Sandwich", "Cookies", "Cake Slice", "Cooked Fish", "Cooked Meat", "Pumpkin", "Tomato", "Carrot", "Watermelon", "Garlic", "Cactus", "Aloe Vera", "Bandage", "Book", "Copper Shovel", "Stone Shovel", "Gold Shovel", "Snow Shovel", "Snow", "Diamond Shovel", "Ruby Shovel", "Book Page", "Paper", "Watering Can", "Bucket", "Watering Can Filled", "Bucket of Water", "Bucket of Honey", "Boat", "Honey Boat", "Sled", "Plane", "Saddle", "Saddled Boar", "Saddled Birb", "Saddled Snake", "Saddled Baby Dragon", "Saddled Bot", "Earmuffs", "Coat", "Saddled Baby Mammoth", "Jacket", "Winter Gear", "Mammoth Fur Cap", "Saddled Baby Lava Dragon", "Emerald Protection", "Diamond Protection", "Ruby Protection", "Healing Crown", "Ghost Crown", "Luck Crown", "Speed Crown", "Power Crown", "Admin Crown", "Diving Mask", "Scuba Suit", "Hood", "Winter Hood", "Peasant", "Winter Peasant", "Bag", "Safari Hat", "Turban", "Ninja Outfit", "Light Turban", "Dark Cap", "Iron Lock", "Diamond Lock", "Potato", "Thornbush", "Diamond String", "Emerald String", "Gold Feathers", "Bottle", "Bottle of Water", "Bottle of Honey", "Key", "Iron Key", "Diamond Key", "Candy", "Candy Cane", "Santa Hat", "Elf Hat", "Roof Lights", "Witch Hat", "Pumpkin Helmet", "Apple", "Admin Helmet", "Admin Spear", "Admin Sword", "Admin Shield", "Admin Bow", "Admin Arrow", "Admin Earmuffs", "Admin Token", "Admin Pilot Hat", "Saddled Admin Dragon", "Admin Cake Slice", "Coin", "Red Team Token", "Blue Team Token", "Green Team Token", "Yellow Team Token", "Orange Team Token", "Purple Team Token", "Teal Team Token", "Pink Team Token", "FireFly", "Wood Spike", "Wood Wall", "Wood Door", "Wood Spike Door", "Stone Spike", "Stone Wall", "Stone Door", "Stone Spike Door", "Gold Spike", "Gold Wall", "Gold Door", "Gold Spike Door", "Iron Spike", "Iron Wall", "Iron Door", "Iron Spike Door", "Diamond Spike", "Diamond Wall", "Diamond Door", "Diamond Spike Door", "Ruby Spike", "Ruby Wall", "Ruby Door", "Ruby Spike Door", "Emerald Spike", "Emerald Wall", "Emerald Door", "Emerald Spike Door", "Red Diamond Spike", "Red Diamond Wall", "Red Diamond Door", "Red Diamond Spike Door", "Plot", "Roof", "Stone Roof", "Clay Plot", "Wood Flooring", "Resurrection Stone", "Campfire", "Big Campfire", "Furnace", "Power Furnace", "Crafting Bench", "Chest", "Iron Chest", "Diamond Chest", "Totem", "Well", "Score Generator", "Bridge", "Stone Bridge", "Sign", "Bed", "Tower", "Iron Tower", "Stone Tower", "Strawberry Seeds", "Wheat Seeds", "Pumpkin Seeds", "Jack O Lantern", "Potato Seeds", "Garlic Seeds", "Tomato Seeds", "Thornbush Seeds", "Watermelon Seeds", "Carrot Seeds", "Aloe Vera Seeds", "Windmill", "Bread Oven", "Glass Roof", "Admin Wall", "Admin Door", "Admin Spike", "Admin Spike Door", "Admin Bridge", "Admin Roof", "Admin Tower", "Red Team Wall", "Blue Team Wall", "Green Team Wall", "Yellow Team Wall", "Orange Team Wall", "Purple Team Wall", "Teal Team Wall", "Pink Team Wall", "Red Team Door", "Blue Team Door", "Green Team Door", "Yellow Team Door", "Orange Team Door", "Purple Team Door", "Teal Team Door", "Pink Team Door", "Red Team Spike", "Blue Team Spike", "Green Team Spike", "Yellow Team Spike", "Orange Team Spike", "Purple Team Spike", "Teal Team Spike", "Pink Team Spike", "Red Team Spike Door", "Blue Team Spike Door", "Green Team Spike Door", "Yellow Team Spike Door", "Orange Team Spike Door", "Purple Team Spike Door", "Teal Team Spike Door", "Pink Team Spike Door", "Red Team Roof", "Blue Team Roof", "Green Team Roof", "Yellow Team Roof", "Orange Team Roof", "Purple Team Roof", "Teal Team Roof", "Pink Team Roof", "Red Team Tower", "Blue Team Tower", "Green Team Tower", "Yellow Team Tower", "Orange Team Tower", "Purple Team Tower", "Teal Team Tower", "Pink Team Tower"],
                
                    acceptReporters: true
                }
            }
        }
    }
    operator({A, OPERATOR, B}) {
        switch (OPERATOR) {
            case "+":
                return Math.pow(A, 1)+B;
            case "-":
                return A-B;
            case "*":
                return A*B;
            case "/":
                return A/B;
            case "^":
                return Math.pow(A, B);
            case "mod":
                return A%B;
        }
    }
    oJoinTwo({A, B}) {
        return A.toString() + B.toString();
    }
    joinThree({A, B, C}) {
        return A.toString() + B.toString() + C.toString();
    }
    joinFour({A, B, C, D}) {
        return A.toString() + B.toString() + C.toString() + D.toString();
    }
    oContains({A, B}) {
        return A.toString().includes(B.toString());
    }
    compare({A, COMPARE, B}) {
        switch (COMPARE) {
            case "==":
                return A==B;
            case ">":
                return A>B;
            case "<":
                return A<B;
            case ">=":
                return A>=B;
            case "<=":
                return A<=B;
            case "!=":
                return A!=B;
        }
    }
    checkType({A, TYPE}) {
        var a = typeof A;
        switch (TYPE) {
            case "string":
                return a == "string" || a == "symbol";
            case "number":
                return a == "number" || a == "bigint";
            case "boolean":
                return a == "boolean";
            case "item":
                return a == "object";
            case "list":
                return a == "obect";
        }
    }
    item({ITEM, AMOUNT, DATA}) {
        var itm = [];
        itm[0] = ITEM; itm[1] = AMOUNT; itm[2] = DATA;
        return itm;
    }
    oRound({A}) {
        return Math.round(A);
    }
    oOf({FUNC, A}) {
        switch (FUNC) {
            case "abs":
                return Math.abs(A);
            case "floor":
                return Math.floor(A);
            case "ceil":
                return Math.ceil(A);
            case "sqrt":
                return Math.sqrt(A);
            case "sin":
                return Math.sin(A);
            case "cos":
                return Math.cos(A);
            case "tan":
                return Math.tan(A);
            case "asin":
                return Math.asin(A);
            case "acos":
                return Math.acos(A);
            case "atan":
                return Math.atan(A);
            case "log":
                return Math.log(A);
            case "cbrt":
                return Math.cbrt(A);
        }
    }
    pi() {
        return Math.PI;
    }
    oPickRandom({A, B}) {
        return Math.random() * (B - A) + A;
    }
    andOr({A, ANDOR, B}) {
        if (ANDOR == "and") {
            return A && B;
        }
        else if (ANDOR == "or") {
            return A || B;
        }
    }
    oNot({A}) {
        return !A;
    }
    oLetter({A, B}) {
        return B.toString()[A-1];
    }
    letters({A, B, C}) {
        return C.toString().substring(A-1,B);
    }
    ternary({A, B, C}) {
        return A ? B : C;
    }
    serverStats({STATS}) {
        switch (STATS) {
            case "timer":
                return new Date().getSeconds();
            case "tps":
                return 20;
            case "id":
                return "1111";
            case "name":
                return "server";
            case "owner":
                return "player#00000";
        }
    }
    oCurrent({TIME}) {
        var t = new Date();
        switch (TIME) {
            case "year":
                return t.getFullYear();
            case "month":
                return t.getMonth()+1;
            case "day of the week":
                return t.getDay()+1;
            case "day":
                return t.getDate();
            case "hour":
                return t.getHours();
            case "minute":
                return t.getMinutes();
            case "second":
                return t.getSeconds();
            case "millisecond":
                return t.getMilliseconds();
        }
    }
    bool({BOOL}) {
        if (BOOL == null || BOOL.toLowerCase() == "f" || BOOL == false || BOOL.toLowerCase() == "false" || BOOL == 0 || BOOL == "0" || BOOL == "" || BOOL == undefined) {
            return false;
        }
        return true;
    }
    even({A}) {
        return A%2==0;
    }
    make({A, CASE}) {
        if (CASE.toLowerCase() == "lowercase") {
            return A.toString().toLowerCase();
        }
        else if (CASE.toUpperCase() == "UPPERCASE") {
            return A.toString().toUpperCase();
        }
    }
    oLength({A}) {
        return A.length;
    }
}
Scratch.extensions.register(new Operations());

class ServerGUI {
    getInfo() {
        return {
            id: "gui",
            
            color1: "#5CB1D6",
            
            name: "GUI",
            
            blocks: [
                {
                    opcode: "buttonPressed",
                    
                    blockType: Scratch.BlockType.HAT,
                    
                    text: "when button with id:[ID] is pressed",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "closeOverlay",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "close overlay id:[ID]",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "openOverlay",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "open overlay id:[ID]",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "overlayShown",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "overlay id:[ID] shown?",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "showElement",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "show element [ELEMENT] with id:[ID]",
                    
                    arguments: {
                        ELEMENT: {
                            menu: "elements",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "hideElement",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "hide element [ELEMENT] with id:[ID]",
                    
                    arguments: {
                        ELEMENT: {
                            menu: "elements",
                            
                            type: Scratch.ArgumentType.NUMBER
                        },
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "slider",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "slider id:[ID] [OPTION]",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        OPTION: {
                            menu: "slider",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "setText",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "set text id:[ID] text to [TEXT]",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        TEXT: {
                            defaultValue: "changed",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "textText",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "text id:[ID] text",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "checkbox",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "checkbox id:[ID] value",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "input",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "input id:[ID] value",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "image",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "image id:[ID] source",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: "itemSlot",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "item slot id:[ID] [OPTION]",

                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        OPTION: {
                            menu: "itemSlot",
                            
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "setItemSlot",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "set item slot id:[ID] item to [ITEM]",
                    
                    arguments: {
                        ID: {
                            defaultValue: "id",
                            
                            type: Scratch.ArgumentType.STRING
                        },
                        ITEM: {
                            menu: "items",
                            
                            type: Scatch.ArgumentType.NUMBER
                        }
                    }
                }
            ],
            
            menus: {
                items: {
                    items: ["Wood", "Copper", "Stone", "Gold", "Iron", "Diamond", "Ruby", "Emerald", "Flames", "Wood Pick", "Copper Pick", "Stone Pick", "Gold Pick", "Iron Pick", "Diamond Pick", "Ruby Pick", "Red Diamond Pick", "Wood Sword", "Wood Spear", "Wood Helmet", "Wood Shield", "Wood Bow", "Wood Arrow", "Stone Sword", "Stone Spear", "Stone Helmet", "Stone Shield", "Stone Bow", "Stone Arrow", "Copper Sword", "Copper Spear", "Copper Helmet", "Copper Shield", "Gold Sword", "Gold Spear", "Gold Helmet", "Gold Shield", "Gold Bow", "Gold Arrow", "Iron Sword", "Iron Spear", "Iron Helmet", "Iron Shield", "Diamond Sword", "Diamond Spear", "Diamond Helmet", "Diamond Shield", "Diamond Bow", "Diamond Arrow", "Ruby Sword", "Ruby Spear", "Ruby Helmet", "Ruby Shield", "Ruby Bow", "Ruby Arrow", "Red Diamond Sword", "Red Diamond Spear", "Red Diamond Helmet", "Red Diamond Shield", "Red Diamond Bow", "Red Diamond Arrow", "Fiery Sword", "Fiery Spear", "Fiery Helmet", "Copper Hammer", "Stone Hammer", "Gold Hammer", "Iron Hammer", "Diamond Hammer", "Ruby Hammer", "Red Diamond Hammer", "Fiery Hammer", "Wrench", "Gold Wrench", "Machete", "Dirt Sand", "Clay", "Ice Cube", "Snowball", "Rabbit Fur", "Wolf Fur", "Fox Fur", "Boar Fur", "Mammoth Fur", "Snake Scales", "Fish Scales", "Kraken Skin", "Birb Feathers", "Penguin Feathers", "Vulture Feathers", "Chicken Feathers", "Raw Fish", "Raw Meat", "String", "Sandworm Juice", "Dragon Heart", "Lava Heart", "Blue Gem", "Green Gem", "Orange Gem", "White Gem", "Red Gem", "Violet Gem", "Dark Wolf Fur", "Light Wolf Fur", "Pitchfork", "Golden Pitchfork Part", "Pilot Glasses", "Pilot Hat", "Strawberry", "Wheat", "Flour", "Bread", "Golden Bread", "Sandwich", "Cookies", "Cake Slice", "Cooked Fish", "Cooked Meat", "Pumpkin", "Tomato", "Carrot", "Watermelon", "Garlic", "Cactus", "Aloe Vera", "Bandage", "Book", "Copper Shovel", "Stone Shovel", "Gold Shovel", "Snow Shovel", "Snow", "Diamond Shovel", "Ruby Shovel", "Book Page", "Paper", "Watering Can", "Bucket", "Watering Can Filled", "Bucket of Water", "Bucket of Honey", "Boat", "Honey Boat", "Sled", "Plane", "Saddle", "Saddled Boar", "Saddled Birb", "Saddled Snake", "Saddled Baby Dragon", "Saddled Bot", "Earmuffs", "Coat", "Saddled Baby Mammoth", "Jacket", "Winter Gear", "Mammoth Fur Cap", "Saddled Baby Lava Dragon", "Emerald Protection", "Diamond Protection", "Ruby Protection", "Healing Crown", "Ghost Crown", "Luck Crown", "Speed Crown", "Power Crown", "Admin Crown", "Diving Mask", "Scuba Suit", "Hood", "Winter Hood", "Peasant", "Winter Peasant", "Bag", "Safari Hat", "Turban", "Ninja Outfit", "Light Turban", "Dark Cap", "Iron Lock", "Diamond Lock", "Potato", "Thornbush", "Diamond String", "Emerald String", "Gold Feathers", "Bottle", "Bottle of Water", "Bottle of Honey", "Key", "Iron Key", "Diamond Key", "Candy", "Candy Cane", "Santa Hat", "Elf Hat", "Roof Lights", "Witch Hat", "Pumpkin Helmet", "Apple", "Admin Helmet", "Admin Spear", "Admin Sword", "Admin Shield", "Admin Bow", "Admin Arrow", "Admin Earmuffs", "Admin Token", "Admin Pilot Hat", "Saddled Admin Dragon", "Admin Cake Slice", "Coin", "Red Team Token", "Blue Team Token", "Green Team Token", "Yellow Team Token", "Orange Team Token", "Purple Team Token", "Teal Team Token", "Pink Team Token", "FireFly", "Wood Spike", "Wood Wall", "Wood Door", "Wood Spike Door", "Stone Spike", "Stone Wall", "Stone Door", "Stone Spike Door", "Gold Spike", "Gold Wall", "Gold Door", "Gold Spike Door", "Iron Spike", "Iron Wall", "Iron Door", "Iron Spike Door", "Diamond Spike", "Diamond Wall", "Diamond Door", "Diamond Spike Door", "Ruby Spike", "Ruby Wall", "Ruby Door", "Ruby Spike Door", "Emerald Spike", "Emerald Wall", "Emerald Door", "Emerald Spike Door", "Red Diamond Spike", "Red Diamond Wall", "Red Diamond Door", "Red Diamond Spike Door", "Plot", "Roof", "Stone Roof", "Clay Plot", "Wood Flooring", "Resurrection Stone", "Campfire", "Big Campfire", "Furnace", "Power Furnace", "Crafting Bench", "Chest", "Iron Chest", "Diamond Chest", "Totem", "Well", "Score Generator", "Bridge", "Stone Bridge", "Sign", "Bed", "Tower", "Iron Tower", "Stone Tower", "Strawberry Seeds", "Wheat Seeds", "Pumpkin Seeds", "Jack O Lantern", "Potato Seeds", "Garlic Seeds", "Tomato Seeds", "Thornbush Seeds", "Watermelon Seeds", "Carrot Seeds", "Aloe Vera Seeds", "Windmill", "Bread Oven", "Glass Roof", "Admin Wall", "Admin Door", "Admin Spike", "Admin Spike Door", "Admin Bridge", "Admin Roof", "Admin Tower", "Red Team Wall", "Blue Team Wall", "Green Team Wall", "Yellow Team Wall", "Orange Team Wall", "Purple Team Wall", "Teal Team Wall", "Pink Team Wall", "Red Team Door", "Blue Team Door", "Green Team Door", "Yellow Team Door", "Orange Team Door", "Purple Team Door", "Teal Team Door", "Pink Team Door", "Red Team Spike", "Blue Team Spike", "Green Team Spike", "Yellow Team Spike", "Orange Team Spike", "Purple Team Spike", "Teal Team Spike", "Pink Team Spike", "Red Team Spike Door", "Blue Team Spike Door", "Green Team Spike Door", "Yellow Team Spike Door", "Orange Team Spike Door", "Purple Team Spike Door", "Teal Team Spike Door", "Pink Team Spike Door", "Red Team Roof", "Blue Team Roof", "Green Team Roof", "Yellow Team Roof", "Orange Team Roof", "Purple Team Roof", "Teal Team Roof", "Pink Team Roof", "Red Team Tower", "Blue Team Tower", "Green Team Tower", "Yellow Team Tower", "Orange Team Tower", "Purple Team Tower", "Teal Team Tower", "Pink Team Tower"],
                
                    acceptReporters: true
                },
                elements: {
                    items: ["text", "button", "image", "image button", "slider", "input", "checkbox", "item slot"],
                
                    acceptReporters: false
                },
                slider: {
                    items: ["value", "max", "min"],
                    
                    acceptReporters: false
                },
                itemSlot: {
                    items: ["item", "item name", "amount", "extra data"],
                
                    acceptReporters: false
                }
            }
        }
    }
    overlayShown({ID}) {
        return true;
    }
    slider({ID, OPTION}) {
        switch (OPTION) {
            case "value":
                return 50;
            case "max":
                return 100;
            case "min":
                return 0;
        }
    }
    textText({ID}) {
        return "Sample text.";
    }
    checkbox({ID}) {
        return false;
    }
    input({ID}) {
        return "yes";
    }
    image({ID}) {
        return "image.png";
    }
    itemSlot({ID, OPTION}) {
        switch (OPTION) {
            case "item":
                return `["stone_sword",1,""]`;
            case "item name":
                return "Stone Sword";
            case "amount":
                return 1;
            case "extra data":
                return "";
        }
    }
}
Scratch.extensions.register(new ServerGUI());
