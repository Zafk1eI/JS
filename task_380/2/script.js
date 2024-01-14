function applyStyle(style) {
    let Paragraph = document.getElementById('Paragraph');

    switch (style) {
        case 'underline':
            Paragraph.style.textDecoration = 'underline';
            break;
        case 'bold':
            Paragraph.style.fontWeight = 'bold';
            break;
        case 'red':
            Paragraph.style.color = 'red';
            break;
    }
}