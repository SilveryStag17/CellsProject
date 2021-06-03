var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

var slideIndex = 0;
carousel();

function carousel(){
  var i;
  var x = document.getElementsByClassName("mySlides");

  for(i=0; i<x.length; i++){
    x[i].style.display="none";
  }
  slideIndex ++;
  if(slideIndex > x.length){
    slideIndex = 1;

  }
  x[slideIndex-1].style.display="block";
  setTimeout(carousel, 3000);
}