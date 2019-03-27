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

// window.onscroll = function() {
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     document
//       .getElementById("links")
//       .setAttribute(
//         "style",
//         "left: 20px; transform: translateX(0%); text-align: ''"
//       );
//     document
//       .querySelector("#links p")
//       .setAttribute(
//         "style",
//         "border-radius: 5px 5px 5px 0; padding: 2px 6px 3px 6px; font-size: 16px; text-align: left;"
//       );
//     document
//       .getElementById("sub-icons")
//       .setAttribute(
//         "style",
//         "border-radius: 0 0 5px 5px; padding: 0 4px 2px 4px; float: left; display: ''"
//       );
//     document
//       .getElementById("github")
//       .setAttribute("style", "height: 15px; margin: 2px");
//     document
//       .getElementById("email")
//       .setAttribute("style", "height: 15px; margin: 2px");
//     document
//       .getElementById("linkedin")
//       .setAttribute("style", "height: 15px; margin: 2px");
//   } else {
//     document
//       .getElementById("links")
//       .setAttribute(
//         "style",
//         "left: 50%; transform: translateX(-50%); text-align: center"
//       );
//     document
//       .querySelector("#links p")
//       .setAttribute(
//         "style",
//         "border-radius: 7px; padding: 3px 9px; font-size: 34px; text-align: center;"
//       );
//     document
//       .getElementById("sub-icons")
//       .setAttribute(
//         "style",
//         "border-radius: 0 0 7px 7px; padding: 2px 10px 6px 10px; float: ''; display: inline-block"
//       );
//     document
//       .getElementById("github")
//       .setAttribute("style", "height: 22px; margin: ''");
//     document
//       .getElementById("email")
//       .setAttribute("style", "height: 22px; margin: ''");
//     document
//       .getElementById("linkedin")
//       .setAttribute("style", "height: 23px; margin: ''");
//   }
// };

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

// // CONTACT
// var x = document.getElementById("form_sample");
// var createform = document.createElement("form"); // Create New Element Form
// createform.setAttribute("action", ""); // Setting Action Attribute on Form
// createform.setAttribute("method", "post"); // Setting Method Attribute on Form
// x.appendChild(createform);

// var heading = document.createElement("h2"); // Heading of Form
// heading.innerHTML = "Contact Form ";
// createform.appendChild(heading);

// var line = document.createElement("hr"); // Giving Horizontal Row After Heading
// createform.appendChild(line);

// var linebreak = document.createElement("br");
// createform.appendChild(linebreak);

// var namelabel = document.createElement("label"); // Create Label for Name Field
// namelabel.innerHTML = "Your Name : "; // Set Field Labels
// createform.appendChild(namelabel);

// var inputelement = document.createElement("input"); // Create Input Field for Name
// inputelement.setAttribute("type", "text");
// inputelement.setAttribute("name", "dname");
// createform.appendChild(inputelement);

// var linebreak = document.createElement("br");
// createform.appendChild(linebreak);

// var emaillabel = document.createElement("label"); // Create Label for E-mail Field
// emaillabel.innerHTML = "Your Email : ";
// createform.appendChild(emaillabel);

// var emailelement = document.createElement("input"); // Create Input Field for E-mail
// emailelement.setAttribute("type", "text");
// emailelement.setAttribute("name", "demail");
// createform.appendChild(emailelement);

// var emailbreak = document.createElement("br");
// createform.appendChild(emailbreak);

// var messagelabel = document.createElement("label"); // Append Textarea
// messagelabel.innerHTML = "Your Message : ";
// createform.appendChild(messagelabel);

// var texareaelement = document.createElement("textarea");
// texareaelement.setAttribute("name", "dmessage");
// createform.appendChild(texareaelement);

// var messagebreak = document.createElement("br");
// createform.appendChild(messagebreak);

// var submitelement = document.createElement("input"); // Append Submit Button
// submitelement.setAttribute("type", "submit");
// submitelement.setAttribute("name", "dsubmit");
// submitelement.setAttribute("value", "Submit");
// createform.appendChild(submitelement);
