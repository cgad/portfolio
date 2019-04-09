$(document).ready(function() {
  setTimeout(function() {
    $("#myModal").fadeIn(200);
  }, 1000); // milliseconds
});

// contact me modal after 5 secs
window.onload = function() {
  var modal = document.getElementById("my-modal");

  setTimeout(function() {
    modal.style.display = "block";
  }, 5000);
};

// close modal
$(".close").click(function() {
  var modal = document.getElementById("my-modal");
  modal.style.display = "none";
});

// sticky header
window.onscroll = function() {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// toggle see more/see less button and items
function seeMore() {
  var x = document.getElementById("see-more");
  var y = document.getElementById("see-more-button");
  var z = document.getElementById("see-less-button");
  if (x.style.display === "none") {
    x.setAttribute("style", "display: block");
    y.setAttribute("style", "display: none");
    z.setAttribute("style", "display: block");
  } else {
    x.setAttribute("style", "display: none");
    y.setAttribute("style", "display: block");
    z.setAttribute("style", "display: none");
  }
}
