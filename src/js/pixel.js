import {a} from "./colorPicker.js";

export default function Pixel() {
    /*
        creer button
        change color select en background du bouton
        retiourn btn
    */

    const btn = document.createElement('button');
    btn.className = 'buttonColor';
    btn.onclick = () => {
        btn.style.background = a();
    }

    return btn;
}