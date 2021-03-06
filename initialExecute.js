﻿// this is the code which will be injected into a given page...
(function () {
    console.log("Sions X for ORD 8.7 Fix 4");

    // Reset Everything
    let InputBoxes = document.getElementsByClassName("count");
    for (let i = 0; i < InputBoxes.length; i++) {
        if (InputBoxes[i].value === "0") continue;
        InputBoxes[i].value = "0";
        InputBoxes[i].dispatchEvent(new Event('keyup'));
    }

    if (typeof IsDefined !== "undefined") return;
    IsDefined = true;

    let text, Commons = [];
    let Characters, Groups = document.getElementsByClassName("groupname");
    let items = document.getElementsByClassName("item");
    let CharactersCountMap = new Map();

    // Shortcut Function
    function AddShortcut(target, number) {
        var numberDiv = document.createElement('div');
        numberDiv.className = "numberdiv";
        numberDiv.innerText = number;
        numberDiv.style.width = "100px";
        numberDiv.style.textAlign = "right";
        target.parentElement.appendChild(numberDiv);
        Commons[number] = target;
    }

    // Set common characters
    for (i = 0; i < items.length; i++) {
        var uindex = items[i].getAttribute("uindex");
        CharactersCountMap.set(uindex, items[i].getElementsByClassName("count")[0].value);
        if (uindex < 10)
            AddShortcut(items[i].getElementsByClassName("name")[0], uindex);
    }

    // KeyBinding
    window.addEventListener("keydown", function (event) {
        // Disable when typing in input box
        let target = event.target || event.srcElement;
        if (target.tagName === "INPUT") return;

        // Click
        if (event.key >= '0' && event.key <= '9')
            Commons[event.key].click();
    }, true);

    function StoryBold(GroupName, CharactersNames) {
        // Specify Group Name. There were too many duplicated character names.
        for (let i = 0; i < Groups.length; i++)
            if (Groups[i].innerText === GroupName)
                Characters = Groups[i].parentElement.getElementsByClassName("name");

        // Make special story characters bold
        for (let i = 0; i < Characters.length; i++) {
            text = Characters[i].innerText;
            for (let c of CharactersNames)
                if (text.indexOf(c) !== -1)
                    Characters[i].style.fontWeight = 'bold';
        }
    }

    StoryBold("히든", ["아카이누", "시류", "사보", "베르고", "레드포스호"]);
    StoryBold("전설적인", ["거프", "검은수염", "레이쥬", "로브 루치", "로우", "루피 나이트메어", "바르톨로메오", "샹크스", "상디", "슈가", "조로", "징베"]);
    StoryBold("희귀함", ["로우", "마젤란", "바르톨로메오", "바질 호킨스", "반 더 데켄", "벤베크만", "사보", "상디", "스모커", "아카이누", "오즈", "키드"]);

    let ADColor = "#FF7700DD";
    let APColor = "#00BBFFDD";
    let HybridColor = "#007700FF";
    let ADText = "물뎀";
    let APText = "마뎀";

    // Colorize ad or ap character
    function Colorize() {
        for (let i = 0; i < Groups.length; i++) {
            Characters = Groups[i].parentElement.getElementsByClassName("name");

            for (let i = 0; i < Characters.length; i++) {
                text = Characters[i].innerText;
                if (text.indexOf(ADText) !== -1 && text.indexOf(APText) !== -1)
                    Characters[i].style.color = HybridColor;
                else if (text.indexOf(ADText) !== -1)
                    Characters[i].style.color = ADColor;
                else if (text.indexOf(APText) !== -1)
                    Characters[i].style.color = APColor;
            }
        }
    }

    Colorize();
})();