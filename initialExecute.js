// this is the code which will be injected into a given page...
(function () {
    console.log("Sions X");
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
                if (!text.indexOf(c))
                    Characters[i].style.fontWeight = 'bold';
        }
    }
    StoryBold("변화", ["코비", "에이스"]);
    StoryBold("히든", ["아카이누", "시류", "사보", "베르고", "킨에몬"]);
    StoryBold("전설적인", ["루치", "징베", "검은수염", "상디", "카르가라", "조로", "거프", "레이쥬", "슈가", "샹크스"]);
    StoryBold("희귀함", ["검은수염", "로우", "반더데켄", "상디", "스모커", "아카이누", "제프", "조로", "키드", "킨에몬"]);
})();