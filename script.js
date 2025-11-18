
function playSound(event) {
    
    const keyCode = event.type === 'keydown' 
        ? event.keyCode     
        : this.getAttribute('data-key');

  
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    
  
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio || !key) return; 


    audio.currentTime = 0; 
    audio.play();

    key.classList.add('playing');
}


function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    
    
    this.classList.remove('playing');
}


window.addEventListener('keydown', playSound);


const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  
    key.addEventListener('click', playSound); 
    
 
    key.addEventListener('transitionend', removeTransition); 
});