const appendIpsum = text => {
  console.log(text)
  const container = document.querySelector('.ipsum-wrap');
  container.innerHTML = '';
  const newElm = document.createElement('p');
  newElm.appendChild(document.createTextNode(text));
  container.appendChild(newElm);
}

const createIpsum = () => {
  const inputText = document.querySelector('textarea').value;
  let eCounter = 0;
  return inputText.split('').reduce( (newText, letter) => {
    if(letter === ' ') {
      eCounter = 0;
      newText = newText + letter;
    } else if (letter === 'e' && eCounter === 0) {
      eCounter++;
      newText = newText + letter;
    } else if (letter === 'e' || letter === 'c') {
      newText
    } else {
      newText = newText + letter;
    }
    return newText
  }, '')
}

const handleSubmit = e => {
  e.preventDefault();
  const text = createIpsum();
  appendIpsum(text);
}

document.querySelector('form').addEventListener('submit', handleSubmit);