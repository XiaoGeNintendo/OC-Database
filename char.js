
var chars = [
    { //no groups or nested attributes are supported right now
        id: "hikari", //can be omitted to be name
        name: "Hikari", //required
        image: "test.jpg", //required
        avatar: "testsmall.jpg", //required
        otherNames: ["Dragon Princess","HKL"], //required
        age: "&-1.1",
        species: "#dragon",
        ability: ["1", "2", "3"],
        relationship:[
            ["Ninetail","Servant"],
            ["D.Lord","Servant"]
        ],
        gallery:[
            {
                image:"testbg.png",
                title:"Entry",
                desc:"This is a test gallery entry"
            },
            {
                image:"testbg.png",
                title:"Entry",
                desc:"This is a test gallery entry"
            },
            {
                image:"testbg.png",
                title:"Entry",
                desc:"This is a test gallery entry"
            },
            {
                image:"testbg.png",
                title:"Entry",
                desc:"This is a test gallery entry"
            },
            {
                image:"testbg.png",
                title:"Entry",
                desc:"This is a test gallery entry"
            },
            {
                image:"test.jpg",
                title:"Entry",
                desc:"This is a test gallery entry"
            },
            {
                image:"testsmall.jpg",
                title:"Entry2",
                desc:"This is a test gallery entry"
            },
        ],
        desc:"$Hikari is a cute dragon with cute tails. Since the beginning of the time, she was a servant for Ninetail.", //required usually put at last
    }
]

//use # to specify tags
//use $ to specify long texts

//preprocess
console.log("Preprocessing characters");
for (let i in chars) {
    var obj = chars[i];
    obj.id = obj.id == undefined ? obj.name : obj.id;
    obj.avatar = obj.avatar == "" ? "image/nodata.jpg" : obj.avatar;
    obj.image = obj.image == "" ? "image/nodata.jpg" : obj.image;
    obj.keyword = obj.name + "/" + obj.otherNames.join("/");
    obj.url="char.html?id="+obj.id;
}