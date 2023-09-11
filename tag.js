var tags={
    "dragon":{
        parent:null,
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
    "loong":{
        parent:"dragon",
        name:"东方龙",
        desc:"东方的龙，长条状是特征。",
        icon:"dragon"
    },

    "human":{
        parent:null,
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

    "beast":{
        parent:null,
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


    "rkcamera":{
        parent:null,
        name:"Rinko的相机",
        desc:"普普通通的拍立得相机，但是一家人辛辛苦苦存钱所换来的，承载了Rinko的梦想。能够定格住拍照框内的物体。",
        icon:"camera"
    }, 
    "anecklace":{
        parent:null,
        name:"Amethcoy的项链",
        desc:"Amethcoy祖传的项链，具有很强的灵性，能够贮存部分能力。有人说可以和灵魂交互。",
        icon:"camera"
    },

    "ryuto":{
        parent:null,
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
        parent:null,
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
        parent:null,
        name:"欧洲",
        desc:`现在的西欧部分`,
        icon:"location arrow"
    },
    "hell":{
        parent:null,
        name:"地狱",
        desc:`兽族死后所去之处。`,
        icon:"location arrow"
    },
    "unknown":{
        parent:null,
        name:"未知",
        desc:`薛定谔的设定`,
        icon:"question circle"
    },
    "tenkigo":{
        parent:null,
        name:"天气宫",
        desc:`读作ten'ki'go。掌管魔法的运行、时间的流逝、魔法契约的执行、天气的运行`,
        icon:"map marker"
    }, 

    "male":{
        parent:null,
        name:"男",
        desc:"男性/公/雄性",
        icon:"male"
    },
    "female":{
        parent:null,
        name:"女",
        desc:"女性/母/雌性",
        icon:"female"
    },


    "hotv":{
        parent:null,
        name:"HotV",
        desc:"Heart of the Vortex是Zhuky.RLG所著的系列，属于旁支系列的设定。",
        icon:"book"
    },
    "segicverse":{
        parent:null,
        name:"Segicverse",
        desc:"Segicverse是Zhuky.RLG所著的系列，属于旁支系列的设定。",
        icon:"book"
    },
    "cakeslice":{
        parent:null,
        name:"Cakeslice",
        desc:"Cakeslice是XGN所著的系列，属于旁支系列的设定。",
        icon:"book"
    },

    "alive":{
        parent:null,
        name:"存活",
        desc:"该角色存活！但是马上就可能寄了？",
        icon:"fire"
    },
    "dead":{
        parent:null,
        name:"已故",
        desc:"该角色已丧命，但不代表TA不会再复活。",
        icon:"skull crossbones"
    },
}