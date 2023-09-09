var iconset={
    "name":"font",
    "otherNames":"font",
    "desc":"paperclip",
    "age":"music",
    "species":"scroll",
    "height":"text height",
    "sex":"venus mars",
    "location":"search location",
    "equipment":"bullseye",
    "status":"fire",
    "ability":"rainbow"
}

function getIcon(s){
    return iconset[s]?iconset[s]:"caret right";
}