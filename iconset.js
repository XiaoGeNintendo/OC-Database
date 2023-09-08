var iconset={
    "name":"font",
    "otherNames":"font",
    "desc":"paperclip",
    "age":"music",
    "species":"scroll"
}

function getIcon(s){
    return iconset[s]?iconset[s]:"caret right";
}