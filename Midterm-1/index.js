//PSEURDO



let quoteArray = ["Is he active?", "You make me happy.", "And we'll all study together like one big happy family.","Did you say you knew how to do this?"];
let characterArray = ["Character A and B are gearing up to chase the moon, character C has no idea.", "Your character is a spy.", "Your character swears like a sailor to cope."];
let photoArray = ["images/han.png", "images/mine1.jpg","images/mine2.jpg","images/moon.jpg", "images/toy.jpg"];
let photoExplanation = ["Why is he taking a picture with a goose?","There's an abandoned mine, why?","An abandoned mine leads to a lake, then what?","What's so special about the moon tonight?","Why has a toy been left in the free library?"];
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
  //We are identifying the id that is associated with whatever is active
  prevPrompt = document.getElementsByClassName("active")[0].id;
  //take what was active, and make it inactive
  document.getElementById(prevPrompt).classList.toggle("active");
  //removing the previous content from being seen - making the style 'none'
  //Since the button is a root of the rest of my content, adding +"Content" will search for the id of the root + Content
  //So instead of the button itself disappearing, it's just the content associated with it
  document.getElementById(prevPrompt+"Content").style.display="none";
  //e meaning event - contains data that we can draw from and use
  //set this new target to be active
  e.target.classList.toggle("active");
  //get what is now active - but it's just the 'root' the button is what is active
  curPrompt = document.getElementsByClassName("active")[0].id;

  if(curPrompt == "photo"){
    changePhoto();
  } else if (curPrompt == "quote") {
    changeQuote();
  } else{
    changeCharacter();
  }

  //same as above, adding "Content" to the root and displaying the content
  document.getElementById(curPrompt+"Content").style.display="block";
  alert(prevPrompt + " ooh " + curPrompt);
}

function changePhoto(){
  //It is necessary to define these length variables within the function because the array changes for each section
  //and because the array changes for each section, so does the length of the array, and it's necessary to set the length
  //based on whatever function it's in
  length=photoArray.length;
  console.log(length);
  //random integer source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //Since length counts the number of items in the array from one
  //And array's count from 0
  //I think multiplying by length down below should be fine
  //Okay I did test it, and the above assumption is correct

  //PUT SOME KIND OF FOR LOOP HERE
  randomNum = Math.floor(Math.random()*length);
  console.log(randomNum);
  // document.getElementById("image").innerHTML="<img src = " + photoArray[randomNum]+">";
  document.getElementById("photoContent").innerHTML="<img src = " + photoArray[randomNum]+"> <p>"+photoExplanation[randomNum]+"</p>";
}

function changeQuote(){
  length = quoteArray.length;
  randomNum = Math.floor(Math.random()*length);

  document.getElementById("quoteContent").innerHTML="<h2>"+quoteArray[randomNum]+"</h2>";
}

function changeCharacter(){
  length=characterArray.length;
  randomNum = Math.floor(Math.random()*length);

  document.getElementById("characterContent").innerHTML="<h2>"+characterArray[randomNum]+"</h2>";
}
