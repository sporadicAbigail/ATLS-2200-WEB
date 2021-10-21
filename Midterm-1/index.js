//PSEURDO



let quotes = ["Is he active?"];
let genPrompts = ["Character A and B are gearing up to chase the moon, character C has no idea."];
let prevPrompt;
let randomNum;

//Getting the buttons to Work
document.getElementById("photoPrompt").addEventListener('click',setActive,false);
document.getElementById("quotePrompt").addEventListener('click',setActive,false);
document.getElementById("characterPrompt").addEventListener('click',setActive,false);



function setActive(e){
  prevPrompt = document.getElementsByClassName("active")[0].id;
  alert(prevPrompt+"aaaa");
}

console.log("hello world");
