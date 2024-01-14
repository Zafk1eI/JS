let Button = document.querySelector('#Button');
  let resultParagraph = document.querySelector('#resultParagraph');

  Button.addEventListener('click', function() {
 
    let input1Value = parseFloat(document.querySelector('#input1').value) || 0;
    let input2Value = parseFloat(document.querySelector('#input2').value) || 0;
    let input3Value = parseFloat(document.querySelector('#input3').value) || 0;

    let sum = input1Value + input2Value + input3Value;

    resultParagraph.textContent = 'Сумма: ' + sum;
  });