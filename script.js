var hamburger= document.querySelector(".hamb");
var navlist= document.querySelector(".nav-list");
var links= document.querySelector(".nav-list li");


hamburger.addEventListener("Click", function(){
this.classList.toggle("Click")
navlist.classList.toggle("open");
});

