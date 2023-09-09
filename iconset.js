var iconset={
    "name":"font",
    "otherNames":"font",
    "desc":"paperclip",
    "age":"music",
    "species":"scroll",
    "height":"text height",
    "sex":"venus mars"
}

function getIcon(s){
    return iconset[s]?iconset[s]:"caret right";
}