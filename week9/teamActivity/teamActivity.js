window.addEventListener('keydown', function(e) {
  // This will send the keycode from the event to the console
  // console.log(e.keyCode);

  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  // console.log(audio);
  
  if(!audio) return; // this code will stop the function if a key is pressed that isnt in the HTML
  audio.currentTime = 0; // rewinds to the start

  audio.play(); // play the audio element if its there
  // console.log(key); // have the div that contains the key being pressed sent to console
  key.classList.add('playing');

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if its not a transform
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

}); 