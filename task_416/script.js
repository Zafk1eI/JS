let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
    let eventType = event.type;

    if (eventType === 'click') {
        elem.style.color = 'green';
    } else if (eventType === 'dblclick') {
        elem.style.color = 'red';
    }
}