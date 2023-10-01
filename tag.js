var tags={

    "species":{
        parent:null,
        name:"种族",
        desc:"种族的根标签，主要有三个，分布在世界各地",
        icon:"dragon"
    },
    "dragon":{
        parent:"species",
        name:"龙族",
        desc:"三大种族之一，又龙王掌管。大多寿命较长、有一定智力、巨大的力量和魔法使用能力。",
        icon:"dragon"
    },
    "firedragon":{
        parent:"dragon",
        name:"火龙",
        desc:"使用火属性的龙，分布广泛",
        icon:"dragon"
    },
    "aquadragon":{
        parent:"dragon",
        name:"水龙",
        desc:"使用水属性的龙，分布广泛",
        icon:"dragon"
    },
    "lightdragon":{
        parent:"dragon",
        name:"光龙",
        desc:"使用光属性的龙，较为稀少。某些龙也具有治愈能力。",
        icon:"dragon"
    },
    "winddragon":{
        parent:"dragon",
        name:"风龙",
        desc:"使用风属性的龙",
        icon:"dragon"
    },
    "darkdragon":{
        parent:"dragon",
        name:"黑龙",
        desc:"使用暗属性的龙，比较强大和稀有。",
        icon:"dragon"
    },
    
    "sldragon":{
        parent:"lightdragon",
        name:"★白龙",
        desc:"一种特殊的光龙，全身雪白覆盖有毛，有着极强的魔力和光魔法使用能力。种族的全部成员住在龙界的世外桃源中。由于只要和非同种族的生物交配就会丧失种族的特性，现在已十分稀少。",
        icon:"dragon"
    },
    "tsdragon":{
        parent:"dragon",
        name:"时空龙",
        desc:"掌握时空的龙，可以倒转、停止时间，压缩、改变空间。拥有极大的魔力潜力。由于过于强大，全世界理论上只能拥有一只（现在实际上有两只），需要受到天气宫和龙王的直接管理和控制，且能力的使用会受到审查和限制。时空龙的工作年限是一万年，在其中时空龙的繁殖也是基本不允许的。",
        icon:"dragon"
    },
    "scaledragon":{
        parent:"dragon",
        name:"鳞龙",
        desc:"表面附有鳞片的龙，最为常见。",
        icon:"dragon"
    },
    "furdragon":{
        parent:"dragon",
        name:"毛龙",
        desc:"毛茸茸的龙，最为罕见。",
        icon:"dragon"
    },
    "loong":{
        parent:"dragon",
        name:"东方龙",
        desc:"东方的龙，长条状是特征。",
        icon:"dragon"
    },

    "human":{
        parent:"species",
        name:"人类",
        desc:"三大种族之一，地球本真的智慧物种。大多有一定的社会性和智力。",
        icon:"blind"
    },
    "elf":{
        parent:"human",
        name:"精灵",
        desc:"人类的一种，现代科学认为是人类先祖接触了大量魔力以后突变成的种族。具有超过常人的智慧和魔法使用能力，对某一属性的魔法使用能力较高。常常隐居或种群内群居。",
        icon:"hiking"
    },
    "darkelf":{
        parent:"elf",
        name:"暗精灵",
        desc:"精通暗属性的精灵。",
        icon:"hiking"
    },
    "dwarf":{
        parent:"human",
        name:"矮人",
        desc:"擅长工匠的种族，较为矮小。其实不是人类，但是长得太像人类被分类到人类之下。",
        icon:"hiking"
    },

    "beast":{
        parent:"species",
        name:"兽族",
        desc:"三大种族之一。在魔力诱导下产生的高级兽类，与平常的兽类不同，能理解龙人语并使用魔法。有的以人类形态与其他种族混居，也有的保持着兽形态。只有少数有较高的智力，但相比人类而言力量更大。",
        icon:"paw"
    },
    "snake":{
        parent:"beast",
        name:"蛇",
        desc:"可以灵活使用毒液、麻痹装置的种族。常常能够以潜伏作战取胜。",
        icon:"feather"
    },
    "rabbit":{
        parent:"beast",
        name:"兔",
        desc:"活泼的兽族。女性比例较高。",
        icon:"feather"
    },
    "tanuki":{
        parent:"beast",
        name:"狸猫",
        desc:"传说中的动物，能够千变万化是对这个种族的刻板影响。",
        icon:"paw"
    },
    "cat":{
        parent:"beast",
        name:"猫",
        desc:"灵活取胜的种族，有多个种类",
        icon:"cat"
    },
    "fox":{
        parent:"beast",
        name:"狐",
        desc:"具有神性、魔力的种族。尾巴的数量决定了魔力的强度，大致分为1、2、3、6、9尾狐。从刻板影响来看，部分狐狸有着初级的控制能力，且常常作为神使。",
        icon:"firefox browser"
    },
    "dualtail":{
        parent:"fox",
        name:"双尾狐",
        desc:"较为强力的狐狸",
        icon:"firefox browser"
    },
    "sixtail":{
        parent:"fox",
        name:"六尾狐",
        desc:"极为强力的狐狸",
        icon:"firefox browser"
    },
    "ninetail":{
        parent:"fox",
        name:"九尾狐",
        desc:"狐狸中魔力、寿命最高的种族。只有通过数千年的训练才可以进化而成。【种族能力：控制他人心灵的能力】",
        icon:"firefox browser"
    },
    "wolf":{
        parent:"beast",
        name:"狼",
        desc:"具有力量、擅长集体行动的肉食性动物。分为灰狼、黑狼、白狼等。部分个体有灵性和神性。",
        icon:"dog"
    },
    "whitewolf":{
        parent:"wolf",
        name:"白狼",
        desc:"白色的狼，常常具有较高的神性和灵性。",
        icon:"dog"
    },
    "mouse":{
        parent:"beast",
        name:"鼠",
        desc:"常见的小动物，杂食。魔力、力量都较弱，常常依靠群体和敏捷取胜。",
        icon:"mouse"
    },
    "butterfly":{
        parent:"beast",
        name:"蝴蝶",
        desc:"蝴蝶被誉为“会飞的花朵”，是一类非常美丽的昆虫。蝴蝶大多数体型属于中型至大型，翅展在15~260毫米之间，有2对膜质的翅。体躯长圆柱形，分为头、胸、腹三部分。体及翅膜上覆有鳞片及毛，形成各种色彩斑纹。",
        icon:"fly"
    },
    "slime":{
        parent:"beast",
        name:"史莱姆",
        desc:"原来只在地狱的森林中出现的小怪物，虽然看着弱小但是亚种有很多。有的可以完全吞噬、复制自己的猎物，有的可以溶化肉体与衣物，十分的危险。",
        icon:"feather"
    },


    "equipment":{
        parent:null,
        name:"装备",
        desc:"所有装备的根标签",
        icon:"camera"
    }, 
    "rkcamera":{
        parent:"equipment",
        name:"相机（Rinko）",
        desc:"普普通通的拍立得相机，但是一家人辛辛苦苦存钱所换来的，承载了Rinko的梦想。能够定格住拍照框内的物体。",
        icon:"camera"
    }, 
    "anecklace":{
        parent:"equipment",
        name:"项链(Amethcoy)",
        desc:"Amethcoy祖传的项链，具有很强的灵性，能够贮存部分能力。有人说可以和灵魂交互。",
        icon:"camera"
    },
    "osword":{
        parent:"equipment",
        name:"剑(Ookami)",
        desc:"Ookami的剑（可能是日本刀？）。没有什么特别的能力，Ookami也不会战斗意义上的舞剑，只会做作秀。",
        icon:"camera"
    },
    "r_sword":{
        parent:"equipment",
        name:"鬼剑「炎魔」",
        desc:"单手剑。能造成火焰伤害。因为有剑之精灵寄居其中，所以可以自主行动。",
        icon:"camera"
    },
    "im_staff":{
        parent:"equipment",
        name:"法杖「雪雉」",
        desc:"法杖。可以射出无属性魔法，能使对方凝滞或无法行动1s（基础数值）。",
        icon:"camera"
    },
    "arg_bow":{
        parent:"equipment",
        name:"弩「<i>Annihilator</i>」",
        desc:"可以同时射出多根箭的弩。由于使用了可以注魔的材料，可以注入魔法增加伤害或射程。",
        icon:"camera"
    },
    "deg_shield":{
        parent:"equipment",
        name:"盾「真实之盾」",
        desc:"虚拟的魔法屏障可以沿着盾面延展以形成更大的保护范围，同时盾本身会吸收伤害和魔法力量来自我修复。",
        icon:"camera"
    },
    "relic":{
        parent:"equipment",
        name:"遗物（Deg）",
        desc:"由Deg的能力产生的具有一定魔法效应的小浮游物件",
        icon:"atom"
    },
    "deg_relic1":{
        parent:"relic",
        name:"遗物「Barrier of Ego」",
        desc:"持有者更难被精神控制",
        icon:"atom"
    },
    "epis_shooter":{
        parent:"equipment",
        name:"微型魔导炮「<i>Delta</i>」",
        desc:"Epis研发的魔导炮，具有极强的输出和穿透能力。有多个挡位对应着不同的口径和威力。除此以外，她不想让别人知道的是，这把武器上还装载了智能手机应用和「娱乐模式」。在娱乐模式下，可以发出流光溢彩般的光芒，但是炫酷而不中用。",
        icon:"camera"
    },
    "epis_crystal":{
        parent:"equipment",
        name:"魔力结晶（Epis）",
        desc:`Epis体内的魔力结晶，威胁着她的生命的同时也给予了她极大的力量。
        在与其他凶兽或是有能力的人物（aka在本网站上记载的人物）发生肢体接触时会发生【共鸣】，获得4点凶兽点数。
        【共鸣】可以让对方回归「本真状态」，即不受到控制、思想改变、世界尝试的约束（这个状态的定义是暧昧的，主要由龙王的心情决定 - -||）
        「本真状态」持续24h。之后可以重新共鸣，但是重新共鸣不会多次获得凶兽点数。
        如果一段时间没有发生【共鸣】，将会发生【强共鸣】，获得12点凶兽点数，但是会对肉体产生极大的不可逆的影响
        
        【弱共鸣】可以和任何强大的人（不必要有名字）产生共鸣，获得1点凶兽点数。`,
        icon:"fire"
    },
    "epis_hood":{
        parent:"equipment",
        name:"斗篷（Epis）",
        desc:`Epis的斗篷，黑色的。为了隐藏自己而常常戴着。常常盖住Epis的兔耳和尾巴。虽然医生告诉她，长时间的戴着斗篷会使耳朵一直受到压迫而产生听力的影响，她仍然常常戴着。
        隐藏能力（需要用凶兽点数激活）：在对方使用指选角色的、非物理的攻击时，如果攻击对象是可数的，且自己在攻击对象中，会将自己排除出攻击对象，将攻击者加入攻击对象；
        如果攻击对象是不可数的（大群体），且自己在攻击对象中，会将自己排除出攻击对象。
        在抵挡非凶兽技能时，该技能可无限次发动；在抵抗凶兽能力时，该技能发动一次后需要充能。
        充能的方法是使用魔导炮对其他生物造成一定数量的阻挡或未被阻挡的伤害。
        下面是一些例子：
        被小刀刺伤 - 物理攻击，不发动
        某人的魔法引起地震 - 非指选角色，不发动
        被追踪火球设为目标 - 攻击对象可数，将火球目标设定为发动者
        试图被控制 - 攻击对象可数，将控制对象设定为发动者（aka无效化）
        试图控制整个城市的人 - 攻击对象不可数，自己不被控制
        试图命令所有凶兽紫砂 - 攻击对象可数，发动者也要紫砂
        `,
        icon:"fire"
    },


    "loc":{
        parent:null,
        name:"位置",
        desc:`地点的根标签`,
        icon:"location arrow"
    }, 
    "ryuto":{
        parent:"loc",
        name:"龙都",
        desc:`位置大概在现在的南京，在Zogo国内独自为国，是皇宫的所在地，由龙王直接管辖。
        根号江、大川两条河流穿过城市，将城市分为北、西和南区。
        北区由原来的人类管理，南区由龙族管制，西区由兽族管理。
        城内文化多元、三族和谐共存、对龙王的信仰极强。
        由于龙铁公司的总部设立在此，城内铁路十分发达。`,
        icon:"location arrow"
    }, 
    "sesehushi":{
        parent:"ryuto",
        name:"月户城",
        desc:`读作E'se'hu'shi。大川中的江心洲，不位于任何区域（南北西），龙铁总部的所在地。龙族较多，多为上班族。城内高楼林立，十分繁华。`,
        icon:"map marker"
    }, 
    "palace":{
        parent:"ryuto",
        name:"皇宫",
        desc:`龙王和龙母居住地，成功之人的目的地（？）`,
        icon:"map marker"
    }, 
    "mirai":{
        parent:"loc",
        name:"米莱",
        desc:`Zogo国的地区，位置在现在的新疆东部，最大城市龙穴。还有神德、乌合、彩陵、地子等大城市`,
        icon:"location arrow"
    },
    "dragocave":{
        parent:"mirai",
        name:"龙穴",
        desc:`米莱的最大都市`,
        icon:"location arrow"
    },
    "kamitoku":{
        parent:"mirai",
        name:"神德",
        desc:`米莱的城市，龙穴以西，周围被常年积雪的上神德山环抱，但是城市本身周围没有积雪。被认为是神灵所栖息的地方。`,
        icon:"location arrow"
    },
    
    "europe":{
        parent:"loc",
        name:"欧洲",
        desc:`现在的西欧部分`,
        icon:"location arrow"
    },
    "enben":{
        parent:"loc",
        name:"炎边",
        desc:`现在的东北部分的总称。这里气候寒冷，而“炎”是北的意思，而不是火焰的意思。`,
        icon:"location arrow"
    },
    "koria":{
        parent:"loc",
        name:"Koria国",
        desc:`位置在现在的朝鲜半岛`,
        icon:"location arrow"
    },
    "hell":{
        parent:"loc",
        name:"地狱",
        desc:`兽族死后所去之处。`,
        icon:"location arrow"
    },
    "tenkigo":{
        parent:"loc",
        name:"天气宫",
        desc:`读作ten'ki'go。掌管魔法的运行、时间的流逝、魔法契约的执行、天气的运行`,
        icon:"map marker"
    }, 

    "unknown":{
        parent:null,
        name:"未知",
        desc:`薛定谔的设定`,
        icon:"question circle"
    },

    "gender":{
        parent:null,
        name:"性别",
        desc:"性别的根标签",
        icon:"male"
    },

    "male":{
        parent:"gender",
        name:"男",
        desc:"男性/公/雄性",
        icon:"male"
    },
    "female":{
        parent:"gender",
        name:"女",
        desc:"女性/母/雌性",
        icon:"female"
    },

    "source":{
        parent:null,
        name:"来源",
        desc:"来源的根标签",
        icon:"book"
    },
    "hotv":{
        parent:"source",
        name:"HotV",
        desc:"Heart of the Vortex是Zhuky.RLG所著的系列，属于旁支系列的设定。",
        icon:"book"
    },
    "segicverse":{
        parent:"source",
        name:"Segicverse",
        desc:"Segicverse是Zhuky.RLG所著的系列，属于旁支系列的设定。",
        icon:"book"
    },
    "cakeslice":{
        parent:"source",
        name:"Cakeslice",
        desc:"Cakeslice是XGN所著的系列，属于旁支系列的设定。",
        icon:"book"
    },

    "status":{
        parent:null,
        name:"状态",
        desc:"状态的根标签",
        icon:"fire"
    },
    "alive":{
        parent:"status",
        name:"存活",
        desc:"该角色存活！但是马上就可能寄了？",
        icon:"fire"
    },
    "dead":{
        parent:"status",
        name:"已故",
        desc:"该角色已丧命，但不代表TA不会再复活。",
        icon:"skull crossbones"
    },
    "sealed":{
        parent:"status",
        name:"封印",
        desc:"该角色被封印，无法行动。",
        icon:"handshake slash"
    },
}