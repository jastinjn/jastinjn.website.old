function open_nav() {
    document.getElementById("mySideNav").style.width = "20%";
    document.getElementById("main").style.marginLeft = "22.5%";
    document.getElementById("transWrap").style.backgroundColor = "rgba(0,0,0,0.7)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function close_nav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "8%";
    document.getElementById("transWrap").style.backgroundColor = "rgba(0,0,0,0)";
}

function list_drop(element){
    // find unordered list
    var ul = element.getElementsByTagName("ul")[0];
    ul.style.display = "block";
    element.getElementsByTagName('span')[0].innerHTML = "&#x25BC";
}

function list_up(element){
    var ul = element.getElementsByTagName("ul")[0];
    ul.style.display = "none";
    element.getElementsByTagName('span')[0].innerHTML = "";
}

function show_ig(){
    document.getElementById('igHandle').style.opacity = "1";
    
}

function hide_ig(){
    document.getElementById('igHandle').style.opacity = "0";
}