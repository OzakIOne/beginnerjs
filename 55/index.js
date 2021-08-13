const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const face = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');
const faceDetector = new FaceDetector();

const popVideo = () => {
  const stream = navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  console.log(stream);
  video.srcObject = stream;
};
