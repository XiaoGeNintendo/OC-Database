# OCDatabase
A local template site for managing OC for programmers

# How do I use this?
## Hard way
First, view the demo [here]()

Secondly, try to comprehend the data format listed in `char.js` `tag.js` `event.js` `iconset.js`

Thirdly, profit!!

## Step-by-step way
### Q: What's the technical requirement for using this site?
Either of:
- Excellent Pattern-Identifying Ability **and** basic HTML skill
- Decent Pattern-Identifying Ability **and** basic Javascript&HTML skill
- A friend who can do it for you
- Contact me to do it for you for free

### Q: How to add a character?
1. All characters are stored in `char.js`'s `chars` array.

2. Copy this template and modify the text after ':'!
```js
{
    id: "hikari", //the internal name for the system. When omitted, the id will be name
    name: "Hikari", //Required. Leave "" for default.
    image: "test.jpg", //Required. Shown on character page.Leave "" for default.
    avatar: "testsmall.jpg", //Required. Shown on list view or thumbnail.
    otherNames: ["Dragon Princess","HKL"], //Required. Other names can be found through search box. Leave it to [] when there's none
    relationship:[ //Required. Format is [id, role(of this character)]. Leave [] if none.
        ["Ninetail","Servant"],
        ["D.Lord","Servant"]
    ],
    gallery:[ //Required. Extra images to show in character page. Leave [] if none.
        {
            image:"testsmall.jpg", //Required. image location
            title:"Entry2",  //Required.
            desc:"This is a test gallery entry" //Required. Description/Comments.
        },
    ],

    //custom attributes. You can add as much as you want! They can be arrays, strings, template strings(mentioned below), numbers. They are shown in the character page.
    age:"&-1.23",
    siblingCount:0,
    ability:["To debug","To write code"],
    //end of custom attributes.
    desc:"$Hikari is a cute dragon with cute tails. Since the beginning of time, she was a servant for Ninetail.", //Required. Usually put at last.
}
```

3. Add your modified stuff back to the array and profit!

_Note: The characters are sorted in alphabet order_

_Note: All fields support full-set custom html. But abusing can cause unintended effects._

_Note: `keyword` `url` should not be used as custom attribute names cuz they are reserved_
### Q: How to use template strings
By putting a '#' before your string (eg. `#tag`), it will become a tag(mentioned below) when rendered.

By putting a `$` before your string(eg. `$Long text`), it will be rendered as a segment(aka long text).

By putting a '&' before a **timestamp**(mentioned below) (eg. `&1.14514`), it will become a **auto age calculator** when rendered. This is useful for auto updating a character's real age when knowing a character's birthday.

### Q: What is timestamp?
Timestamp(float type) is used to define the time that something happens. There's **no rule** that how this maps to time in your world. You can change(or ask a programmer to change for you) the conversion method in `event.js::displayTime()`:

```js
function displayTime(t) {
    var year = Math.floor(t);
    t = (t - year) * 365; //idea: change 365 to 900 if your year has 900 days!
    var day = Math.floor(t);
    return "Year " + year + " Day " + (day + 1);
}
```

### Q: What is tag? How to use them?
Tags are compressed information that can be reused.

You can use them in:
- Things that get reused often (eg Species data, Location data...)
- Things that wants to be independent from characters and includes complex HTML (eg Weapon description+images)

They are defined in `tag.js`

```js
"creature":{ //key is the internal identifier of this tag.
    parent:null, //Required. parent tag's ID or null if no parent. 
    name:"Creature", //Required
    desc:"BaseClass for all creatures!!", //Required. Description. It's recommended to put multimedia here.
    icon:"paw" //Required. Icons to display.
}
```

Icon list can be found [here](https://fomantic-ui.com/elements/icon.html)

_How to comprehend parent_

For example: `Creature&Beast, Creature&Elf` in this case, beast/elf's parent can be set to creature.

For example: `Weapon&Light Sword, Weapon&Heavy Sword` in this case, both's parent can be set to weapon.

Or, you can set both swords' parent to 'sword' then set 'sword''s parent to 'weapon'

### Q: How to add events on timeline?
Events are defined in `event.js`
```js
{
    name: "Test Event", //required
    start: 1.114, //required in timestamp. Start time of this event.
    end: 2.114, //Not required. End time of this event. Default to be start time.
    desc: "This is a test event that occurs on the 1st year.", //required, description. DOES NOT NEED TEMPLATE STRING
    participant: [ //required. use id
        "hikari",
        "ninetail"
    ],
    effect: [ //required.
        "hikari.ability+=I am going to die!",
    ]
},
```

Effects consists of several parts:

_characterID.attributeName operation value_

operation can be 
- `+=` to add
- `=` to set
- `-=` to minus/remove

`attributeName` can **not** be:
- `name`
- `image` - use gallery for that
- `gallery`
- `avatar` - use gallery for that
- hidden properties(like `keyword` `url`)

eg.
- `hikari.gold+=114514` - add 114514 gold to Hikari after this event. (assuming: gold is number)
- `ninetail.abilities-=To eat people` - Ninetail loses the ability to eat people after this event. (must be **exact match**) (assuming: abilities is array)
- `doragon.keyphrase=I am gonna die!` - Change Doragon's keyphrase to 'I am gonna die!' after this event.

All these effects take place **when the event ends**

### Q: What is iconset?
Defined in the `iconset.js`, it defines the icon used for each custom attribute.

Icon list can be found [here](https://fomantic-ui.com/elements/icon.html)

### Q: How to add picture for tags?
Add `<img>` HTML tag in desc in tag.

### Q: I have more advanced feature request?
You can either
- contact me
- open issue
- read source code and implement it yourself
### Q: How is this site made possible?
- XiaoGeNintendo from HellHoleStudios
- Some guy from Stackoverflow
- Highcharts
- Jquery
- Fomantic-UI
- Cytoscape.js
- FontAwesome
