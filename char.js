
/*
    {
        name: "", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#",
        status: "#alive",
        location: "#unknown",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$`, //required usually put at last
    },
*/

function Image(path){
    return "image/"+path+".jpg"
}

function Avatar(path){
    return "image/"+path+"_.jpg"
}

var chars = [
    {
        name: "Taku", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex:"#male",
        species: "#human",
        status: "#alive",
        location: "#ryuto",
        ability: ["可以进入不被任何人发现的「STEALTH MODE」","可以hack任何生物、机械（需要时间）"],
        relationship:[],
        gallery:[],
        desc:`$35岁被裁员的死宅程序员`, //required usually put at last
    },

    {
        name: "Eve", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex:"#female",
        species: "#stardragon",
        status: "#alive",
        location: "#america",
        ability: ["无效化一切魔法攻击的能力","拥有最为强大的魔力","拥有最为强大的智力"],
        relationship:[
            ["Adam","姐姐"]
        ],
        gallery:[],
        desc:`$亚国的「跨时代生物兵器」之一，另外一只是Adam。
        他们的诞生，建立在名为「生物熔炉」的机密工程之上。
        所谓「生物熔炉」工程，就是一种通过牺牲百万倍的凶兽来创造一只最为强大的凶兽的生物魔法科技。
        而之前提出的「凶兽自由化」————人人都可以选择凶兽能力，只是点数多少不同——这一个政策刚好为这一项目提供了条件。 <br/>
        龙族为人类带来了魔法，但是并不是每个人都能平等的收到龙王的恩惠。
        由于地理的因素，龙族的恩惠主要集中在Zogo国，而原本的亚国虽然是世界上最为富裕的国家，由于没有赶上魔法的发展，导致了国家的衰落。 <br/>
        为此，亚国作为一直以来擅长以武力取胜的国家，其总理秘密推出了「生物熔炉」计划，希望能够通过这个计划来被迫让龙王迁都，让亚国重新崛起。
        为此，诞生的就是Adam和Eve，两只拥有最为强大的力量和智力的凶兽。 <br/>
        Adam和Eve虽然是龙，但是他们不能与龙王沟通。这是「生物熔炉」计划的一部分，就是在他们没有出生的时候，也就是最脆弱的时候控制他们。
        接着，通过后天的洗脑教育，他们两深信不疑，认为亚国是他们的家园，自己要为亚国而战。 <br/>
        龙族的常识是龙王赋予的，人类的常识是后天学习的，没有得到正常的教育也没有龙王的恩惠，他们的「常识」完全异于常人。
        尽管常常受到「主人」的各种虐待和侵犯，但是他们并没有反抗的意识，反而认为这是他们的义务。 尽管他们的力量超过军队其他人的数倍，但是他们并不会反叛。 <br/>
        `, //required usually put at last
    },
    {
        name: "Adam", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex:"#male",
        species: "#stardragon",
        status: "#alive",
        location: "#america",
        ability: ["无效化一切物理攻击的能力","拥有最为强大的力量"],
        relationship:[
            ["Eve","弟弟"]
        ],
        gallery:[],
        desc:"$详见Eve", //required usually put at last
    },
    {
        name: "Aguta", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex:"#male",
        species: "#human",
        status: "#alive",
        location: "#unknown",
        ability: ["在箭矢上附着灵魂的能力", "百步穿杨的能力"],
        relationship:[
            ["Ninetail","厌恶"],
            ["DLord","认可"]
        ],
        gallery:[],
        desc:"$游牧民族的首领，擅长诗赋，爱读历史。认为Ninetail执政是妖狐惑君，为此希望匡正皇宫，让龙王的恩惠普及更多的人。然而在夺权的过程中失败，但是未死回乡独善其身。", //required usually put at last
    },{
        name: "Amethcoy", //required
        image: Image("amethcoy"), //required
        avatar: Avatar("amethcoy"), //required
        otherNames: [], //required
        sex:"#female",
        species: "#fox",
        status:"#alive",
        location:"#dragocave",
        equipment:"#anecklace",
        ability: ["建立联系吸取能量的能力","在虐待中自我成长的能力","让对方失去斗志的能力","撤销位移的能力"],
        relationship:[
            ["Ninetail","厌恶"],
            ["DLord","厌恶"],
            ["Ookami","反感"],
            ["Doragon","反感"],
            ["Anoko","厌恶"],
            ["Onkin","厌恶"],
        ],
        height:1.1,
        gallery:[],
        desc:`$家族代代是能乐的表演者，自小喜欢表演，然而村庄遭到奴隶贩子的洗劫，化作妓女。总是带着家族祖传的黑色八面体项链用于吸收能量，在其中也保留着自己的一部分灵魂。在长年累月的怨恨中成为了凶兽，对人类十分憎恨，希望报复社会。在夺权过程中失败被杀。
        
        她的项链不久之后被一位当地中学生拾起，在中学生的帮助下，她最后得以复活。她利用中学生提升自己的能力，夺取政权。对于她认为维持了人类虐待其他种族世道的Ninetail和DLord等人也十分憎恨不满，因而吞噬了他们获得了「至上的力量」。吞噬后，为了隔离开人类和其他种族，重塑了世界格局为“五岛式”，每个种族主要居住在一个岛上（一人、一龙、二兽、首都）。
        
        在「五岛式」变化后一段时间因为孤独复活了Ninetail、Ookami、Doragon等人，但是对于她们仍然保持负面的态度。Ninetail与Amethcoy常不合，对于自己被吞噬这一件事也总是不甘，被Amethcoy删去了和她有关的记忆。
        
        废止了「凶兽制」，恢复了「友达制」——选中之人（「Friend」）开局获得12点凶兽点数，但不会随着杀戮而增加，通过四岛和皇宫的「挑战」者可以入宫。
        
        仍然非常憎恨人类，试图杀死正当挑战的Onkin和Anoko但是失败。`, //required usually put at last
    },
    {
        name: "Anoko", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["阿诺可"], //required
        sex: "#male",
        species: "#human",
        status: "#alive",
        location: "#dragocave",
        ability: ["与非生命体建立「连接」并施加力的能力"],
        relationship:[
            ["Onkin","朋友"]
        ],
        gallery:[],
        desc:`$Onkin的朋友，性格十分内向，喜好物理。详见Onkin。`, //required usually put at last
    },
    {
        name: "Atoblade", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        career:"军官",
        from:"#hotv",
        relationship:[
        ],
        gallery:[],
        desc:`$详见ZKY的HotV。`, //required usually put at last
    },
    {
        name: "Diary", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        species: "#human",
        status: "#alive",
        location: "#ryuto",
        career:"皇宫新闻记者",
        ability: [],
        relationship:[
            ["Hikari","元丈夫"]
        ],
        gallery:[],
        desc:`$最早是旅游家，由于记录了首都每一家书店的信息而著名。有一次无意在某个不知名的书店碰见Hikari和她一见钟情，被带回皇宫做新闻记者。但是毕竟是人类，很短命，不久就在凶兽事件中去世了。`, //required usually put at last
    },
    {
        name: "DLord", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        species: "#firedragon",
        status:"#alive",
        location:"#palace",
        ability: ["掌握世界核心和龙族力量的能力"],
        relationship:[
            ["Ender Snake","旧友"],
            ["Hikari","主人"],
            ["Ninetail","挚友"],
            ["Doragon","挚友"],
            ["Ookami","挚友"],
            ["Reshi","同居"],
            
        ],
        gallery:[],
        desc:`$世界运转的核心。最早的时候和末蛇是第一批凶兽。如今随着世界的变迁成为了人上人。前一阵子还有着控制一切的能力，但是最近强调“控制权力”而被削弱了。本身没有什么特点，但是可以调用每条龙的能力，同时掌管着魔力的运行。平时喜欢呆在皇宫rua小动物，周日会担任「龙铁」公司的超特急列车「Royal Dragon」号的司机。`, //required usually put at last
    },
    {
        name: "Dola", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["朵拉"], //required
        sex: "#female",
        species: "#human",
        status: "#dead",
        location: "#unknown",
        ability: ["从生物记录魔法到魔导书上并随时调取的能力（调取时会出现原生物的一定特征）"],
        relationship:[
            ["Hue","朋友"]
        ],
        gallery:[],
        desc:`$某贵族的大小姐，喜欢魔法但身体脆弱（帕秋莉？）。通过“Friend”海选选入皇宫。她的（卑鄙龌龊的）家庭教师希望鸡犬升天，但是意图被看穿而没能得意。在凶手事件中丧命。`, //required usually put at last
    },
    {
        name: "Doragon", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        status:"#alive",
        location:"#unknown",
        species: ["#aquadragon","#scaledragon"],
        relationship:[
            ["DLord","仰慕"],
            ["Ookami","同学/挚友"],
            ["Ninetail","同学/挚友"],
            ["Hikari","挚友"],
        ],
        gallery:[],
        desc:`$四大天王之二。从大山里来的水龙。非常关心自己的老家。有一把三叉戟，能够较为熟练的调用水魔法。和Ookami关系非常好。IQ很高。后因凶兽事件死亡。

        在「五岛式」后被Amethcoy复活。`, //required usually put at last
    },
    {
        name: "Ender Snake", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["末蛇","终末之蛇"], //required
        sex: "#male",
        species: "#snake",
        location:"#hell",
        ability: ["控制他人精神的能力","产生不存在物质的能力","复制他人形态的能力","寄生并操纵他人的能力","克隆对象的能力"],
        relationship:[
            ["DLord","旧友"]
        ],
        gallery:[],
        desc:`$最早的凶兽。把自己磨练的非常强大。`, //required usually put at last
    },
    {
        name: "Fely", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#cat",
        status: "#alive",
        location: "#unknown",
        ability: ["调换物品位置的能力"],
        relationship:[
            ["Wulpit","朋友"],
            ["Racon","朋友"]
        ],
        gallery:[],
        desc:`$详见Wulpit故事。`, //required usually put at last
    },
    {
        name: "Ginrin", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        status: "#dead",
        location: "#unknown",
        relationship:[
        ],
        gallery:[],
        desc:`$设定遗忘`, //required usually put at last
    },
    {
        name: "Haobo", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#fox",
        status: "#alive",
        location: "#unknown",
        ability: [],
        relationship:[
            ["Naza","妹妹"],
            ["Ninetail","学徒"]
        ],
        gallery:[],
        desc:`$曾经在煤矿当工头，但是煤矿被其他地主强占了，她和妹妹也因此被杀害。之后在天堂与Ninetail相见三人成为好朋友。现在离开皇宫修炼中。`, //required usually put at last
    },
    {
        name: "Herliant", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#human",
        career:"教师",
        from:"#hotv",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$详见HotV。`, //required usually put at last
    },
    {
        name: "Hue", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["休"], //required
        sex: "#male",
        species: "#human",
        status: "#dead",
        location: "#unknown",
        ability: ["吸取物体和生物时间的能力"],
        relationship:[
            ["Dola","朋友"]
        ],
        gallery:[],
        desc:`$家庭条件不好但是很有志向，通过“Friend”海选所选入皇宫的凶兽。身高不到1m3的小正太（？）和后来以同样途径选中的Dola成了青梅竹马。在凶兽事件中死亡。`, //required usually put at last
    },
    {
        name: "Hikari", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Hikari White"], //required
        sex: "#female",
        status: "#alive",
        location: "#palace",
        species: ["#lightdragon","#scaledragon"],
        ability: ["变成任意物体程度的能力","产生不可治愈伤口程度的能力","治愈&复活程度的能力","控制自己存在与否的能力"],
        relationship:[
            ["Ninetail","女仆"],
            ["DLord","女仆"],
            ["Ookami","朋友"],
            ["Doragon","朋友"]
        ],
        gallery:[],
        desc:`$四大天王中第四。以“perfect maid”著称的有名皇室龙。尾巴末端有一颗光球，尾巴上的鳞片可以生产某种高级香精。小山羊角小翼。由于能力强大，脖子上有项圈和一把小锁来控制能量的输出。详见RTiFE。`, //required usually put at last
    },
    {
        name: "Hypret", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        species: "#human",
        status:"#dead",
        from:"#segicverse",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$无`, //required usually put at last
    },
    {
        name: "Ikeda Kesousero", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["池田 猎狼","池田猎狼"], //required
        sex: "#male",
        species: ["#human","#wolf"],
        status: "#alive",
        location: "#unknown",
        ability: ["强制生物融合的能力"],
        relationship:[
        ],
        gallery:[],
        desc:`$90%是人类，10%是狼族。
        父亲是猎人，和某次猎到的狼女结了婚。但是父亲夭折的早，母亲又寿命不长。双亲丧命后他便阴差阳错的认为是母亲给家庭带来了灾难，于是痛恨兽类。`, //required usually put at last
    },
    {
        name: "Kero", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        species: "#darkelf",
        ability: ["归零，暗黑两个球（后来变成三个），会召唤暗黑精灵（属性越来越强）"],
        from:"#segicverse",
        relationship:[
        ],
        gallery:[],
        desc:`$无`, //required usually put at last
    },
    {
        name: "Lo", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#human",
        status: "#dead",
        location: "#unknown",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$擅长算数和行商`, //required usually put at last
    },
    {
        name: "Massao", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["青墨","青 墨"], //required
        sex: "#male",
        species: "#loong",
        from:"#cakeslice",
        status: "#alive",
        location: "#unknown",
        ability: [],
        relationship:[
            ["Midori","哥哥"]
        ],
        gallery:[],
        desc:`$<b>来自Cakeslice1的描述</b>

        富有浪漫感、文采和情趣的龙之少年。青缘的哥哥。作为吟游诗人的他，平常以浪迹天涯、作诗饮酒为乐，虽然深爱着自己的妹妹，但是有相当一部分时间两人之间有着物理上等的距离。`, //required usually put at last
    },
    {
        name: "Midori", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["青 缘","青缘"], //required
        sex: "#female",
        species: "#loong",
        from:"#cakeslice",
        status: "#alive",
        location: "#unknown",
        ability: [],
        relationship:[
            ["Massao","妹妹"]
        ],
        gallery:[],
        desc:`$<b>来自Cakeslice1的描述</b>

        研究着古代精灵族的遗迹与技术的龙之少女。虽然没有着能走在前列的智力，但仍然把分析和计算作为坚持着的爱好，经常整日整夜的沉浸在算数推理之中。`, //required usually put at last
    },
    {
        name: "Mousee", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        species: "#mouse",
        status: "#dead",
        location: "#unknown",
        ability: ["传送到老鼠的能力","隐蔽不被发现的能力"],
        relationship:[
        ],
        gallery:[],
        desc:`$老鼠的凶兽。曾经夺权成功过，占有了Ninetail的身体。然而在时间倒流中被抹杀了。`, //required usually put at last
    },
    {
        name: "Nasehita", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#butterfly",
        status: "#dead",
        location: "#unknown",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$无`, //required usually put at last
    },
    {
        name: "Naza", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#fox",
        status: "#alive",
        location: "#unknown",
        ability: [],
        relationship:[
            ["Haobo","姐姐"],
            ["Ninetail","学徒"]
        ],
        gallery:[],
        desc:`$详见Haobo的故事。`, //required usually put at last
    },
    {
        name: "Ninetail", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#ninetail",
        status: "#alive",
        location: "#unknown",
        ability: ["复制形态程度的能力","吞噬心脏来增强自身实力程度的能力","死后以小狐狸形态续命程度的能力","在九尾上附着最多九种凶兽能力程度的能力","当受到控制时控制控制者程度的能力","看清对方凶兽能力程度的能力"],
        relationship:[
            ["Ookami","朋友"],
            ["Doragon","朋友"],
            ["Hikari","主人"],
            ["DLord","仰慕"],
            ["Amethcoy","反感"],
            ["Naza","监护人"],
            ["Haobo","监护人"],
            ["Terra","朋友"]
        ],
        gallery:[],
        desc:`$四大天王之三。世界的核心。非常崇敬力量比她强大而又守武德的人。有点傲娇。由于村庄被人类烧毁不得不背井离乡环游世界。最后霸占了某个吸血鬼的洋楼在里面修炼了9000年成为了高尚的九尾狐。虽说是修炼但是因为底子特别好其实都在睡觉罢了……之后成了凶兽，也重新上过学（但是由于战火没有上完高中），认识了Doragon和Ookami。经历过人世间的波澜后发明了Friend制度（「友达制」），废除了凶兽，但是很快被推翻。之后凭借自己的实力再次登上了执政凶兽的宝座。现在的她，能够在九尾上附着最多九种凶兽能力，并可以随时变化，堪称无敌。现在正在研读大学数学。`, //required usually put at last
    },
    {
        name: "Noyuki", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Noyuki Erushi","之霁 二世","之霁二世"], //required
        sex: "#female",
        status: "#alive",
        location: "#mirai",
        career:"龙语和龙人语文化研究博士",
        species: ["#tsdragon","#scaledragon"],
        ability: [],
        relationship:[
        ],
        gallery:[],
        
        desc:`$有两只无名契约龙
        时空龙是全世界理论只有一只的，控制世界正常运行的龙种。然而，她的母亲——第一代时空龙和一位吟游诗人违规产下了她。他的父亲用龙族听不懂的人类语言给他起的名字，结果经过龙族的空耳和加工后写成了这个奇葩样子。现在他的母亲还在位，所以他不用在乎工作。100岁不到（现在800+岁）就因为违规而被抛弃，躲在天马簇市旁边的一个洞穴里。在曾经周游龙界时结识了一条小龙缔结了契约，洞穴的原主人——一条老龙也和她缔结了契约。好奇龙语是怎么工作的，于是点了凶兽能力研究龙语。由于能力太过强大和Hikari一样都有一个项圈控制能量的使用。现在在欧洲研究当地风土人情。`, //required usually put at last
    },
    {
        name: "Onkin", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["虹晴"], //required
        sex: "#male",
        species: "#human",
        status: "#alive",
        location: "#dragocave",
        ability: ["改变连接和信息的能力","改变结界信息的能力","通过肢体接触迅速提升和对方好感度的能力"],
        relationship:[
            ["Anoko","朋友"],
            ["Ninetail","喜爱"]
        ],
        gallery:[],
        desc:`$普通的高中生，因考试不理想和Anoko组成「Friends」挑战皇宫，最终成功，进入皇宫（但是Anoko没有作为辅助没有进入）。和正常人一样反感杀戮和嗜血，会尽可能避免杀伤对方。

        挑战的过程中由于不可避免的看到了血腥暴力的场景，特别是Amethcoy对Ninetail的憎恨和恃强凌弱，给他带来了心灵上的创伤。
        
        特别喜欢Ninetail（恋人层面上）。`, //required usually put at last
    },
    {
        name: "Ookami", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#whitewolf",
        status: "#alive",
        location: "#unknown",
        equipment:"#osword",
        ability: [],
        relationship:[
            ["Doragon","朋友"],
            ["Ninetail","朋友"],
            ["Hikari","朋友"]
        ],
        gallery:[],
        desc:`$四大天王之一

        曾和Doragon、Ninetail是同学，三人由于是年级中少见的兽人从而结为同好。喜欢舞剑但是实际上没有什么战斗力。喜欢安静的饮茶。在凶兽事件中死亡。
        
        「五岛式」后，被Amethcoy复活。`, //required usually put at last
    },
    {
        name: "Pyre", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Omnipyre"], //required
        sex: "#male",
        from:"#hotv",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$无`, //required usually put at last
    },
    {
        name: "Racon", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#tanuki",
        status: "#alive",
        location: "#unknown",
        ability: ["变成他人形态（不复制能力）的能力"],
        relationship:[
            ["Wulpit","朋友"],
            ["Fely","朋友"],
        ],
        gallery:[],
        desc:`$见Wulpit故事。`, //required usually put at last
    },
    {
        name: "Rinko", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Touhou Rinko","东方 麟空","东方麟空"], //required
        sex: "#female",
        species: ["#fox","#dragon"],
        status: "#alive",
        location: "#unknown",
        ability: ["附身龙和鸟的能力","定格相机所拍下一切的能力"],
        equipment:"#rkcamera",
        relationship:[
            ["Rinri","妹妹"]
        ],
        gallery:[],
        desc:`$乡村女孩，喜欢摄影，特别是拍摄乡土人情和鸟类。异色瞳。来到首都帮助哥哥经营面包店。`, //required usually put at last
    },
    {
        name: "Rinri", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Touhou Rinri","东方 麟日","东方麟日"], //required
        sex: "#male",
        species: ["#fox","#dragon"],
        status: "#alive",
        location: "#unknown",
        ability: ["有志者事竟成的能力"],
        relationship:[
            ["Rinko","哥哥"]
        ],
        gallery:[],
        desc:`$龙王的旧友。父母一只为龙一只为狐狸。异色瞳。在首都开设面包店。详见RTiFE。`, //required usually put at last
    },
    {
        name: "Reshi", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["龙母"], //required
        sex: "#female",
        status: "#alive",
        location: "#palace",
        species: ["#sldragon","#furdragon"],
        ability: ["管辖生殖与遗传的能力"],
        relationship:[
            ["DLord","同居"]
        ],
        gallery:[],
        desc:`$无`, //required usually put at last
    },
    {
        name: "Ryoko", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Tagashita Ryoko","田下 霖子","田下霖子"], //required
        sex: "#female",
        species: "#slime",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$旁支角色`, //required usually put at last
    },
    {
        name: "Ryoryu", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Kazami Ryoryu"], //required
        sex: "#female",
        species: ["#winddragon","#scaledragon"],
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$旁支角色`, //required usually put at last
    },
    {
        name: "Ryoyu Kokyo", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["龙羽 光琼","龙羽光琼","龙宇 光穹","龙宇光穹"], //required
        sex: "#female",
        species: ["#lightdragon","#scaledragon"],
        career:"龙族铁路公司「龙铁」的总裁",
        status: "#alive",
        location: "#esehushi",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$
        龙羽光琼是对内名，龙宇光穹是对外名。

        出生的时候被赋予的名字是前者。然而为了证明自己能够独当一面而重新换成了后者。在龙铁对外事务中从不露面（都是管家露面），以致于许多人认为她只是名存实亡的CEO。

        实际上身高只有1m3-1m4，是萝莉呢（？）
        
        父母都是非常强大的龙族，自身魔力也很强。`, //required usually put at last
    },
    {
        name: "Segic", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        species: "#human",
        from:"#segicverse",
        status:"#dead",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$无`, //required usually put at last
    },
    {
        name: "Sewei", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Ryu no sewei"], //required
        sex: "#male",
        species: ["#firedragon","#scaledragon"],
        ability: [],
        status: "#alive",
        location: "#tenkigo",
        relationship:[
        ],
        gallery:[],
        desc:`$旁支角色。
        皇宫中负责联络的小龙（有的时候是），现在在天气宫工作。

        特别的，《陷落天域》中是zky和Pyre的“同学”`, //required usually put at last
    },
    {
        name: "Tenmatsu", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Mitsurugi Tenmatsu","御剣 天松","御剣天松"], //required
        sex: "#male",
        species: "#human",
        career:"皇宫守卫、新人教练",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$旁支角色`, //required usually put at last
    },
    {
        name: "Terra", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#human",
        status:"#dead",
        ability: [],
        relationship:[
            ["Ninetail","朋友"]
        ],
        gallery:[],
        desc:`$旁支角色`, //required usually put at last
    },
    {
        name: "Wulpit", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: ["#male","#female"],
        species: ["#wolf","#fox","#rabbit"],
        status: "#alive",
        location: "#unknown",
        ability: ["在三种形态和种族中转化的能力"],
        relationship:[
            ["Racon","朋友"],
            ["Fely","朋友"]
        ],
        gallery:[],
        desc:`$狼形态是男性，其余是女性。可以在三个身体中切换。而且一个肉体死亡不会影响其他肉体。
        
        曾经和Racon和Fely一起当过强盗，经过神仙教化后正常化。在一次凶兽事件中失掉了兔子的变身能力。在Amethcoy的凶兽事件中死亡后在「五岛式」中被复活。

        和Fely一起成为最早受到Onkin三技能影响的小动物`, //required usually put at last
    },
    {
        name: "Yatsujitera", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Nanjin Yatsujitera","南臣 八十寺","南臣八十寺"], //required
        sex: "#male",
        species: "#snake",
        ability: [],
        relationship:[
            ["Ender Snake","以……为原型"]
        ],
        gallery:[],
        desc:`$以末蛇为原型的旁支角色，非常的贪玩。`, //required usually put at last
    },
    {
        name: "Yuki", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Zajison Yuki"], //required
        sex: "#male",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$旁支角色`, //required usually put at last
    },
    {
        name: "zhukyRLG", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        from:"#segicverse",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$无`, //required usually put at last
    },
    {
        name: "zky", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        species: ["#wolf","#dragon"],
        from:"#segicverse",
        ability: [],
        relationship:[
        ],
        gallery:[],
        desc:`$无`, //required usually put at last
    },
    {
        name: "Saluvy", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        species: ["#dragon","#scaledragon"],
        status:"#alive",
        location: "#unknown",
        ability: [],
        relationship:[
            ["Amethcoy","神秘关系"]
        ],
        gallery:[],
        desc:`$能力不详。是救助Amethcoy的中学生的父亲的同事。在某生物研究所工作。
        由于一个特殊的契机，他所在的研究所发明了聚焦黑暗粒子的机器，允许一个生物拥有更多的点数和更大的能力。
        使用这个机器的第一个人，也就是救助Amethcoy的中学生的父亲有着十分自由的思想，认为龙族不应受到龙王中央的管制，因此凶兽化发动革命，但是失败。
        而他则继承了同事的意志，成功夺权。但是凶兽的能力会改变一个人的意志，使其堕落。因此，在执政后，他忘记了自己的初心，成立了等级制。`, //required usually put at last
    },
    {
        name: "Lokikovsky", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Loki"], //required
        sex: "#male",
        species: ["#wolf"],
        status:"#alive",
        location: "#kamitoku",
        ability: [],
        relationship:[
            ["O","（曾）被寄生"]
        ],
        gallery:[],
        desc:`$出生于等级制度诞生之后，是生活在世外桃源般的村落中的兽下级——最低级的兽人。
        对于等级制度很不满，决定正义的推翻，但是在O的寄生下逐渐不能矜持住自己的力量`, //required usually put at last
    },
    {
        name: "O", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        species: ["#slime"],
        status:"#alive",
        location: "#kamitoku",
        ability: ["大幅度强化他人能力的能力"],
        relationship:[
            ["Lokikovsky","（曾）寄生"],
            ["Epis","（曾）寄生"],
            ["R","被讨伐/寄生"],
            ["Arg","被讨伐"],
            ["Deg","被讨伐"],
            ["Im","被讨伐"],
        ],
        gallery:[],
        desc:`$被封印的原史莱姆魔王，在Loki的鲁莽下被解放，附身在Loki身上给予他力量，并慢慢的吞噬他的心灵。
        Loki其实并不想要这份力量，但是不得不接受。
        一路上，O控制了龙上族的富二代和即将于富二代结婚的兽上族凤凰*，
        受到Ninetail的反抗后奴化了Ninetail，完全复写了Loki的意志。
        控制了掌管世界「伦理」与「道德」的龙族*，
        进而控制了掌管世界的地之龙神「Nekidora」和DLord，
        从而得以借用Noyuki的力量辅助自己成为他人不敢反抗也不能反抗的「神」。
        随着Loki和O逐渐奴化住更多的角色，O的力量也大幅上升，最后非常轻松的超过了一切。
        再登基后，O废止了等级制度，将世界恢复到了一个它所乐意的状态（详见事件「雪地之狼」的事件影响）
        O的兴趣是玩弄世界上的（几乎所有的）角色的肉体与感情，常常随意的改变时间、空间、世界规则来创造「What If」的时空，最后再通过Noyuki还原。
        是传统意义上的不可解凶兽？
        *:无名OC
        `, //required usually put at last
    },
    {
        name: "R", //required
        image: "", //required
        avatar: "", //required
        otherNames: ["Rin"], //required
        sex: "#male",
        species: "#human",
        status:"#alive",
        location: "#koria",
        equipment:["#r_sword"],
        ability: [],
        relationship:[
            ["Im","队友"],
            ["Arg","队友"],
            ["Deg","队友"],
            ["O","讨伐/被寄生"]
        ],
        gallery:[],
        desc:`$<img src="image/R.png"/> 
        <i>Rin的珍藏之言</i>

        哪怕写作R也读作Rin。
        性格冷静而诡异，说话直言不讳，看上去也令人感觉高冷而难以靠近。
        R的早年对数学颇有兴趣，对于「零」与「不存在之数」研究深入，能够创造出有一定智能的战斗机器人。
        然而O的出现给他的研究和家乡带来了灾难，于是他利用自己所学的知识踏上了讨伐魔王的征程。
        千年前讨伐O大魔王的勇者之一（也是领导者），持单手剑「炎魔」。在封印了大魔王O后收到了人们的赞佩。
        然而由于小人的嫉妒与别有用心，他和他的队伍遭到了诬陷。
        有着巨大的力量的他们被人们当成了「凶兽」，用特别的力量封印在Koria国。
        千年之后，随着O的解封，他的封印的力量也逐渐削弱。这次的他，虽然以真正的凶兽的身份出现，但并没有被凶兽的力量所侵蚀。
        他以极为冷静的态度，适应着这个新的世界，向复活的O拔剑。只不过，这一次，他并不会被「无辜」的群众所拖累和绊倒。`, //required usually put at last
    },
    {
        name: "Im", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#sixtail",
        status:"#alive",
        location: "#unknown",
        equipment:["#im_staff"],
        ability: [],
        relationship:[
            ["R","队友"],
            ["Arg","队友"],
            ["Deg","队友"],
            ["O","讨伐"]
        ],
        gallery:[],
        desc:`$千年前的六尾妖狐，肉体早已死去只剩下灵体。附着在少女（其实是萝莉？单纯只是对年轻的渴望）的身上成为了现在所熟知的Im。职位是术士、辅助和治疗。
        准确来说Im是R在队伍里的别称，狐狸或是宿主的原名早已被忘却。
        Im加入勇者的队伍并不是因为与魔王有恩怨，而只是单纯的对探险感兴趣。
        在沉睡中，Im自然的进化成了九尾狐，在基础能力上与Ninetail持平。

        关于她的能力，需要注明：同一个实体的同一个属性不能被重复使用该技能（但是可以复原或撤销效果）。同时一般不能对常见物体的大小、数量（弓箭、魔法能量团等projectile除外）做修改。
        但是可以改变例如角色的魔法抗性。常见的使用例子是自己射出的魔法能量数量*9，冻结时间*9，那么敌方就会受到81s的不能移动debuff。
        她的原型非常的显然，相信大家可以轻松发现。`, //required usually put at last
    },
    {
        name: "Arg", //required
        image: Image("arg"), //required
        avatar: Avatar("arg"), //required
        otherNames: [], //required
        sex: "#female",
        species: "#darkdragon",
        status:"#alive",
        location: "#unknown",
        equipment:["#arg_bow"],
        ability: [],
        relationship:[
            ["R","队友"],
            ["Im","队友"],
            ["Deg","队友"],
            ["O","讨伐"]
        ],
        gallery:[],
        desc:`$神秘的黑龙，原本是O的手下大将，但是被勇者一行击败后被“攻略”，成为了勇者的一员。名字是R起的，原名不详。职位是远程。
        
        关于能力的说明：两个能力选择最多一个发动，对于每个同样的对象最多发动1次。
        能力1所失去的能力不只是凶兽能力，也可以是个人、种族能力甚至只是一个人的长处。部分对应获得点数如下：
        长处、优点 -- 0点
        原1、2、3点的能力 -- 1点
        原4点的能力 -- 2点
        原8点的能力 -- 6点
        原16点的能力 -- 10点

        能力2所替换的能力必须与原能力点数一致，不可由多个能力替换，不可替换为点数少于或多于原点数的能力。
        `, //required usually put at last
    },
    {
        name: "Deg", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#male",
        species: "#dwarf",
        status:"#alive",
        location: "#koria",
        equipment:["#deg_shield"],
        ability: [],
        relationship:[
            ["R","队友"],
            ["Im","队友"],
            ["Arg","队友"],
            ["O","讨伐"]
        ],
        gallery:[],
        desc:`$最早加入勇者队伍的人。愤青般的热心。职位是先锋和防御。
        自然，名字是R起的代号，原名不详。
        关于能力的说明：产生的遗物对于队伍中每个人都生效。
        `, //required usually put at last
    },
    {
        name: "Epis", //required
        image: "", //required
        avatar: "", //required
        otherNames: [], //required
        sex: "#female",
        species: "#rabbit",
        status:"#alive",
        location: "#enben",
        equipment:["#epis_hood","#epis_crystal","#epis_shooter"],
        ability: ["激发斗篷隐藏能力的能力","激发体内水晶能力的能力"],
        relationship:[
            ["O","（曾）被寄生"]
        ],
        gallery:[],
        desc:`$Epis，兔子黑魔法术士。
        
        出生在九月飘雪的她，自幼时起便失去了父母，在城市的角落中与流浪的猫狗一起求生。不会言语、没有知识的她或许根本无法意识到自己和流浪动物的差别。
        幸运的是，这样的生活虽然漫长，但是还是短暂的。在她大概5岁那年，她被一对老夫妇救下，从此有了温馨的家。
        老夫妇家住城市郊区的森林的一件独立的木屋中，以一边砍柴一边护林为生，他们唯一的女儿十几年前在暴风雪中丧命，但是这并没有打垮坚强的夫妇。他们也孤独的，但是顽强的生存了下来。
        那一天，老夫妇进城参加集会，而正是这个契机，让他们注意到了Epis。或许在他们眼中，Epis成了他们第二个女儿。
        老夫妇的家庭状况虽然不算富裕，但是仍有多余的金钱供Epis读书。
        Epis上了小学，又上了中学，曾经一度与知识毫不相及的她疯狂的遨游在知识的海洋里。而这时她才发现她自己学习上天赋异禀。
        她成绩优异，一直被称为“天才”，没过两年便完成了小学六年的学业，跳级进入中学。在中学，她又很快破格获得了本地最好学院——「炎都术士学院」的认可，提前开始了大学的学习。
        然而，就在她进入梦寐以求的学院不久，她那悲惨的命运又试图将她拉回黑暗之中。
        考入学院不久，老夫妇就因年老体衰去世了。而几乎与此同时，她的入学体检中就显示出她体内所包裹着的「魔力结晶」
        医生告诉她，魔力结晶随着人的生长而生长，而现在已经长到了不可挽回的地步。哪怕做手术，对肉体带来的负面影响也太大了。
        而由于它对内脏的压迫，这个结晶有很可能会影响到Epis的记忆力、听力、视力乃至体力等等。
        或许，她想，她并不是自幼就「失去」了父母，而是父母先验的「抛弃」了她，但这一切都不重要了。
        这突如其来的两次噩耗，沉痛的打击着她。由于与人交流的不便，许多人主动的回避与她沟通，而她也开始自我孤立。
        小时候早已习惯无人为伴的她，很快便适应了“宅”的生活，但与此相对的，她又回到了那个孤僻的自我之中。
        大二那年，她的听力受到了巨大的影响，如果坐在中后排，便根本听不到老师的课程。凭借着她的智慧，他毅然决定不去上课，只靠自己对书本的钻研来学习。
        在这段时间内，她也发明了自己的「伴侣」——Delta。虽然这把魔导炮并不是世界上能力最强的，但是却可以与魔力的结晶产生响应，也就是说，是自己独属的。
        而在精神上，她的支撑便是家中所藏的各种大小的毛绒玩具（她喜欢毛茸茸的东西，但是自大学以后又为此感到羞耻，不愿告诉他人）
        很快，正如医生所告诉她的一般，她的记忆力也开始衰退，但是衰退的方式也仿佛是命运玩弄她一般。
        Epis脑海中的过去，就如同慢慢褪色的老式胶片一般，逐渐的失真暗淡。回想起与老夫妇同居、自己上学的时光，她的印象中只留下了一个抽象而空洞的形容词：“幸福”
        但倘若要想起任何细节的事情，则又如试图去抓住虚无缥缈的薄雾一般终无果。
        然而，她却不会忘记自己在大街上蜷缩的日子，不会忘记老夫妇葬礼上的钟声，不会忘记自我禁闭以来所体验到的点滴哀伤。
        简直就是所谓的「选择性遗忘」吧。
        大三的一个早晨，Epis在一阵黑暗中醒来。伴随着嗡嗡的耳鸣声，她知道自己的病情可能又加重了。她摸索到医院，找到熟悉的医生，得到的却只有这样的回复：
        “你的寿命可能只有一个多月了。”
        虽然听力和视力还可以通过现代医学补救，但是魔力结晶的共鸣却不止于简单的悸动。每15天准时响起的心灵的钟声，也会是她死亡的倒计时。
        在长达一天的手术后，Epis走出了医院（为什么不住院呢？思考留作读者习题）。
        “已经没有可失去的了”的她决定走上大多数人所恐惧而不敢想象的黑魔法的别路——凶兽化。而这条路，也恰恰是两年之内她自己所一直研究而为自己规划的。
        但是，凶兽化只能增强她的能力，并不能延长她的寿命。（为什么不用凶兽能力延长自己的寿命？思考留作读者习题）
        在大雪纷飞的世界里，少女还能否看到灿烂的极光？
        `, //required usually put at last
    },
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