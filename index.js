const topnav = "Info57/topnav.json";
const updates = "Info57/updates.json";

function createTopNavElement() {
    for (let i = 0; i > data.length; i++) {
        
        var element = document.createElement("a");
        
        element.innerHTML = data[i].header;
        element.href = data[i].source;
        
        if (data[i].active.includes(window.location.pathname)) {
            element.className = "active";
        }
        
        document.getElementsByClassName("topnav")[0].appendChild(element);
    }
}

let data;
(async () => {  
    try {  
        const res = await fetch(topnav)
        const out = await res.json()  
        data = out; 
    } catch (err) {  
        throw err  
    }
})()

createTopNavElement();
