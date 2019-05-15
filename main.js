
const videoElement = document.querySelector('video#video2');
const audioSelect = document.querySelector('select#audioSource');
const videoSelect = document.querySelector('select#videoSource');
const video = document.querySelector('video#video2');


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
const ctx;

 function drawLoop() {
    requestAnimationFrame(drawLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctracker.draw(canvasInput);
  }
  

const ctracker;

  button.onclick = video.onclick = function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx = canvas.getContext('2d');
    canvas.getContext('2d').drawImage(video, 0, 0);
    // Other browsers will fall back to image/png
    img.src = canvas.toDataURL('image/webp');
   
	  
	  var videoInput = document.getElementById('video1');
  
  ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(video);
  var positions = ctracker.getCurrentPosition();
	  alert(positions);
	  drawLoop();
	  var drawCanvas = document.getElementsById('canvas');
         ctracker.draw(drawCanvas);
	  
  };


function html5glasses() {
	// Start the clock 
	

	// use the face detection library to find the face
	//var comp = ccv.detect_objects({ "canvas" : (ccv.pre(canvas)),
// 									"cascade" : cascade,
// 									"interval" : 5,
// 									"min_neighbors" : 1 });

	// Draw glasses on everyone!
	//for (var i = 0; i < comp.length; i++) {
	//	ctx.drawImage(glasses, comp[i].x, comp[i].y,comp[i].width, comp[i].height);
	//}
}



function downloadCanvas(link, canvasId, filename) {
    link.href = img.src;
    link.download = filename;
  
  //var url = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
  //alert(url);
  //window.open(url);
  
}



document.getElementById('clicktodownload').addEventListener('click', function() {
    downloadCanvas(this, 'canvas', 'test.png');
}, false);




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





