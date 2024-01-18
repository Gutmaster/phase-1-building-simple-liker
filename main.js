// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphList = Array.from(document.getElementsByClassName("like-glyph"))

function handleLike(event){
  const response = mimicServerCall()
  .then(function(response){
    if(event.target.innerText === EMPTY_HEART){
      event.target.classList.add('activated-heart')
      event.target.innerText = FULL_HEART
    }
    else{
      event.target.classList.remove('activated-heart')
      event.target.innerText = EMPTY_HEART
    }

  })
  .catch(function(error){
    const alert = document.getElementById("modal")
    alert.classList.remove('hidden')
    alert.innerText = error
    setTimeout(function(){
      alert.classList.add('hidden')
    }, 3000)
  })
}

glyphList.forEach((element) => element.addEventListener('click', handleLike))



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
