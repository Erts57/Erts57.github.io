/**
 * Userscript Library for creating userscripts
 */
 export default class Userscript {
    /**
     * @param {HTMLDivElement} creationArea HTML element for adding all the new items from the userscript
     */
    constructor(creationArea) {
        this.creationArea = creationArea;
        
        this.windows = [];
        this.windowIDs = [];
        this.extraCSS = [];
        
        this.started = false;
    }
    
    /**
     * Creates a new HTML element everytime a userscript is loaded
     * @returns A new element made every new page
     */
    createCreationArea() {
        this.creationArea.className = Math.random().toString();
        this.creationArea.id = "creation-area";
        this.creationArea.style.position = "fixed";
        this.creationArea.style.margin = "0";
        
        this.creationArea.appendChild(document.createElement("link"));
        this.reloadStyles();
        
        return this.creationArea;
    }
    
    /**
     * Creates a new draggable window
     * @param {String} id id of the new window
     * @param {String} headerName name of new window
     * @param {Number} x x location of new window
     * @param {Number} y y location of new window
     * @param {Number} width width of the new window
     * @param {Number} height height of the new window
     * @returns A boolean if the creation of the window was successful or not
     */
    newWindow(id, headerName, x, y, width, height) {
        var selected = document.createElement("div");
        var selected2 = document.createElement("div");
        
        this.windowIDs.push({
            id: id,
            contents: []
        });
        this.windows.push(selected);
        
        selected.id = id;
        selected.className = "draggable-window";
        selected.style.top = `${y}px`;
        selected.style.left = `${x}px`;
        selected2.className = "header";
        selected2.innerHTML = headerName;
        
        var selected3 = document.createElement("div");
        selected3.id = `${id}-spacer`;
        selected3.className = "spacer";
        
        selected.appendChild(selected2);
        selected.appendChild(selected3);
        
        try { this.creationArea.appendChild(selected); } catch (err) {
            console.error(`[newWindow] Creation of a new window resulted in a fail: ${err}`);
            return false;
            
        }
        
        return true;
        
    }
    
    /**
     * Adds Contents to draggable windows
     * @param {String} name id of the new content
     * @param {String} id id of the draggable window the content will be added to
     * @param {String} content the content of the new content
     * @returns The content node that was created and added
     */
    addContent({type, name, id, content, callback, max, min, defaultValue}) {
        var selected = document.getElementById(id);
        var selected2;
        
        switch (type) {
            case "button":
                selected2 = document.createElement("button");
                selected2.className = "button";
                selected2.innerHTML = content;
                selected2.setAttribute("onClick", `${callback??="console.log"}()`);
                break;
            case "slider":
                selected2 = document.createElement("input");
                selected2.className = "slider";
                selected2.type = "range";
                selected2.value = defaultValue;
                selected2.max = max;
                selected2.min = min;
                break;
            case "space":
                selected2 = document.createElement("div");
                selected2.className = "spacer";
                break;
            default:
                selected2 = document.createElement("div");
                selected2.className = "text";
                selected2.innerHTML = content;
                break;
        }
        
        try { this.windowIDs[this.windows.indexOf(selected)].contents = selected2; } catch (err) {
            console.error(`[addContent] Adding content to the 'windowIDs' array resulted in a fail: ${err}`);
        }
        
        selected2.id = name??=null;
        
        selected.appendChild(selected2);
        
        return selected2;
        
    }
    
    /**
     * Resets all built-in userscript styles if the current link element exists and adds a new one if provided
     * @param {String} extraStyle a url to another style sheet
     */
    reloadStyles(extraStyle) {
        if (this.extraCSS.includes(extraStyle) == false) {
            this.extraCSS.push(extraStyle);
        }
        
        if (this.creationArea ??= false) {
            if (this.creationArea.getElementsByTagName("link").length >= 1 + this.extraCSS.length) {
                this.creationArea.getElementsByTagName("link")[0].rel = "stylesheet";
                this.creationArea.getElementsByTagName("link")[0].href = "../lib/userscript-styles.css";
                
                this.extraCSS.forEach(s, () => {
                    var e = document.createElement("link");
                    e.rel = "stylesheet";
                    e.href = s;
                    this.createCreationArea.appendChild(e);
                });
                
            }
            
        }
    }
    
    /**
     * Makes the userscript active
     * @returns A boolean if it started the userscript or not
     */
    start() {
        if (this.started == false && this.windows.length > 0) {
            this.started = true;
            initDragAndResizeElements(this.windows); // Activate the dragging for all the windows
            
        }
        
        return this.started;
    }
    
}

/**
 * Borrowed from https://codepen.io/jkasun/pen/QrLjXP?editors=0010
 */
function initDragAndResizeElements(windows) {
    var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
    //var draggableWindows = windows/*document.getElementsByClassName("draggable-window")*/;
    var elmnt = null;
    var currentZIndex = 100; // TODO reset z index when a threshold is passed ???

    for (var i = 0; i < windows.length; i++) {
        var draggableWindow = windows[i];
        var header = getHeader(draggableWindow);

        draggableWindow.onmousedown = function() {
        this.style.zIndex = "" + ++currentZIndex;
        };

        if (header) {
        header.parentDraggableWindow = draggableWindow;
        header.onmousedown = dragMouseDown;
        }
        
        function dragMouseDown(e) {
            elmnt = this.parentDraggableWindow;
            elmnt.style.zIndex = "" + ++currentZIndex;
        
            e = e || window.event;
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }
        
        function elementDrag(e) {
            if (!elmnt) {
            return;
            }
        
            e = e || window.event;
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top =  `${Math.max(elmnt.offsetTop - pos2, 0)}px`;
            elmnt.style.left = `${Math.max(elmnt.offsetLeft - pos1, 0)}px`;
        }
        
        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
        
        function getHeader(element) {
            var headerItems = element.getElementsByClassName("header");
        
            if (headerItems.length === 1) {
            return headerItems[0];
            }
        
            return null;
        }
        
    }
    
    /**
     * Resize Elements for draggable windows
     */
    
    //var draggableWindows = windows/*document.getElementsByClassName("draggable-window")*/;
    var element = null;
    var startX, startY, startWidth, startHeight;

    for (var i = 0; i < windows.length; i++) {
        var p = windows[i];

        var right = document.createElement("div");
        right.className = "resizer-right";
        p.appendChild(right);
        right.addEventListener("mousedown", initDrag, false);
        right.parentDraggableWindow = p;

        var bottom = document.createElement("div");
        bottom.className = "resizer-bottom";
        p.appendChild(bottom);
        bottom.addEventListener("mousedown", initDrag, false);
        bottom.parentDraggableWindow = p;

        var both = document.createElement("div");
        both.className = "resizer-both";
        p.appendChild(both);
        both.addEventListener("mousedown", initDrag, false);
        both.parentDraggableWindow = p;
        
        function initDrag(e) {
            element = this.parentDraggableWindow;
            
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(
            document.defaultView.getComputedStyle(element).width,
            10
            );
            startHeight = parseInt(
            document.defaultView.getComputedStyle(element).height,
            10
            );
            document.documentElement.addEventListener("mousemove", doDrag, false);
            document.documentElement.addEventListener("mouseup", stopDrag, false);
        }
        
        function doDrag(e) {
            element.style.width = startWidth + e.clientX - startX + "px";
            element.style.height = startHeight + e.clientY - startY + "px";
        }
        
        function stopDrag() {
            document.documentElement.removeEventListener("mousemove", doDrag, false);
            document.documentElement.removeEventListener("mouseup", stopDrag, false);
        }
    }
}
