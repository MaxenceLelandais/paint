import Pixel from "./pixel.js";

export default function Grid(){

    const div = document.createElement('div');
    div.className = 'grid';
    for(let y = 0; y < 8; y++){
        const row = document.createElement('div');
        row.className = 'd-flex flex-row';
        for(let x = 0; x < 8; x++) {
            row.appendChild(Pixel());
        }
        div.appendChild(row);
    }

    return div;
}


//const gridPlan = [ [] ];

    /*const nombre = 8;
    div.className = 'grid';

    gridPlan.forEach(color => {
        for(let i = 0; i < nombre; i++) {
            for(let j = 0; j < nombre; j++)
            {

            }
        }
    })*/


/*
    const btn = document.createElement('button');
    btn.className = 'btnColorier';
    btn.style = 'background-color:${#ccc}';
    btn.onclick = () => {
        selectedColor = color;
    }
    div.appendChild(btn);

    btn.style.gridrow;


    for(let j = 0; j < 8; j++){
        const btn = document.createElement('button');
        btn.className = 'btnColorier';
        btn.style = 'background-color:${#ccc}';
        //btn.style.width = 100%;
        btn.onclick = () => {
            selectedColor = color;
        }
        div.appendChild(btn);
    }


    const btn = document.createElement('button');
    btn.className = 'btnColorier';
    btn.style = 'background-color:${#ccc}';
    btn.onclick = () => {
        selectedColor = color;
    }
    div.appendChild(btn.style.grid);


    div.style.grid;
    const container = document.getElementsByClassName('grid');
    const cell = document.createElement('div');
    cell.innerHTML = "button";
    container.appendChild(cell);

    */