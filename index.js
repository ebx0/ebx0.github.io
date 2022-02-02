function read1b(i)
{
  const currentDiv = document.getElementById("textboxs");
  currentDiv.innerHTML="";

     var txtFile = new XMLHttpRequest();
     let contentpath = "https://raw.githubusercontent.com/ebx0/ebx0.github.io/main/content/timeline/"
     let textname = i.toString();
     txtFile.open("GET", contentpath.concat(textname).concat(".txt"), true);
     txtFile.onreadystatechange = function()
     {
          if (txtFile.readyState === 4)
          {
               if (txtFile.status === 200)
               {
                  const len = txtFile.responseText.split("***").length-1
                  for (let l = len; l > 0; l--){
                    var text = txtFile.responseText.split("***")[l-1].toString()
                    console.log(l);

                    function addElement () {
                      const newDiv = document.createElement("div");
                      const newText = document.createTextNode(text.split("Content=")[1]);
                      newDiv.className = "textbox";

                      const newTitle = document.createElement("h2");
                      const newTitleText = document.createTextNode(text.split("Content=")[0].split("Title=")[1]);

                      newTitle.appendChild(newTitleText);
                      newDiv.appendChild(newTitle);
                      newDiv.appendChild(newText);

                      const currentDiv = document.getElementById("textboxs");
                      currentDiv.appendChild(newDiv);

                      const currentTitle = document.getElementById("title");
                      currentTitle.innerHTML = "timeline";

                      const button1 = document.getElementById("index");
                      button1.setAttribute("class", "selected")
                      const button2 = document.getElementById("usefullinks");
                      button2.setAttribute("class", "no")
                      const button3 = document.getElementById("jpegs");
                      button3.setAttribute("class", "no")
                    }
                  addElement();
                }
               }
          }
     }
     txtFile.send(null)
}


function read1(){
  const currentDiv = document.getElementById("textboxs");
  currentDiv.innerHTML="";
  for (let i = 2030; i > 2020; i--) {
    read1b(i)
  }
}



function read2()
{
    const currentDiv = document.getElementById("textboxs");
    currentDiv.innerHTML="";
     var txtFile = new XMLHttpRequest();
     txtFile.open("GET", "https://raw.githubusercontent.com/ebx0/ebx0.github.io/main/content/useful/links.txt", true);
     txtFile.onreadystatechange = function()
     {
          if (txtFile.readyState === 4)
          {
               if (txtFile.status === 200)
               {
                  const len = txtFile.responseText.split("***").length-1
                  for (let l = len; l > 0; l--){
                    var text = txtFile.responseText.split("***")[l-1].toString()
                    console.log(l);

                    function addElement () {
                      const newDiv = document.createElement("div");
                      newDiv.className = "linkbox";

                      const newLink = document.createElement("a");
                      newLink.innerHTML = text.split("Desc=")[0].split("Link=")[1].split("https://")[1];
                      newLink.setAttribute("href", text.split("Desc=")[0].split("Link=")[1]);
                      newLink.setAttribute("target", "_blank");

                      const newDesc = document.createElement("p");
                      const newDescText = document.createTextNode(text.split("Link=")[1].split("Desc=")[1]);

                      newDesc.appendChild(newDescText);
                      newDiv.appendChild(newLink);
                      newDiv.appendChild(newDesc);

                      const currentDiv = document.getElementById("textboxs");
                      currentDiv.appendChild(newDiv);

                      const currentTitle = document.getElementById("title");
                      currentTitle.innerHTML = "wormholes";

                      const button1 = document.getElementById("index");
                      button1.setAttribute("class", "no")
                      const button2 = document.getElementById("usefullinks");
                      button2.setAttribute("class", "selected")
                      const button3 = document.getElementById("jpegs");
                      button3.setAttribute("class", "no")
                    }
                  addElement();
                  }
               }
          }
     }
     txtFile.send(null)
}



function read3()
{
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "jpegboxs")

  const currentDiv = document.getElementById("textboxs");
  currentDiv.innerHTML="";
  currentDiv.appendChild(newDiv);

  var txtFile = new XMLHttpRequest();
  txtFile.open("GET", "https://raw.githubusercontent.com/ebx0/ebx0.github.io/main/content/jpegs/links.txt", true);
  txtFile.onreadystatechange = function()
  {
    if (txtFile.readyState === 4)
      {
        if (txtFile.status === 200)
          {
                  const len = txtFile.responseText.split("***").length-1
                  for (let l = len; l > 0; l--){
                    var text = txtFile.responseText.split("***")[l-1].toString()
                    console.log(l);

                    function addElement () {
                      const newDiv2 = document.createElement("div");
                      newDiv2.className = "jpegbox";

                      const newLink = document.createElement("img");
                      newLink.setAttribute("src", text.split("Desc=")[0].split("Link=")[1]);
                      newLink.setAttribute("onclick", "window.open(this.src)");
                      newLink.setAttribute("class", "jpeg")

                      const newDesc = document.createElement("p");
                      const newDescText = document.createTextNode(text.split("Link=")[1].split("Desc=")[1]);

                      newDesc.appendChild(newDescText);
                      newDiv2.appendChild(newLink);
                      newDiv2.appendChild(newDesc);

                      const currentDiv2 = document.getElementById("jpegboxs");
                      currentDiv2.appendChild(newDiv2);

                      const currentTitle = document.getElementById("title");
                      currentTitle.innerHTML = "mementos";

                      const button1 = document.getElementById("index");
                      button1.setAttribute("class", "no")
                      const button2 = document.getElementById("usefullinks");
                      button2.setAttribute("class", "no")
                      const button3 = document.getElementById("jpegs");
                      button3.setAttribute("class", "selected")
                    }

                  addElement();
                  }
               }
          }
     }
     txtFile.send(null)
}
const currentDiv = document.getElementById("textboxs");
currentDiv.innerHTML="";
