window.onscroll = function() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document
      .getElementById("links")
      .setAttribute(
        "style",
        "left: 20px; transform: translateX(0%); text-align: ''"
      );
    document
      .querySelector("#links p")
      .setAttribute(
        "style",
        "border-radius: 5px 5px 5px 0; padding: 2px 6px 3px 6px; font-size: 16px; text-align: left;"
      );
    document
      .getElementById("sub-icons")
      .setAttribute(
        "style",
        "border-radius: 0 0 5px 5px; padding: 0 4px 2px 4px; float: left; display: ''"
      );
    document
      .getElementById("github")
      .setAttribute("style", "height: 15px; margin: 2px");
    document
      .getElementById("email")
      .setAttribute("style", "height: 15px; margin: 2px");
    document
      .getElementById("linkedin")
      .setAttribute("style", "height: 15px; margin: 2px");
  } else {
    document
      .getElementById("links")
      .setAttribute(
        "style",
        "left: 50%; transform: translateX(-50%); text-align: center"
      );
    document
      .querySelector("#links p")
      .setAttribute(
        "style",
        "border-radius: 7px; padding: 3px 9px; font-size: 34px; text-align: center;"
      );
    document
      .getElementById("sub-icons")
      .setAttribute(
        "style",
        "border-radius: 0 0 7px 7px; padding: 2px 10px 6px 10px; float: ''; display: inline-block"
      );
    document
      .getElementById("github")
      .setAttribute("style", "height: 22px; margin: ''");
    document
      .getElementById("email")
      .setAttribute("style", "height: 22px; margin: ''");
    document
      .getElementById("linkedin")
      .setAttribute("style", "height: 23px; margin: ''");
  }
};

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
