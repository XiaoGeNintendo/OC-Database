
function capitalize(s) {
    if (s.length == 0) {
        return s;
    }

    if ('a' <= s[0] && s[0] <= 'z') {
        return s[0].toUpperCase() + s.substring(1);
    }
    return s;
}

/*
Output Format: [name,op,operand]
*/
function parseEffect(es) {
    if (es.includes("+=")) {
        var index = es.indexOf("+=");
        return [es.substring(0, index), "+=", es.substring(index + 2)];
    } else if (es.includes("-=")) {
        var index = es.indexOf("-=");
        return [es.substring(0, index), "-=", es.substring(index + 2)];
    } else if (es.includes("=")) {
        var index = es.indexOf("=");
        return [es.substring(0, index), "=", es.substring(index + 1)];
    }
    throw "Unknown effect string:" + es;
}

function applyEffect(obj, eff) {
    if (Array.isArray(obj)) {
        if (eff[1] == "+=") {
            obj.push(eff[2]);
            return obj;
        } else if (eff[1] == "=") {
            return [eff[2]];
        } else if (eff[1] == "-=") {
            if (obj.includes(eff[2])) {
                obj.splice(obj.indexOf(eff[2]), 1);
                return obj;
            }
        }
        throw "Unknown operation:" + eff[1];
    } else if (typeof obj == 'string') { //it's string da!
        if (eff[1] == "+=") {
            if (obj[0] == '&') {
                throw "Cannot apply += to auto age object!";
            }
            return obj + eff[2];
        } else if (eff[1] == "=") {
            return eff[2];
        } else if (eff[1] == "-=") {
            throw "Cannot apply -= on string";
        }
        throw "Unknown operation:" + eff[1];
    } else if (typeof obj == "number") {
        if (eff[1] == "+=") {
            return obj + parseFloat(eff[2]);
        } else if (eff[1] == "=") {
            return eff[2];
        } else if (eff[1] == "-=") {
            return obj - parseFloat(eff[2]);
        }
        throw "Unknown operation:" + eff[1];
    }
    throw "Unsupported type:" + typeof (obj);
}


let colors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];
let colorindex = 0;
function getNextColor() {
    colorindex = (colorindex + 1) % colors.length;
    return colors[colorindex];
}

function renderSingleProperty(property, timeLimit = Infinity) {
    if (Array.isArray(property)) {
        if (property.length == 0) {
            return "<i>Empty</i>";
        }

        var ans = "";
        for (let i in property) {
            var obj = property[i];
            ans += renderSingleProperty(obj);
        }
        return ans;
    } else if (typeof (property) == "number") {
        return `<div class="ui ${getNextColor()} circular label">${property}</div>`;
    } else if (typeof (property) == "string") {
        if (property.length == 0) {
            return `<i>No Text</i>`;
        }
        if (property[0] == '#') {

            var tag = tags[property.substring(1)];
            //render as tag
            return `<a class="ui ${getNextColor()} label" style="margin-top: 5px; margin-bottom: 5px;" href="javascript:$('#modal${property.substring(1)}').modal('show')">
                        <i class="${tag.icon} icon"></i>
                        ${tag.name}
                    </a>
          `
        } else if (property[0] == '$') {
            var tag = tags[property.substring(1)];
            console.log(property.substring(1));
            //render as long text
            return `<div class="ui segment">
                        ${property.substring(1).replaceAll("\n", "<br/>")}
                    </div>
          `
        } else if (property[0] == '&') {
            //render as auto age
            var birthday = parseFloat(property.substring(1));
            var age = 0;
            if (timeLimit == Infinity) {
                age = Math.floor(events[events.length - 1].end - birthday);
            } else {
                age = Math.floor(timeLimit - birthday);
            }

            return `<div class="ui ${getNextColor()} circular label" data-tooltip="Auto-calculated from: ${displayTime(birthday)}">${age}</div>`;
        } else {
            return `<div class="ui ${getNextColor()} label" style="margin-top: 5px; margin-bottom: 5px;">${property}</div>`;
        }
    }
}

/**
 * Render a property with history
 * @param {} property 
 * @param {} name 
 * @param {} timeLimit 
 * @returns 
 */
function renderProperty(property, name, timeLimit) {

    var ans = "";

    //detect history
    ans += renderSingleProperty(property, timeLimit);

    var patched = false;

    for (let i in events) {
        var obj = events[i];
        if (obj.end > timeLimit) {
            break;
        }
        for (let j in obj.effect) {
            var eff = obj.effect[j];
            var output = parseEffect(eff);
            if (output[0] == name) {
                //is the effect i am looking for
                patched = true;
                property = applyEffect(property, output);
                ans += `
                <a href="timeline.html?ev=${i}" data-tooltip="During ${obj.name} on ${displayTime(obj.end)}">
                    <i class="forward icon" ></i>
                </a>
                `;

                ans += renderSingleProperty(property, timeLimit);
            }
        }
    }

    if (patched) {
        ans = "<i>(Initially)</i>" + ans;

        if (timeLimit == Infinity) {
            ans += "<i>(Currently)</i>";
        } else {
            ans += "<i>(Till " + displayTime(timeLimit) + ")</i>";
        }
    } else {
        if (timeLimit != Infinity) {
            ans += "<i>(Till " + displayTime(timeLimit) + ")</i>";
        }
    }

    return ans;
}

function generateTagHierarchy(name) {
    if (tags[name].parent == null) {
        return renderSingleProperty("#" + name);
    } else {
        return generateTagHierarchy(tags[name].parent) + '<i class="forward icon"></i>' + renderSingleProperty("#" + name);
    }
}

function generateModals() {

    var html = "";
    for (let i in tags) {
        var obj = tags[i];
        html += `<div class="ui modal" id="modal${i}">
        <div class="header">
            <i class="${obj.icon} icon"></i>
            ${obj.name}
        </div>
        <div class="content">
            <i>Tag Hierarchy:</i> ${generateTagHierarchy(i)} <br/>
            ${obj.desc}
        </div>
      </div>
        `
    }

    return html;
}

/**
 *  
 * @returns null if not found
 */
function findCharWithID(id) {
    var obj = null;
    for (let i in chars) {
        var _obj = chars[i];
        if (_obj.id == id) {
            obj = _obj;
            break;
        }
    }

    return obj;
}

function generateCharacterThumbnail(id) {
    var i = findCharWithID(id);

    if (i == null) {
        return `
        <div class="event">
            <div class="label">
                <img src="image/nodata.jpg">
            </div>
            <div class="content">
                <i>${id} (This guest character does not have a character page.)</i>
            </div>
        </div>
        `
    } else {
        return `
        <div class="event">
            <div class="label">
                <img src="${i.avatar}">
            </div>
            <div class="content">
                <a href="char.html?id=${i.id}">${i.name}</a>
            </div>
        </div>
        `;
    }
}

function generateEventModals() {
    var html = "";
    for (let i in events) {
        var ev = events[i];

        //generate participants
        var pp = "";
        for (let j in ev.participant) {
            var p = ev.participant[j];
            pp += generateCharacterThumbnail(p) + "<br/>";
        }
        if (pp == "") {
            pp = "<i>None</i>";
        }

        //generate influence
        var pe = "";
        for (let j in ev.effect) {
            var f = parseEffect(ev.effect[j]);
            f[0] = f[0].replace(".", "'s ");
            if (f[1] == "+=") {
                pe += `<i class="plus icon"></i>'${f[2]}' was added to ${f[0]}`
            } else if (f[1] == "-=") {
                pe += `<i class="minus icon"></i>'${f[2]}' was minused/removed from ${f[0]}`
            } else if (f[1] == "=") {
                pe += `<i class="equals icon"></i>${f[0]} was changed to '${f[2]}'`
            }
            pe += "<br/>"
        }
        if (pe == "") {
            pe = "<i>None</i>"
        }

        html += `
        <div class="ui modal" id="modal${i}">
            <div class="header">
                ${ev.name}
            </div>
            <div class="content">
                <b>${displayTime(ev.start)}</b>
                <i class="forward icon"></i>
                <b>${displayTime(ev.end)}</b>
                <br/> <br/>
                <i><b>Participants</b></i> <br/>
                <div class="ui feed">
                    ${pp}
                </div>
                <i><b>Effects</b></i> <br/>
                ${pe}
                <hr/>
                ${ev.desc}
            </div>
        </div>
        `
    }
    return html;
}