﻿//Room name
var room477 = {};
room477.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "window",
            "left": 1322,
            "top": 379,
            "width": 128,
            "height": 238,
            "title": "Sneak into the cottage",
            "image": "477_cottage/window.png"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 477);
    });
};

room477.btnclick = function (name) {
    switch (name) {
        case "window":
            chat(0, 477);
            break;
        case "l1":

        case "l2":
        case "l3":
        case "l4":
        case "l5":
        case "l6":
            nav.killall();
            g.internal = g.removeItemByValue(g.internal, name);
            nav.bg("477_cottage/" + name + ".jpg");
            chat(3, 477);
                
            break;
        default:
            break;
    }
};

room477.chatcatch = function (callback) {
    switch (callback) {
        case "s0":
            nav.killall();
            nav.bg('477_cottage/interior.jpg');
            break;
        case "s1":
            nav.bg('477_cottage/bedroom.jpg');
            break;
        case "s2":
            nav.killall();
            g.internal = ["l1", "l2", "l3", "l4", "l5", "l6"];
            room477.chatcatch("drawBoxes");
            break;
        case "drawBoxes":
            nav.bg('477_cottage/interior.jpg');
            for (i = 0; i < g.internal.length; i++) {
                switch (g.internal[i]) {
                    case "l1":
                        nav.button({
                            "type": "btn",
                            "name": "l1",
                            "left": 1031,
                            "top": 576,
                            "width": 550,
                            "height": 322,
                            "image": "477_cottage/l1.png"
                        }, 477);
                        break;
                    case "l2":
                        nav.button({
                            "type": "btn",
                            "name": "l2",
                            "left": 346,
                            "top": 453,
                            "width": 111,
                            "height": 126,
                            "image": "477_cottage/l2.png"
                        }, 477);
                        break;
                    case "l3":
                        nav.button({
                            "type": "btn",
                            "name": "l3",
                            "left": 611,
                            "top": 492,
                            "width": 297,
                            "height": 77,
                            "image": "477_cottage/l3.png"
                        }, 477);
                        break;
                    case "l4":
                        nav.button({
                            "type": "btn",
                            "name": "l4",
                            "left": 75,
                            "top": 799,
                            "width": 297,
                            "height": 247,
                            "image": "477_cottage/l4.png"
                        }, 477);
                        break;
                    case "l5":
                        nav.button({
                            "type": "btn",
                            "name": "l5",
                            "left": 405,
                            "top": 366,
                            "width": 101,
                            "height": 76,
                            "image": "477_cottage/l5.png"
                        }, 477);
                        break;
                    case "l6":
                        nav.button({
                            "type": "btn",
                            "name": "l6",
                            "left": 556,
                            "top": 400,
                            "width": 84,
                            "height": 51,
                            "image": "477_cottage/l6.png"
                        }, 477);
                        break;
                }
            }
            break;
        case "resetsearch":
            if (g.internal.length > 2) {
                room477.chatcatch("drawBoxes");
            }
            else {
                nav.bg("477_cottage/c0.jpg");
                chat(4, 477);
            }
            break;
        case "c1":
            nav.bg("477_cottage/c1.jpg");
            break;
        case "c2":
            nav.bg("477_cottage/c2.jpg");
            break;
        case "c3":
            nav.bg("477_cottage/c3.jpg");
            break;
        case "c4":
            char.addtime(720);
            nav.bg("477_cottage/c4.jpg");
            break;
        case "c5":
            char.addtime(720);
            nav.bg("477_cottage/c5.jpg");
            break;
        case "c6":
            char.addtime(720);
            nav.bg("477_cottage/c6.jpg");
            break;
        case "c7":
            char.addtime(720);
            nav.bg("477_cottage/c7.jpg");
            break;
        case "c8":
            char.addtime(720);
            nav.bg("477_cottage/c8.jpg");
            break;
        case "c9":
            inv.add("envelope");
            char.addtime(120);
            g.set("oncase", null);
            char.room(460);
            break;
        default:
            break;
    }
};

room477.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Oh nice. An open window. This may be easier than I thought. ",
            button: [
                { chatID: 1, text: "Sneak in.", callback: "s0" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Should I check that she's asleep, or just start looking and hope for the best. ",
            button: [
                { chatID: 2, text: "Check if Forest Queen is asleep", callback: "s1" },
                { chatID: -1, text: "Just start looking for information. ", callback: "s2" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Oh good. She is asleep. I better stay quiet while I search for information. ",
            button: [
                { chatID: -1, text: "Start looking for information. ", callback: "s2" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Hmmm. Not what I'm looking for... ",
            button: [
                { chatID: -1, text: "...", callback: "resetsearch" },
            ]
        },
        {
            chatID: 4,
            speaker: "queen",
            text: "Oh my. It looks like we caught an intruder. What ever shall we do with them? ",
            button: [
                { chatID: 5, text: "Oh, no. Sorry I got lost...", callback: "c1" },
            ]
        },
        {
            chatID: 5,
            speaker: "queen",
            text: "You're not very convincing. A lost person does not appear in houses.   ",
            button: [
                { chatID: 6, text: "I... uhh... I... ....", callback: "c2" },
            ]
        },
        {
            chatID: 6,
            speaker: "queen",
            text: "You're getting woozy. The sleeping potion acts fast. It's best to lay down before you fall down.  ",
            button: [
                { chatID: 7, text: "....", callback: "c3" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "...",
            button: [
                { chatID: 8, text: "....", callback: "c4" },
            ]
        },
        {
            chatID: 8,
            speaker: "queen",
            text: "Good morning. I hope you slept well. ",
            button: [
                { chatID: 9, text: "Oh my head hurts.", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "queen",
            text: "I told you to lay down before you fell down. Why does no one ever listen to me. " + sc.n("me") +
            ", I had a feeling I may be seeing you. You're more famous than you know. ",
            button: [
                { chatID: 10, text: "Really. What do you know?", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "queen",
            text: "I won't bore you with a retelling of your life's story. But I do know that you work for " + sc.n("missy") + ". " +
                "The girl that was taken by Ubel. That ordeal was really quite something. You do know no one escapes from the CUM " +
                "compound. They're using you to gain information. But I am quite impressed with your escape none the less. ",
            button: [
                { chatID: 11, text: "How are they using me?", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "queen",
            text: "Don't you worry your pretty head over such things. So what brings you to my cottage way out here? Did you " +
                "think you could find a way into the compound? ",
            button: [
                { chatID: 12, text: "What? No. Really I was lost. I just want to get home. ", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "queen",
            text: "Oh stop. If you keep lying I'll release my pet snakes into the cellar. They are quite poisonous and not " +
                "very friendly. Tell me what are you doing here. ",
            button: [
                { chatID: 13, text: "I'm here to resuce " + sc.n("missy") + " and take down the CUM cult! ", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "queen",
            text: "That's why I was hoping for. I'm going to help you. The cult has been nothing but blight on this town for " +
                "too long. They ruined my life. Let untie you and give you what you need. Promise to behave yourself?",
            button: [
                { chatID: 14, text: "Really? Yes. I won't do anything! ", callback: "c5" },
            ]
        },
        {
            chatID: 14,
            speaker: "queen",
            text: "I hope you don't mind nudity. I never wear clothing unless I have to. Now let me grab my list to help you. ",
            button: [
                { chatID: 15, text: "I don't mind at all!", callback: "c6" },
            ]
        },
        {
            chatID: 15,
            speaker: "queen",
            text: "I put it over here somewhere... Oh there it is under all these scrolls. ",
            button: [
                { chatID: 16, text: "...", callback: "c7" },
            ]
        },
        {
            chatID: 16,
            speaker: "queen",
            text: "Here is a list of all everyone in the town that works for the cult. I'm sure you'll find it most " +
                "enlightening. ",
            button: [
                { chatID: 17, text: "So why are you helping me? ", callback: "c8" },
            ]
        },
        {
            chatID: 17,
            speaker: "queen",
            text: "I'll share my store with you since it may help you on your journey. " + 
                "Once apon a time I was a young lad trying to find my place in this world when I met a beautiful young girl. " +
                "It was love at first sight. It wasn't long before she brought me under false pretenses to the cult. Like you. " +
                "I was chained to the walls and forced to make offerings. ",
            button: [
                { chatID: 18, text: "I do remember that. ", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "queen",
            text: "After some time I was selected to be bathed in the cum and undergo the transformation. " +
                "As it turns out I was able to tranform into this beautiful body you see before you. I " +
                "thought my transformation alone was going to bring about Azrael, but I learned that was just the first " +
                "ritual with each ritual more horrible than the last. No one should go through that. I'm in a constant state " +
                "of fear. ",
            button: [
                { chatID: 19, text: "That's terrible.", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "queen",
            text: "As a cherry on top Ubel made me his personal servent, if you know what I mean. I was made to serve hime for two years. " +
                "But as the cult continued to grow and entwine with the town and as Ubel took on more personal servents I saw my " +
                "oppurtunity to take on a new role and be the liason between the cult and the people of this town. ",
            button: [
                { chatID: 20, text: "How many people do you work with? ", callback: "c5" },
            ]
        },
        {
            chatID: 20,
            speaker: "queen",
            text: "Oh my dear sweet child. Nearly everyone is part of the cult or is helping in some way. Some are happy with the money " +
                "we provide, and some, like the police, prefer the sexual favors we provide. Those that tried to fight us end up in " +
                "in the cells within the compound. ",
            button: [
                { chatID: 21, text: "So why don't you take them down? ", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "queen",
            text: "The cult has many eyes fixated on me. That's why I live out here, free from all. Now You've stayed too long; you " +
                "must be on your way. Keep this note safe and tell no one I gave it to you. From what I've heard you are the best " +
                "chance for ending this terrible nightmare of the town. Go now and keep my secret from all. ",
            button: [
                { chatID: -1, text: "Thanks! ", callback: "c9" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};