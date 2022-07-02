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