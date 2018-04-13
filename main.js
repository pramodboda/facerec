
const videoElement = document.querySelector('video#video1');
const audioSelect = document.querySelector('select#audioSource');
const videoSelect = document.querySelector('select#videoSource');

navigator.mediaDevices.enumerateDevices()
  .then(gotDevices).then(getStream).catch(handleError);

audioSelect.onchange = getStream;
videoSelect.onchange = getStream;

function gotDevices(deviceInfos) {
  for (var i = 0; i !== deviceInfos.length; ++i) {
    var deviceInfo = deviceInfos[i];
    var option = document.createElement('option');
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === 'audioinput') {
      option.text = deviceInfo.label ||
        'microphone ' + (audioSelect.length + 1);
      audioSelect.appendChild(option);
    } else if (deviceInfo.kind === 'videoinput') {
      option.text = deviceInfo.label || 'camera ' +
        (videoSelect.length + 1);
      videoSelect.appendChild(option);
    } else {
      console.log('Found one other kind of source/device: ', deviceInfo);
    }
  }
}

function getStream() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }

  var constraints = {
    audio: {
      deviceId: {exact: audioSelect.value}
    },
    video: {
      deviceId: {exact: videoSelect.value}
    }
  };

  navigator.mediaDevices.getUserMedia(constraints).
    then(gotStream).catch(handleError);
}

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;
}

function handleError(error) {
  console.error('Error: ', error);
}

 const button = document.querySelector('#screenshot-button');
  const img = document.querySelector('#screenshot-img');
 

const canvas = document.createElement('canvas');

  button.onclick = video.onclick = function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    // Other browsers will fall back to image/png
    img.src = canvas.toDataURL('image/webp');
  };


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

const video = document.querySelector('video#video2');
function handleSuccess(stream) {
  video.srcObject = stream;
  video.play();
}

function handleError(error) {
  console.error('Reeeejected!', error);
}


function opencamera(){

  if (hasGetUserMedia()) {

    navigator.mediaDevices.getUserMedia(constraints).
  then(handleSuccess).catch(handleError);
    
    
   
      video.play();
    

  
  
  
  
} else {
  alert('getUserMedia() is not supported by your browser');
}  
  
  
}





