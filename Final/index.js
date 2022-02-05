let numProjs = 6;
let curProject;
let name;
let pic;
let picAlt;

  fetch('projects.json') //this is to get the file
  .then((response) => response.json())
  .then(function(data){
    let rawData = data;

    // looping over json
    // https://www.codegrepper.com/code-examples/javascript/loop+through+json+object+javascript
    // the main thing is the loop needs to be in the fetch rather than outside of the fetch
    for(j=0;j<numProjs;j++){
      name=rawData.projects[j].name;
      pic = rawData.projects[j].picture;
      blurb=rawData.projects[j].blurb;
      picAlt=rawData.projects[j].alt;
      link=rawData.projects[j].link;
      // console.log("grrah " + name);
      // console.log("brrrah "+pic);

      //IMAGE CODE
        // https://stackoverflow.com/questions/28778048/get-image-from-json-file-using-javascript-and-display-in-html-img-tag
      var img = new Image();
      img.src=pic;
      img.setAttribute("class", "projectImg");
      img.setAttribute("alt", picAlt);
      // console.log("image + " + img.src);
      // Looking at Oceane's website for the linking https://oceanestars.github.io/
      document.getElementById('projContainer').innerHTML+="<div id=div"+j+" class=singleProject></div>"; //create divs for each project
      document.getElementById('div'+j).innerHTML+="<a href='" + link + "' target = '_blank' id=project" +j+ "></a>";

      document.getElementById('project'+j).appendChild(img);
      document.getElementById('project'+j).innerHTML+="<h2 class = 'centered'>"+name+"</h2>";
      document.getElementById('project'+j).innerHTML+="<p>"+blurb+"</p>";
      // I think the button looks cheesy which is why I don't include it
      // document.getElementById('project'+j).innerHTML+="<button class='centered'> <a href='"+link+"' target='_blank'>Find Out More</a></button>";
    }



  })


  // document.getElementById('projContainer').innerHTML+= "<div class = 'singleProject'><img src="+pic+"/></div>";
  // document.getElementById('projContainer').innerHTML += "<div class='singleProject'><h1>" + name + "</h1></div>";
