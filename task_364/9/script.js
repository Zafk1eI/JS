let wordInput = document.querySelector('#wordInput');
let checkButton = document.querySelector('#checkButton');
let resultParagraph = document.querySelector('#resultParagraph');

checkButton.addEventListener('click', function() {
  let word = wordInput.value.toLowerCase(); 

  
  if (isPalindrome(word)) {
    resultParagraph.textContent = 'Слово является палиндромом!';
  } else {
    resultParagraph.textContent = 'Слово не является палиндромом.';
  }
});

function isPalindrome(str) {
  let cleanedStr = str.replace(/\s/g, '');
  let reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}