/**
 * This function determines the toString() function for a date value t
 */
function displayTime(t) {
    var year = Math.floor(t);
    t = (t - year) * 365;
    var day = Math.floor(t);
    return "Year " + year + " Day " + (day + 1);
}

var events = [
    {
        name: "Test Event", //required
        start: 1.114, //required
        end: 2.114, //not required
        desc: "This is a test event that occurs on the 1st year.", //required
        participant: [ //use id
            "hikari",
            "ninetail"
        ],
        effect: [
            "hikari.ability+=I am going to die!",
        ]
    },
    {
        name: "Test Event 2", //required
        start: 11.4, //required
        desc: "Wow! So late!", //required
        participant: [ //use id
            "hikari",
            "ninetail"
        ],
        effect: [
        ]
    }
] //this list will be sorted in the order of 'end' inc


//preprocess
console.log("Preprocessing events");
for (let i in events) {
    var obj = events[i];
    if (!obj.end) {
        obj.end = obj.start;
    }
}

events.sort((a, b) => a.end > b.end ? 1 : a.end == b.end ? 0 : -1);