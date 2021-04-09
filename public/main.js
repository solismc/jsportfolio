
var descriptionArray = ['Project Manager', 'Software Developer', 'Business Strategist']
var descriptionLength = descriptionArray.length
var description = $('#description-rotate')

function loop (i) {
  description.text(descriptionArray[i % descriptionLength])
  setTimeout(function () {
    loop(i + 1)
    description.addClass('rotate-text')
  }, 5000) // This duration must match the length of the animation
  
}

loop(0)

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Project Manager')
    .pauseFor(3500)
    .deleteAll()
    .typeString('Marketing Strategist')
    .pauseFor(3500)
    .deleteAll()
    .typeString('Software Developer')
    .pauseFor(3500)
    .start();

function initQuoteCarousel() {

  var $quotesWrapper = $(".cust-quotes");
  var $quotes = $quotesWrapper.find("blockquote");

  if (!$quotes.length) {
      return;
  }

  var selectNextQuote = function () {
      // keep move first quote in dom to the end to make continous
      var $quote = $quotesWrapper.find("blockquote:first").detach().appendTo($quotesWrapper);

      setTimeout(selectNextQuote, $quote.data("timeout"));
  };

  setTimeout(selectNextQuote, $quotes.filter(":first").data("timeout"));

}

$(function () {
  initQuoteCarousel();
});

function readMoreOne() {
  let dots = document.getElementById("dotsItemOne");
  let moreText = document.getElementById("moreItemOne");
  let btnText = document.getElementById("myBtnOne");

  if(dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

function readMoreTwo() {
  let dots = document.getElementById("dotsItemTwo");
  let moreText = document.getElementById("moreItemTwo");
  let btnText = document.getElementById("myBtnTwo");

  if(dots.style.display === "none") {
    dotsItemTwo.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
function readMoreThree() {
  let dots = document.getElementById("dotsItemThree");
  let moreText = document.getElementById("moreItemThree");
  let btnText = document.getElementById("myBtnThree");

  if(dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

function readMoreOneProject() {
  let dots = document.getElementById("dotsItemOneProject");
  let moreText = document.getElementById("moreItemOneProject");
  let btnText = document.getElementById("myBtnOneProject");

  if(dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
function readMoreTwoProject() {
  let dots = document.getElementById("dotsItemTwoProject");
  let moreText = document.getElementById("moreItemTwoProject");
  let btnText = document.getElementById("myBtnTwoProject");

  if(dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
function readMoreThreeProject() {
  let dots = document.getElementById("dotsItemThreeProject");
  let moreText = document.getElementById("moreItemThreeProject");
  let btnText = document.getElementById("myBtnThreeProject");

  if(dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}