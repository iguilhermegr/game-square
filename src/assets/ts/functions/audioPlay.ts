export default function audioPlay(
    audioElement: HTMLAudioElement,
    fromTime: number = 0
) {

    audioElement.currentTime = 0;
    audioElement.play();

}