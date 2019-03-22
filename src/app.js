function seeMore() {
  var x = document.getElementById("see-more");
  var y = document.getElementById("see-more-button");
  // console.log(x.style);
  if (x.style.display === "none") {
    // x.style.display = "block";
    x.setAttribute("style", "display: block");
    y.setAttribute("style", "display: none");
  } else {
    x.style.display = "none";
  }
}
