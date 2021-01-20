
var descriptionArray = ['Project Manager', 'Software Developer', 'Business Strategist']
var descriptionLength = descriptionArray.length
var description = $('#description-rotate')

function loop (i) {
  description.text(descriptionArray[i % descriptionLength])
  setTimeout(function () {
    loop(i + 1)
    description.addClass('rotate-text')
  }, 3000) // This duration must match the length of the animation
}

loop(0)
