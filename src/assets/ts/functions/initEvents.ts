import { buttonElement, startScreenElement } from "./elements.js";
import rotateSquare from "./rotateSquare.js";

export default function initEvents() {
    buttonElement().addEventListener('click', () => {
        startScreenElement().style.display = 'none';
    });

    document.body.addEventListener('click', () => {

        rotateSquare();

    });

    document.body.addEventListener('contextmenu', (e) => {

        e.preventDefault();
        
        rotateSquare(false);
    });
}