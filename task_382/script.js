let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        toggleStyle(this.getAttribute('data-style'));
    });
}

function toggleStyle(style) {
    let Paragraph = document.getElementById('Paragraph');

    switch (style) {
        case 'underline':
            Paragraph.style.textDecoration = Paragraph.style.textDecoration === 'underline' ? 'none' : 'underline';
            break;
        case 'bold':
            Paragraph.style.fontWeight = Paragraph.style.fontWeight === 'bold' ? 'normal' : 'bold';
            break;
        case 'red':
            Paragraph.style.color = Paragraph.style.color === 'red' ? 'black' : 'red';
            break;
    }
}