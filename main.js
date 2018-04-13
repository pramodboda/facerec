
function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
const constraints = {
  video: true
};

const video = document.querySelector('video');
function handleSuccess(stream) {
  video.srcObject = stream;
}

function handleError(error) {
  console.error('Reeeejected!', error);
}


function opencamera(){

  if (hasGetUserMedia()) {

navigator.mediaDevices.getUserMedia(constraints).
  then(handleSuccess).catch(handleError);
  
  
  
  
} else {
  alert('getUserMedia() is not supported by your browser');
}  
  
  
}
