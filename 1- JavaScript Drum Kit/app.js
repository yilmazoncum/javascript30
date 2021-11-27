const keys = document.querySelector("body");

keys.addEventListener("keydown", function (e) {

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`button[value="${e.key}"]`);

  key.classList.add('playing');
  
  audio.currentTime = 0;
  audio.play();

});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend',removeTransition));

