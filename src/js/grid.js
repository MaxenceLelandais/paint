import Pixel from "./Pixel.js";

export default function Grid() {
    /*
        creer div , cadrillage 8x8, 8 px par rangé

        return div
    */

    const mother = document.createElement('div');
    mother.className = 'container';
    mother.style.display = 'block';

    const nombre = 8;
    for (let nbr = 0; nbr<nombre; nbr++) {
        const line = document.createElement('div');
        line.className = "d-flex flex-row";

        for (let nbr2 = 0; nbr2<nombre; nbr2++) {            

            line.appendChild(Pixel());
            
        }
        mother.appendChild(line);
    }
    return mother;
}