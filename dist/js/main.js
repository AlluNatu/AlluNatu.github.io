var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
var loadmore = document.getElementById("loadmore")
var worklist = document.getElementsByClassName("work")
var h1 = document.getElementsByClassName('h1')

function opentab(tabid){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tablink of tabcontents){
        tablink.classList.remove("active-tab")
        // console.log(tablink)
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabid).classList.add("active-tab")
}

function loadmoreFunction(){
    for (work of worklist){
        work.classList.remove("hidden")      
    }

    event.currentTarget.classList.add("hidden")
}


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}