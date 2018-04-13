
var context;
window.addEventListener('load', init, false);
function init() {
  debugger;
  try {
    alert("This browser support Web Audio API");
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}
