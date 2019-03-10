$(".devConnect").hover(
  function() {
    $("#devConnectSpan").html(
      "<p>A small social network designed for programmers and built using React Redux.</p><button style='margin:2px; border-radius:5px;'><a href='https://warm-sea-72201.herokuapp.com/' target='_blank'>Web App</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/devconnector' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#devConnectSpan").html(
      '<img src="assets/images/devconnect.jpg" alt="Coder with text &quot;DevConnector&quot;"/><h3>DevConnector</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".carbon").hover(
  function() {
    $("#carbonSpan").html(
      "<p>A React app created for the environmentally conscious. Provides environmental impact models of a variety of daily activities based on user input.</p><button style='margin:2px; border-radius:5px;'><a href='https://cryptic-woodland-29160.herokuapp.com/' target=_blank>Web App</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/carbon-neutral' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#carbonSpan").html(
      '<img src="assets/images/runway.jpg" alt="Runway and blue sky with clouds with text &quot;Carbon Neutral&quot;"/><h3>Carbon Neutral</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".onion").hover(
  function() {
    $("#onionSpan").html(
      "<p>Allows users to leave personal notes on articles scraped from The Onion Politics using Mongoose and Cheerio.</p><button style='margin:2px; border-radius:5px;'><a href='https://aqueous-ridge-77825.herokuapp.com/' target=_blank>Web App</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/onion-scraper' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#onionSpan").html(
      '<img src="assets/images/man_walks_on_moon.jpg" alt="Onion newspaper front page with text &quot;Onion Scraper&quot;"/><h3>Onion Scraper</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".isLegit").hover(
  function() {
    $("#legitSpan").html(
      "<p>Allows users to evaluate legitimacy and intent of content found on the internet. Uses HTML methods. Group project.</p><button style='margin:2px; border-radius:5px;'><a href='https://peaceful-savannah-96764.herokuapp.com/' target=_blank>Web App</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/Jaco5/project-two-new' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#legitSpan").html(
      '<img id="legit" src="assets/images/thinking-emoji.png" alt="Three &quot;thinking&quot; emojis"/><h3>Is This Legit?</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".friend").hover(
  function() {
    $("#friendSpan").html(
      "<p>Finds the user's closest friend match by evaluating user input and comparing to friends stored in server. Uses Express.</p><button style='margin:2px; border-radius:5px;'><a href='https://glacial-lowlands-57080.herokuapp.com/' target=_blank>Web App</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/FriendFinder' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#friendSpan").html(
      '<img src="assets/images/otter-friends.jpg" alt="Cartoon otters holding hands with text &quot;Friend Finder&quot;"/><h3>Friend Finder</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".train").hover(
  function() {
    $("#trainSpan").html(
      "<p>A train schedule management system. Uses Firebase.</p><button style='margin:2px; border-radius:5px;'><a href='https://cgad.github.io/train-scheduler/' target=_blank>Web App</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/train-scheduler' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#trainSpan").html(
      '<img id="legit" src="assets/images/train.jpg" alt="Thomas the Tank Engine with text &quot;Train Scheduler&quot;"/><h3>Train Scheduler</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".liri").hover(
  function() {
    $("#liriSpan").html(
      "<p>Allows user to search for concert, song, or movie info. Uses Node.</p><button style='margin:2px; border-radius:5px;'><a href='https://drive.google.com/file/d/12RP4El2shlmCXrTRherPUGN4s9--_Dp9/view?usp=sharing' target=_blank>Demo Video</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/liri-node-app' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#liriSpan").html(
      '<img src="assets/images/siri-waveform.jpg" alt="Apple Siri waveform with text &quot;Liri Bot&quot;"/><h3>Liri Bot</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".bamazon").hover(
  function() {
    $("#bamazonSpan").html(
      "<p>A Command Line shopping experience. Uses Node and MySql.</p><button style='margin:2px; border-radius:5px;'><a href='https://drive.google.com/file/d/1c5VQ9fhHGTrRsG3aEFE0EDtSFU23V3a-/view?usp=sharing' target=_blank>Demo Video</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/bamazon' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#bamazonSpan").html(
      '<img id="legit" src="assets/images/shopping-cart-cartoon.jpg" alt="Cartoon shopping cart with text &quot;Bamazon&quot;"/><h3>Bamazon</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".giphy").hover(
  function() {
    $("#giphySpan").html(
      "<p>Allows users to view and search for gifs from GIPHY. Uses AJAX.</p><button style='margin:2px; border-radius:5px;'><a href='https://cgad.github.io/giftastic/' target=_blank>Web App</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/giftastic' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#giphySpan").html(
      '<img src="assets/images/giphy.jpg" alt="GIPHY logo with text &quot;GifTastic&quot;"/><h3>GifTastic</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".crystals").hover(
  function() {
    $("#crystalsSpan").html(
      "<p>A game with the objective of matching the target score by clicking crystals with random point values.</p><button style='margin:2px; border-radius:5px;'><a href='https://cgad.github.io/unit-4-game/' target=_blank>Web App</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/unit-4-game' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#crystalsSpan").html(
      '<img src="assets/images/crystal.png" alt="Colorful crystals with text &quot;Crystals Collector&quot;"/><h3>Crystals Collector</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".burger").hover(
  function() {
    $("#burgerSpan").html(
      "<p>A burgers-to-eat wishlist app. Uses MySql.</p><button style='margin:2px; border-radius:5px;'><a href='https://mighty-tor-46071.herokuapp.com/' target=_blank>Web App</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/burger' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#burgerSpan").html(
      '<img src="assets/images/burger.jpeg" alt="Cartoon burger with text &quot;Eat-Da-Burger!&quot;"/><h3>Eat-Da-Burger</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".disney").hover(
  function() {
    $("#disneySpan").html(
      "<p>A Disney-themed timed, multiple choice trivia game.</p><button style='margin:2px; border-radius:5px;'><a href='https://cgad.github.io/TriviaGame/' target=_blank>Web App</a></button><button style='margin:2px; border-radius:5px;'><a href='https://github.com/cgad/TriviaGame' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#disneySpan").html(
      '<img src="assets/images/disney.jpg" alt="Question marks with text &quot;Disney Trivia&quot;"/><h3>Disney Trivia</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);

$(".fruit").hover(
  function() {
    $("#fruitSpan").html(
      "<p>A Hangman-style guessing game.</p><button style='margin:2px; border-radius:5px;'><a href='https://cgad.github.io/Word-Guess-Game/' target=_blank>Web App</a></button><button style='margin:2px; border-radius:5 px;'><a href='https://github.com/cgad/Word-Guess-Game' target=_blank>GitHub Repo</a></button>"
    );
    $(this).css({
      "background-color": "#65718b",
      color: "#ffffff",
      "text-align": "center"
    });
  },
  function() {
    $("#fruitSpan").html(
      '<img id="legit" src="assets/images/cartoon-fruits.jpg" alt="Cartoon Fruits with text &quot;Guess My Fruit&quot;"/><h3>Guess My Fruit</h3>'
    );
    $(this).css({ "background-color": "#ffffff" });
  }
);
