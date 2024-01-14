let inputText = document.getElementById('inputText');
let shuffleButton = document.getElementById('shuffleButton');

shuffleButton.addEventListener('click', function() {
  let textToShuffle = inputText.value;
  let shuffledText = shuffleString(textToShuffle);
  inputText.value = shuffledText;
});

function shuffleString(str) {
  let array = str.split('');

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.join('');
}