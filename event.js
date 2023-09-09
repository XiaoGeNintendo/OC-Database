/**
 * This function determines the toString() function for a date value t
 */
function displayTime(t) {
    var year = Math.floor(t);
    t = (t - year) * 365;
    var day = Math.floor(t);
    return "Year " + year + " Day " + (day + 1);
}

/*
{
    name: "", //required
    start: , //required
    desc: ``, //required
    participant: [ //use id
        
    ],
    effect: [
    ]
},
*/
var events = [
    {
        name: "第一次凶兽战争", //required
        start: 0, //required
        desc: `最早的两只凶兽：龙王与末蛇的竞争。发生于地狱。龙王获胜。`, //required
        participant: [ //use id
            "DLord",
            "Ender Snake"
        ],
        effect: [
        ]
    },
    {
        name: "第一世界毁灭", //required
        start: 7, //required
        desc: `第一世界由一个植物凶兽毁灭。世界第一次重建。大概对应现实的2017年。`, //required
        participant: [ //use id
            
        ],
        effect: [
        ]
    },
    {
        name: "我要开店！", //required
        start: 85, //required
        desc: `Rinri来龙都开了面包店在首都外国语学校旁。`, //required
        participant: [ //use id
            "Rinri"
        ],
        effect: [
            "Rinri.location=#ryuto"
        ]
    },
    {
        name: "我也要开店！", //required
        start: 87.6, //required
        desc: `Rinko来龙都帮忙照顾店铺`, //required
        participant: [ //use id
            "Rinko"
        ],
        effect: [
            "Rinko.location=#ryuto"
        ]
    },
    {
        name: "Ninetail的复苏", //required
        start: 101, //required
        desc: `Ninetail从九千年的沉睡中苏醒，成为了世界上最强的九尾狐。`, //required
        participant: [ //use id
            "Ninetail"
        ],
        effect: [
        ]
    },
    {
        name: "Ninetail的凶兽化", //required
        start: 107, //required
        end:107.5,
        desc: `Ninetail凶兽化并夺权，进入皇宫`, //required
        participant: [ //use id
            "Ninetail"
        ],
        effect: [
            "Ninetail.location=#palace",
        ]
    },
    {
        name: "全员进宫", //required
        start: 107.6,
        desc: `Ninetail的朋友全部进宫`, //required
        participant: [ //use id
            "Doragon",
            "Ookami"
        ],
        effect: [
            "Doragon.location=#palace",
            "Ookami.location=#palace",
        ]
    },
    {
        name: "Hikari的诞生", //required
        start: 115,
        desc: `Hikari被龙王创造，定义为Ninetail的忠诚的仆人。`, //required
        participant: [ //use id
            "Hikari",
            "Ninetail",
            "DLord"
        ],
        effect: [
        ]
    },
    {
        name: "Hikari的自我认知", //required
        start: 117, //required
        desc: `在龙王的指导下，Hikari认识到龙族的身份并不是什么值得隐藏的，开始向世人展示自己的原貌。同时，Hikari开始举办公益性的读书会。`, //required
        participant: [ //use id
            "Hikari"
        ],
        effect: [
        ]
    },
    {
        name: "Hikari和Diary", //required
        start: 117.5, //required
        desc: `Hikari和Diary在古书巷中相识，二人一见钟情。古书巷的老板是一位老奶奶。老奶奶去世以后，Hikari将读书会的阵地转移到了古书巷。`, //required
        participant: [ //use id
            "Hikari",
            "Diary"
        ],
        effect: [
            "Diary.location=#palace"
        ]
    },
    {
        name: "Diary的去世", //required
        start: 121, //required
        desc: `在凶兽事件中，Diary去世`, //required
        participant: [ //use id
            "Diary"
        ],
        effect: [
            "Diary.status=#dead"
        ]
    },

    
    {
        name: "妖狐的出现", //required
        start: 701, //required
        desc: `Amethcoy的怨恨累积成为凶兽`, //required
        participant: [ //use id
            "Amethcoy"
        ],
        effect: [
            "Amethcoy.species=#dualtail"
        ]
    },
    {
        name: "妖狐的沉睡", //required
        start: 701.1, //required
        desc: `Amethcoy被Ninetail和Hikari在米莱龙穴市的地铁站中击杀而沉睡，临死前将一部分能量封印在项链中。`, //required
        participant: [ //use id
            "Amethcoy",
            "Ninetail",
            "Hikari"
        ],
        effect: [
            "Amethcoy.status=#dead"
        ]
    },
    {
        name: "妖狐的苏醒", //required
        start: 701.2, //required
        end: 703.5,
        desc: `Amethcoy的项链被一位中学生捡起。她诱导中学生帮助她复活，并获得了极为强大的法力。`, //required
        participant: [ //use id
            "Amethcoy"
        ],
        effect: [
            "Amethcoy.ability+=在对方了解自己的位置、能力、名字、形态四个中两个或以上的情况下可以操纵对方的灵魂的能力。",
            "Amethcoy.status=#alive"
        ]
    },
    {
        name: "妖狐的登基与五岛式的创立", //required
        start: 704,
        desc: `Amethcoy夺权，吞噬了龙王、Ninetail，实行五岛式。废止了「凶兽制」，恢复了「友达制」——选中之人（「Friend」）开局获得12点凶兽点数，但不会随着杀戮而增加，通过四岛和皇宫的「挑战」者可以入宫。`, //required
        participant: [ //use id
            "Amethcoy",
            "Ninetail",
            "Doragon",
            "Ookami",
            "DLord"
        ],
        effect: [
            "Amethcoy.ability+=「至上的力量」",
            "Amethcoy.location=#palace",
            "Ninetail.status=#dead",
            "Doragon.status=#dead",
            "Ookami.status=#dead",
            "DLord.status=#dead",
        ]
    },
    {
        name: "孤独的少女", //required
        start: 707.3,
        desc: `Amethcoy感到十分孤独，复活了原来自己所杀的人。但是，对于Ninetail仍然不抱有好感。`, //required
        participant: [ //use id
            "Amethcoy",
            "Ninetail",
            "Doragon",
            "Ookami",
            "DLord"
        ],
        effect: [
            "Ninetail.status=#alive",
            "Doragon.status=#alive",
            "Ookami.status=#alive",
            "DLord.status=#alive",
        ]
    },
    {
        name: "我的高考啊！", //required
        start: 709.13,
        end: 709.43,
        desc: `Onkin和Anoko因为考试失利，开始转换思维挑战Friend制度。他们两差点被Amethcoy杀死，但是多亏Ninetail相救，二人通过了挑战，进入了皇宫。`, //required
        participant: [ //use id
            "Onkin",
            "Anoko",
            "Ninetail",
            "Amethcoy"
        ],
        effect: [
            "Onkin.location=#palace",
            "Anoko.location=#palace",
        ]
    },
    {
        name: "等级制度的创立", //required
        start: 715,
        desc: `Saluvy夺权，改变了世界制度：
        将人兽龙分为三个等级：上中下。龙上>龙中=人上=兽上>龙下=人中>人下=兽中>兽下。每个等级必须服从比自己等级高的人的命令。
        他下令杀死了皇宫中的低等级生物，将兽上的Ninetail、Wulpit流放到偏远山区`, //required
        participant: [ //use id
            "Amethcoy",
            "Ninetail",
            "Doragon",
            "Ookami",
            "DLord",
            "Saluvy",
            "Onkin",
            "Anoko",
            "Fely",
            "Racon"
        ],
        effect: [
            "Saluvy.location=#palace",
            "Ninetail.location=#unknown",
            "Ookami.status=#dead",
            "Amethcoy.status=#dead",
            "Onkin.status=#dead",
            "Anoko.status=#dead",
            "Fely.status=#dead",
            "Racon.status=#dead",
            "Wulpit.location=#unknown"
        ]
    },
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