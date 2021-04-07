
var descriptionArray = ['Project Manager', 'Software Developer', 'Business Strategist']
var descriptionLength = descriptionArray.length
var description = $('#description-rotate')

function loop (i) {
  description.text(descriptionArray[i % descriptionLength])
  setTimeout(function () {
    loop(i + 1)
    description.addClass('rotate-text')
  }, 3000) // This duration must match the length of the animation
  loop(0)
}

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
