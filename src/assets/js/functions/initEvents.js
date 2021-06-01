import { audioMusic } from "../audios/index.js";
import audioPlay from "./audioPlay.js";
import { buttonElement, startScreenElement } from "./elements.js";
import rotateSquare from "./rotateSquare.js";
export default function initEvents(playGame) {
    buttonElement().addEventListener('click', function () {
        startScreenElement().style.display = 'none';
        audioPlay(audioMusic);
        if (typeof playGame === 'function') {
            playGame();
        }
    });
    document.body.addEventListener('click', function () {
        rotateSquare();
    });
    document.body.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        rotateSquare(false);
    });
}
