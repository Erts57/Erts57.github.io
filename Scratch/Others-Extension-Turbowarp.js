const js_block = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNjkuNzYzMjQiIGhlaWdodD0iMjAzLjM5ODA4IiB2aWV3Qm94PSIwLDAsMTY5Ljc2MzI0LDIwMy4zOTgwOCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4yMzcxMSwtNzUuNjUyNTUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmMmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjOTViMzIwIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgZm9udC1zaXplPSI0MCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU5Ljg4NTUyLDIzMC44NDk1Mikgc2NhbGUoNC4yMzc0Niw0LjIzNzQ2KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2ZmZmYyZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiM5NWIzMjAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPkpTPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz4=";
const js_menu = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNDYuNzY2MzYiIGhlaWdodD0iMjQ2Ljc2NjM2IiB2aWV3Qm94PSIwLDAsMjQ2Ljc2NjM2LDI0Ni43NjYzNiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNi42MTY4MiwtNTYuNjE2ODIpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMTYuNjE2ODIsMTgwYzAsLTY4LjE0MjY1IDU1LjI0MDUzLC0xMjMuMzgzMTggMTIzLjM4MzE4LC0xMjMuMzgzMThjNjguMTQyNjUsMCAxMjMuMzgzMTgsNTUuMjQwNTMgMTIzLjM4MzE4LDEyMy4zODMxOGMwLDY4LjE0MjY1IC01NS4yNDA1MywxMjMuMzgzMTggLTEyMy4zODMxOCwxMjMuMzgzMThjLTY4LjE0MjY1LDAgLTEyMy4zODMxOCwtNTUuMjQwNTMgLTEyMy4zODMxOCwtMTIzLjM4MzE4eiIgZmlsbD0iI2IxZDQyNiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTkuODg1NTIsMjMwLjg0OTUyKSBzY2FsZSg0LjIzNzQ2LDQuMjM3NDYpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjZmZmZjJlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzk1YjMyMCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+SlM8L3RzcGFuPjwvdGV4dD48L2c+PC9nPjwvc3ZnPg==";

class Others {
    getInfo() {
        return {
            id: "others",
            
            color1: "#eb4034",
            color2: "#db3a2e",
            
            name: "Others",
            
            blocks: [
                {
                    opcode: "customBool",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[A]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "true"
                        }
                    },
                    
                    func: "customBool"
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
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "this"
                        },
                        C: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "that"
                        }
                    },
                    
                    func: "ternary"
                },
                {
                    opcode: "substring",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "letters [A] to [B] of [C]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 1
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 5
                        },
                        C: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hello World!"
                        }
                    },
                    
                    func: "substring"
                },
                {
                    opcode: "replace",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "replace [A] with [B] in [C]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "World"
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Universe"
                        },
                        C: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hello World"
                        }
                    },
                    
                    func: "replace"
                },
                {
                    opcode: "endsWith",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[A] ends with [B] ?",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hello there person"
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "person"
                        }
                    },
                    
                    func: "endsWith"
                },
                {
                    opcode: "search",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "index of [A] in [B]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "sunny"
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "It is sunny outside?"
                        }
                    },
                    
                    func: "search"
                },
                {
                    opcode: "startsWith",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[A] starts with [B] ?",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hello there person"
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hello"
                        }
                    },
                    
                    func: "startsWith"
                },
                {
                    opcode: "toCase",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "make [A] to [MENU]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "Hey there friend!!!"
                        },
                        MENU: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            menu: "cases"
                        }
                    },
                    
                    func: "toCase"
                },
                {
                    opcode: "boolBlock",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "[MENU]",
                    
                    arguments: {
                        MENU: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            menu: "bools"
                        }
                    },
                    
                    func: "boolBlock"
                },
                {
                    opcode: "pi",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "pi",
                    
                    arguments: { },
                    
                    func: "pi"
                },
                {
                    opcode: "split",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "split [A] by [B]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "How are you doing?"
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "o"
                        }
                    },
                    
                    func: "split"
                },
                {
                    opcode: "fromArray",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "item [A] from array [B]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 1
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "1,2,6,8,5,3,4"
                        }
                    },
                    
                    func: "fromArray"
                }
            ],
            
            menus: {
                cases: {
                    items: ["UpperCase", "LowerCase"]
                },
                bools: {
                    items: ["false", "true"]
                }
            }
        };
    };
    customBool({A}) {
        return A;
    };
    ternary({A, B, C}) {
        return A ? B : C;
    };
    substring({A, B, C}) {
        return C.substring(A - 1, B);
    };
    replace({A, B, C}) {
        return C.replace(A, B);
    };
    endsWith({A, B}) {
        return A.endsWith(B);
    };
    search({A, B}) {
        return B.search(A) + 1;
    };
    startsWith({A, B}) {
        return A.startsWith(B);
    };
    toCase({A, MENU}) {
        if (MENU == "UpperCase") {
            return A.toUpperCase();
        }
        else {
            return A.toLowerCase();
        }
    };
    boolBlock({MENU}) {
        return MENU;
    };
    pi() {
        return Math.PI;
    };
    split({A, B}) {
        const thing = A.split(B);
        return thing.toString();
    };
    fromArray({A, B}) {
        const thing = B.split(",");
        return thing[A - 1];
    };
}
class JavaScript {
    getInfo() {
        return {
            id: "javascript",
            
            color1: "#b1d426",
            color2: "#b2d456",
            
            name: "JavaScript",
            
            blockIconURI: js_block,
            
            menuIconURI: js_menu,
            
            blocks: [
                {
                    opcode: "charCodeAt",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "character code at [A] in [B]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 1
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "text"
                        }
                    },
                    
                    func: "charCodeAt"
                },
                {
                    opcode: "fromCharCode",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "character from character code [A]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            
                            defaultValue: 65
                        }
                    },
                    
                    func: "fromCharCode"
                },
                {
                    opcode: "isnan",
                    
                    blockType: Scratch.BlockType.BOOLEAN,
                    
                    text: "is [A] NaN?",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: 10
                        }
                    },
                    
                    func: "isnan"
                },
                {
                    opcode: "evalReturn",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "run JavaScript: [A]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "4 * 4"
                        }
                    },
                    
                    func: "evalReturn"
                },
                {
                    opcode: "evalBlock",
                    
                    blockType: Scratch.BlockType.COMMAND,
                    
                    text: "run JavaScript: [A]",
                    
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            
                            defaultValue: "/*do something*/"
                        }
                    },
                    
                    func: "evalBlock"
                },
                {
                    opcode: "evalError",
                    
                    blockType: Scratch.BlockType.REPORTER,
                    
                    text: "eval error",
                    
                    arguments: { },
                    
                    func: "evalError"
                }
            ],
            
            menus: {
                
            }
        };
    };
    charCodeAt({A, B}) {
        return B.charCodeAt(A - 1);
    };
    fromCharCode({A}) {
        return String.fromCharCode(A);
    };
    isnan({A}) {
        return isNaN(A);
    };
    evalReturn({A}) {
        return eval(A);
    };
    evalBlock({A}) {
        eval(A);
    };
    evalError() {
        return EvalError;
    };
}
Scratch.extensions.register(new Others());
Scratch.extensions.register(new JavaScript());