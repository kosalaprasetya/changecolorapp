let index = 0;
const body = document.body;
const button = document.querySelector('.container button.btn');
const h1 = document.querySelector('div.container h1.d-block');

changeColor = () => {
  const colors = ['red', 'blue', 'orange', 'yellow', 'green', 'purple'];

  body.style.backgroundColor = colors[index++];
  if (index >= colors.length) {
    index = 0;
  }
  if ((colors === 'red', 'orange', 'green', 'purple')) {
    h1.style.color = 'white';
  } else if (colors === 'yellow') {
    h1.style.color = 'black';
  }
};

button.addEventListener('click', changeColor);
