import { selectedColor } from "./colorPicker.js";

export default function Pixel(){
    // Créer un bouton onclick sur le bouton affecte la couleur sélectionner en background color 
    //et retourne le bouton

    const btn = document.createElement('button');

    btn.className = 'pixel';

    btn.onclick = () => {
        btn.style.backgroundColor = selectedColor;
    }

    return btn;
}