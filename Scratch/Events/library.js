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