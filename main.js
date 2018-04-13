
function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
  alert('good to go');
} else {
  alert('getUserMedia() is not supported by your browser');
}
