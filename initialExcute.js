// this is the code which will be injected into a given page...

(function() {
var Wisp,Luffy,Zoro,Nami,Usopp,Sanji,Chopper,SwordMarine,RifleMarine,Buggy,Charas;
var Groups = document.getElementsByClassName("groupname")

// Specify Group Name. There were too many duplicated character names.
for (var i = 0; i< Groups.length; i++)
  if(Groups[i].innerText === "흔함")
    Charas = Groups[i].parentElement.getElementsByClassName("name");

// Shortcut Function
function AddShortcut(target, number) {
  var numberDiv = document.createElement('div');
  numberDiv.className = "numberdiv";
  numberDiv.innerText = number;
  numberDiv.style.width = "100px";
  numberDiv.style.textAlign = "right";
  target.parentElement.insertBefore(numberDiv, target);
  return target;
}

// Find characters and save it for later
for (var i = 0; i < Charas.length; i++) {
  var text = Charas[i].innerText;
  if (text === "위습") Wisp = AddShortcut(Charas[i], 0);
  else if (text === "루피") Luffy = AddShortcut(Charas[i], 1);
  else if (text === "조로") Zoro = AddShortcut(Charas[i], 2);
  else if (text === "나미") Nami = AddShortcut(Charas[i], 3);
  else if (text === "우솝") Usopp = AddShortcut(Charas[i], 4);
  else if (text === "상디") Sanji = AddShortcut(Charas[i], 5);
  else if (text === "쵸파") Chopper = AddShortcut(Charas[i], 6);
  else if (text === "칼병") SwordMarine = AddShortcut(Charas[i], 7);
  else if (text === "총병") RifleMarine = AddShortcut(Charas[i], 8);
  else if (text === "버기") Buggy = AddShortcut(Charas[i], 9);
}

// KeyBinding
window.addEventListener("keydown", function(event) {
  // Disable when typing
  var target = event.target || event.srcElement;
  if(target.tagName == "INPUT") return;
  
  // Click
  if(event.key === '0') Wisp.click();
  else if(event.key === '1') Luffy.click();
  else if(event.key === '2') Zoro.click();
  else if(event.key === '3') Nami.click();
  else if(event.key === '4') Usopp.click();
  else if(event.key === '5') Sanji.click();
  else if(event.key === '6') Chopper.click();
  else if(event.key === '7') SwordMarine.click();
  else if(event.key === '8') RifleMarine.click();
  else if(event.key === '9') Buggy.click();
}, true);

// Specify Group Name. There were too many duplicated character names.
for (var i = 0; i< Groups.length; i++)
  if(Groups[i].innerText === "전설적인")
    Charas = Groups[i].parentElement.getElementsByClassName("name");

// Make legend story characters bold
for (var i = 0; i < Charas.length; i++) {
  var text = Charas[i].innerText;
  if (!text.indexOf("루치") ||!text.indexOf("징베") ||!text.indexOf("검은수염") ||!text.indexOf("상디") ||!text.indexOf("카르가라") ||!text.indexOf("아카이누") ||!text.indexOf("조로"))
    Charas[i].style.fontWeight = 'bold';    
}

// Specify Group Name. There were too many duplicated character names.
for (var i = 0; i< Groups.length; i++)
  if(Groups[i].innerText === "희귀함")
    Charas = Groups[i].parentElement.getElementsByClassName("name");

// Make rare story characters bold
for (var i = 0; i < Charas.length; i++) {
  var text = Charas[i].innerText;
  if (text === "검은수염" ||text === "로우" ||text === "반더데켄" ||text === "상디" ||text === "스모커" ||text === "아카이누" ||text === "제프" ||text === "조로" ||text === "키드"||text === "킨에몬")
    Charas[i].style.fontWeight = 'bold';    
}

// Specify Group Name. There were too many duplicated character names.
for (var i = 0; i< Groups.length; i++)
  if(Groups[i].innerText === "특별함")
    Charas = Groups[i].parentElement.getElementsByClassName("name");

// Make special story characters bold
for (var i = 0; i < Charas.length; i++) {
  var text = Charas[i].innerText;
  if (text === "나미" ||text === "X-드레이크" ||text === "루피" ||text === "상디" ||text === "에이스" ||text === "이나즈마" ||text === "조로 귀기" ||text === "키드" ||text === "킬러"||text === "타시기"||text === "카포네 갱 벳지"||text === "버기")
    Charas[i].style.fontWeight = 'bold';    
}

})();