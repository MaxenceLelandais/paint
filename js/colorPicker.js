const colors = ['#000', '#fff', '#f00', '#0f0', '#00f', '#ff0', '#0ff', '#b63',];

export let selectedColor = '#fff';

export default function ColorPicker(){
    const div = document.createElement('div');

    div.className = 'colorPicker';

    colors.forEach(color => {
        const btn = document.createElement('button');
        btn.className = 'pickableColor';
        btn.style.backgroundColor = color;
        btn.onclick = () => {
            selectedColor = color;
            document.querySelectorAll('.selected').forEach(
                elt => {elt.classList.remove('selected')}
            );
            btn.classList.add('selected');
        }
        div.appendChild(btn);
    });

    return div;
}

//btn.style = `background-color:${color}`;