var msgArray = [
    "Welcome to my site!",
    "Nice to meet you :)",
    "I love building websites!",
    "Busy coding 🤓",
    "Mobile responsive components are the future. Change my mind."
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  var randomNum = getRandomInt(msgArray.length)

$('p.chat-message')[0].innerHTML = msgArray[randomNum] + " <a class='chat-btn' id='chat'>Let's chat!</a>"
$('#chat').bind("click", function () {
  $('.anim-start .notif').css('transition-delay', '0s')
  $('.bar').css({'border-radius': '5px', 'transition-delay': '0s', 'transition-duration': '0s'})
  $('.notif').css('top', '4vh')
  $('form').css("display", "block")
  $('.chat-message').css('display', 'none')
})
$('#cancel-contact').bind("click", function () {
  $('.bar').css({'border-radius': '1000px', 'animation-delay': '0s'})
  $('.notif').css('top', '45vh')
  $('form').css("display", "none")
  $('.chat-message').css('display', 'block')
  
})


jQuery(document).ready(function($) {
       $('.chat-with-me').addClass('anim-start');
  
  });




