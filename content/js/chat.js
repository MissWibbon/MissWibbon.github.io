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
console.log(randomNum)

$('p.chat-message')[0].innerHTML = msgArray[randomNum] + " <a class='chat-btn' href='#chat'>Let's chat!</a>"



jQuery(document).ready(function($) {
       $('.chat-with-me').addClass('anim-start');
  
  });




