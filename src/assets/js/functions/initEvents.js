import { buttonElement, startScreenElement } from "./elements.js";
import rotateSquare from "./rotateSquare.js";
export default function initEvents() {
    buttonElement().addEventListener('click', function () {
        startScreenElement().style.display = 'none';
    });
    document.body.addEventListener('click', function () {
        rotateSquare();
    });
    document.body.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        rotateSquare(false);
    });
}
