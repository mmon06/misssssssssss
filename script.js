const container = document.getElementById('ui');
const text = 'Miss';
const totalPoints = 100;
const sizeScale = 20;

for (let i = 0; i < totalPoints; i++) {
    const span = document.createElement('span');
    span.classList.add('miss_word', 'miss_horizontal');
    span.innerText = text;

    let t = (Math.PI * 2 * i) / totalPoints;
    
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

    x *= sizeScale;
    y *= -sizeScale;

    span.style.left = (300 + x) + 'px';
    span.style.top = (300 + y) + 'px';

    span.style.setProperty('--i', i);

    container.appendChild(span);
}