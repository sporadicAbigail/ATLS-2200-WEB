// console.log("Hello world");
// console.log(Math.random()*3);
// console.log(Math.floor(Math.random()*3));
// Math.random only generates values between 0 and 1
//
// console.log(document.getElementsByClassName("options"));
// console.log(document.getElementsByClassName("options")[0].innerHTML);

const images=["bunny.jfif","cat.jfif","dog.jfif"];
const title = ["Bunny", "cat", "dog"];

for(i=0; i<document.getElementsByClassName("options").length;i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];
  // console.log(document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML += '<img src="Assets/' + images[i] + ' ">';
  //set the id of each section
  document.getElementsByClassName("options")[i].setAttribute("id",title[i]);
  //call changeColor with the ID of the section when clicked
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});
}


function changeColor(sectionID){
  console.log(sectionID);
  //toggle turns things on and off
  document.getElementById(sectionID).classList.toggle("blue");
}
