// Get the button:
let mybutton = document.getElementById("myBtn");
let navbarre = document.getElementById("barreNavigation");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > navbarre.offsetTop) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop=navbarre.offsetTop; // For Chrome, Firefox, IE and Opera
} 