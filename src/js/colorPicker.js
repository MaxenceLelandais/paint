const colors = ['#000','#fff','#f00','#0f0','#00f','#ff0','#0ff','#b63'];

let selectedColor = '#000';

export default function ColorPicker() {
    const div = document.createElement('div');

    div.className = 'colorPicker';

    colors.forEach(color => {
        const btn = document.createElement('button');
        btn.style.backgroundColor = color;
        
        btn.className = 'pickableColor';


        btn.onclick = () => {
            selectedColor = color;
        }
        div.appendChild(btn);
        
    })

    return div;
}

export function a() { return selectedColor};