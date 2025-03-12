/**
 * This function determines the toString() function for a date value t
 */
function displayTime(t) {
    var year = Math.floor(t);
    t = (t - year) * 365;
    var day = Math.floor(t);
    return "Year " + year + " Day " + (day + 1);
}

/**
 * Turn year and day into a format readable by the system
 * 
 * Not very precise though :/
 * @param {*} y - the year 
 * @param {*} d - the day
 */
function YearDate(y, d){
    return y + (d-1)/365.0;
}

/*
{
    name: "", //required
    arc:"",
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
        name: "魔王的封印", //required
        start: -697.334,
        end: -695.114,
        arc: "o1",
        desc: `R先后与Deg、Im、Arg结识组成队伍讨伐封印了作恶多端的魔王O。`, //required
        participant: [ //use id
            "R",
            "Deg",
            "Im",
            "Arg",
            "O"
        ],
        effect: [
            "R.location=#mirai",
            "Deg.location=#mirai",
            "Im.location=#mirai",
            "Arg.location=#mirai",
            "O.status=#sealed"
        ]
    },
    {
        name: "勇者的封印", //required
        start: -690,
        arc: "o1",
        desc: `勇者一队遭到人民的误解，被封印在Koria国。`, //required
        participant: [ //use id
            "R",
            "Deg",
            "Im",
            "Arg",
        ],
        effect: [
            "R.location=#koria",
            "Deg.location=#koria",
            "Im.location=#koria",
            "Arg.location=#koria",
            "R.status=#sealed",
            "Deg.status=#sealed",
            "Im.status=#sealed",
            "Arg.status=#sealed",
        ]
    },

    {
        name: "第一次凶兽战争", //required
        start: 0, //required
        desc: `最早的两只凶兽：龙王与末蛇的竞争。发生于地狱。龙王获胜。`, //required
        arc: "ancient",
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
        arc: "ancient",
        desc: `第一世界由一个植物凶兽毁灭。世界第一次重建。大概对应现实的2017年。`, //required
        participant: [ //use id

        ],
        effect: [
        ]
    },
    {
        name: "我要开店！", //required
        start: 85, //required
        arc: "rinri",
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
        arc: "rinri",
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
        arc: "ninetail",
        desc: `Ninetail从九千年的沉睡中苏醒，成为了世界上最强的九尾狐。`, //required
        participant: [ //use id
            "Ninetail"
        ],
        effect: [
            "Ninetail.location=#unknown",
        ]
    },
    {
        name: "Ninetail的凶兽化", //required
        start: 107, //required
        end: 107.5,
        arc: "ninetail",
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
        arc: "ninetail",
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
        arc: "hikari",
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
        arc: "hikari",
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
        arc: "hikari",
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
        arc: "hikari",
        desc: `在凶兽事件中，Diary去世`, //required
        participant: [ //use id
            "Diary"
        ],
        effect: [
            "Diary.status=#dead"
        ]
    },
    {
        name: "恶劣！矿山盗掘事件！", //required
        start: 201, //required
        arc: "naza",
        desc: `Naza和Haobo所经营的矿山被黑心奸商夺取了。两人因此丧命进入地狱。`, //required
        participant: [ //use id
            "Naza",
            "Haobo"
        ],
        effect: [
            "Naza.location=#hell",
            "Haobo.location=#hell"
        ]
    },
    {
        name: "Yet Another Beast Event", //required
        start: 224, //required
        arc: "naza",
        desc: `Ninetail在凶兽事件中丧命，进入地狱，此时与两只小狐狸相见。`, //required
        participant: [ //use id
            "Ninetail"
        ],
        effect: [
            "Ninetail.location=#hell"
        ]
    },
    {
        name: "补充事件", //required
        start: 400, //required
        desc: `该事件作为placeholder，补充了所有已经遗忘的角色变化的过程`, //required
        participant: [ //use id
            "Ninetail",
            "Naza",
            "Haobo",
            "Wulpit",
            "Racon",
            "Fely",
            "Hue",
            "Nasehita",
            "Noyuki"
        ],
        effect: [
            "Ninetail.location=#palace",
            "Ninetail.ability+=产生封印结界「天之牢」束缚对方。天之牢维护的开销由被封印者提供，而被封印者能力越强开销越大，能一个瞬间内将最强者的法力和精力抽干到普通人的量。aka对强者效果绝佳",
            "Naza.location=#palace",
            "Haobo.location=#palace",
            "Wulpit.location=#palace",
            "Racon.location=#palace",
            "Fely.location=#palace",
            "Dola.location=#palace",
            "Hue.location=#palace",
            "Nasehita.location=#palace",
            "Noyuki.location=#europe"
        ]
    },

    {
        name: "送你离开", //required
        start: 420, //required
        arc: "naza",
        desc: `Naza和Haobo不是妖狐，没有无止尽的寿命，如果不能通过提升尾数和魔力提升寿命很快就会死亡。加上世界凶兽局势大变，Ninetail认为它们必须远离皇宫去修炼，希望能够延长它们的寿命，同时避免他们受到非人的虐待`, //required
        participant: [ //use id
            "Ninetail",
            "Naza",
            "Haobo",
        ],
        effect: [
            "Naza.location=#unknown",
            "Haobo.location=#unknown",
        ]
    },
    {
        name: "妖狐的出现", //required
        start: 701, //required
        arc: "amethcoy",
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
        arc: "amethcoy",
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
        arc: "amethcoy",
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
        arc: "amethcoy",
        desc: `Amethcoy夺权，吞噬了龙王、Ninetail，实行五岛式。废止了「凶兽制」，恢复了「友达制」——选中之人（「Friend」）开局获得12点凶兽点数，但不会随着杀戮而增加，通过四岛和皇宫的「挑战」者可以入宫。`, //required
        participant: [ //use id
            "Amethcoy",
            "Ninetail",
            "Doragon",
            "Ookami",
            "DLord",
            "Wulpit",
            "Racon",
            "Fely"
        ],
        effect: [
            "Amethcoy.ability+=「至上的力量」",
            "Amethcoy.location=#palace",
            "Ninetail.status=#dead",
            "Doragon.status=#dead",
            "Ookami.status=#dead",
            "DLord.status=#dead",
            "Racon.status=#dead",
            "Fely.status=#dead",
            "Wulpit.status=#dead",
        ]
    },
    {
        name: "孤独的少女", //required
        start: 707.3,
        arc: "amethcoy",
        desc: `Amethcoy感到十分孤独，复活了原来自己所杀的人。但是，对于Ninetail仍然不抱有好感。`, //required
        participant: [ //use id
            "Amethcoy",
            "Ninetail",
            "Doragon",
            "Ookami",
            "DLord",
            "Wulpit",
        ],
        effect: [
            "Ninetail.status=#alive",
            "Doragon.status=#alive",
            "Ookami.status=#alive",
            "DLord.status=#alive",
            "Wulpit.status=#alive"
        ]
    },
    {
        name: "我的高考啊！", //required
        start: 709.13,
        end: 709.43,
        arc: "amethcoy",
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
        arc: "saluvy",
        desc: `Saluvy夺权，改变了世界制度：
        将人兽龙分为三个等级：上中下。龙上>龙中=人上=兽上>龙下=人中>人下=兽中>兽下。每个等级必须服从比自己等级高的人的命令。
        他下令杀死了皇宫中的低等级生物，将兽上的Ninetail、Wulpit流放到偏远山区`, //required
        participant: [ //use id
            "Amethcoy",
            "Ninetail",
            "Ookami",
            "DLord",
            "Saluvy",
            "Onkin",
            "Anoko",
            "Wulpit"
        ],
        effect: [
            "Saluvy.location=#palace",
            "Ninetail.location=#unknown",
            "Ookami.status=#dead",
            "Amethcoy.status=#dead",
            "Onkin.status=#dead",
            "Anoko.status=#dead",
            "Wulpit.location=#unknown"
        ]
    },
    {
        name: "雪地之狼", //required
        start: 720,
        arc: "o",
        desc: `详见O词条`, //required
        participant: [ //use id
            "Ninetail",
            "Doragon",
            "Ookami",
            "DLord",
            "Saluvy",
            "Lokikovsky",
            "O",
            "Noyuki",
            "Hikari",
            "Reshi",
            "Wulpit",
            "Rinri",
            "Rinko"
        ],
        effect: [
            "O.status=#alive",
            "O.location=#palace",
            "Saluvy.status=#dead",
            "Ninetail.location=#palace",
            "Ookami.status=#alive",
            "Wulpit.location=#palace",
            "Lokikovsky.location=#palace",
        ]
    },
    {
        name: "勇者的复苏", //required
        start: 755.33,
        arc: "o",
        desc: `勇者的封印解封，所有的勇者以凶兽的身份重现于世。`, //required
        participant: [ //use id
            "R",
            "Deg",
            "Im",
            "Arg"
        ],
        effect: [
            "R.status=#alive",
            "Deg.status=#alive",
            "Im.status=#alive",
            "Im.species=#ninetail",
            "Arg.status=#alive",
            "Im.ability+=可以让部分实体的某些属性乘或除最大九倍",
            "R.ability+=不会受到非凶兽技能的影响、直接或间接伤害",
            "Arg.ability+=弓箭射到的实体损失一个指定能力，技能发动方获得对应该能力的凶手点数（有亏损）",
            "Arg.ability+=弓箭射到的实体损失一个指定能力，由技能发动方替换一个等值能力",
            "Deg.ability+=被阻挡的伤害可以累计以产生「遗物」",
        ]
    },
    {
        name: "勇者的内斗", //required
        start: 755.34,
        arc: "o",
        desc: `O注意到了勇者的复活。他此时并不把勇者当成严肃的敌人，决定站在旁边拱火。
        虽然他没办法直接改变R的思想，但是他修改了其他三人的常识，让他们认为队友是最大的敌人，并构造了虚假的记忆。
        于是，Arg希望击杀R，而Im和Deg则试图杀死对方。
        Deg的攻击过于笨拙，无法打到Im，而Im的能力则让Deg动弹不得。
        R用自己的剑阻挡住了Arg的狙击，又在千钧一发之际打掉了Im的法杖。
        炎魔意识到无法同时保全四个人，便决定先狠心杀死所有的队友将能力集中后，等到成功后再复活。
        但是，O的能力过于强大，他看透了对方的战术。他用时空龙Noyuki的能力倒转时间，阻止了勇者小队的计划，而勇者小队也因此惨败，被带回皇宫和其他人一起成为了O的新玩具。`, //required
        participant: [ //use id
            "R",
            "Deg",
            "Im",
            "Arg",
            "O",
            "Noyuki"
        ],
        effect: [
            "Deg.equipment+=#deg_relic1",
            "R.location=#palace",
            "Deg.location=#palace",
            "Im.location=#palace",
            "Arg.location=#palace",
        ]
    },

    {
        name: "Epis的生日", //required
        start: 738.66,
        arc: "epis",
        desc: `Epis出生后从她能记起之时便在街上流浪生活（详见角色介绍）`, //required
        participant: [ //use id
            "Epis",
        ],
        effect: [
        ]
    },
    {
        name: "新的生命", //required
        start: 742.88,
        arc: "epis",
        desc: `Epis被老夫妇发现并救助，从此开始了学习。（详见角色介绍）`, //required
        participant: [ //use id
            "Epis",
        ],
        effect: [
        ]
    },
    {
        name: "命运的转折", //required
        start: 753.95,
        arc: "epis",
        desc: `Epis失去了亲人，同时诊断出不治之症。（详见角色介绍）
        `, //required
        participant: [ //use id
            "Epis",
        ],
        effect: [
        ]
    },
    {
        name: "Delta的诞生", //required
        start: 755.07,
        arc: "epis",
        desc: `大二的Epis发明了Delta，同时期决定翘课。（详见角色介绍）
        `, //required
        participant: [ //use id
            "Epis",
        ],
        effect: [
        ]
    },
    {
        name: "雪兔", //required
        start: 756.11,
        arc: "epis",
        desc: `Epis成为凶兽，乘车前往首都。
        O试图获取她的位置，但是失败了（O的获取能力不是凶兽能力）
        O让Ninetail获取她的位置，成功了（Ninetail的获取能力是凶兽能力）
        O认为自己无法对Epis造成伤害，于是O和Ninetail一起前往拦截Epis。
        Ninetail试图用上级魔法攻击Epis，但是由于Epis的能力影响对象被改变自爆了。
        于是O倒转时间让Ninetail重新用物理攻击进行打击。物理攻击激活了Epis体内水晶的能力，使得Ninetail被净化。
        Ninetail使用自己特别的能力「天之牢」封印O，让Epis最后击杀O获得O的能力。
        但是正如Loki杀死了O的宿主，但是却被O附身。
        Epis杀死的是Loki，而O反而获得了新的宿主。（伏笔？）
        无论怎样，在场的各位都认为是胜利。
        `, //required
        participant: [ //use id
            "Ninetail",
            "O",
            "Epis",
            "Lokikovsky",
            "Noyuki"
        ],
        effect: [
            "Ninetail.location=#unknown",
            "O.location=#unknown",
            "Lokikovsky.location=#unknown",
            "Epis.location=#unknown",
            "Lokikovsky.status=#dead",
            "Epis.ability+=可以使用体内水晶的弱共鸣能力",
            "Epis.ability+=可以通过周围魔力的湮灭和变化来为斗篷充能的能力",
        ]
    },

    {
        name: "雪兔登基", //required
        start: 756.12,
        arc: "epis",
        desc: `在大家的一致同意下，Epis成为了新的执政凶兽。世界和平了。
        在Ninetail和龙王的帮助下，学习到了可以抵抗外敌的战斗性能力。
        在Reshi的帮助下，Epis的魔力水晶的强共鸣得到了抑制，Epis的身体状况有所好转。
        施政：复活了一些人（详见Effects）、改为Friend制、大大限制了时空龙的能力、让天气宫更难被找到。
        特别的，现在部分指选型魔力的成功率会由双方的实力差进行加成。（eg再强的魔法由渣渣发动都很难影响到Ninetail等）

        R的小队在O被打倒后失去了主要目标，决定环游世界帮助各地的人解决问题，离开了皇宫。
        寄生在Epis上的O意识到在皇宫里迟早会被Ninetail发现（之前就被发现过一次），也随着Epis的新能力沿着链接寄生到了R的身上……
        Epis的新幸福生活开始啦~
        `, //required
        participant: [ //use id
            "Ninetail",
            "O",
            "Epis",
            "R",
            "Im",
            "Deg",
            "Arg",
            "Noyuki",
            "Fely",
            "Racon",
            "Amethcoy",
            "Reshi"
        ],
        effect: [
            "Ninetail.location=#palace",
            "O.location=#palace",
            "Epis.location=#palace",
            "Epis.ability+=可以抑制体内水晶强共鸣的效果",
            "Epis.ability+=与「链接」的人建立连接，可以在一定限制下互相调用能力、传递情感等。「链接」定义为曾经共鸣过的生物或是在自己视线范围里的生物。",
            "Epis.ability+=通过视线（红眼？）传递魔力可以向所见的生物强加预设好的动作的序列（aka操控，但是不完全剥夺对方的自主意识）",
            "R.location=#unknown",
            "Arg.location=#unknown",
            "Im.location=#unknown",
            "Deg.location=#unknown",
            "O.location=#unknown",
            "Fely.status=#alive",
            "Racon.status=#alive",
            "Amethcoy.status=#alive"
        ]
    },

    {
        name: "O的挣扎", //required
        start: 757,
        end: 758.3,
        arc: "o",
        desc: `O附身在R身上后准备东山再起。获得了新能力后先控制住了Im、Arg、Deg（O的能力）。
        接着利用使Noyuki失去行动能力（Im的能力），并控制Noyuki（O的能力）。
        试图建立反动政权+宗教组织「新·龙教」，将龙王视为「反叛」，通过洗脑加入者让他们感到快乐后自然的信仰（O的能力）。
        ~1年后，Ninetail注意到了这一组织，前往调查，调查后发现了O的存活，准备歼灭。
        然而，O使Ninetail失去行动能力（Im的能力），并试图控制Ninetail（O的能力）。
        在皇宫的Epis观察到Ninetail的局势不佳（DLord的能力），净化了Ninetail、Im、Arg、Deg（Epis的能力），前往战场参战，开始战术反攻。
        O利用多余的点数，激活了许多战斗型能力（凶兽的能力），但是由于人数压制，占下风后被Ninetail所召唤来的Hikari（Ninetail的能力）偷袭而死。
        R由于不能进入天堂而亡（世界设定），O被打上了标记后也不能进入天堂而亡（世界设定）
        `, //required
        participant: [ //use id
            "Ninetail",
            "O",
            "Epis",
            "R",
            "Im",
            "Deg",
            "Arg",
            "Noyuki",
            "Hikari"
        ],
        effect: [
            "O.ability+=产生可穿透物理实体的触手对远处的物体、生物的大脑进行操作",
            "O.location=#europe",
            "R.location=#europe",
            "Im.location=#europe",
            "Arg.location=#europe",
            "Deg.location=#europe",
            "Ninetail.location=#europe",
            "Epis.location=#europe",
            "Hikari.location=#europe",
            "O.status=#dead",
            "R.status=#dead",
            "Im.location=#palace",
            "Arg.location=#palace",
            "Deg.location=#palace",
            "Ninetail.location=#palace",
            "Epis.location=#palace",
            "Hikari.location=#palace",
        ]
    },

    {
        name: "全民运动", //required
        start: 1250,
        arc: "genesis",
        desc: `Epis在Ninetail的建议下开展了「凶兽自由化」的运动。本来的规则是只有极少数人可以当上凶兽，现在的理念是所有人都有点数，但是数量不同（虽然还是不能后天获取就是了）
        对于大多数人来说，这些点数都点在了自保上，但是对于一部分人来说，他们会选择将点数投入到某个能力上，这样就会有了「凶兽」的能力。
        只是很可惜，这个时代的法律和探查凶兽的方法也变得更加严格了。很多时候，这些能力也只能在特定的场合使用。在更多的地方，有「结界」的存在，根本无法使用能力。
        `, //required
        participant: [ //use id
            "Ninetail",
            "Epis"
        ],
        effect: [
        ]
    },
    
    {
        name: "「新亚基金会」", 
        start: 1256,
        arc: "genesis",
        desc: `出现了神秘的类似宗教的组织，「新亚基金会」。他们的门槛极高，只有少数天赋异禀的经过审核的凶兽才能加入。许多成员进入后都自称享受了富贵的生活，让许多人都很羡慕。
        他们也会到处寻找能力点数多但是没有使用的人，让他们加入。这被世人认为是一种新的「暴发户」。不过他们的目的还是未知的。
        `, 
        participant: [
        ],
        effect: [
        ]
    },
    {
        name: "「新亚基金会」++", 
        start: 1266,
        arc: "genesis",
        desc: `「新亚基金会」的分部数量大大增加了。Ninetail试图弄清楚他们的目的，但是却没有找到他们参与非法行为的证据。
        `, 
        participant: [
            "Ninetail"
        ],
        effect: [
        ]
    },
    {
        name: "「生物熔炉」计划", 
        start: 1276,
        arc: "genesis",
        desc: `亚国宣布军队加入两位新兵，他们被称作「生物兵器」。没人知道他们怎么来的，这让世界上的人们都感到了恐惧。
        （详情请见Eve的角色界面）
        `, 
        participant: [
            "Eve",
            "Adam"
        ],
        effect: [
        ]
    },
    {
        name: "「新亚基金会」的终结", 
        start: 1276.1,
        arc: "genesis",
        desc: `就在Adam和Eve问世后不久，「新亚基金会」的所有成员突然消失了。好巧不巧，亚国的一份“机密”文件泄露，里面详细的介绍了「新亚基金会」的目标：
        基金会的目的是收集强大之人的灵魂，将他们秘密押送到亚国熔炼成「生物兵器」。由于选拔上的人都是强大的凶兽，他们可以利用部分人的能力，向外界传达“我们是合法机构哦”的假象。
        然而这份文件的泄露已经太晚了，亚国已经开始利用新的兵器开始了对外战争。
        `, 
        participant: [
        ],
        effect: [
        ]
    },
    {
        name: "从东到西", 
        start: 1277,
        arc: "genesis",
        desc: `Adam和Eve轻松打下了龙都，部分皇宫内人员奋勇抵抗而失败，也有部分人员逃跑，二人对皇宫进行了大清洗，俘虏了龙王。亚国打算在本国建立「新都」，建立新皇宫，将龙王等重要人物转移到本国。
        亚国将没有价值的Doragon和Ookami等留在龙都来善后，将Ninetail、Epis（现执政凶兽）等重要但是不必要的生物关入地牢。他们中的许多受到了非人的待遇，部分比较弱小的凶兽更是被蹂躏至死。
        由于龙王的转移，不少龙族也决定跟随龙王一起转移。一下子世界的风向从东方转向了西方，许多国家被亚国的军事实力施压而不敢有所意见。
        虽然执政凶兽名义上没有改变，但是Epis显然已经无法执政。
        由于Adam和Eve的强大能力，在那之后很长时间没有凶兽能够成功讨伐亚国。
        `, 
        participant: [
            "Adam",
            "Eve",
            "Ninetail",
            "DLord",
            "Epis",
            "Reshi",
            "Noyuki",
            "Racon",
            "Fely",
            "Wulpit",
            "Deg",
            "Im",
            "Arg",
            "Amethcoy"
        ],
        effect: [
            "Adam.location=#ncdungeon",
            "Eve.location=#ncdungeon",
            "Ninetail.location=#ncdungeon",
            "DLord.location=#newcapital",
            "Epis.location=#ncdungeon",
            "Reshi.location=#newcapital",
            "Noyuki.location=#newcapital",
            "Racon.location=#ncdungeon",
            "Racon.status=#dead",
            "Fely.location=#ncdungeon",
            "Fely.status=#dead",
            "Wulpit.location=#ncdungeon",
            "Deg.status=#dead",
            "Im.status=#dead",
            "Arg.status=#dead",
            "Amethcoy.location=#unknown"
        ]
    },
    {
        name: "35岁，是程序员", 
        start: 1311,
        end: 1313,
        arc: "genesis",
        desc: `Taku是一名普通的程序员，来到龙都在大厂打工。然而，35岁的他由于“技术不过关”被裁员。
        Taku开始利用自己的凶手点数研发可以操纵他人和机械的一体化机器，并取得了一定成就。
        他从小就希望能构成一番“大事”，反正自己除了金钱已经没有东西可以失去，死宅的他又没有啥其他愿望，在去异世界之前打算玩一波大的。
        他利用Ookami和Doragon为跳板，控制他们以“前往新都探望龙王”为借口，将自己带到新都（Taku的能力）。
        在那里，Taku解救了被控制成狗的Ninetail（Taku的能力二），Ninetail向他解释了自己力量被剥夺的事和她所知道的一切，请求他恢复王室（Ninetail你也有今天！）。
        然而，Taku虽然同意了，但是打算自己先玩一玩~
        `, 
        participant: [
            "Doragon",
            "Ookami",
            "Taku"
        ],
        effect: [
            "Doragon.location=#newcapital",
            "Ookami.location=#newcapital",
            "Taku.location=#newcapital",
        ]
    },
    {
        name: "世界游戏", 
        start: YearDate(1313,12),
        end: 1315,
        arc: "genesis",
        desc: `Taku在亚国创立了公司，利用自己的能力大量生产包装成“Wifi”的精神控制装置。
        利用自己的能力（也因为他是最早进入新都的一批商人，钻了法律的漏洞(lll￢ω￢)），Taku很快在这个市场上达到了垄断。
        很快，全世界都在使用Taku牌Wifi，而只要在该产品辐射范围内的，都能收到Taku的精神控制。
        很快，将没有人能够抵御……除了一个人：那便是龙铁的领导人光穹。
        Taku希望借龙铁的影响力更大的推广自己的产品，却被同样实力强大的光穹发现了，于是二人展开了搏斗，以光穹的失败告终。
        `, 
        participant: [
            "Taku",
            "Ryoyu Kokyo"
        ],
        effect: [
        ]
    },
    {
        name: "九州伊始", 
        start: YearDate(1315,38),
        arc: "genesis",
        desc: `玩够了的Taku杀死了Adam和Eve，成为了执政凶兽，按照自己的意愿重塑世界。
        他的想法是创造一个简单的世界体系，不需要复杂的凶兽机制。
        凶兽机制恢复到了许多年前的模样：少数人担当凶兽、杀戮获得点数然后成长、没有上限……
        他创造的新世界有九个岛构成，称为「九州」，分别为：
        - 首都： 龙王和执政凶兽（自己）所在的地方
        - 妖兽之国：Ninetail和Hikari为国王的国度
        - 习武之国：Ookami的国度
        - 亚特兰蒂斯：Doragon的国度
        - 时间之国：Noyuki的国度
        - 冰封之国：Epis的国度
        - 天堂：地位等同于原来的天堂，Reshi的国度
        - 美食之国：Rinko和Rinri的国度
        - 黑暗之国：Wulpit的国度
        
        其他一些有名人物的位置也被重新安排了，请见Effects。
        听起来非常儿童过家家？听起来像是硬凑的？那就对了！
        
        兼容消息：部分角色例如Naza和Amethcoy在创世前地点不明，虽然Taku不认识他们，但是在创世后仍然存在，只是地点不明。
        `, 
        participant: [
            "Taku",
            "Adam",
            "Eve",
            "DLord",
            "Ninetail",
            "Hikari",
            "Ookami",
            "Doragon",
            "Noyuki",
            "Epis",
            "Reshi",
            "Rinko",
            "Rinri",
            "Wulpit",
            "Ryoyu Kokyo"
        ],
        effect: [
            "Adam.status=#dead",
            "Eve.status=#dead",
            "Taku.location=#palace",
            "DLord.location=#palace",
            "Ninetail.location=#yszg",
            "Hikari.location=#yszg",
            "Ookami.location=#xwzg",
            "Doragon.location=#atlantis",
            "Noyuki.location=#sjzg",
            "Epis.location=#bfzg",
            "Reshi.location=#heaven",
            "Rinko.location=#mszg",
            "Rinri.location=#mszg",
            "Wulpit.location=#hazg",
            "Ryoyu Kokyo.location=#sjzg"
        ]
    },
] //this list will be sorted in the order of 'end' inc

var arcs = {
    "ancient": "远古故事——世界和传说的伊始",
    "rinri": "新开一面——Rinri和Rinko的故事",
    "ninetail": "九尾传奇——Ninetail的故事",
    "amethcoy": "狐狸夜行——Amethcoy的故事",
    "hikari": "长夜无光——Hikari和Diary的故事",
    "saluvy": "一夜贪婪——Saluvy的故事",
    "naza": "幼狐物语——Naza和Haobo的故事",
    "o1": "封印战争——O、R、Im、Arg、Deg的故事（上）",
    "o": "封印战争——O、R、Im、Arg、Deg的故事（下）",
    "epis": "雪中白兔——Epis的故事",
    "genesis": "星之所处——Adam、Eve和Taku的故事"
};

//preprocess
console.log("Preprocessing events");
for (let i in events) {
    var obj = events[i];
    if (!obj.end) {
        obj.end = obj.start;
    }
    obj.desc = obj.desc.replaceAll('\n', '<br/>');
}

events.sort((a, b) => a.end > b.end ? 1 : a.end == b.end ? 0 : -1);