import { squareElement } from "./elements.js";
export default function rotateSquare(directionRight) {
    if (directionRight === void 0) { directionRight = true; }
    var square = squareElement();
    var rotate = Number(square.dataset.rotate);
    if (directionRight) {
        rotate += 90;
    }
    else {
        rotate -= 90;
    }
    square.dataset.rotate = String(rotate);
    square.style.transform = "rotate(" + rotate + "deg)";
}
