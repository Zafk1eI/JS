let elem = document.querySelector('#elem');
elem.addEventListener('click', function () {
    let price = parseInt(elem.dataset.productPrice);
    let amount = parseInt(elem.dataset.productAmount);

    let totalPrice = price * amount;

    elem.textContent += ' Стоимость: ' + totalPrice;
});