
var chars = [
    {
        name: "Aguta", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        species: "#human",
        ability: ["在箭矢上附着灵魂的能力", "百步穿杨的能力"],
        relationship:[
            ["Ninetail","厌恶"],
        ],
        gallery:[],
        desc:"游牧民族的首领，擅长诗赋，爱读历史。认为Ninetail执政是妖狐惑君，为此希望匡正皇宫，让龙王的恩惠普及更多的人。然而在夺权的过程中失败，但是未死回乡独善其身。", //required usually put at last
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