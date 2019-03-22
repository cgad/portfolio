window.onscroll = function() {
  if (
    document.body.scrollTop > 160 ||
    document.documentElement.scrollTop > 160
  ) {
    document.getElementById("header").className = "header";
    document.getElementById("icons").innerHTML = "";
  } else {
    document.getElementById("header").className = "";
    document.getElementById("icons").innerHTML =
      '<img class="github" src="src/assets/images/GitHub-Mark-Light-64px.png" alt="Link to GitHub"/> <img class="email" src="src/assets/images/email-white.png" alt="Link to E-Mail"/><img src="src/assets/images/linkedin-white.png" alt="Link to LinkedIn" class="linkedin"/>';
  }
};
