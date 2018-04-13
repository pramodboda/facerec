
function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
const constraints = {
  video: true
};
var hdConstraints = {
  video: {width: {min: 1280}, height: {min: 720}}
};
var vgaConstraints = {
  video: {width: {exact: 640}, height: {exact: 480}}
};

var isRunning = false;

const video = document.querySelector('video');
function handleSuccess(stream) {
  video.srcObject = stream;
  video.play();
}

function handleError(error) {
  console.error('Reeeejected!', error);
}


function opencamera(){

  if (hasGetUserMedia()) {

    navigator.mediaDevices.getUserMedia(hdConstraints).
  then(handleSuccess).catch(handleError);
    
    
    if(isRunning){
      video.stop(); 
      isRunning=false;
    }
    else{
      video.play();
      isRunning = true;
    }

  
  
  
  
} else {
  alert('getUserMedia() is not supported by your browser');
}  
  
  
}
