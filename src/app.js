// contact me modal & tooltip initiation
$(document).ready(function() {
  setTimeout(function() {
    $("#my-modal").fadeIn(450);
  }, 12 * 1000);
  $(".tooltip").tooltipster();
});

// close modal
$(".close").click(function() {
  var modal = document.getElementById("my-modal");
  modal.style.display = "none";
});

// sticky header
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

window.onscroll = function() {
  myFunction();
};

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
