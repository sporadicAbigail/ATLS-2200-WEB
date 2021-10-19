let meals = ["lunch", "dinner", "brunch"];
let images=["dinner.jpg","lunch.jpg", "brunch.jpg"];
let previousMeal; //lunch is default value

for(i=0; i<document.getElementsByClassName("meal").length; i++){
  //adding name
  document.getElementsByClassName("meal")[i].innerHTML="<h2>"+meals[i]+"</h2>";
  //adding event listener
  document.getElementsByClassName("meal")[i].addEventListener('click',setActive, false);
  //adding id
  document.getElementsByClassName("meal")[i].id = meals[i];

  document.getElementById("one").addEventListener('click', setActiveButton, false);
  document.getElementById("two").addEventListener('click', setActiveButton, false);
}

document.getElementById("lunch").classList.toggle('active');
document.getElementById("image").innerHTML="<img src= 'assets/" + images[0] + "'>";

// e means event - stuff coming in from event
function setActive(e){
  //searching for what's currently active
  //in theory there's only ever one active at a time
  previousMeal = document.getElementsByClassName("active")[0].id;
  if(previousMeal != undefined){
    document.getElementById(previousMeal).classList.toggle("active");
    document.getElementById(previousMeal +"menu").style.display = "none";
  }

  // console.log("previous meal:" + previousMeal);
  // previousMeal.classList.toggle("active");
  // console.log('clicked');
  // console.log(e.target.innerHTML);

  //using event listener to see if we're clicking div or H2
  if(e.target.tagName =="H2"){
    // console.log("he2 clicked");
    e.target.parentNode.classList.toggle("active");
  }else{
    // console.log("div clicked");
    e.target.classList.toggle("active");
  }

  meal = document.getElementsByClassName("active")[0].id;
  console.log(meal);
  document.getElementById(meal +"menu").style.display = "block";
  document.getElementById("image").innerHTML="<img src='assets/" + meal + ".jpg'>";

}

// buttons are made to be clickable, so we don't need extra configuration for h2
function setActiveButton(e){
  e.target.classList.toggle("active");
}
