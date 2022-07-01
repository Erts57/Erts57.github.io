class Json {

    constructor() { }

    getInfo() {
        return {
            id: "sJson",
            name: "JSON",

            blocks: [
                {
                    opcode: "split",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "split [T] by [V]",

                    arguments: {
                        T: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "How are you doing Bob?"
                        },
                        V: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "o"
                        }
                    },

                    func: "splitBlock"
                },
                {
                    opcode: "fromArray",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "item [I] from array [A]",

                    arguments: {
                        I: {
                            type: Scratch.ArgumentType.NUMBER,

                            defaultValue: 2
                        },
                        A: {
                            type: Scratch.ArgumentType.NUMBER,

                            defaultValue: "1,9,3,8,5,6"
                        }
                    },

                    func: "fromArrayBlock"
                },
                {
                    opcode: "eval",

                    blockType: Scratch.BlockType.REPORTER,

                    text: "evaluate [JS]",

                    arguments: {
                        JS: {
                            type: Scratch.ArgumentType.STRING,

                            defaultValue: "2 + 2"
                        }
                    },

                    func: "evalBlock"
                },
                {
                    opcode: 'parseJSON',

                    blockType: Scratch.BlockType.REPORTER,

                    text: '[PATH] of [JSON_STRING]',
                    arguments: {
                        PATH: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'fruit/apples'
                        },
                        JSON_STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
                        }
                    },

                    func: "parseJSON"
                },
                {
                    opcode: 'fetchFrom',

                    blockType: Scratch.BlockType.REPORTER,

                    text: 'fetch JSON data from [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://translate-service.scratch.mit.edu/translate?language=eo&text=hello'
                        }
                    },

                    func: "fetchJSON"
                }
            ]
        }
    }
    splitBlock({
        T,
        V
    }) {
        const s = T.split(V);
        return s.toString();
    }
    fromArrayBlock({
        I,
        A
    }) {
        const a = A.split(",");
        return a[I - 1];
    }
    evalBlock({
        A
    }) {
        try {
            return eval(A);
        } catch (err) {
            return err;
        }
    }
    fetchJSON({
        URL
    }) {
        return fetch(URL).then(res => res.json())
            .catch(err => '').toString();
    }
    parseJSON({
        PATH,
        JSON_STRING
    }) {
        try {
            const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
            if (path[0] === '') path.splice(0, 1);
            if (path[path.length - 1] === '') path.splice(-1, 1);
            let json;
            try {
                json = JSON.parse(' ' + JSON_STRING);
            } catch (e) {
                return e.message;
            }
            path.forEach(prop => json = json[prop]);
            if (json === null) return 'null';
            else if (json === undefined) return '';
            else if (typeof json === 'object') return JSON.stringify(json);
            else return json.toString();
        } catch (err) {
            return '';
        }
    }
}
Scratch.extensions.register(new Json());