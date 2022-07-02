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
        return "["+itm+"]";
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