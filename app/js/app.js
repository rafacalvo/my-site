//Sidenav movement
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.body.style.transition = "background-color ease 1s";document.body.style.backgroundColor = "rgba(28, 26, 39, 0.8)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = " #fbf7ff";
}

// Go Top Button
//Get the button:
mybutton = document.getElementById("goTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Clear forms
function ClearForm(){
    document.MyForm.reset();
}