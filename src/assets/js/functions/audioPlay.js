export default function audioPlay(audioElement, fromTime) {
    if (fromTime === void 0) { fromTime = 0; }
    audioElement.currentTime = 0;
    audioElement.play();
}
