//PSEURDO



let quoteArray = ["Is he active?", "You make me happy."];
let characterArray = ["Character A and B are gearing up to chase the moon, character C has no idea."];
let photoArray = ["images/han.png"];
let prevPrompt;
let randomNum;

//Getting the buttons to Work
//sourced from class lecture for week 9 - Casey Hunt
document.getElementById("photo").addEventListener('click',setActive,false);
document.getElementById("quote").addEventListener('click',setActive,false);
document.getElementById("character").addEventListener('click',setActive,false);



function setActive(e){
  //HELLO! This next section identifies what was previously showing: prevPrompt
  //after that, it looks at the button that is being clicked, sets it active
  //once we set that active, that becomes our current prompt: curPrompt

  //sourced from class lecture for week 9 - Casey Hunt
  //prevPrompt is the prompt that is active, we will inactivate it
  prevPrompt = document.getElementsByClassName("active")[0].id;
  alert(document.getElementsByClassName("active")[0]);
  //take what was active, and make it inactive
  document.getElementById(prevPrompt).classList.toggle("active");
  //removing the previous content from being seen - making the style 'none'
  document.getElementById(prevPrompt+"Content").style.display="none";
  //e meaning event - contains data that we can draw from and use
  //set this new target to be active
  e.target.classList.toggle("active");
  //get what is now active - but it's just the 'root' the button is what is active
  curPrompt = document.getElementsByClassName("active")[0].id;
  //
  document.getElementById(curPrompt+"Content").style.display="block";
  alert(prevPrompt + " ooh " + curPrompt);
}
